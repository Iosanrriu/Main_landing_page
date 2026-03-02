'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ServiceGrid() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mt-8 scroll-mt-24">
      <SectionShell title="services.exe">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">{t.services.title}</h2>
          <p className="max-w-3xl text-slate-300">{t.services.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {t.services.items.map((item) => (
              <article
                key={item.title}
                className="border border-retro-borderLight bg-slate-950/70 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-retro-accent"
              >
                <span className="mb-3 inline-block border border-retro-borderLight px-2 py-1 text-xs font-semibold uppercase tracking-wider text-retro-mint">
                  {item.tag}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
