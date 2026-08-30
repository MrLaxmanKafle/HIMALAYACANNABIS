import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectBySlug } from "@/lib/projects";
import { sectorBySlug } from "@/lib/sectors";
import { ids, siteStatus } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, SectionHeading, Breadcrumbs, Button, ArrowLink } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return pageMeta({
    title: project.name,
    description: project.summary.slice(0, 158),
    path: `/projects/${project.slug}`,
    keywords: [project.name, project.client, project.province, "nepal construction project"],
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const sector = sectorBySlug(project.sector);
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const crumbs = [
    { name: "Home", path: "" },
    { name: "Projects", path: "/projects" },
    { name: project.name, path: `/projects/${project.slug}` },
  ];

  const jsonLd = [
    {
      "@type": ["WebPage", "CreativeWork"],
      "@id": `${canonical(`/projects/${project.slug}`)}#webpage`,
      url: canonical(`/projects/${project.slug}`),
      name: project.name,
      description: project.summary,
      isPartOf: { "@id": ids.website },
      creator: { "@id": ids.organization },
      about: {
        "@type": "Place",
        name: project.location,
        address: {
          "@type": "PostalAddress",
          addressRegion: project.province,
          addressCountry: "NP",
        },
      },
      temporalCoverage: project.endYear
        ? `${project.startYear}/${project.endYear}`
        : `${project.startYear}/..`,
    },
    breadcrumbJsonLd(crumbs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow={`${sector?.name ?? "Project"} · ${project.status === "ongoing" ? "Ongoing" : "Completed"}`}
        title={project.name}
        lead={project.summary}
        meta={[
          { label: "Client", value: project.client },
          { label: "Location", value: project.province },
          { label: "Period", value: project.endYear ? `${project.startYear}–${project.endYear}` : `${project.startYear}–present` },
          { label: "Contract value", value: project.value },
        ]}
      />

      {siteStatus === "draft" && (
        <div className="border-b border-line bg-paper-2">
          <p className="mx-auto max-w-7xl px-5 py-4 text-[0.85rem] text-ink-2">
            <strong className="font-semibold text-ink">Note:</strong> this is a
            placeholder project record used to review the page template. The project,
            client, values and quantities below are not real.
          </p>
        </div>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose-doc max-w-none">
              <h2 className="!mt-0 !border-0 !pt-0">The problem</h2>
              <p className="text-[1.05rem]">{project.challenge}</p>
              <h2>What we did</h2>
              <p className="text-[1.05rem]">{project.approach}</p>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <h2 className="text-xl font-semibold">Outcomes</h2>
              <ul className="mt-5 space-y-3">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-[0.95rem] text-ink-2 leading-relaxed">
                    <span className="text-amber-deep shrink-0 mt-0.5" aria-hidden="true">→</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="tech-label text-ink-3">Headline quantities</h2>
              <dl className="mt-4 space-y-3">
                {project.quantities.map((q) => (
                  <div key={q.label} className="flex justify-between gap-4 border-b border-line-2 pb-2.5 last:border-0">
                    <dt className="text-[0.85rem] text-ink-2">{q.label}</dt>
                    <dd className="font-mono text-[0.85rem] font-medium text-right">{q.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border border-line p-6">
              <h2 className="tech-label text-ink-3">Contract</h2>
              <dl className="mt-4 space-y-3 text-[0.875rem]">
                <div>
                  <dt className="text-ink-3">Client</dt>
                  <dd className="mt-0.5">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">Funding</dt>
                  <dd className="mt-0.5">{project.funding}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">Location</dt>
                  <dd className="mt-0.5">{project.location}, {project.province}</dd>
                </div>
              </dl>
              {sector && (
                <div className="mt-5 pt-4 border-t border-line-2">
                  <ArrowLink href={`/sectors/${sector.slug}`}>{sector.name}</ArrowLink>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Project record" title="Other projects" />
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={withSlash(`/projects/${p.slug}`)}
              className="group border border-line bg-paper p-6 hover:bg-paper-3 transition-colors"
            >
              <span className="tech-label text-amber-deep">
                {p.status === "ongoing" ? "Ongoing" : "Completed"}
              </span>
              <h3 className="mt-3 font-semibold group-hover:underline">{p.name}</h3>
              <p className="mt-2 text-[0.875rem] text-ink-2 leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Want the full project reference?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Completion certificates, client references and detailed quantities are
              provided on request as part of a prequalification submission.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Request references</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
