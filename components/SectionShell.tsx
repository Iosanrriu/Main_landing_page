import { ReactNode } from 'react';

type SectionShellProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ title, children, className = '' }: SectionShellProps) {
  return (
    <section className={`relative overflow-hidden border border-retro-borderLight/80 bg-retro-panel/90 shadow-window ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(88,166,255,0.08),transparent_36%)]" />
      <div className="relative border-b border-retro-borderLight/70 bg-slate-950/70 px-4 py-2.5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
          <span className="h-2.5 w-2.5 bg-retro-accent" aria-hidden="true" />
          {title}
        </div>
      </div>
      <div className="relative p-5 md:p-6">{children}</div>
    </section>
  );
}
