type ArcLogoProps = {
  compact?: boolean;
};

export default function ArcLogo({ compact = false }: ArcLogoProps) {
  return (
    <img
      src="/brand/arc-logo.svg"
      alt="Arc Solutions"
      className={compact ? 'h-9 w-auto' : 'h-12 w-auto'}
      loading="lazy"
    />
  );
}
