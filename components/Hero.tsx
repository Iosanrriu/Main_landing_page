'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';
import ArcLogo from '@/components/ArcLogo';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="top" className="mt-2">
      <SectionShell title="arc.command-center">
        <div className="relative overflow-hidden border border-retro-borderLight bg-slate-950">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{
              backgroundImage: "url('/arc-grid.svg')"
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,17,23,0.94)_0%,rgba(13,17,23,0.82)_48%,rgba(13,17,23,0.35)_100%)]" aria-hidden="true" />

          <div className="relative space-y-6 p-6 md:p-10">
            <div className="inline-flex items-center gap-3 border border-retro-borderLight bg-slate-950/85 px-3 py-2">
              <ArcLogo />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Arc Solutions</p>
            </div>

            <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-100 md:text-5xl">{t.hero.title}</h1>
            <p className="max-w-2xl text-sm text-slate-200 md:text-base">{t.hero.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                aria-label={t.hero.ctaPrimary}
                className="border border-retro-accent bg-retro-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/portfolio"
                aria-label={t.hero.ctaSecondary}
                className="border border-retro-borderLight bg-slate-900/85 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-retro-accent hover:text-retro-accent"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="grid gap-3 border border-retro-borderLight/80 bg-slate-950/85 p-3 md:grid-cols-3">
              <article>
                <p className="text-xs uppercase tracking-wider text-slate-500">{language === 'es' ? 'Focus' : 'Focus'}</p>
                <p className="text-sm font-semibold text-slate-100">{language === 'es' ? 'Resultados con datos reales' : 'Real data outcomes'}</p>
              </article>
              <article>
                <p className="text-xs uppercase tracking-wider text-slate-500">{language === 'es' ? 'Modo' : 'Mode'}</p>
                <p className="text-sm font-semibold text-slate-100">{language === 'es' ? 'Consultoria + ejecucion' : 'Consulting + execution'}</p>
              </article>
              <article>
                <p className="text-xs uppercase tracking-wider text-slate-500">{language === 'es' ? 'Stack' : 'Stack'}</p>
                <p className="text-sm font-semibold text-slate-100">Data, APIs, Web, AI enablement</p>
              </article>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
