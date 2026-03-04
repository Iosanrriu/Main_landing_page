'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-8">
      <SectionShell title="values">
        <h2 className="title-section">{t.values.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.values.cards.map((value, index) => (
            <article key={value.title} className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-5 transition hover:shadow-md">
              <p className="meta-label mb-2 text-slate-500">0{index + 1}</p>
              <h3 className="title-card">{value.title}</h3>
              <p className="text-body mt-2">{value.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
