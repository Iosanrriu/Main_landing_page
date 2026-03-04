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
  const { t } = useLanguage();
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
            <h2 className="title-section">{t.about.title}</h2>
            <p className="subtitle-section">{t.about.intro}</p>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body">
                {paragraph}
              </p>
            ))}
            <p className="text-base font-semibold text-slate-900 md:text-lg">{t.about.closing}</p>
          </div>
        </SectionShell>
      </section>

      <section id="portfolio" className="mt-8 scroll-mt-24">
        <SectionShell title="portfolio">
          <h2 className="title-section">{t.portfolio.title}</h2>
          <p className="subtitle-section mt-2">{t.portfolio.note}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.portfolio.projects.map((project, index) => (
              <article key={project.title} className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 transition hover:shadow-md">
                <ProjectVisual kind={kinds[index] ?? 'api'} />
                <p className="meta-label mb-2 text-retro-accent">{project.status}</p>
                <h3 className="title-card">{project.title}</h3>
                <p className="text-body mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="meta-label rounded-full border border-retro-borderLight bg-white px-2.5 py-1 text-slate-700">
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
            <h2 className="title-section">{t.contact.title}</h2>
            <p className="subtitle-section">{t.contact.intro}</p>
            <ContactForm />
          </div>
        </SectionShell>
      </section>
    </>
  );
}
