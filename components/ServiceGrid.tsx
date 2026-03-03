'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ServiceGrid() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mt-8 scroll-mt-24">
      <SectionShell title="services">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">{t.services.title}</h2>
          <p className="max-w-3xl text-slate-600">{t.services.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {t.services.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mb-3 inline-block rounded-full border border-retro-borderLight bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  {item.tag}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
