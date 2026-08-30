import type { Metadata } from "next";
import Link from "next/link";
import { landingPages, landingCategoryLabel, type LandingCategory } from "@/lib/landing";
import { ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Guides",
  description:
    "Reference guides on infrastructure in Nepal — road and bridge construction, hydropower civil works, tunnelling, public procurement and prequalification.",
  path: "/guides",
  keywords: ["nepal construction guide", "infrastructure procurement nepal"],
});

const jsonLd = [
  {
    "@type": "CollectionPage",
    "@id": `${canonical("/guides")}#webpage`,
    url: canonical("/guides"),
    name: "Guides",
    isPartOf: { "@id": ids.website },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: landingPages.length,
      itemListElement: landingPages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.h1,
        url: canonical(`/${p.slug}`),
      })),
    },
  },
  breadcrumbJsonLd([
    { name: "Home", path: "" },
    { name: "Guides", path: "/guides" },
  ]),
];

const order: LandingCategory[] = ["sector", "capability", "procurement", "location"];

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={[{ name: "Home", path: "" }, { name: "Guides", path: "/guides" }]} />
      <PageHero
        eyebrow="Reference"
        title="Guides"
        lead="Plain answers to the questions people actually ask about building infrastructure in Nepal — how the work is procured, how the terrain and the season constrain it, and what the terminology means."
      />
      <Section>
        <div className="space-y-14">
          {order.map((cat) => {
            const items = landingPages.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="tech-label text-ink-3 border-b border-line pb-3">
                  {landingCategoryLabel[cat]}
                </h2>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={withSlash(`/${p.slug}`)}
                      className="group border border-line p-6 hover:bg-paper-2 transition-colors"
                    >
                      <h3 className="text-lg font-semibold group-hover:underline">{p.h1}</h3>
                      <p className="mt-2.5 text-[0.9rem] text-ink-2 leading-relaxed">
                        {p.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
