'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-8">
      <SectionShell title="values">
        <h2 className="text-3xl font-semibold text-slate-900">{t.values.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.values.cards.map((value, index) => (
            <article key={value.title} className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 transition hover:shadow-md">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">0{index + 1}</p>
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
