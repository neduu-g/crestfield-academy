import type { Metadata } from "next";
import DemoForm from "../components/DemoForm";
import { Field, fieldClass } from "../components/FormFields";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details and office hours for Crestfield Academy (placeholders).",
};

export default function ContactPage() {
  const details = [
    { label: "Address", value: site.address },
    { label: "Phone", value: site.phone },
    { label: "Email", value: site.email },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="The details below are placeholders for this concept project."
        image="/images/classroom.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div className="rounded-lg bg-navy p-8 text-white">
            <h2 className="font-display text-2xl font-semibold">School office</h2>
            <dl className="mt-6 space-y-5">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{d.label}</dt>
                  <dd className="mt-1 text-white/85">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg bg-white p-8 ring-1 ring-navy/10">
            <h2 className="font-display text-2xl font-semibold text-navy">Office hours</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="flex flex-wrap justify-between gap-x-4 border-b border-navy/10 pb-2">
                  <dt className="font-semibold text-ink">{h.days}</dt>
                  <dd className="text-ink-soft">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 ring-1 ring-navy/10 sm:p-9">
          <h2 className="font-display text-2xl font-semibold text-navy">Send a message</h2>
          <div className="mt-6">
            <DemoForm>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input name="name" required autoComplete="name" className={fieldClass} />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" required autoComplete="email" className={fieldClass} />
                </Field>
              </div>
              <Field label="Subject">
                <select name="subject" className={fieldClass} defaultValue="General enquiry">
                  <option>General enquiry</option>
                  <option>Admissions</option>
                  <option>Results and reports</option>
                  <option>Visiting the school</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea name="message" rows={6} required className={fieldClass} />
              </Field>
            </DemoForm>
          </div>
        </div>
      </section>
    </>
  );
}
