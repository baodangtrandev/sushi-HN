interface SectionHeaderProps {
  title: string;
  titleEn?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  titleEn,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <p className="text-primary text-sm uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      {titleEn && (
        <p className="text-white/60 text-lg mt-2 tracking-wide">{titleEn}</p>
      )}
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
    </div>
  );
}
