type ArcLogoProps = {
  compact?: boolean;
};

export default function ArcLogo({ compact = false }: ArcLogoProps) {
  return (
    <img
      src="/brand/arc-logo.svg"
      alt="Arc Solutions"
      className={compact ? 'h-9 w-auto rounded-xl border border-retro-borderLight' : 'h-12 w-auto rounded-xl border border-retro-borderLight'}
      loading="lazy"
    />
  );
}
