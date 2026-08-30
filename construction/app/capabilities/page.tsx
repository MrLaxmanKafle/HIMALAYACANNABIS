import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/sectors";
import { systems, fleetTotal, workforceTotal } from "@/lib/capability";
import { company, ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, serviceJsonLd } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { PageHero, Section, SectionHeading, Card, Breadcrumbs, ArrowLink, Button, Stat } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Capabilities",
  description:
    "Engineering capability across roads, bridges, tunnels, water and buildings — owned plant, in-house technical staff, and certified quality, safety and environmental systems.",
  path: "/capabilities",
  keywords: ["construction capability nepal", "civil contractor capability statement"],
});

const crumbs = [
  { name: "Home", path: "" },
  { name: "Capabilities", path: "/capabilities" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/capabilities")}#webpage`,
    url: canonical("/capabilities"),
    name: "Capabilities",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
  ...sectors.map((s) =>
    serviceJsonLd({ name: s.name, description: s.summary, path: `/sectors/${s.slug}` }),
  ),
];

export default function CapabilitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Capabilities"
        title="What we can actually put on site"
        lead="Capability is plant, people and systems — the three things a client can verify. This page states all three, and the fleet and establishment pages give the detail a prequalification form asks for."
        meta={[
          { label: "Major plant items", value: String(fleetTotal) },
          { label: "Permanent staff", value: String(workforceTotal) },
          { label: "Sectors", value: String(sectors.length) },
          { label: "Management systems", value: String(systems.length) },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Sectors"
          title="Where we work"
          lead="Five sectors. Each page states the scope we tender for and the specific technical capability behind it."
        />
        <div className="mt-9 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={withSlash(`/sectors/${s.slug}`)}
              className="group bg-paper p-7 hover:bg-paper-2 transition-colors flex flex-col"
            >
              <h3 className="text-lg font-semibold group-hover:underline">{s.name}</h3>
              <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed flex-1">{s.summary}</p>
              <ul className="mt-5 space-y-1.5">
                {s.capabilities.slice(0, 3).map((c) => (
                  <li key={c.name} className="text-[0.8rem] text-ink-3 flex gap-2">
                    <span className="text-amber-deep" aria-hidden="true">·</span>
                    {c.name}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            dark
            eyebrow="Plant"
            title="Owned, not hired"
            lead="Equipment availability is one of the most common causes of delay on Nepali contracts. The hire market tightens for everyone at the start of each dry season, so critical-path plant is held on our own books."
          />
          <ArrowLink href="/equipment" dark>Full fleet schedule</ArrowLink>
        </div>
        <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Stat dark value={String(fleetTotal)} label="Major plant items" detail="Owned and registered" />
          <Stat dark value="3" label="Asphalt batch mix plants" detail="60–120 TPH" />
          <Stat dark value="5" label="Concrete batching plants" detail="30–60 m³/hr" />
          <Stat dark value="4" label="Drill jumbos" detail="Two-boom hydraulic" />
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Systems"
          title="How the work is controlled"
          lead="Certification is a floor. What matters is whether the system produces records a client can rely on when something goes wrong."
        />
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {systems.map((s) => (
            <Card key={s.name}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="font-mono text-[0.75rem] text-amber-deep">{s.standard}</span>
              </div>
              <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed">{s.detail}</p>
              <ul className="mt-4 space-y-2 border-t border-line-2 pt-4">
                {s.points.map((p) => (
                  <li key={p} className="text-[0.85rem] text-ink-2 flex gap-2.5 leading-snug">
                    <span className="text-amber-deep shrink-0" aria-hidden="true">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <ArrowLink href="/quality-safety">Quality, safety and environment in detail</ArrowLink>
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Preparing a prequalification assessment?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              {company.shortName} can provide the full capability statement, audited
              accounts, plant registration evidence and key personnel CVs in the
              format your tender requires.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href="/prequalification">Credentials</Button>
            <Button href="/contact" variant="outline">Request documents</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
