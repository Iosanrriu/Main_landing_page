'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-12 border-t border-retro-borderLight bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {t.common.companyName}. {t.common.rights}
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Iosanrriu" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-retro-accent">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-espinosa-wild/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-retro-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-retro-borderLight px-4 py-3 text-xs text-slate-400">{t.common.footerTransparency}</div>
    </footer>
  );
}
