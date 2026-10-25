import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { leadership, values } from "../data/content";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "About",
  description: "The history, mission, vision, values and leadership of Crestfield Academy, a fictional school concept.",
};

const milestones = [
  { year: "2004", text: "Crestfield opens as a nursery and primary school with four classrooms." },
  { year: "2011", text: "The junior secondary section welcomes its first JSS 1 class." },
  { year: "2016", text: "Senior secondary opens, with Science, Arts and Commercial pathways." },
  { year: "2023", text: "A new library and science laboratory are added to the campus." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Two decades of steady, caring education"
        intro="Crestfield Academy is a fictional school created for this concept. Its story below shows how a real school could present itself."
        image="/images/about-building.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading align="left" eyebrow="Our history" title="From four classrooms to a full campus" />
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            <p>
              Crestfield began in 2004 with a small group of families who wanted a school that balanced high
              standards with real care for each child. The first nursery and primary classes were small, and
              teachers knew every pupil and parent by name.
            </p>
            <p>
              As those pupils grew, the school grew with them. Junior and senior secondary sections followed,
              and today Crestfield takes students from their first day of nursery through to their final
              secondary examinations.
            </p>
          </div>
          <ol className="mt-8 space-y-5 border-l-2 border-gold pl-6">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-white" aria-hidden="true" />
                <p className="font-display text-lg font-semibold text-navy">{m.year}</p>
                <p className="text-sm text-ink-soft">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-lg">
          <Image
            src="/images/about-building.jpg"
            alt="A brick school building with a small white cupola among tall trees"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-lg border-t-4 border-gold bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">Our mission</p>
            <p className="mt-3 font-display text-2xl leading-snug text-navy">
              To give every student a strong academic foundation and the character to use it well.
            </p>
          </div>
          <div className="rounded-lg border-t-4 border-navy bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">Our vision</p>
            <p className="mt-3 font-display text-2xl leading-snug text-navy">
              A community of disciplined, curious and kind young people, ready to lead in their own way.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our values" title="The principles behind every school day" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-lg bg-white p-6 ring-1 ring-navy/10">
              <h3 className="font-display text-xl font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading light eyebrow="Leadership" title="The team that leads Crestfield" intro="Roles are shown without names because this is a fictional school." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <li key={l.role} className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold font-display text-2xl font-semibold text-gold" aria-hidden="true">
                  {l.initials}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{l.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{l.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
          Concept Project
        </p>
        <h2 className="mt-4 font-display text-2xl font-semibold text-navy">About this website</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Crestfield Academy is a fictional school website concept with an elegant academic identity, admissions
          pages, academic programmes, and a demonstration of how results look in the NeduHub Result Portal. It
          was designed and built by{" "}
          <a href={site.neduhubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-gold underline-offset-4">
            NeduHub
          </a>
          . The school, its people, news and results are not real, and forms do not send anything.
        </p>
      </section>
    </>
  );
}
