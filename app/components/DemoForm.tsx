"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type DemoFormProps = {
  children: ReactNode;
  submitLabel?: string;
};

// Frontend-only form wrapper. Nothing is sent anywhere.
export default function DemoForm({ children, submitLabel = "Try the form" }: DemoFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="border-l-4 border-gold bg-gold-soft px-4 py-3 text-sm text-ink">
        This is a demo form. Nothing is sent.
      </p>
      {children}
      <button
        type="submit"
        className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
      >
        {submitLabel}
      </button>
      <div role="status" aria-live="polite">
        {submitted && (
          <p className="rounded-md border border-navy/20 bg-mist px-4 py-3 text-sm text-navy">
            Demo only: nothing was sent. In a live version this form would reach the school office.
          </p>
        )}
      </div>
    </form>
  );
}
