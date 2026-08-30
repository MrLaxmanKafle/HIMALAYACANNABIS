import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { sectors } from "@/lib/sectors";
import { ids, siteStatus } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Projects",
  description:
    "Completed and ongoing infrastructure projects — roads, bridges, hydropower civil works, water supply schemes and public buildings across Nepal.",
  path: "/projects",
  keywords: ["construction projects nepal", "infrastructure projects nepal"],
});

const jsonLd = [
  {
    "@type": "CollectionPage",
    "@id": `${canonical("/projects")}#webpage`,
    url: canonical("/projects"),
    name: "Projects",
    isPartOf: { "@id": ids.website },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: canonical(`/projects/${p.slug}`),
      })),
    },
  },
  breadcrumbJsonLd([
    { name: "Home", path: "" },
    { name: "Projects", path: "/projects" },
  ]),
];

export default function ProjectsPage() {
  const completed = projects.filter((p) => p.status === "completed");
  const ongoing = projects.filter((p) => p.status === "ongoing");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", path: "" }, { name: "Projects", path: "/projects" }]} />
      <PageHero
        eyebrow="Project record"
        title="Projects"
        lead="Each entry states the engineering problem, what we did about it, and the quantities. Adjectives are not evidence; completion certificates and quantities are."
        meta={[
          { label: "Total listed", value: String(projects.length) },
          { label: "Completed", value: String(completed.length) },
          { label: "Ongoing", value: String(ongoing.length) },
          { label: "Sectors", value: String(sectors.length) },
        ]}
      />

      {siteStatus === "draft" && (
        <div className="border-b border-line bg-paper-2">
          <p className="mx-auto max-w-7xl px-5 py-4 text-[0.85rem] text-ink-2">
            <strong className="font-semibold text-ink">Note:</strong> the project
            records below are placeholders used to review the page templates. They
            are not real projects and will be replaced with the audited project
            register before launch.
          </p>
        </div>
      )}

      <Section>
        <div className="grid gap-6">
          {projects.map((p) => {
            const sector = sectors.find((s) => s.slug === p.sector);
            return (
              <Link
                key={p.slug}
                href={withSlash(`/projects/${p.slug}`)}
                className="group border border-line bg-paper p-7 sm:p-9 hover:bg-paper-2 transition-colors block"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                  <div className="lg:w-3/5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="tech-label text-amber-deep">
                        {p.status === "ongoing" ? "Ongoing" : "Completed"}
                      </span>
                      <span className="tech-label text-ink-3">{sector?.name}</span>
                      <span className="tech-label text-ink-3">
                        {p.endYear ? `${p.startYear}–${p.endYear}` : `${p.startYear}–`}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl sm:text-2xl font-semibold group-hover:underline">
                      {p.name}
                    </h2>
                    <p className="mt-3 text-ink-2 leading-relaxed">{p.summary}</p>
                  </div>
                  <div className="lg:w-2/5">
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-[0.85rem]">
                      <div className="border-t border-line pt-2.5">
                        <dt className="tech-label text-ink-3">Client</dt>
                        <dd className="mt-1.5 leading-snug">{p.client}</dd>
                      </div>
                      <div className="border-t border-line pt-2.5">
                        <dt className="tech-label text-ink-3">Funding</dt>
                        <dd className="mt-1.5 leading-snug">{p.funding}</dd>
                      </div>
                      <div className="border-t border-line pt-2.5">
                        <dt className="tech-label text-ink-3">Location</dt>
                        <dd className="mt-1.5 leading-snug">{p.province}</dd>
                      </div>
                      <div className="border-t border-line pt-2.5">
                        <dt className="tech-label text-ink-3">Value</dt>
                        <dd className="mt-1.5 font-mono">{p.value}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
