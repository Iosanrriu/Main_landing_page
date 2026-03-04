'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import ArcLogo from '@/components/ArcLogo';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-retro-borderLight/80 bg-white/78 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="inline-flex items-center gap-3">
            <ArcLogo compact />
            <span className="meta-label hidden text-slate-700 sm:inline">Arc Solutions</span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="#top" className="nav-text rounded-full px-3 py-1.5 transition hover:bg-slate-100">
              {t.nav.home}
            </a>
            <a href="#services" className="nav-text rounded-full px-3 py-1.5 transition hover:bg-slate-100">
              {t.nav.services}
            </a>
            <a href="#workflow" className="nav-text rounded-full px-3 py-1.5 transition hover:bg-slate-100">
              {t.nav.about}
            </a>
            <a href="#portfolio" className="nav-text rounded-full px-3 py-1.5 transition hover:bg-slate-100">
              {t.nav.portfolio}
            </a>
            <a href="#contact" className="rounded-full bg-retro-accent px-4 py-1.5 text-sm font-semibold text-white transition hover:brightness-110">
              {t.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a href="#contact" className="rounded-full bg-retro-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white lg:hidden">
              {t.nav.contact}
            </a>
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          <a href="#top" className="whitespace-nowrap rounded-full border border-retro-borderLight bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
            {t.nav.home}
          </a>
          <a href="#services" className="whitespace-nowrap rounded-full border border-retro-borderLight bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
            {t.nav.services}
          </a>
          <a href="#workflow" className="whitespace-nowrap rounded-full border border-retro-borderLight bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
            {t.nav.about}
          </a>
          <a href="#portfolio" className="whitespace-nowrap rounded-full border border-retro-borderLight bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
            {t.nav.portfolio}
          </a>
        </div>
      </nav>
    </header>
  );
}
