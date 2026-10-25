import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { events, formatDate, news } from "../data/news";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Fictional announcements and upcoming events at Crestfield Academy.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Events"
        title="What is happening at Crestfield"
        intro="Announcements, school life and the dates parents need. All items are fictional for this concept."
        image="/images/corridor.jpg"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <section aria-labelledby="news-heading">
          <h2 id="news-heading" className="font-display text-3xl font-semibold text-navy">
            Announcements
          </h2>
          <ul className="mt-8 space-y-6">
            {news.map((item) => (
              <li key={item.slug}>
                <article className="grid overflow-hidden rounded-lg bg-white ring-1 ring-navy/10 sm:grid-cols-[220px_1fr]">
                  <div className="relative aspect-[16/10] sm:aspect-auto">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 640px) 220px, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                      {item.category} &middot; <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="events-heading">
          <h2 id="events-heading" className="font-display text-3xl font-semibold text-navy">
            Upcoming events
          </h2>
          <ul className="mt-8 space-y-4">
            {events.map((e) => (
              <li key={e.title} className="flex gap-4 rounded-lg bg-navy p-5 text-white">
                <time dateTime={e.date} className="flex w-16 shrink-0 flex-col items-center justify-center rounded-md bg-gold py-2 text-navy-deep">
                  <span className="font-display text-2xl font-semibold leading-none">{formatDate(e.date, { day: "numeric" })}</span>
                  <span className="mt-1 text-xs font-semibold uppercase">{formatDate(e.date, { month: "short" })}</span>
                </time>
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-gold">
                    {formatDate(e.date, { weekday: "long" })}, {e.time}
                  </p>
                  <p className="text-sm text-white/70">{e.location}</p>
                  <p className="mt-2 text-sm text-white/80">{e.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Term calendar" title="First Term, 2026/2027" intro="Next term begins on Monday, 11 January 2027." />
        </div>
      </section>
    </>
  );
}
