import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { enrichment, programmes } from "../data/programmes";

export const metadata: Metadata = {
  title: "Academics",
  description: "Nursery, Primary, Junior Secondary and Senior Secondary programmes at Crestfield Academy (fictional).",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A clear path from Nursery to Senior Secondary"
        intro="Each section has its own head, its own approach and the same commitment to strong foundations."
        image="/images/library.jpg"
      />

      <nav aria-label="Sections" className="border-b border-navy/10 bg-white">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {programmes.map((p) => (
            <li key={p.slug} className="shrink-0">
              <a href={`#${p.slug}`} className="inline-block rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:border-gold hover:bg-gold-soft">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6">
        {programmes.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            aria-labelledby={`${p.slug}-title`}
            className="grid scroll-mt-28 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-navy/10 md:grid-cols-2"
          >
            <div className={`relative min-h-64 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">{p.ages}</p>
              <h2 id={`${p.slug}-title`} className="mt-2 font-display text-3xl font-semibold text-navy">
                {p.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-ink-soft">{p.classes}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{p.summary}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">Focus areas</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {p.focus.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Beyond the classroom" title="Growing the whole student" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enrichment.map((e) => (
              <li key={e.title} className="rounded-lg border-t-4 border-gold bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-navy">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link href="/admissions" className="rounded-md border-2 border-gold bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-gold-deep hover:text-white">
              See how to apply
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
