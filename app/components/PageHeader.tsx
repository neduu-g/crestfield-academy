import Image from "next/image";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
};

export default function PageHeader({ eyebrow, title, intro, image = "/images/hero-campus.jpg" }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy print:hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/90 to-navy/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </div>
    </section>
  );
}
