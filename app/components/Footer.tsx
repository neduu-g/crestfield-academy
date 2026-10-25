import Link from "next/link";
import { navLinks, site } from "../data/site";
import { Wordmark } from "./Crest";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 print:hidden">
      <div className="h-1 bg-gold" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Wordmark light />
          <p className="mt-5 max-w-xs font-display text-lg italic text-gold">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Students and parents</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/results" className="hover:text-gold">
                Check Results
              </Link>
            </li>
            <li>
              <Link href="/admissions#apply" className="hover:text-gold">
                Apply Now
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gold">
                Upcoming events
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gold">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Concept Project by{" "}
            <a
              href={site.neduhubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline underline-offset-2 hover:text-white"
            >
              NeduHub
            </a>
            . Crestfield Academy is a fictional school.
          </p>
          <p>All names, results and details on this site are fictional.</p>
        </div>
      </div>
    </footer>
  );
}
