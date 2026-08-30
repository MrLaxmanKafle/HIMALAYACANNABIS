import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { sectors } from "@/lib/sectors";
import { fleetTotal, workforceTotal } from "@/lib/capability";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, Breadcrumbs, FaqList, Button } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description: `Answers about ${company.shortName} — what we build, where we work, how we are licensed, how to prequalify us, and how construction in Nepal actually works.`,
  path: "/faq",
  keywords: ["construction company nepal faq", "contractor questions nepal"],
});

/**
 * A single consolidated FAQ page.
 *
 * These answers are written to survive being lifted out of the page whole. Each
 * restates its subject rather than depending on the question for context,
 * because that is how a retrieval system will use it — and because it is also
 * how a person skim-reading a page uses it.
 */
const groups = [
  {
    heading: "About the company",
    faqs: [
      { q: `What does ${company.shortName} do?`, a: company.oneLiner },
      {
        q: "Where does the company work?",
        a: "The company works throughout Nepal across all seven provinces, with a registered office in Kathmandu. Project sites range from the Terai to high mountain districts, and remote-site mobilisation — access roads, camps, aggregate production and construction power — is treated as part of the works.",
      },
      {
        q: "How large is the company?",
        a: `The company employs approximately ${workforceTotal} permanent staff across engineering, survey, quantity surveying, HSE and plant operation, and owns approximately ${fleetTotal} items of major construction plant. Peak site workforce on a large contract is substantially higher, with locally recruited crew.`,
      },
      {
        q: "What licences and certifications does the company hold?",
        a: "A Class 'A' civil contractor licence from the Department of Urban Development and Building Construction, contractor registration with the Department of Roads, VAT registration, and ISO 9001, ISO 14001 and ISO 45001 certification for quality, environmental and occupational health and safety management.",
      },
    ],
  },
  {
    heading: "What we build",
    faqs: [
      {
        q: "What types of infrastructure does the company build?",
        a: `Five sectors: ${sectors.map((s) => s.name.toLowerCase()).join("; ")}. Each covers design-stage input where the contract allows, construction, and handover documentation.`,
      },
      {
        q: "Does the company do design as well as construction?",
        a: "Most Nepali public contracts are employer-designed, so the company builds to the client's design. Within that, it provides design-stage input where the contract allows, value engineering proposals, temporary works design, and construction methodology — and on hydropower and tunnelling work, support design reviewed against the ground actually encountered rather than the tender geology.",
      },
      {
        q: "Does the company take on small contracts?",
        a: "Yes, where the work is within the sectors above and the site is reachable from an existing operation. Small rural road, cross-drainage, water scheme and building retrofit contracts are a regular part of the portfolio, particularly where they sit near a larger project already mobilised in the district.",
      },
    ],
  },
  {
    heading: "Working with us",
    faqs: [
      {
        q: "How do I request prequalification documents?",
        a: `Email ${company.tenderEmail} with the tender reference and the qualification criteria. Standard documents — registration, licence, tax clearance, audited accounts, plant schedule, certifications — are kept current and normally issued within two working days. Documents needing tender-specific formatting take three to five working days.`,
      },
      {
        q: "Does the company work with joint venture partners?",
        a: "Yes. Joint ventures are common on large donor-funded contracts where a single contractor cannot meet the turnover or similar-works thresholds alone, and on contracts requiring specialist capability outside our own scope. We work as both lead and partner.",
      },
      {
        q: "How does the company handle variations and claims?",
        a: "Through the contract's own mechanisms, with contemporaneous records kept from day one. Early warning is issued when a programme threat emerges rather than a claim being filed after the effect, because most disputes on donor-funded contracts turn on what can be proved and when notice was given rather than on what happened.",
      },
    ],
  },
  {
    heading: "Construction in Nepal",
    faqs: [
      {
        q: "How long is the construction season in Nepal?",
        a: "Roughly seven to eight months, from about October to May. Monsoon rainfall from June to September halts earthworks, compaction and bituminous surfacing, makes haul roads impassable and puts rivers beyond the reach of in-river construction. Tunnelling and off-river structural concrete continue through the wet months.",
      },
      {
        q: "Why do roads in Nepal fail so often?",
        a: "Because most failures are slope failures rather than pavement failures. A road cut into a hillside concentrates flow that was previously spread across the slope. Where drainage is sized to a standard cross-section rather than to the catchments the alignment actually crosses, it is overwhelmed at drainage lines and discharges onto untreated slopes, which then saturate and fail — taking the carriageway with them.",
      },
      {
        q: "How are government construction contracts awarded in Nepal?",
        a: "Under the Public Procurement Act, 2063, through the Government of Nepal e-GP system. Bids are checked for responsiveness, then assessed against the tender's published qualification criteria covering turnover, similar experience, plant and key personnel. Only qualified bids are compared on price, and the award goes to the lowest evaluated substantially responsive bid.",
      },
      {
        q: "What is a Class A contractor in Nepal?",
        a: "A contractor holding the highest grade of construction licence issued by the Department of Urban Development and Building Construction. Contractors are classified A to D by audited financial capacity, owned plant and qualified technical staff, and the class caps the contract value a company may bid for. Class A is required for major highway, bridge and hydropower contracts.",
      },
    ],
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "FAQ", path: "/faq" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/faq")}#webpage`,
    url: canonical("/faq"),
    name: "Frequently Asked Questions",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(groups.flatMap((g) => g.faqs)),
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Reference"
        title="Frequently asked questions"
        lead="About the company, about working with us, and about how infrastructure delivery in Nepal actually works."
      />
      <Section>
        <div className="space-y-16 max-w-4xl">
          {groups.map((g) => (
            <FaqList key={g.heading} faqs={g.faqs} heading={g.heading} />
          ))}
        </div>
      </Section>
      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Question not answered here?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Ask directly — including the awkward ones about programme, claims and
              safety record.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Ask us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
