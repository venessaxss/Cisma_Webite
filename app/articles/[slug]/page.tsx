// Save this file as: app/articles/[slug]/page.tsx
// (the folder must be literally named [slug], with square brackets)
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

// Turns **text** into <strong>text</strong>
function renderRich(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === slug);
  const prev = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;

  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <header className="relative flex h-[280px] md:h-[340px] items-end bg-gray-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 mx-auto w-full max-w-[600px] px-4 pb-12 text-3xl md:text-4xl font-semibold text-white">
          {article.title}
        </h1>
      </header>

      {/* Body */}
      <article className="mx-auto max-w-[600px] px-4 py-10 text-[15px] leading-8 text-gray-800">
        {article.paragraphs.map((p, i) => (
          <p key={i} className="mb-4">
            {renderRich(p)}
          </p>
        ))}
        {article.bullets && (
          <ul className="mb-6 list-disc space-y-1 pl-6">
            {article.bullets.map((b, i) => (
              <li key={i}>{renderRich(b)}</li>
            ))}
          </ul>
        )}
      </article>

      {/* Previous / Next */}
      <nav className="mx-auto max-w-[600px] px-4 pb-6">
        <div className="flex justify-between border-t border-gray-200 pt-4 text-sm">
          <div>
            {prev && (
              <Link href={`/articles/${prev.slug}`} className="block">
                <span className="text-xs text-gray-500">&lsaquo; Previous</span>
                <span className="block text-gray-900 hover:underline">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link href={`/articles/${next.slug}`} className="block">
                <span className="text-xs text-gray-500">Next &rsaquo;</span>
                <span className="block text-gray-900 hover:underline">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4 pb-10 text-xs">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            &lsaquo; Return to site
          </Link>
        </div>
      </nav>
    </main>
  );
}