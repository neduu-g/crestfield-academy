import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy note for the Crestfield Academy concept website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy and this concept" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 leading-relaxed text-ink-soft sm:px-6">
        <p>
          Crestfield Academy is a fictional school. This website is a concept project by{" "}
          <a href={site.neduhubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-gold underline-offset-4">
            NeduHub
          </a>{" "}
          to show web design work.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy">Fictional content</h2>
        <p>
          The school, its history, staff roles, news, events, contact details and student results are all made
          up. Any resemblance to a real school or person is unintended. Photos are free stock images.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy">Forms</h2>
        <p>
          The contact and admissions forms are demonstrations. They run only in your browser. Nothing you type is
          sent, stored or shared.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy">Results demo</h2>
        <p>
          The results page shows a fictional report card. The demo PIN check happens in your browser and no
          personal data is involved. Real schools using the NeduHub Result Portal check PINs securely on the server.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy">Cookies and tracking</h2>
        <p>This site does not set cookies or use analytics.</p>
      </section>
    </>
  );
}
