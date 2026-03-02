'use client';

import SectionShell from '@/components/SectionShell';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectKind = 'migration' | 'web' | 'api';

function ProjectVisual({ kind }: { kind: ProjectKind }) {
  if (kind === 'migration') {
    return (
      <div className="mb-3 border border-retro-borderLight bg-slate-950/80 p-3">
        <div className="flex items-center justify-between gap-2 text-xs font-semibold">
          <span className="border border-retro-borderLight px-2 py-1 text-slate-200">S3</span>
          <span className="text-retro-accent">--&gt;</span>
          <span className="border border-retro-borderLight px-2 py-1 text-slate-200">GCS</span>
        </div>
      </div>
    );
  }

  if (kind === 'web') {
    return (
      <div className="mb-3 border border-retro-borderLight bg-slate-950/80 p-3">
        <div className="border border-retro-borderLight">
          <div className="flex gap-1 border-b border-retro-borderLight px-2 py-1">
            <span className="h-1.5 w-1.5 bg-retro-accent" />
            <span className="h-1.5 w-1.5 bg-slate-500" />
            <span className="h-1.5 w-1.5 bg-slate-500" />
          </div>
          <div className="h-8 bg-[linear-gradient(135deg,rgba(88,166,255,0.18),rgba(126,231,135,0.14))]" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3 border border-retro-borderLight bg-slate-950/80 p-3">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
        <span>{'{ }'}</span>
        <span className="text-retro-accent">API</span>
        <span>{'</>'}</span>
      </div>
      <div className="mt-2 h-1 bg-[linear-gradient(90deg,rgba(88,166,255,0.75),rgba(126,231,135,0.72))]" />
    </div>
  );
}

export default function PortfolioPage() {
  const { t } = useLanguage();
  const kinds: ProjectKind[] = ['migration', 'web', 'api'];

  return (
    <section className="mt-6">
      <SectionShell title="portfolio.index">
        <h1 className="text-3xl font-bold text-slate-100">{t.portfolio.title}</h1>
        <p className="mt-2 text-slate-300">{t.portfolio.note}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.projects.map((project, index) => (
            <article key={project.title} className="border border-retro-borderLight bg-slate-950/70 p-4">
              <ProjectVisual kind={kinds[index] ?? 'api'} />
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-retro-accent">{project.status}</p>
              <h2 className="text-lg font-semibold text-slate-100">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-retro-borderLight px-2 py-1 text-xs font-semibold text-retro-mint">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
