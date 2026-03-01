'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <SectionShell title="boot.sequence" className="mt-6">
      <div className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-retro-accent">data + software consulting studio</p>
        <h1 className="max-w-3xl font-mono text-3xl leading-tight text-slate-100 md:text-5xl">{t.hero.title}</h1>
        <p className="max-w-3xl text-slate-300 md:text-lg">{t.hero.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            aria-label={t.hero.ctaPrimary}
            className="border border-retro-borderLight bg-retro-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href="/portfolio"
            aria-label={t.hero.ctaSecondary}
            className="border border-slate-600 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-retro-borderLight"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
