import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { company } from "@/lib/company";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.description,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        abstract: article.keyPoints.join(" "),
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Organization", name: company.name },
        publisher: { "@type": "Organization", name: company.name },
        mainEntityOfPage: `https://himalayacannabis.com/learn/${article.slug}/`,
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line-2">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-16">
          <Link href="/learn" className="text-sm font-semibold text-marigold hover:text-ink">
            ← Learn
          </Link>
          <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.015em]">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">{article.lede}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <section aria-label="Key points" className="mb-12 border-y border-line py-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">
            Key points
          </h2>
          <ul className="mt-4 space-y-2.5">
            {article.keyPoints.map((k) => (
              <li key={k} className="flex gap-3 leading-relaxed text-ink-2">
                <span aria-hidden className="text-marigold">—</span>
                {k}
              </li>
            ))}
          </ul>
        </section>

        {article.sections.map((s) => (
          <section key={s.h} className="mb-12 last:mb-0">
            <h2 className="text-2xl font-bold">{s.h}</h2>
            {s.ps.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-2">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="text-2xl font-bold">Common questions</h2>
          <dl className="mt-6 space-y-6">
            {article.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className="mt-16 border-t border-line pt-8">
          <p className="text-sm leading-relaxed text-ink-3">
            Published by {company.name} — Nepal&apos;s compliance-first medical
            and industrial hemp company. We operate only under licence, test
            every product at a certified laboratory, and never engage in
            recreational transactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/products" className="text-marigold hover:text-ink">
              Our products
            </Link>
            <Link href="/compliance" className="text-marigold hover:text-ink">
              How we comply
            </Link>
            <Link href="/contact" className="text-marigold hover:text-ink">
              Contact us
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
