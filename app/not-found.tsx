import Link from "next/link";
import Crest from "./components/Crest";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <Crest className="mx-auto h-20 w-[4.5rem]" />
      <h1 className="mt-6 font-display text-3xl font-semibold text-navy">Page not found</h1>
      <p className="mt-4 text-ink-soft">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-8 inline-block rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-soft">
        Back to home
      </Link>
    </section>
  );
}
