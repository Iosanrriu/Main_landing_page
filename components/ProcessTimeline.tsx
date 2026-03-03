'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section id="workflow" className="mt-8 scroll-mt-24">
      <SectionShell title="workflow">
        <h2 className="text-3xl font-semibold text-slate-900">{t.process.title}</h2>
        <p className="mt-2 text-slate-600">{t.process.intro}</p>
        <ol className="mt-6 space-y-4">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 border-l border-retro-borderLight pl-4">
              <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full border border-retro-borderLight bg-white text-center text-xs font-bold leading-6 text-retro-accent">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionShell>
    </section>
  );
}
