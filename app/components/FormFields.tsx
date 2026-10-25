import type { ReactNode } from "react";

export const fieldClass =
  "mt-1.5 w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm font-normal text-ink focus:border-navy focus:outline-none";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}
      {children}
    </label>
  );
}
