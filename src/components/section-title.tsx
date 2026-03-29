interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-or mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-playfair font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight ${
          light ? "text-white" : "text-bleu"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-gris"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
