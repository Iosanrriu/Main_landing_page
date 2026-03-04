'use client';

import SectionShell from '@/components/SectionShell';
import { useLanguage } from '@/contexts/LanguageContext';
import { careerRoles, formatClp, getCareerText } from '@/lib/careerRoles';

export default function CareerBoard() {
  const { language } = useLanguage();

  return (
    <section id="career" className="mt-2 scroll-mt-24">
      <SectionShell title="career">
        <h1 className="title-section">{language === 'es' ? 'Career' : 'Career'}</h1>
        <p className="subtitle-section mt-2">
          {language === 'es'
            ? 'Revisa las posiciones abiertas y selecciona la que mas se alinea con tu experiencia para ir al formulario de postulacion.'
            : 'Review open positions and select the one that best matches your experience to go to its application form.'}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {careerRoles.map((role) => (
            <article key={role.id} className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 shadow-window transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="meta-label text-slate-500">
                {getCareerText(role.salaryLabel, language)}: CLP {formatClp(role.salaryReferenceClp)}
              </p>
              <h2 className="title-card mt-2">{getCareerText(role.title, language)}</h2>
              <p className="text-body mt-2">{getCareerText(role.summary, language)}</p>
              <ul className="mt-4 space-y-2">
                {role.highlights[language].map((item) => (
                  <li key={item} className="text-body flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-retro-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/career/${role.id}`}
                className="mt-5 inline-flex rounded-full border border-retro-borderLight bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-retro-accent hover:text-retro-accent"
              >
                {language === 'es' ? 'Postular a esta posicion' : 'Apply to this position'}
              </a>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
