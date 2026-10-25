import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./components/SectionHeading";
import { highlights, values } from "./data/content";
import { formatDate, news } from "./data/news";
import { programmes } from "./data/programmes";
import { site } from "./data/site";

const highlightIcons = [
  // Stairs / levels
  "M4 20h4v-4h4v-4h4V8h4V4",
  // Graduation cap
  "M3 9l9-5 9 5-9 5-9-5Zm4 2.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5",
  // Shield
  "M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z",
  // Sparkle / whole child
  "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <Image
          src="/images/hero-campus.jpg"
          alt="A red-brick school building behind a green lawn and young trees"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/30" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:text-sm">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {site.tagline}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Welcome to Crestfield Academy
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            From the first day of nursery to the final year of senior secondary, we help every child grow in
            knowledge, character and confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-md border-2 border-gold bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:border-white hover:bg-white"
            >
              Explore Our School
            </Link>
            <Link
              href="/results"
              className="rounded-md border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Check Results
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section aria-label="School highlights" className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-lg bg-navy/10 shadow-[0_25px_50px_-30px_rgba(11,27,51,0.55)] sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <li key={h.title} className="flex gap-4 bg-white p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d={highlightIcons[i]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-navy">{h.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{h.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* About preview */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-lg border-2 border-gold" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/teacher-class.jpg"
              alt="A teacher holding up a sheet of paper while students listen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="About Crestfield" title="A school built on care and high expectations" />
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Crestfield Academy brings nursery, primary and secondary education together on one campus. Our
            teachers know each student well, set clear standards and give the support needed to meet them.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Lessons are only part of the day. Clubs, sport, service and the arts help students discover their
            strengths and learn to lead.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-deep"
          >
            Learn about our history and values <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Academic programmes"
            title="Learning at every stage"
            intro="Four sections, one clear path. Each stage builds on the last."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((p) => (
              <li key={p.slug} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-navy/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col border-t-4 border-gold p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">{p.ages}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                  <Link
                    href={`/academics#${p.slug}`}
                    className="mt-auto pt-4 text-sm font-semibold text-navy hover:text-gold-deep"
                  >
                    Read more<span className="sr-only"> about {p.name}</span> <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading light eyebrow="Our values" title="What a Crestfield education stands for" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="bg-navy p-7">
                <p className="font-display text-4xl font-semibold text-gold/70">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="News and events" title="Latest from the school" />
          <Link href="/news" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-deep">
            All news and events
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {news.slice(0, 3).map((item) => (
            <li key={item.slug} className="overflow-hidden rounded-lg bg-white ring-1 ring-navy/10">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  {item.category} &middot; <time dateTime={item.date}>{formatDate(item.date)}</time>
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Admissions call to action */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-navy-deep">
          <Image src="/images/classroom.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="relative flex flex-col items-start gap-6 px-6 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Admissions open</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">Join the Crestfield family</h2>
              <p className="mt-3 max-w-xl text-white/80">
                Places are available from Nursery to SSS 1 for the next term. Book a visit or start your application today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/admissions#apply" className="rounded-md border-2 border-gold bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:border-white hover:bg-white">
                Apply Now
              </Link>
              <Link href="/admissions" className="rounded-md border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-navy">
                Admissions guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
