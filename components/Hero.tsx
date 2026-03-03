'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';
import ArcLogo from '@/components/ArcLogo';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="top" className="mt-2">
      <SectionShell title="arc overview">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-retro-borderLight bg-white px-3 py-2 shadow-sm">
            <ArcLogo />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Arc Solutions</p>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">{t.hero.title}</h1>
            <p className="max-w-2xl text-base text-slate-600 md:text-lg">{t.hero.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" aria-label={t.hero.ctaPrimary} className="rounded-full bg-retro-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#portfolio"
              aria-label={t.hero.ctaSecondary}
              className="rounded-full border border-retro-borderLight bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-retro-accent hover:text-retro-accent"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">{language === 'es' ? 'Focus' : 'Focus'}</p>
              <p className="text-sm font-semibold text-slate-900">{language === 'es' ? 'Resultados con datos reales' : 'Real data outcomes'}</p>
            </article>
            <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">{language === 'es' ? 'Modo' : 'Mode'}</p>
              <p className="text-sm font-semibold text-slate-900">{language === 'es' ? 'Consultoria + ejecucion' : 'Consulting + execution'}</p>
            </article>
            <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">{language === 'es' ? 'Stack' : 'Stack'}</p>
              <p className="text-sm font-semibold text-slate-900">Data, APIs, Web, AI enablement</p>
            </article>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
