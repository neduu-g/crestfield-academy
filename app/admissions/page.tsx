import type { Metadata } from "next";
import DemoForm from "../components/DemoForm";
import { Field, fieldClass } from "../components/FormFields";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { admissionSteps, faqs, requirements } from "../data/content";
import { programmes } from "../data/programmes";

export const metadata: Metadata = {
  title: "Admissions",
  description: "How to apply to Crestfield Academy, a fictional school concept: steps, requirements, FAQs and an enquiry form.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Joining Crestfield Academy"
        intro="We welcome applications for Nursery through to SSS 1. The process is simple and our admissions team is happy to help at every step."
        image="/images/pupils-smiling.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="How to apply" title="Five simple steps" />
        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {admissionSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-lg bg-white p-6 ring-1 ring-navy/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-lg font-semibold text-gold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <a href="#apply" className="rounded-md border-2 border-gold bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-gold-deep hover:text-white">
            Apply Now
          </a>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Requirements" title="What to prepare" />
            <ul className="mt-8 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3 rounded-md bg-white px-5 py-4 text-ink shadow-sm">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true">
                    <path d="m4.5 10.5 3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Questions" title="Frequently asked" />
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-md bg-white shadow-sm open:ring-1 open:ring-gold">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl leading-none text-gold-deep transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Apply Now" title="Admissions enquiry" intro="Tell us a little about your child and we would contact you to arrange a visit. In this concept, the form does not send anything." />
        <div className="mt-10 rounded-lg bg-white p-6 shadow-sm ring-1 ring-navy/10 sm:p-9">
          <DemoForm submitLabel="Submit enquiry (demo)">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Parent or guardian name">
                <input name="parent" required autoComplete="name" className={fieldClass} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required autoComplete="email" className={fieldClass} />
              </Field>
              <Field label="Phone">
                <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
              </Field>
              <Field label="Child's name">
                <input name="child" required className={fieldClass} />
              </Field>
              <Field label="Section of interest">
                <select name="section" className={fieldClass} defaultValue={programmes[0].name}>
                  {programmes.map((p) => (
                    <option key={p.slug}>{p.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred start">
                <select name="start" className={fieldClass} defaultValue="Second Term, 2026/2027">
                  <option>Second Term, 2026/2027</option>
                  <option>Third Term, 2026/2027</option>
                  <option>First Term, 2027/2028</option>
                </select>
              </Field>
            </div>
            <Field label="Anything else we should know?">
              <textarea name="message" rows={4} className={fieldClass} />
            </Field>
          </DemoForm>
        </div>
      </section>
    </>
  );
}
