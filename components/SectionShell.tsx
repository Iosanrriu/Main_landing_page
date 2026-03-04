import { ReactNode } from 'react';

type SectionShellProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ title, children, className = '' }: SectionShellProps) {
  return (
    <section className={`relative overflow-hidden rounded-[28px] border border-retro-borderLight bg-retro-panel shadow-window ${className}`}>
      <div className="relative border-b border-retro-borderDark bg-white/85 px-5 py-3">
        <div className="meta-label inline-flex items-center gap-2 text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-retro-accent" aria-hidden="true" />
          {title}
        </div>
      </div>
      <div className="relative p-6 md:p-8">{children}</div>
    </section>
  );
}
