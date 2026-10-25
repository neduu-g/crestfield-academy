import { buildReport, gradeKey, principalRemark } from "../data/grading";
import { demoStudent, ratingKey } from "../data/results";
import { site } from "../data/site";
import Crest from "./Crest";

const th = "border border-navy/25 bg-navy px-2 py-2 text-left text-[0.7rem] font-semibold uppercase tracking-wide text-white print:px-1 print:py-1";
const td = "border border-navy/15 px-2 py-1.5 print:px-1 print:py-0.5";

function Tick({ rating }: { rating: number }) {
  return (
    <>
      <svg viewBox="0 0 16 16" className="mx-auto h-3.5 w-3.5 text-navy" aria-hidden="true">
        <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">Rated {rating}</span>
    </>
  );
}

function RatingTable({ title, items }: { title: string; items: { label: string; rating: number }[] }) {
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="mb-2 text-left font-display text-base font-semibold text-navy">{title}</caption>
      <thead>
        <tr>
          <th scope="col" className={th}>
            Trait
          </th>
          {ratingKey.map((r) => (
            <th key={r.rating} scope="col" className={`${th} w-8 text-center`}>
              {r.rating}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.label} className="odd:bg-white even:bg-mist/60">
            <th scope="row" className={`${td} text-left font-normal`}>
              {item.label}
            </th>
            {ratingKey.map((r) => (
              <td key={r.rating} className={`${td} text-center`}>
                {item.rating === r.rating ? <Tick rating={r.rating} /> : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ReportCard() {
  const s = demoStudent;
  const report = buildReport(s.row);

  const info = [
    { label: "Student name", value: s.name },
    { label: "Admission no.", value: s.admissionNo },
    { label: "Class", value: `${s.className} ${s.arm}` },
    { label: "Gender", value: s.gender },
    { label: "Session", value: s.session },
    { label: "Term", value: s.term },
    { label: "No. in class", value: String(report.numberInClass) },
    { label: "Attendance", value: `${s.daysPresent} of ${s.daysOpened} days` },
  ];

  return (
    <article
      aria-labelledby="report-title"
      className="report-card mx-auto max-w-5xl rounded-lg border border-navy/15 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(11,27,51,0.5)] sm:p-8"
    >
      <p className="mb-4 rounded bg-gold-soft px-3 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep print:mb-2 print:border print:border-gold">
        Demo report card. Fictional student and results.
      </p>

      <header className="flex flex-col items-center gap-3 border-b-2 border-navy pb-5 text-center sm:flex-row sm:text-left print:flex-row print:pb-2 print:text-left">
        <Crest className="h-20 w-[4.5rem] shrink-0 print:h-14 print:w-12" />
        <div className="flex-1">
          <p className="font-display text-2xl font-semibold tracking-[0.12em] text-navy sm:text-3xl print:text-xl">
            CRESTFIELD ACADEMY
          </p>
          <p className="text-sm text-ink-soft print:text-[8pt]">{site.address}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">{site.tagline}</p>
        </div>
        <div className="text-center sm:text-right print:text-right">
          <h2 id="report-title" tabIndex={-1} className="font-display text-xl font-semibold text-navy outline-none">
            Student Report Card
          </h2>
          <p className="text-sm text-ink-soft">
            {s.term}, {s.session} session
          </p>
        </div>
      </header>

      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-4 print:mt-2 print:grid-cols-4 print:gap-y-1">
        {info.map((item) => (
          <div key={item.label} className="border-b border-navy/10 pb-1.5 print:pb-0.5">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-soft">{item.label}</dt>
            <dd className="font-semibold text-navy">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 overflow-x-auto print:mt-3 print:overflow-visible">
        <table className="w-full min-w-[760px] border-collapse text-sm print:min-w-0 print:text-[8pt]">
          <caption className="sr-only">Subject scores</caption>
          <thead>
            <tr>
              <th scope="col" className={th}>Subject</th>
              <th scope="col" className={`${th} text-center`}>C.A (40)</th>
              <th scope="col" className={`${th} text-center`}>Exam (60)</th>
              <th scope="col" className={`${th} text-center`}>Total (100)</th>
              <th scope="col" className={`${th} text-center`}>Lowest</th>
              <th scope="col" className={`${th} text-center`}>Highest</th>
              <th scope="col" className={`${th} text-center`}>Class Avg.</th>
              <th scope="col" className={`${th} text-center`}>Grade</th>
              <th scope="col" className={th}>Remark</th>
              <th scope="col" className={`${th} text-center`}>Position</th>
            </tr>
          </thead>
          <tbody>
            {report.rows.map((row) => (
              <tr key={row.subject} className="odd:bg-white even:bg-mist/60">
                <th scope="row" className={`${td} text-left font-semibold text-navy`}>{row.subject}</th>
                <td className={`${td} text-center`}>{row.ca}</td>
                <td className={`${td} text-center`}>{row.exam}</td>
                <td className={`${td} text-center font-semibold`}>{row.total}</td>
                <td className={`${td} text-center`}>{row.lowest}</td>
                <td className={`${td} text-center`}>{row.highest}</td>
                <td className={`${td} text-center`}>{row.classAverage.toFixed(1)}</td>
                <td className={`${td} text-center font-semibold text-navy`}>{row.grade}</td>
                <td className={td}>{row.remark}</td>
                <td className={`${td} text-center`}>{row.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 print:mt-2 print:grid-cols-6 print:gap-1">
        {[
          { label: "Total obtained", value: `${report.totalObtained} / ${report.totalObtainable}` },
          { label: "Overall average", value: `${report.average.toFixed(1)}%` },
          { label: "Overall grade", value: report.overallGrade },
          { label: "Class average", value: `${report.classAverage.toFixed(1)}%` },
          { label: "Class position", value: report.position },
          { label: "Out of", value: String(report.numberInClass) },
        ].map((item) => (
          <div key={item.label} className="rounded border border-navy/15 bg-mist/60 px-3 py-2 text-center print:py-1">
            <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-soft">{item.label}</dt>
            <dd className="font-display text-lg font-semibold text-navy print:text-[10pt]">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid items-start gap-6 md:grid-cols-2 print:mt-3 print:grid-cols-2 print:gap-4">
        <RatingTable title="Affective traits" items={s.affective.map((a) => ({ label: a.trait, rating: a.rating }))} />
        <RatingTable title="Psychomotor skills" items={s.psychomotor.map((p) => ({ label: p.skill, rating: p.rating }))} />
      </div>

      <div className="mt-5 grid gap-4 text-xs text-ink-soft md:grid-cols-2 print:mt-2 print:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-wide text-navy">Rating key</p>
          <p className="mt-1">{ratingKey.map((r) => `${r.rating}: ${r.label}`).join("  |  ")}</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-navy">Grade key</p>
          <p className="mt-1">{gradeKey.map((g) => `${g.min}-${g.max} ${g.grade}`).join("  |  ")}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 print:mt-3 print:grid-cols-2">
        <section aria-label="Form teacher's remark" className="rounded border border-navy/15 p-4 print:p-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-navy">Form teacher&apos;s remark</h3>
          <p className="mt-2 text-sm leading-relaxed">{s.formTeacher.remark}</p>
          <p className="mt-4 border-t border-dashed border-navy/30 pt-1 text-xs text-ink-soft print:mt-2">
            {s.formTeacher.role} (signature)
          </p>
        </section>
        <section aria-label="Principal's remark" className="rounded border border-navy/15 p-4 print:p-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-navy">Principal&apos;s remark</h3>
          <p className="mt-2 text-sm leading-relaxed">{principalRemark(report.average)}</p>
          <p className="mt-4 border-t border-dashed border-navy/30 pt-1 text-xs text-ink-soft print:mt-2">
            {s.principal.role} (signature)
          </p>
        </section>
      </div>

      <p className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t-2 border-navy pt-3 text-sm print:mt-2 print:pt-1">
        <span>
          <span className="font-semibold text-navy">Next term begins:</span> {s.nextTermBegins}
        </span>
        <span className="text-xs text-ink-soft">Demo of the NeduHub Result Portal. Not an official document.</span>
      </p>
    </article>
  );
}
