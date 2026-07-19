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
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: `https://himalayacannabis.com/learn/${article.slug}/`,
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
