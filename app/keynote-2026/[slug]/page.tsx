// app/keynote-2026/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { keynotes, getKeynote, getAdjacentKeynotes } from "@/lib/keynotes";

export function generateStaticParams() {
  return keynotes.map((k) => ({ slug: k.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const k = getKeynote(params.slug);
  return { title: k ? `Keynote Speech: ${k.speakerName} | CISMA` : "CISMA" };
}

export default function KeynoteDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const k = getKeynote(params.slug);
  if (!k) notFound();

  const { prev, next } = getAdjacentKeynotes(k.slug);

  return (
    <main className="bg-white">
      {/* Hero — teal-green to deep blue gradient, same as original */}
      <section className="bg-gradient-to-br from-[#cfe3d1] via-[#6ea3ae] to-[#2a4f87] pb-14 pt-40 md:pt-48">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold leading-tight text-white drop-shadow md:text-4xl">
            Keynote Speech: {k.speakerName}
          </h1>
          {k.title ? (
            <p className="mt-3 text-lg leading-snug text-white/95 md:text-xl">
              {k.title}
            </p>
          ) : null}
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        {k.title ? (
          <h2 className="text-center text-2xl font-bold leading-snug text-neutral-800 md:text-[1.7rem]">
            {k.title}
          </h2>
        ) : null}

        <div className="mt-6 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={k.photo}
            alt={k.speakerName}
            className="h-auto w-full max-w-[370px] object-cover"
          />
        </div>

        <div className="mt-14 space-y-4 text-justify text-[15px] leading-8 text-neutral-700">
          {k.abstract.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {k.keywords ? <p>Keywords: {k.keywords}</p> : null}
          {k.bio ? <p>{k.bio}</p> : null}
        </div>

        {/* Prev / Next */}
        <nav
          aria-label="Keynote navigation"
          className="mt-20 flex items-start justify-between gap-6 border-t border-neutral-200 pt-6"
        >
          {prev ? (
            <Link
              href={`/keynote-2026/${prev.slug}`}
              className="group block text-left"
            >
              <span className="block text-xs text-neutral-500">‹ Previous</span>
              <span className="mt-1 block text-neutral-900 group-hover:underline">
                Keynote Speech: {prev.speakerName}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/keynote-2026/${next.slug}`}
              className="group block text-right"
            >
              <span className="block text-xs text-neutral-500">Next ›</span>
              <span className="mt-1 block text-neutral-900 group-hover:underline">
                Keynote Speech: {next.speakerName}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="mt-6 border-t border-neutral-200 pt-4 text-sm">
          <Link
            href="/keynote-2026"
            className="text-neutral-600 hover:text-neutral-900"
          >
            ‹ Back to all keynotes
          </Link>
        </div>
      </article>
    </main>
  );
}