import type { Metadata } from "next";
import { fleet, fleetTotal, workforce, workforceTotal } from "@/lib/capability";
import { ids, siteStatus } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, SectionHeading, Breadcrumbs, FaqList, Button } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Plant & Equipment Fleet",
  description:
    "Owned construction plant — excavators, dozers, graders, asphalt and concrete batching plants, drill jumbos and lifting equipment — plus technical establishment.",
  path: "/equipment",
  keywords: ["construction equipment nepal", "contractor plant fleet nepal", "asphalt plant nepal"],
});

const faqs = [
  {
    q: "Does the company own its construction equipment?",
    a: `Yes. Approximately ${fleetTotal} items of major plant are owned and registered to the company rather than hired, covering earthmoving, hauling and compaction, paving and production, tunnelling and drilling, and lifting. Ownership evidence is provided with prequalification submissions.`,
  },
  {
    q: "Why does owning plant matter on a construction contract?",
    a: "Because equipment availability is one of the most common causes of delay on Nepali contracts. The hire market tightens for everyone at the start of each dry season, when every contractor in the country is trying to mobilise at once. A contractor whose critical-path activities depend on hired plant has no control over its own programme at exactly the moment control matters most.",
  },
  {
    q: "Can the company mobilise to remote sites without road access?",
    a: "Yes. Remote-site mobilisation is treated as part of the works: access road construction, tunnel portal preparation, construction camps, aggregate production from local quarries, and diesel generator sets for construction power at off-grid locations. These precede the permanent works and are programmed accordingly rather than assumed to be instantaneous.",
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "Capabilities", path: "/capabilities" },
  { name: "Plant & Equipment", path: "/equipment" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/equipment")}#webpage`,
    url: canonical("/equipment"),
    name: "Plant & Equipment Fleet",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(faqs),
];

export default function EquipmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Capability"
        title="Plant & Equipment Fleet"
        lead="Owned plant is the one capability claim a client can physically verify, so it is published here in the same shape a prequalification form asks for it."
        meta={[
          { label: "Major plant items", value: String(fleetTotal) },
          { label: "Groups", value: String(fleet.length) },
          { label: "Permanent staff", value: String(workforceTotal) },
          { label: "Ownership", value: "Owned & registered" },
        ]}
      />

      {siteStatus === "draft" && (
        <div className="border-b border-line bg-paper-2">
          <p className="mx-auto max-w-7xl px-5 py-4 text-[0.85rem] text-ink-2">
            <strong className="font-semibold text-ink">Note:</strong> the fleet and
            establishment figures below are placeholders. They appear in
            prequalification submissions and must be replaced with audited counts
            before launch.
          </p>
        </div>
      )}

      <Section>
        <div className="space-y-12">
          {fleet.map((group) => (
            <div key={group.group}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-line pb-3">
                <h2 className="text-xl font-semibold">{group.group}</h2>
                <span className="font-mono text-[0.85rem] text-ink-3">
                  {group.items.reduce((s, i) => s + i.count, 0)} items
                </span>
              </div>
              <p className="mt-3 text-[0.9rem] text-ink-2 max-w-3xl leading-relaxed">
                {group.note}
              </p>
              <table className="mt-6 w-full text-left">
                <thead>
                  <tr className="border-b border-line-2">
                    <th scope="col" className="tech-label text-ink-3 pb-2 font-normal">Item</th>
                    <th scope="col" className="tech-label text-ink-3 pb-2 font-normal w-20 text-right">Qty</th>
                    <th scope="col" className="tech-label text-ink-3 pb-2 pl-6 font-normal hidden sm:table-cell">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name} className="border-b border-line-2 last:border-0">
                      <td className="py-3 text-[0.9rem] font-medium align-top">
                        {item.name}
                        <span className="block sm:hidden text-[0.8rem] text-ink-3 font-normal mt-0.5">
                          {item.detail}
                        </span>
                      </td>
                      <td className="py-3 font-mono text-[0.9rem] text-right align-top">{item.count}</td>
                      <td className="py-3 pl-6 text-[0.85rem] text-ink-2 align-top hidden sm:table-cell">
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          dark
          eyebrow="Establishment"
          title="Technical staff"
          lead="Permanent staff on the establishment. Site workforce at peak on a large contract is substantially higher, with locally recruited crew."
        />
        <div className="mt-9 border-t border-line-inv">
          {workforce.map((w) => (
            <div
              key={w.role}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-line-inv-2"
            >
              <span className="font-mono text-lg font-semibold w-16 shrink-0">{w.count}</span>
              <div>
                <div className="font-medium">{w.role}</div>
                <div className="text-[0.85rem] text-on-graphite-2 mt-0.5">{w.detail}</div>
              </div>
            </div>
          ))}
          <div className="flex items-baseline gap-6 py-4">
            <span className="font-mono text-lg font-semibold w-16 shrink-0 text-amber">
              {workforceTotal}
            </span>
            <span className="font-medium">Total permanent establishment</span>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <FaqList faqs={faqs} />
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Need the plant schedule in tender format?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              We provide the fleet schedule with registration and ownership evidence
              in the format your prequalification documents require.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Request the schedule</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
