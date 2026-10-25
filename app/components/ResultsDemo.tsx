"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { isDemoPin } from "../data/grading";
import { DEMO_PIN, sessions, terms } from "../data/results";
import { fieldClass } from "./FormFields";
import ReportCard from "./ReportCard";

export default function ResultsDemo() {
  const [pin, setPin] = useState("");
  const [session, setSession] = useState(sessions[0]);
  const [term, setTerm] = useState(terms[0]);
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const formHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (unlocked) document.getElementById("report-title")?.focus();
  }, [unlocked]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDemoPin(pin)) {
      setError("");
      setUnlocked(true);
    } else {
      setError("That PIN is not valid");
    }
  }

  function reset() {
    setUnlocked(false);
    setPin("");
    setError("");
    requestAnimationFrame(() => formHeading.current?.focus());
  }

  if (unlocked) {
    return (
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="text-sm text-ink-soft">
            Showing {term}, {session}. Fictional demo data.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-md border-2 border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
            >
              Check another PIN
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-md border-2 border-gold bg-gold px-4 py-2 text-sm font-semibold text-navy-deep hover:bg-gold-deep hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7v-7Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Print
            </button>
          </div>
        </div>
        <ReportCard />
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr]">
      <form onSubmit={handleSubmit} className="rounded-lg border border-navy/15 bg-white p-6 sm:p-8" noValidate>
        <h2 ref={formHeading} tabIndex={-1} className="font-display text-2xl font-semibold text-navy outline-none">
          Check a result
        </h2>
        <p className="mt-2 text-sm text-ink-soft">Enter the 12-character result PIN, then choose the session and term.</p>

        <div className="mt-6 space-y-5">
          <label className="block text-sm font-semibold text-ink">
            Result PIN
            <input
              name="pin"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                if (error) setError("");
              }}
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              maxLength={16}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "pin-error" : undefined}
              className={`${fieldClass} font-mono text-lg uppercase tracking-[0.2em]`}
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Session
              <select value={session} onChange={(e) => setSession(e.target.value)} className={fieldClass}>
                {sessions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-ink">
              Term
              <select value={term} onChange={(e) => setTerm(e.target.value)} className={fieldClass}>
                {terms.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div role="alert" aria-live="assertive" className="mt-4 min-h-6">
          {error && (
            <p id="pin-error" className="rounded-md border border-red-700/30 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-800">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
        >
          View result
        </button>
      </form>

      <aside className="rounded-lg border border-gold/50 bg-gold-soft p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-navy">Demo PIN</h2>
        <p className="mt-2 text-sm text-ink">Use this PIN to open the fictional report card:</p>
        <p className="mt-4 select-all rounded-md border border-dashed border-gold-deep bg-white px-4 py-3 text-center font-mono text-xl font-semibold tracking-[0.25em] text-navy">
          {DEMO_PIN}
        </p>
        <ul className="mt-5 space-y-2 text-sm text-ink-soft">
          <li>PINs are 12 characters: capital letters and numbers.</li>
          <li>Look-alike characters (O, 0, I, 1) are never used.</li>
          <li>In a real school each student receives their own PIN.</li>
        </ul>
      </aside>
    </div>
  );
}
