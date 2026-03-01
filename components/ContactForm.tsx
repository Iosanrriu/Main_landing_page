'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const initialData: FormData = {
  name: '',
  email: '',
  company: '',
  projectType: 'dataPipelines',
  message: ''
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError(t.contact.form.requiredError);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationError(t.contact.form.emailError);
      return false;
    }

    setValidationError('');
    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setFormData(initialData);
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = 'w-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-retro-accent focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-slate-200" htmlFor="name">
          {t.contact.form.name} *
        </label>
        <input
          id="name"
          required
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
          className={inputStyles}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-200" htmlFor="email">
          {t.contact.form.email} *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          className={inputStyles}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-200" htmlFor="company">
          {t.contact.form.company}
        </label>
        <input
          id="company"
          value={formData.company}
          onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
          className={inputStyles}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-200" htmlFor="projectType">
          {t.contact.form.projectType}
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(event) => setFormData((prev) => ({ ...prev, projectType: event.target.value }))}
          className={inputStyles}
        >
          <option value="dataPipelines">{t.contact.form.projectOptions.dataPipelines}</option>
          <option value="apis">{t.contact.form.projectOptions.apis}</option>
          <option value="webapp">{t.contact.form.projectOptions.webapp}</option>
          <option value="aiDataPrep">{t.contact.form.projectOptions.aiDataPrep}</option>
          <option value="other">{t.contact.form.projectOptions.other}</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-200" htmlFor="message">
          {t.contact.form.message} *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
          className={inputStyles}
        />
      </div>

      {validationError ? <p className="text-sm text-rose-300">{validationError}</p> : null}
      {status === 'success' ? <p className="text-sm text-emerald-300">{t.contact.form.success}</p> : null}
      {status === 'error' ? <p className="text-sm text-rose-300">{t.contact.form.error}</p> : null}

      <button
        type="submit"
        aria-label={t.contact.form.submit}
        disabled={loading}
        className="border border-retro-borderLight bg-retro-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? '...' : t.contact.form.submit}
      </button>
    </form>
  );
}
