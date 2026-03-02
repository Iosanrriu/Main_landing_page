'use client';

import SectionShell from '@/components/SectionShell';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="mt-6">
      <SectionShell title="about.profile">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-100">{t.about.title}</h1>
          <p className="text-slate-300">{t.about.intro}</p>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-slate-300">
              {paragraph}
            </p>
          ))}
          <p className="font-semibold text-retro-mint">{t.about.closing}</p>
        </div>
      </SectionShell>
    </section>
  );
}
