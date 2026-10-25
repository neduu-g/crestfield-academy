"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../data/site";
import { Wordmark } from "./Crest";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu after navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="Crestfield Academy home" className="rounded">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative px-3 py-2 text-[0.95rem] font-semibold transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:bg-gold after:transition-transform ${
                    isActive(link.href)
                      ? "text-navy after:scale-x-100"
                      : "text-ink-soft after:scale-x-0 hover:text-navy hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            href="/results"
            className="rounded-md border-2 border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Check Results
          </Link>
          <Link
            href="/admissions#apply"
            className="rounded-md border-2 border-gold bg-gold px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-white"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy/20 text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        className={`max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-navy/10 bg-white xl:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block border-l-4 px-4 py-3 text-base font-semibold ${
                  isActive(link.href) ? "border-gold bg-gold-soft text-navy" : "border-transparent text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-5 sm:px-6">
          <Link
            href="/results"
            className="rounded-md border-2 border-navy px-4 py-3 text-center text-sm font-semibold text-navy"
          >
            Check Results
          </Link>
          <Link
            href="/admissions#apply"
            className="rounded-md border-2 border-gold bg-gold px-4 py-3 text-center text-sm font-semibold text-navy-deep"
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
