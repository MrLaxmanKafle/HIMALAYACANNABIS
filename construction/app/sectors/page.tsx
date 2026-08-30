import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/sectors";
import { projectsInSector } from "@/lib/projects";
import { ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, serviceJsonLd } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Sectors",
  description:
    "Roads and highways, bridges and structures, hydropower civil works, water supply and irrigation, and buildings and urban infrastructure across Nepal.",
  path: "/sectors",
  keywords: ["construction sectors nepal", "civil engineering services nepal"],
});

const jsonLd = [
  {
    "@type": "CollectionPage",
    "@id": `${canonical("/sectors")}#webpage`,
    url: canonical("/sectors"),
    name: "Sectors",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd([
    { name: "Home", path: "" },
    { name: "Sectors", path: "/sectors" },
  ]),
  ...sectors.map((s) =>
    serviceJsonLd({
      name: s.name,
      description: s.summary,
      path: `/sectors/${s.slug}`,
    }),
  ),
];

export default function SectorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", path: "" }, { name: "Sectors", path: "/sectors" }]} />
      <PageHero
        eyebrow="What we build"
        title="Sectors"
        lead="Five sectors organised around the asset a client is procuring, not around our internal structure. Each page states the scope we tender for, the technical capability behind it, and who awards the work in Nepal."
      />
      <Section>
        <div className="grid gap-6">
          {sectors.map((s) => {
            const count = projectsInSector(s.slug).length;
            return (
              <Link
                key={s.slug}
                href={withSlash(`/sectors/${s.slug}`)}
                className="group border border-line bg-paper p-7 sm:p-9 hover:bg-paper-2 transition-colors block"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  <div className="lg:w-2/5">
                    <h2 className="text-xl sm:text-2xl font-semibold group-hover:underline">
                      {s.name}
                    </h2>
                    <p className="mt-3 text-ink-2 leading-relaxed">{s.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      <span className="tech-label text-ink-3">
                        {s.scope.length} scope areas
                      </span>
                      {count > 0 && (
                        <span className="tech-label text-ink-3">
                          {count} project{count === 1 ? "" : "s"}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <p className="tech-label text-ink-3 mb-3">Typical scope</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                      {s.scope.slice(0, 8).map((item) => (
                        <li key={item} className="text-[0.875rem] text-ink-2 flex gap-2">
                          <span className="text-amber-deep shrink-0" aria-hidden="true">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
