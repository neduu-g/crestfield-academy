import type { Metadata } from "next";
import ResultsDemo from "../components/ResultsDemo";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Check Results (Demo)",
  description: "A demonstration of how results look in the NeduHub Result Portal, using a fictional student.",
};

export default function ResultsPage() {
  return (
    <>
      <div role="note" className="bg-gold px-4 py-3 text-center text-sm font-semibold text-navy-deep print:hidden">
        Demo only. Fictional student and results.
      </div>

      <section className="bg-navy print:hidden">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Results
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">Check Results</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            See how a termly report card looks to students and parents.
          </p>
          <p className="mt-5 text-sm text-white/80">
            Schools use the{" "}
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline underline-offset-4 hover:text-white"
            >
              NeduHub Result Portal
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 print:p-0">
        <ResultsDemo />
      </section>
    </>
  );
}
