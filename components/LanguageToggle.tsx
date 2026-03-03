'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-retro-borderLight bg-white text-xs font-semibold shadow-sm" aria-label="language toggle">
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-label="Cambiar idioma a espanol"
        className={`rounded-full px-2.5 py-1.5 transition-colors ${language === 'es' ? 'bg-retro-accent text-white' : 'text-slate-700 hover:bg-slate-100'}`}
      >
        ES
      </button>
      <span className="px-1 text-slate-300">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Switch language to English"
        className={`rounded-full px-2.5 py-1.5 transition-colors ${language === 'en' ? 'bg-retro-accent text-white' : 'text-slate-700 hover:bg-slate-100'}`}
      >
        EN
      </button>
    </div>
  );
}
