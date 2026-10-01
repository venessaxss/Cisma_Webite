// app/keynote-2026/page.tsx
import Link from "next/link";
import { keynotes } from "@/lib/keynotes";
import Image from "next/image";

export const metadata = {
  title: "Programme: Keynotes | CISMA",
};

/** Abstract ka pehla hissa, ~110 characters tak, "..." ke sath */
function preview(text: string, max = 110) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + "…" : clean;
}

const parallelSessions = [
  {
    title:
      "Discourse, Media & Genre Studies | Corpus, Genre & Media Analysis",
    image: "/sessions/session-1.webp",
  },
  {
    title:
      "AI, Cognition & Language Processing | Digital Discourse, Literature & Society",
    image: "/sessions/session-2.webp",
  },
  {
    title:
      "Translation, Interpreting & Language Pedagogy | Translation, Cognition & Computational Linguistics",
    image: "/sessions/session-3.webp",
  },
];

const specialEvents = [
  {
    title: "Opening Orchestra",
    image: "/events/opening-orchestra.png",
  },
  {
    title: "Culture Show",
    image: "/events/culture-show.png",
  },
  {
    title: "ILS & Khazar Joint Corpus Center",
    image: "/events/joint-corpus-center.png",
  },
];

export default function KeynoteListPage() {
  return (
    // pt-28: Navbar is solid/fixed on non-home pages, so leave room for it
    <main className="bg-white pt-28 pb-24">
      <h1 className="text-center text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
        Programme: Keynotes
      </h1>

      <div className="mx-auto mt-16 max-w-5xl px-6">
        {keynotes.map((k, idx) => (
          <article
            key={k.slug}
            className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-12 ${
              idx !== keynotes.length - 1 ? "border-b border-neutral-200" : ""
            }`}
          >
            {/* Photo */}
            <Link
              href={`/keynote-2026/${k.slug}`}
              className="flex justify-center"
              aria-label={`Keynote: ${k.speakerName}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={k.photo}
                alt={k.speakerName}
                className="h-[320px] w-auto max-w-full object-cover"
              />
            </Link>

            {/* Text */}
            <div>
              <h2 className="text-lg font-normal text-neutral-900">
                Keynote Speech: {k.speakerName}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {preview(k.title || k.abstract[0])}
              </p>
              <Link
                href={`/keynote-2026/${k.slug}`}
                className="mt-2 inline-block text-sm text-neutral-900 underline underline-offset-2 hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Read more…
              </Link>
            </div>
          </article>
        ))}
      </div>
            {/* Programme poster */}      
      <section id="schedule" className="mx-auto mt-20 max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Check Our New Program !!
        </h2>
        <p className="mt-3 text-base text-neutral-600">Session Schedules</p>

        <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/program/cisma-2026-program.png"
            alt="2nd CISMA Conference programme, April 30, 2026, Marbal Hall, Khazar University, Baku"
            width={1400}
            height={1100}
            className="h-auto w-full"
            priority={false}
          />
        </div>
      </section>
            {/* Handbook download banner */}
      <section
        id="download"
        className="relative mt-20 flex h-[330px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/program/handbook-bg.webp')" }}
      >
        {/* dark overlay taake text saaf nazar aaye */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Download the Handbook
          </h2>
          <a
            href="https://drive.google.com/file/d/1ipTozjS5BreUke5OKqJTtlWv7ND3Q7KF/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded border border-neutral-300 bg-[#ece8de] px-8 py-3 text-base font-semibold text-neutral-900 transition hover:bg-white"
          >
            Click Here
          </a>
        </div>
      </section>
            {/* Parallel Sessions */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Parallel Sessions
        </h2>
        <p className="mt-3 text-center text-base text-neutral-400">
          Upcoming.....
        </p>

        <div className="mt-12 space-y-5">
          {parallelSessions.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                className="h-[268px] w-[268px] shrink-0 object-cover"
              />
              <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                {s.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
            {/* Special Events 2026 */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Special Events 2026
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {specialEvents.map((e) => (
            <figure key={e.title} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.image}
                alt={e.title}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="mt-3 text-lg font-semibold text-neutral-900">
                {e.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}