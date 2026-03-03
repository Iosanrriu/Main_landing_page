'use client';

import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import ProcessTimeline from '@/components/ProcessTimeline';
import ValuesSection from '@/components/ValuesSection';
import SectionShell from '@/components/SectionShell';
import TechStackStrip from '@/components/TechStackStrip';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectKind = 'migration' | 'web' | 'api';

function ProjectVisual({ kind }: { kind: ProjectKind }) {
  if (kind === 'migration') {
    return (
      <div className="mb-3 rounded-xl border border-retro-borderLight bg-white p-3">
        <div className="flex items-center justify-between gap-2 text-xs font-semibold">
          <span className="rounded-full border border-retro-borderLight px-2 py-1 text-slate-700">S3</span>
          <span className="text-retro-accent">--&gt;</span>
          <span className="rounded-full border border-retro-borderLight px-2 py-1 text-slate-700">GCS</span>
        </div>
      </div>
    );
  }

  if (kind === 'web') {
    return (
      <div className="mb-3 rounded-xl border border-retro-borderLight bg-white p-3">
        <div className="rounded-xl border border-retro-borderLight">
          <div className="flex gap-1 border-b border-retro-borderLight px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-retro-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          </div>
          <div className="h-8 rounded-b-xl bg-[linear-gradient(135deg,rgba(0,113,227,0.15),rgba(255,255,255,0.7))]" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3 rounded-xl border border-retro-borderLight bg-white p-3">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
        <span>{'{ }'}</span>
        <span className="text-retro-accent">API</span>
        <span>{'</>'}</span>
      </div>
      <div className="mt-2 h-1 rounded-full bg-[linear-gradient(90deg,rgba(0,113,227,0.75),rgba(115,115,120,0.45))]" />
    </div>
  );
}

export default function HomePage() {
  const { language, t } = useLanguage();
  const kinds: ProjectKind[] = ['migration', 'web', 'api'];

  return (
    <>
      <Hero />
      <TechStackStrip />
      <ServiceGrid />
      <ProcessTimeline />
      <ValuesSection />

      <section id="about" className="mt-8 scroll-mt-24">
        <SectionShell title="about">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">{t.about.title}</h2>
            <p className="text-slate-600">{t.about.intro}</p>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-slate-600">
                {paragraph}
              </p>
            ))}
            <p className="font-semibold text-slate-900">{t.about.closing}</p>
          </div>
        </SectionShell>
      </section>

      <section id="portfolio" className="mt-8 scroll-mt-24">
        <SectionShell title="portfolio">
          <h2 className="text-3xl font-semibold text-slate-900">{t.portfolio.title}</h2>
          <p className="mt-2 text-slate-600">{t.portfolio.note}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.portfolio.projects.map((project, index) => (
              <article key={project.title} className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 transition hover:shadow-md">
                <ProjectVisual kind={kinds[index] ?? 'api'} />
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-retro-accent">{project.status}</p>
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-retro-borderLight bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="contact" className="mt-8 scroll-mt-24">
        <SectionShell title="contact">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-slate-900">{t.contact.title}</h2>
            <p className="max-w-3xl text-slate-600">{t.contact.intro}</p>
            <ContactForm />
          </div>
        </SectionShell>
      </section>

      <section className="mt-8">
        <SectionShell title="next step">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {language === 'es' ? 'Hablamos de tu proyecto?' : 'Shall we talk about your project?'}
              </h2>
              <p className="text-slate-600">
                {language === 'es'
                  ? 'Una conversacion corta para entender el contexto y proponer un camino realista.'
                  : 'A short conversation to understand your context and propose a realistic path.'}
              </p>
            </div>
            <a href="#contact" aria-label={t.common.ctaContact} className="rounded-full bg-retro-accent px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110">
              {t.common.ctaContact}
            </a>
          </div>
        </SectionShell>
      </section>
    </>
  );
}
