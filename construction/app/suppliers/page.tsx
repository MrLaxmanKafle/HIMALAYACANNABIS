import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, SectionHeading, Card, Breadcrumbs, FaqList, Button } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Suppliers & Subcontractors",
  description:
    "How to register as a supplier or subcontractor — categories we buy, what we require, and how payment and prequalification work.",
  path: "/suppliers",
  keywords: ["construction subcontractor nepal", "supplier registration contractor nepal"],
});

const categories = [
  { name: "Aggregates & quarry products", detail: "Crushed stone, sand, boulder and quarry run, with source testing" },
  { name: "Cement, steel & bitumen", detail: "Bulk supply against project schedules, with mill certificates" },
  { name: "Reinforcement fabrication", detail: "Cut and bend to schedule, delivered to site" },
  { name: "Plant hire", detail: "Supplementary plant at peak, with operators and maintenance" },
  { name: "Specialist subcontract", detail: "Piling, prestressing, electromechanical, bioengineering and survey" },
  { name: "Transport & logistics", detail: "Bulk haulage to remote sites, including portering where roads end" },
  { name: "Camp & site services", detail: "Accommodation, catering, security and waste management" },
  { name: "Testing & laboratory", detail: "Independent materials testing and geotechnical investigation" },
];

const requirements = [
  "Company or firm registration and PAN/VAT registration",
  "Current tax clearance certificate",
  "Bank account details in the registered entity's name",
  "Relevant licences for the category of supply",
  "Evidence of comparable supply or subcontract work",
  "Health and safety policy for on-site subcontractors",
  "Insurance appropriate to the work, where site-based",
];

const faqs = [
  {
    q: "How do I register as a supplier or subcontractor?",
    a: `Email ${company.email} with the supply category, your registration and PAN/VAT documents, current tax clearance and evidence of comparable work. Registration is by category, and registered suppliers are invited to quote when a project requirement in that category arises.`,
  },
  {
    q: "What are the payment terms?",
    a: "Payment is made against verified delivery or measured work, on the terms stated in the purchase order or subcontract. We do not operate pay-when-paid terms on materials supply — a supplier's payment is not made contingent on the client's payment to us.",
  },
  {
    q: "Do subcontractors have to follow the main contractor's safety rules?",
    a: "Yes. Subcontractor personnel working on our sites go through the same induction and daily pre-task briefing as our own crew, work under the same permit systems for confined space, height and underground work, and are covered by the same stop-work authority. Subcontractor incidents are recorded in the project's safety statistics without distinction.",
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "Suppliers & Subcontractors", path: "/suppliers" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/suppliers")}#webpage`,
    url: canonical("/suppliers"),
    name: "Suppliers & Subcontractors",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(faqs),
];

export default function SuppliersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Supply chain"
        title="Suppliers & Subcontractors"
        lead="We buy locally wherever a local supplier can meet the specification, because remote-site logistics are the single largest avoidable cost on most of our projects."
      />

      <Section>
        <SectionHeading eyebrow="Categories" title="What we buy" />
        <div className="mt-9 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.name} className="bg-paper p-6">
              <h3 className="font-semibold text-[0.95rem]">{c.name}</h3>
              <p className="mt-2 text-[0.85rem] text-ink-2 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Registration" title="What we need from you" />
            <ul className="mt-7 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3 text-[0.925rem] text-ink-2 border-b border-line-2 pb-3 leading-snug">
                  <span className="text-amber-deep shrink-0" aria-hidden="true">·</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="How we work with you" title="What you can expect" />
            <div className="mt-7 grid gap-5">
              <Card>
                <h3 className="font-semibold">Payment against delivery, not against our receipts</h3>
                <p className="mt-2.5 text-[0.9rem] text-ink-2 leading-relaxed">
                  We do not operate pay-when-paid terms on materials supply. A
                  supplier&rsquo;s payment is not made contingent on the client&rsquo;s
                  payment to us — the cash flow risk on a public contract is ours to
                  carry, not a local quarry&rsquo;s.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold">Same safety rules as our own crew</h3>
                <p className="mt-2.5 text-[0.9rem] text-ink-2 leading-relaxed">
                  Subcontractor personnel go through the same induction, permits and
                  briefings, and have the same authority to stop unsafe work.
                  Subcontractor incidents appear in project safety statistics without
                  distinction, because a fatality is not less serious for being on
                  someone else&rsquo;s payroll.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold">Local first, where the specification allows</h3>
                <p className="mt-2.5 text-[0.9rem] text-ink-2 leading-relaxed">
                  Haulage to remote sites is expensive and slow. Where a local supplier
                  can meet the specification and pass source testing, that is both the
                  cheaper option and the one that leaves something behind when the
                  project ends.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <FaqList faqs={faqs} />
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Register as a supplier</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Send your category, registration documents and evidence of comparable
              work to{" "}
              <a href={`mailto:${company.email}`} className="text-amber-deep underline">
                {company.email}
              </a>
              .
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
