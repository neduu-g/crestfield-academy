type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, intro, align = "center", light = false }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
          {center && <span className="h-px w-8 bg-gold" aria-hidden="true" />}
        </p>
      )}
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-ink-soft"}`}>{intro}</p>}
    </div>
  );
}
