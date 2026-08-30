import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, articleBySlug } from "@/lib/insights";
import { company, ids, origin } from "@/lib/company";
import {
  pageMeta,
  jsonLdScript,
  breadcrumbJsonLd,
  faqJsonLd,
  canonical,
  ogUrl,
} from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { Section, Breadcrumbs, FaqList, ArrowLink, Button } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return {};
  const base = pageMeta({
    title: article.metaTitle ?? article.title,
    description: article.description.slice(0, 158),
    path: `/insights/${article.slug}`,
    keywords: article.keywords,
    absoluteTitle: true,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [origin],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug);
  const crumbs = [
    { name: "Home", path: "" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${article.slug}` },
  ];

  const jsonLd = [
    {
      "@type": "BlogPosting",
      "@id": `${canonical(`/insights/${article.slug}`)}#article`,
      headline: article.title,
      description: article.description,
      url: canonical(`/insights/${article.slug}`),
      datePublished: article.date,
      dateModified: article.updated ?? article.date,
      /**
       * Author is the organisation rather than an individual. An answer engine
       * weighing whether to cite a source looks for a resolvable author entity;
       * attributing to the company, which has a full Organization node with
       * knowsAbout and identifiers, is stronger than a bare name string.
       */
      author: { "@id": ids.organization },
      publisher: { "@id": ids.organization },
      image: ogUrl(`/insights/${article.slug}`),
      isPartOf: { "@id": ids.website },
      inLanguage: "en",
      keywords: article.keywords.join(", "),
      articleSection: article.topic,
      wordCount: article.sections.reduce(
        (n, s) => n + s.body.join(" ").split(/\s+/).length,
        0,
      ),
      mainEntityOfPage: canonical(`/insights/${article.slug}`),
    },
    breadcrumbJsonLd(crumbs),
    ...(article.faqs ? [faqJsonLd(article.faqs)] : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />

      <article>
        <header className="survey-grid border-b border-line">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="tech-label text-amber-deep">{article.topic}</span>
              <time dateTime={article.date} className="tech-label text-ink-3">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="tech-label text-ink-3">{article.readingMinutes} min read</span>
            </div>
            <h1 className="mt-5 text-3xl sm:text-5xl font-semibold leading-[1.08]">
              {article.title}
            </h1>
            {/* The standfirst is the span an answer engine is most likely to quote:
                self-contained, states the conclusion, needs no surrounding context. */}
            <p className="mt-7 text-lg sm:text-xl text-ink-2 leading-relaxed">
              {article.standfirst}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-14">
          <div className="prose-doc">
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul className="my-6 space-y-2.5 border-l-2 border-amber pl-5">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="mt-14 border border-line bg-paper-2 p-7">
            <h2 className="tech-label text-ink-3">Key points</h2>
            <ul className="mt-5 space-y-3">
              {article.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-[0.95rem] leading-relaxed">
                  <span className="text-amber-deep shrink-0 mt-0.5" aria-hidden="true">→</span>
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          <p className="mt-10 pt-6 border-t border-line text-[0.85rem] text-ink-3 leading-relaxed">
            Written by the engineering team at {company.name}. We publish this
            material because the standard of infrastructure delivery in Nepal is a
            shared problem, and because a client who understands the mechanism asks
            better questions of every contractor, including us.
          </p>
        </div>

        {article.faqs && article.faqs.length > 0 && (
          <Section className="border-t border-line bg-paper-2">
            <div className="mx-auto max-w-3xl">
              <FaqList faqs={article.faqs} />
            </div>
          </Section>
        )}
      </article>

      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold">More insights</h2>
          <ArrowLink href="/insights">All insights</ArrowLink>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={withSlash(`/insights/${a.slug}`)}
              className="group border border-line p-6 hover:bg-paper-2 transition-colors"
            >
              <span className="tech-label text-amber-deep">{a.topic}</span>
              <h3 className="mt-3 font-semibold group-hover:underline">{a.title}</h3>
              <p className="mt-2 text-[0.875rem] text-ink-2 leading-relaxed">{a.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Working on a project this applies to?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              We are happy to look at a scope and say what we think, whether or not
              it turns into a tender.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
