'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import ProcessTimeline from '@/components/ProcessTimeline';
import ValuesSection from '@/components/ValuesSection';
import SectionShell from '@/components/SectionShell';
import TechStackStrip from '@/components/TechStackStrip';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <>
      <Hero />
      <TechStackStrip />
      <ServiceGrid />
      <ProcessTimeline />
      <ValuesSection />
      <section className="mt-8">
        <SectionShell title="next.step">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">
                {language === 'es' ? 'Hablamos de tu proyecto?' : 'Shall we talk about your project?'}
              </h2>
              <p className="text-slate-300">
                {language === 'es'
                  ? 'Una conversacion corta para entender el contexto y proponer un camino realista.'
                  : 'A short conversation to understand your context and propose a realistic path.'}
              </p>
            </div>
            <Link
              href="/contact"
              aria-label={t.common.ctaContact}
              className="border border-retro-accent bg-retro-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              {t.common.ctaContact}
            </Link>
          </div>
        </SectionShell>
      </section>
    </>
  );
}
