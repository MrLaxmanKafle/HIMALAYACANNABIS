import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landingPages, landingBySlug, landingCategoryLabel } from "@/lib/landing";
import { sectorBySlug } from "@/lib/sectors";
import { company, ids } from "@/lib/company";
import {
  pageMeta,
  jsonLdScript,
  breadcrumbJsonLd,
  faqJsonLd,
  canonical,
} from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { Section, Breadcrumbs, FaqList, ArrowLink, Button } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = landingBySlug(slug);
  if (!page) return {};
  return pageMeta({
    title: page.metaTitle,
    description: page.description.slice(0, 158),
    path: `/${page.slug}`,
    keywords: page.keywords,
    absoluteTitle: true,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = landingBySlug(slug);
  if (!page) notFound();

  const related = page.related
    .map((r) => landingBySlug(r))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const sector = page.sector ? sectorBySlug(page.sector) : undefined;
  const crumbs = [
    { name: "Home", path: "" },
    { name: "Guides", path: "/guides" },
    { name: page.h1, path: `/${page.slug}` },
  ];

  const jsonLd = [
    {
      "@type": ["WebPage", "Article"],
      "@id": `${canonical(`/${page.slug}`)}#webpage`,
      url: canonical(`/${page.slug}`),
      name: page.metaTitle,
      headline: page.h1,
      description: page.description,
      /**
       * `abstract` carries the self-contained answer paragraph. Answer engines
       * that parse structured data get the quotable span without having to
       * decide which paragraph of the body is the answer.
       */
      abstract: page.answer,
      isPartOf: { "@id": ids.website },
      author: { "@id": ids.organization },
      publisher: { "@id": ids.organization },
      inLanguage: "en",
      about: sector
        ? { "@type": "Thing", name: sector.name }
        : { "@type": "Thing", name: "Infrastructure construction in Nepal" },
    },
    breadcrumbJsonLd(crumbs),
    faqJsonLd(page.faqs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />

      <header className="survey-grid border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
          <p className="tech-label text-amber-deep">
            Guide · {landingCategoryLabel[page.category]}
          </p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-[1.08]">
            {page.h1}
          </h1>
          {/* The direct answer, above everything else. A reader who wants only
              this gets it in one paragraph; so does a retrieval system. */}
          <p className="mt-7 text-lg sm:text-xl text-ink-2 leading-relaxed">
            {page.answer}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-14">
        <div className="prose-doc">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        {page.points && (
          <div className="mt-12 border border-line bg-paper-2 p-7">
            <h2 className="text-lg font-semibold">{page.points.heading}</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {page.points.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[0.9rem] text-ink-2 leading-snug">
                  <span className="text-amber-deep shrink-0" aria-hidden="true">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {sector && (
          <div className="mt-10 border-t border-line pt-7">
            <p className="tech-label text-ink-3">How we work in this area</p>
            <p className="mt-3 text-ink-2 leading-relaxed">{sector.summary}</p>
            <div className="mt-4">
              <ArrowLink href={`/sectors/${sector.slug}`}>
                {sector.name} at {company.shortName}
              </ArrowLink>
            </div>
          </div>
        )}
      </div>

      <Section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-3xl">
          <FaqList faqs={page.faqs} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-line">
          <h2 className="text-2xl font-semibold">Related guides</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={withSlash(`/${r.slug}`)}
                className="group border border-line p-6 hover:bg-paper-2 transition-colors"
              >
                <span className="tech-label text-amber-deep">
                  {landingCategoryLabel[r.category]}
                </span>
                <h3 className="mt-3 font-semibold group-hover:underline">{r.h1}</h3>
                <p className="mt-2 text-[0.875rem] text-ink-2 leading-relaxed">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Need this done, not just explained?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              {company.shortName} tenders for and delivers this work across Nepal.
              Send us a scope and we will tell you what it takes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href="/contact">Start an enquiry</Button>
            <Button href="/projects" variant="outline">
              See projects
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
