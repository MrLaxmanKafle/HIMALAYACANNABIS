import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, sectorBySlug } from "@/lib/sectors";
import { projectsInSector } from "@/lib/projects";
import { landingPages } from "@/lib/landing";
import { ids } from "@/lib/company";
import {
  pageMeta,
  jsonLdScript,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  canonical,
} from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, SectionHeading, Card, FaqList, Breadcrumbs, ArrowLink, Button } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  if (!sector) return {};
  return pageMeta({
    title: sector.name,
    description: sector.summary.slice(0, 158),
    path: `/sectors/${sector.slug}`,
    keywords: sector.keywords,
  });
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  if (!sector) notFound();

  const related = projectsInSector(sector.slug);
  const guides = landingPages.filter((p) => p.sector === sector.slug);
  const crumbs = [
    { name: "Home", path: "" },
    { name: "Sectors", path: "/sectors" },
    { name: sector.name, path: `/sectors/${sector.slug}` },
  ];

  const jsonLd = [
    {
      "@type": "WebPage",
      "@id": `${canonical(`/sectors/${sector.slug}`)}#webpage`,
      url: canonical(`/sectors/${sector.slug}`),
      name: sector.name,
      description: sector.summary,
      isPartOf: { "@id": ids.website },
    },
    serviceJsonLd({
      name: sector.name,
      description: sector.summary,
      path: `/sectors/${sector.slug}`,
    }),
    breadcrumbJsonLd(crumbs),
    faqJsonLd(sector.faqs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow="Sector" title={sector.name} lead={sector.summary} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-doc max-w-none">
            {sector.body.map((p, i) => (
              <p key={i} className="text-[1.05rem]">
                {p}
              </p>
            ))}
          </div>
          <aside>
            <div className="border border-line p-6 bg-paper-2">
              <h2 className="tech-label text-ink-3">Typical clients</h2>
              <ul className="mt-4 space-y-2.5">
                {sector.clients.map((c) => (
                  <li key={c} className="text-[0.9rem] text-ink-2 leading-snug">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <SectionHeading eyebrow="Scope" title="What we tender for" />
        <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {sector.scope.map((item) => (
            <li key={item} className="flex gap-3 border-t border-line pt-3 text-[0.925rem]">
              <span className="text-amber-deep shrink-0 font-mono text-[0.8rem] pt-0.5" aria-hidden="true">
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Capability"
          title="What sits behind the scope"
          lead="The things a prequalification reviewer is actually checking for."
        />
        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          {sector.capabilities.map((c) => (
            <Card key={c.name}>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-2.5 text-[0.9rem] text-ink-2 leading-relaxed">{c.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-line">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Project record" title={`${sector.name} projects`} />
            <ArrowLink href="/projects">All projects</ArrowLink>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={withSlash(`/projects/${p.slug}`)}
                className="group border border-line p-7 hover:bg-paper-2 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="tech-label text-amber-deep">
                    {p.status === "ongoing" ? "Ongoing" : "Completed"}
                  </span>
                  <span className="tech-label text-ink-3">{p.province}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:underline">{p.name}</h3>
                <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed">{p.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-line bg-paper-2">
        <FaqList faqs={sector.faqs} />
      </Section>

      {guides.length > 0 && (
        <Section className="border-t border-line">
          <SectionHeading eyebrow="Further reading" title="Guides on this sector" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={withSlash(`/${g.slug}`)}
                  className="group block border border-line p-6 hover:bg-paper-2 transition-colors"
                >
                  <h3 className="font-semibold group-hover:underline">{g.h1}</h3>
                  <p className="mt-2 text-[0.875rem] text-ink-2 leading-relaxed">
                    {g.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section className="border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Have a {sector.short.toLowerCase()} project?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Send the scope and the programme constraints. We will tell you what it
              realistically takes in this terrain and this season.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href="/contact">Start an enquiry</Button>
            <Button href="/prequalification" variant="outline">
              Credentials
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
