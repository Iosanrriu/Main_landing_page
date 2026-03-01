'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {t.common.companyName}. {t.common.rights}
        </p>
        <div className="flex items-center gap-4">
          <a href="GITHUB_URL" target="_blank" rel="noopener noreferrer" className="hover:text-retro-accent">
            GitHub
          </a>
          <a href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="hover:text-retro-accent">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-slate-800 px-4 py-3 text-xs text-slate-400">{t.common.footerTransparency}</div>
    </footer>
  );
}
