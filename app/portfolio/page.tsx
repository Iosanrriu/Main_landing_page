'use client';

import SectionShell from '@/components/SectionShell';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <section className="mt-6">
      <SectionShell title="portfolio.index">
        <h1 className="font-mono text-3xl text-slate-100">{t.portfolio.title}</h1>
        <p className="mt-2 text-slate-300">{t.portfolio.note}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.projects.map((project) => (
            <article key={project.title} className="border border-slate-700 bg-slate-950/60 p-4">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-retro-accent">{project.status}</p>
              <h2 className="font-mono text-lg text-slate-100">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-retro-borderLight px-2 py-1 text-xs text-retro-mint">
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
