'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import ArcLogo from '@/components/ArcLogo';

type NavItem = {
  label: string;
  href: string;
  children: Array<{ label: string; href: string }>;
};

export default function Navbar() {
  const { language, t } = useLanguage();

  const navItems: NavItem[] =
    language === 'es'
      ? [
          {
            label: t.nav.home,
            href: '/',
            children: [
              { label: 'Hero', href: '/#top' },
              { label: 'Tecnologias', href: '/#tech-stack' }
            ]
          },
          {
            label: t.nav.about,
            href: '/about',
            children: [
              { label: 'Perfil', href: '/about' },
              { label: 'Forma de trabajo', href: '/#workflow' }
            ]
          },
          {
            label: t.nav.services,
            href: '/#services',
            children: [
              { label: 'Servicios', href: '/#services' },
              { label: 'Proceso', href: '/#workflow' }
            ]
          },
          {
            label: t.nav.portfolio,
            href: '/portfolio',
            children: [
              { label: 'Casos', href: '/portfolio' },
              { label: 'Tecnologias', href: '/#tech-stack' }
            ]
          }
        ]
      : [
          {
            label: t.nav.home,
            href: '/',
            children: [
              { label: 'Hero', href: '/#top' },
              { label: 'Technologies', href: '/#tech-stack' }
            ]
          },
          {
            label: t.nav.about,
            href: '/about',
            children: [
              { label: 'Profile', href: '/about' },
              { label: 'How I work', href: '/#workflow' }
            ]
          },
          {
            label: t.nav.services,
            href: '/#services',
            children: [
              { label: 'Services', href: '/#services' },
              { label: 'Process', href: '/#workflow' }
            ]
          },
          {
            label: t.nav.portfolio,
            href: '/portfolio',
            children: [
              { label: 'Case studies', href: '/portfolio' },
              { label: 'Technologies', href: '/#tech-stack' }
            ]
          }
        ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-retro-borderLight/70 bg-slate-950/55 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <ArcLogo compact />
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 sm:inline">Arc Solutions</span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative pb-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-retro-borderLight hover:bg-slate-900/70 hover:text-white"
                >
                  {item.label}
                </Link>
                <div className="pointer-events-none absolute left-0 top-full z-50 min-w-44 pt-1 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <div className="translate-y-1 border border-retro-borderLight bg-slate-950/96 p-2 shadow-window transition duration-150 group-hover:translate-y-0 group-focus-within:translate-y-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-2 py-1.5 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-retro-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              className="border border-retro-accent bg-retro-accent px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              href="/contact"
              className="border border-retro-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-retro-accent transition hover:bg-retro-accent hover:text-slate-950 lg:hidden"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          <Link href="/" className="whitespace-nowrap border border-retro-borderLight bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-200">
            {t.nav.home}
          </Link>
          <Link href="/about" className="whitespace-nowrap border border-retro-borderLight bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-200">
            {t.nav.about}
          </Link>
          <a href="/#services" className="whitespace-nowrap border border-retro-borderLight bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-200">
            {t.nav.services}
          </a>
          <Link href="/portfolio" className="whitespace-nowrap border border-retro-borderLight bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-200">
            {t.nav.portfolio}
          </Link>
        </div>
      </nav>
    </header>
  );
}
