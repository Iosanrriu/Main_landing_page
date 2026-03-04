'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const stack = [
  { name: 'Vercel', image: '/icons/brands/vercel.svg' },
  { name: 'PocketBase', image: '/icons/brands/pocketbase.svg' },
  { name: 'OpenAI Codex' },
  { name: 'Google Cloud', image: '/icons/brands/googlecloud.svg' },
  { name: 'AWS', image: '/icons/brands/amazonwebservices.svg' },
  { name: 'GitHub', image: '/icons/brands/github.svg' },
  { name: 'Python', image: '/icons/brands/python.svg' },
  { name: 'REST API' },
  { name: 'BigQuery', image: '/icons/brands/googlebigquery.svg' },
  { name: 'SQL' }
];

export default function TechStackStrip() {
  const { language } = useLanguage();

  return (
    <section id="tech-stack" className="mt-8 scroll-mt-24">
      <div className="rounded-[28px] border border-retro-borderLight bg-white p-6 shadow-window">
        <p className="meta-label text-slate-400">
          {language === 'es' ? 'Tecnologias con las que trabajamos' : 'Technologies we work with'}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((item) => (
            <article key={item.name} className="rounded-2xl border border-retro-borderDark bg-[#fafafc] px-3 py-3">
              <div className="flex items-center gap-2">
                {item.image ? (
                  <img src={item.image} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" loading="lazy" />
                ) : (
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-slate-400" />
                )}
                <span className="text-sm font-semibold tracking-[0.005em] text-slate-800">{item.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
