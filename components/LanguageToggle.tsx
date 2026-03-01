'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center border border-retro-borderLight bg-slate-900 text-xs font-mono"
      aria-label="language toggle"
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-label="Cambiar idioma a español"
        className={`px-2 py-1 transition-colors ${language === 'es' ? 'bg-retro-accent text-slate-950' : 'text-slate-200 hover:bg-slate-800'}`}
      >
        ES
      </button>
      <span className="px-1 text-slate-500">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Switch language to English"
        className={`px-2 py-1 transition-colors ${language === 'en' ? 'bg-retro-accent text-slate-950' : 'text-slate-200 hover:bg-slate-800'}`}
      >
        EN
      </button>
    </div>
  );
}
