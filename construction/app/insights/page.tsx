import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/insights";
import { ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "Technical writing on building infrastructure in Nepal — monsoon scheduling, hill road drainage, tunnelling, and how to evaluate a contractor.",
  path: "/insights",
  keywords: ["nepal construction insights", "infrastructure engineering nepal"],
});

const jsonLd = [
  {
    "@type": "Blog",
    "@id": `${canonical("/insights")}#blog`,
    url: canonical("/insights"),
    name: "Insights",
    description: "Technical writing on building infrastructure in Nepal.",
    isPartOf: { "@id": ids.website },
    publisher: { "@id": ids.organization },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: canonical(`/insights/${a.slug}`),
      datePublished: a.date,
      author: { "@id": ids.organization },
    })),
  },
  breadcrumbJsonLd([
    { name: "Home", path: "" },
    { name: "Insights", path: "/insights" },
  ]),
];

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", path: "" }, { name: "Insights", path: "/insights" }]} />
      <PageHero
        eyebrow="Insights"
        title="Technical writing on building in Nepal"
        lead="Written to be useful to anyone procuring or delivering infrastructure here — clients, engineers, and competitors alike. If a piece only makes sense as an argument for hiring us, it does not belong on this page."
      />
      <Section>
        <div className="grid gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={withSlash(`/insights/${a.slug}`)}
              className="group border border-line bg-paper p-7 sm:p-9 hover:bg-paper-2 transition-colors block"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="tech-label text-amber-deep">{a.topic}</span>
                <span className="tech-label text-ink-3">
                  {new Date(a.date).toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
                </span>
                <span className="tech-label text-ink-3">{a.readingMinutes} min read</span>
              </div>
              <h2 className="mt-4 text-xl sm:text-2xl font-semibold max-w-3xl group-hover:underline">
                {a.title}
              </h2>
              <p className="mt-3 text-ink-2 leading-relaxed max-w-3xl">{a.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
