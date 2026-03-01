import { ReactNode } from 'react';

type SectionShellProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ title, children, className = '' }: SectionShellProps) {
  return (
    <section
      className={`overflow-hidden rounded-none border border-retro-borderDark bg-slate-900 shadow-window transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      <div className="border-b border-retro-borderDark bg-gradient-to-r from-retro-panel to-slate-800 px-4 py-2">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-200">
          <span className="h-2 w-2 border border-retro-borderLight bg-retro-mint" aria-hidden="true" />
          {title}
        </div>
      </div>
      <div className="border-l border-t border-retro-borderLight p-5 md:p-6">{children}</div>
    </section>
  );
}
