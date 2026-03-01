'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Main navigation">
        <Link href="/" className="font-mono text-sm uppercase tracking-widest text-retro-mint">
          {t.common.companyName}
        </Link>
        <div className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
          <Link className="hover:text-retro-accent" href="/">
            {t.nav.home}
          </Link>
          <Link className="hover:text-retro-accent" href="/about">
            {t.nav.about}
          </Link>
          <a className="hover:text-retro-accent" href="/#services">
            {t.nav.services}
          </a>
          <Link className="hover:text-retro-accent" href="/portfolio">
            {t.nav.portfolio}
          </Link>
          <Link className="hover:text-retro-accent" href="/contact">
            {t.nav.contact}
          </Link>
        </div>
        <LanguageToggle />
      </nav>
    </header>
  );
}
