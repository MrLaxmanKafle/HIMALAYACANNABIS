import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";
import { news, newsUpdated, prettyDate } from "@/lib/news";

const TITLE = "Nepal Cannabis News — Dated, Sourced Updates";
const DESC =
  "Every development in Nepal's cannabis and hemp regulation, dated and sourced: the Supreme Court order, the Gandaki act, and what has and has not happened since.";
const URL = "https://himalayacannabis.com/nepal-cannabis-news/";
const IMG = `${URL}opengraph-image.png`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Himalaya Cannabis` },
  description: DESC,
  keywords: [
    "Nepal cannabis news",
    "Nepal hemp news",
    "Nepal cannabis legalisation update",
    "Supreme Court cannabis Nepal",
    "Gandaki cannabis act news",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "website",
    images: [{ url: IMG, width: 2400, height: 1260, alt: "Nepal Cannabis News" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [IMG] },
  alternates: {
    canonical: "/nepal-cannabis-news",
    types: { "application/rss+xml": "/nepal-cannabis-news/feed.xml" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Nepal Cannabis News", path: "/nepal-cannabis-news" },
    ]),
    {
      "@type": "Blog",
      "@id": `${URL}#blog`,
      name: "Nepal Cannabis News",
      description: DESC,
      url: URL,
      dateModified: newsUpdated,
      publisher: { "@id": "https://himalayacannabis.com/#organization" },
      blogPost: news.map((n) => ({
        "@type": "BlogPosting",
        "@id": `${URL}#${n.slug}`,
        headline: n.title,
        description: n.summary,
        datePublished: n.date,
        dateModified: n.date,
        url: `${URL}#${n.slug}`,
        articleBody: n.body.join(" "),
        author: { "@id": "https://himalayacannabis.com/#organization" },
        publisher: { "@id": "https://himalayacannabis.com/#organization" },
        citation: n.sources.map((s) => s.url),
      })),
    },
  ],
};

const tagClass: Record<string, string> = {
  Federal: "border-marigold/50 text-marigold",
  Gandaki: "border-leaf/60 text-leaf",
  Region: "border-line text-ink-2",
};

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Nepal Cannabis News"
        lede="What has happened in Nepali cannabis and hemp regulation, in date order, with the reporting each entry rests on. Entries that record nothing happening are deliberate."
      />

      <section className="border-b border-line-2">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-sm text-ink-2">
          <p>
            Last entry{" "}
            <time dateTime={newsUpdated} className="font-semibold text-ink">
              {prettyDate(newsUpdated)}
            </time>
            . Written from published reporting; we say so where we have not seen
            the underlying document.
          </p>
          <p className="flex gap-5">
            <a href="/nepal-cannabis-news/feed.xml" className="font-semibold text-marigold hover:text-ink">
              RSS feed
            </a>
            <Link href="/nepal-cannabis-tracker/" className="font-semibold text-marigold hover:text-ink">
              Current status →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <ol>
          {news.map((n) => (
            <li
              key={n.slug}
              id={n.slug}
              className="scroll-mt-24 border-t border-line py-10 first:border-t-0 first:pt-0"
            >
              <article>
                <p className="flex flex-wrap items-center gap-3 text-sm text-ink-3">
                  <time dateTime={n.date} className="tabular-nums">
                    {prettyDate(n.date)}
                  </time>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${tagClass[n.tag]}`}
                  >
                    {n.tag}
                  </span>
                </p>
                <h2 className="mt-3 text-[clamp(1.35rem,2.4vw,1.75rem)] font-bold leading-snug tracking-[-0.01em]">
                  <a href={`#${n.slug}`} className="hover:text-marigold">
                    {n.title}
                  </a>
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink">{n.summary}</p>
                {n.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-ink-2">
                    {p}
                  </p>
                ))}
                <p className="mt-5 text-sm leading-relaxed text-ink-3">
                  Reporting:{" "}
                  {n.sources.map((s, i) => (
                    <span key={s.url}>
                      {i > 0 && " · "}
                      <a
                        href={s.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-ink-2 underline hover:text-ink"
                      >
                        {s.name}
                      </a>
                    </span>
                  ))}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line-2">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <div>
            <h2 className="text-2xl font-bold">Writing about this?</h2>
            <p className="mt-2 max-w-xl text-ink-2">
              Journalists and researchers are welcome to cite these entries. We
              can also explain what the Supreme Court order does and does not
              change.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/supreme-court-cannabis-order/"
              className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              The order, explained
            </Link>
            <Link
              href="/press/"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Press contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
