'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import SectionShell from '@/components/SectionShell';
import { useLanguage } from '@/contexts/LanguageContext';
import type { CareerRole } from '@/lib/careerRoles';
import { formatClp, getCareerText } from '@/lib/careerRoles';

type CareerFormState = {
  name: string;
  salaryClp: string;
  linkedinUrl: string;
  cvFile: File | null;
};

const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;

function isPdfFile(file: File) {
  if (file.type === 'application/pdf') {
    return true;
  }
  return file.name.toLowerCase().endsWith('.pdf');
}

export default function CareerRoleApplication({ role }: { role: CareerRole }) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<CareerFormState>({
    name: '',
    salaryClp: String(role.salaryReferenceClp),
    linkedinUrl: '',
    cvFile: null
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  const validate = () => {
    if (!formData.name || !formData.salaryClp || !formData.linkedinUrl) {
      setValidationError(
        language === 'es' ? 'Completa los tres campos obligatorios.' : 'Please complete all required fields.'
      );
      return false;
    }

    const numericSalary = Number(formData.salaryClp);
    if (!Number.isFinite(numericSalary) || numericSalary <= 0) {
      setValidationError(language === 'es' ? 'Ingresa un sueldo valido en CLP.' : 'Please enter a valid CLP salary.');
      return false;
    }

    try {
      const parsed = new URL(formData.linkedinUrl);
      const isValidProtocol = parsed.protocol === 'http:' || parsed.protocol === 'https:';
      const isLinkedin = parsed.hostname.includes('linkedin.com');
      if (!isValidProtocol || !isLinkedin) {
        throw new Error('Invalid LinkedIn URL');
      }
    } catch {
      setValidationError(
        language === 'es'
          ? 'Ingresa un link valido de LinkedIn (https://www.linkedin.com/...).'
          : 'Please enter a valid LinkedIn URL (https://www.linkedin.com/...).'
      );
      return false;
    }

    if (formData.cvFile) {
      if (!isPdfFile(formData.cvFile)) {
        setValidationError(language === 'es' ? 'El CV debe estar en formato PDF.' : 'The CV file must be a PDF.');
        return false;
      }
      if (formData.cvFile.size > MAX_CV_SIZE_BYTES) {
        setValidationError(
          language === 'es'
            ? 'El CV supera el maximo permitido de 5 MB.'
            : 'The CV exceeds the maximum allowed size of 5 MB.'
        );
        return false;
      }
    }

    setValidationError('');
    return true;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      salaryClp: String(role.salaryReferenceClp),
      linkedinUrl: '',
      cvFile: null
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      const payload = new FormData();
      payload.append('roleId', role.id);
      payload.append('roleTitle', getCareerText(role.title, language));
      payload.append('name', formData.name);
      payload.append('expectedSalaryClp', String(Number(formData.salaryClp)));
      payload.append('linkedinUrl', formData.linkedinUrl);
      if (formData.cvFile) {
        payload.append('cvFile', formData.cvFile);
      }

      const response = await fetch('/api/career', {
        method: 'POST',
        body: payload
      });

      if (!response.ok) {
        throw new Error('Career form request failed');
      }

      setStatus('success');
      resetForm();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setStatus('idle');
      }, 5200);
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-retro-borderLight bg-white px-3 py-2 text-sm text-slate-800 focus:border-retro-accent focus:outline-none';

  return (
    <section className="mt-2 scroll-mt-24">
      <SectionShell title="career application">
        <a href="/career" className="meta-label text-slate-500 transition hover:text-retro-accent">
          {language === 'es' ? '< Volver a vacantes' : '< Back to openings'}
        </a>
        <div className="mt-3 grid gap-6 md:grid-cols-[1fr,1fr]">
          <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 shadow-window">
            <p className="meta-label text-slate-500">
              {getCareerText(role.salaryLabel, language)}: CLP {formatClp(role.salaryReferenceClp)}
            </p>
            <h1 className="title-section mt-2">{getCareerText(role.title, language)}</h1>
            <p className="text-body mt-3">{getCareerText(role.summary, language)}</p>
            <ul className="mt-4 space-y-2">
              {role.highlights[language].map((item) => (
                <li key={item} className="text-body flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-retro-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 shadow-window">
            <p className="meta-label text-slate-500">{language === 'es' ? 'Formulario' : 'Application form'}</p>
            <h2 className="title-card mt-2">{getCareerText(role.title, language)}</h2>
            <form onSubmit={onSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor={`${role.id}-name`} className="mb-1 block text-sm font-semibold text-slate-700">
                  {language === 'es' ? 'Nombre de la persona' : 'Candidate name'} *
                </label>
                <input
                  id={`${role.id}-name`}
                  className={inputClass}
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  required
                />
              </div>

              <div>
                <label htmlFor={`${role.id}-salary`} className="mb-1 block text-sm font-semibold text-slate-700">
                  {language === 'es' ? 'Sueldo tentativo liquido en CLP' : 'Tentative net salary in CLP'} *
                </label>
                <input
                  id={`${role.id}-salary`}
                  type="number"
                  min={0}
                  step={10000}
                  className={inputClass}
                  value={formData.salaryClp}
                  onChange={(event) => setFormData((prev) => ({ ...prev, salaryClp: event.target.value }))}
                  required
                />
              </div>

              <div>
                <label htmlFor={`${role.id}-linkedin`} className="mb-1 block text-sm font-semibold text-slate-700">
                  {language === 'es' ? 'Link de LinkedIn' : 'LinkedIn profile URL'} *
                </label>
                <input
                  id={`${role.id}-linkedin`}
                  type="url"
                  className={inputClass}
                  placeholder="https://www.linkedin.com/in/..."
                  value={formData.linkedinUrl}
                  onChange={(event) => setFormData((prev) => ({ ...prev, linkedinUrl: event.target.value }))}
                  required
                />
              </div>

              <div>
                <label htmlFor={`${role.id}-cv`} className="mb-1 block text-sm font-semibold text-slate-700">
                  {language === 'es'
                    ? 'CV en PDF (opcional, maximo 5 MB)'
                    : 'CV in PDF (optional, max 5 MB)'}
                </label>
                <input
                  id={`${role.id}-cv`}
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf,.pdf"
                  className={inputClass}
                  onChange={(event) => {
                    const selectedFile = event.target.files?.[0] ?? null;
                    setFormData((prev) => ({ ...prev, cvFile: selectedFile }));
                  }}
                />
              </div>

              {validationError ? <p className="text-sm text-rose-500">{validationError}</p> : null}
              {status === 'error' ? (
                <p className="text-sm text-rose-500">
                  {language === 'es'
                    ? 'No se pudo enviar la postulacion. Intenta nuevamente en unos minutos.'
                    : 'Application could not be sent. Please try again in a few minutes.'}
                </p>
              ) : null}
              {status === 'success' ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  {language === 'es'
                    ? 'Gracias por compartir tu informacion. Si avanzamos con la postulacion, te estaremos contactando.'
                    : 'Thank you for sharing your information. If your application moves forward, we will contact you.'}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="rounded-full border border-retro-accent bg-retro-accent px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? '...' : language === 'es' ? 'Send' : 'Send'}
              </button>
            </form>
          </article>
        </div>
      </SectionShell>
    </section>
  );
}
