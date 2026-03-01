'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section className="mt-8">
      <SectionShell title="workflow.log">
        <h2 className="font-mono text-2xl text-slate-100">{t.process.title}</h2>
        <p className="mt-2 text-slate-300">{t.process.intro}</p>
        <ol className="mt-6 space-y-4">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 border-l border-retro-borderLight pl-4">
              <span className="mt-0.5 h-6 w-6 shrink-0 border border-retro-borderLight bg-slate-900 text-center font-mono text-xs leading-6 text-retro-accent">
                {index + 1}
              </span>
              <div>
                <h3 className="font-mono text-base text-slate-100">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionShell>
    </section>
  );
}
