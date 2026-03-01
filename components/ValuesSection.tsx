'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-8">
      <SectionShell title="values.ini">
        <h2 className="font-mono text-2xl text-slate-100">{t.values.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.values.cards.map((value) => (
            <article key={value.title} className="border border-slate-700 bg-slate-950/60 p-4 transition hover:border-retro-borderLight">
              <h3 className="font-mono text-lg text-retro-mint">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{value.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
