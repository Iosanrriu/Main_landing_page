'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionShell from '@/components/SectionShell';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="top" className="mt-2">
      <SectionShell title="arc overview">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="title-hero max-w-4xl">{t.hero.title}</h1>
            <p className="subtitle-hero">{t.hero.subtitle}</p>
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
              <p className="meta-label text-slate-500">{language === 'es' ? 'Foco' : 'Focus'}</p>
              <p className="text-sm font-semibold text-slate-900">
                {language === 'es' ? 'Generacion de soluciones basadas en datos reales' : 'Delivery based on real data outcomes'}
              </p>
            </article>
            <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-4">
              <p className="meta-label text-slate-500">{language === 'es' ? 'Modo' : 'Mode'}</p>
              <p className="text-sm font-semibold text-slate-900">{language === 'es' ? 'Consultoria + ejecucion' : 'Consulting + execution'}</p>
            </article>
            <article className="rounded-2xl border border-retro-borderDark bg-[#fafafc] p-4">
              <p className="meta-label text-slate-500">{language === 'es' ? 'Stack' : 'Stack'}</p>
              <p className="text-sm font-semibold text-slate-900">Data, APIs, AI enablement</p>
            </article>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
