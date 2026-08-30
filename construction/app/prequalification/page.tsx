import type { Metadata } from "next";
import { company, ids, siteStatus } from "@/lib/company";
import { fleetTotal, workforceTotal, systems } from "@/lib/capability";
import { projects } from "@/lib/projects";
import { sectors } from "@/lib/sectors";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, SectionHeading, Card, Breadcrumbs, FaqList, Button, ArrowLink } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Prequalification & Credentials",
  description:
    "Capability statement for prequalification — licence class, financial capacity, project experience, plant schedule, key personnel and management systems.",
  path: "/prequalification",
  keywords: [
    "construction prequalification nepal",
    "capability statement contractor",
    "contractor credentials nepal",
  ],
});

/** The documents a Nepali PQ submission actually asks for. */
const dossier = [
  {
    section: "Legal & registration",
    items: [
      "Certificate of incorporation, Office of the Company Registrar",
      "Current construction licence and class certificate (DUDBC)",
      "Department of Roads contractor registration",
      "VAT / PAN registration certificate",
      "Current tax clearance certificate",
      "Memorandum and Articles of Association",
    ],
  },
  {
    section: "Financial capacity",
    items: [
      "Audited financial statements for the required fiscal years",
      "Average annual construction turnover computation",
      "Bank credit line confirmation and available liquid assets",
      "Bank reference letters",
      "Statement of ongoing contract commitments and remaining capacity",
    ],
  },
  {
    section: "Experience",
    items: [
      "Completion certificates for similar contracts, stating value and scope",
      "Client reference letters and contact details",
      "Detailed project data sheets with quantities",
      "Statement of current contracts, values and completion dates",
      "Litigation history and record of any contract termination",
    ],
  },
  {
    section: "Resources",
    items: [
      "Plant and equipment schedule with registration and ownership evidence",
      "Key personnel CVs with qualifications, experience and signed commitments",
      "Organisation chart for the proposed contract",
      "Technical establishment summary",
    ],
  },
  {
    section: "Management systems",
    items: [
      "ISO 9001, ISO 14001 and ISO 45001 certificates and scope statements",
      "Sample inspection and test plan",
      "Health and safety statistics and safety policy",
      "Environmental and social management plan template",
      "Quality manual extract",
    ],
  },
];

const faqs = [
  {
    q: "What is prequalification in construction procurement?",
    a: "Prequalification is the assessment of whether a contractor has the financial capacity, comparable experience, plant, personnel and legal standing to deliver a contract. It is carried out either as a separate stage before bidding on large contracts, or as post-qualification of the lowest bidder on smaller ones. A bidder that fails any published criterion is eliminated regardless of its price.",
  },
  {
    q: "What documents does the company provide for prequalification?",
    a: "Legal and registration documents including the certificate of incorporation, current construction licence and class, and tax clearance; financial documents including audited accounts, turnover computation and bank credit line confirmation; experience documents including completion certificates, client references and project data sheets; resource documents including the plant schedule with ownership evidence and key personnel CVs with signed commitments; and management system certificates with sample inspection and test plans.",
  },
  {
    q: "How quickly can prequalification documents be provided?",
    a: "Standard documents are maintained current and can normally be issued within two working days of a request. Documents requiring tender-specific formatting — organisation charts for the proposed contract, key personnel commitments for the specific programme, or project data sheets tailored to a particular similar-works definition — typically take three to five working days.",
  },
  {
    q: "Does the company work under FIDIC conditions of contract?",
    a: "Yes. The company administers contracts under FIDIC Red Book and the Pink Book variant harmonised for multilateral development bank use, as required on Asian Development Bank and World Bank funded programmes. This includes formal notice provisions, contemporaneous record-keeping to determination standard, and structured dispute resolution.",
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "Prequalification", path: "/prequalification" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/prequalification")}#webpage`,
    url: canonical("/prequalification"),
    name: "Prequalification & Credentials",
    description:
      "Capability statement for prequalification — licence class, financial capacity, project experience, plant schedule, key personnel and management systems.",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(faqs),
];

export default function PrequalificationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Credentials"
        title="Prequalification & Credentials"
        lead="Everything an evaluation committee needs to assess us, stated in the order a prequalification form asks for it. We can provide any of it in your tender's own format."
        meta={[
          { label: "Licence class", value: "Class A" },
          { label: "Major plant items", value: String(fleetTotal) },
          { label: "Permanent staff", value: String(workforceTotal) },
          { label: "Sectors", value: String(sectors.length) },
        ]}
      />

      {siteStatus === "draft" && (
        <div className="border-b border-line bg-paper-2">
          <p className="mx-auto max-w-7xl px-5 py-4 text-[0.85rem] text-ink-2">
            <strong className="font-semibold text-ink">Note:</strong> licence numbers,
            certifications, project experience and capacity figures on this page are
            placeholders. Nothing here should be relied on for an actual
            prequalification assessment until the real credentials are in place.
          </p>
        </div>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Summary"
              title="Capability statement"
            />
            <div className="prose-doc mt-6 max-w-none">
              <p className="text-[1.05rem]">{company.oneLiner}</p>
              <p>
                The company was incorporated in{" "}
                {new Date(company.foundingDate).getFullYear()}{" "}
                under the Companies Act, 2063 (2006 A.D.), is registered with the
                Office of the Company
                Registrar, and holds a Class &lsquo;A&rsquo; civil contractor licence
                from the Department of Urban Development and Building Construction
                together with contractor registration with the Department of Roads.
              </p>
              <p>
                It employs approximately {workforceTotal} permanent staff across
                engineering, survey, quantity surveying, HSE and plant operation, and
                owns approximately {fleetTotal} items of major construction plant
                including asphalt and concrete batching plants, drill jumbos and a
                full earthmoving fleet. Management systems are certified to ISO 9001,
                ISO 14001 and ISO 45001.
              </p>
              <p>
                Work is delivered under both domestic public procurement, governed by
                the Public Procurement Act, 2063, and donor-funded programmes financed
                by the Asian Development Bank and the World Bank and administered
                under FIDIC conditions of contract.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="tech-label text-ink-3">Licences held</h2>
              <ul className="mt-4 space-y-3.5">
                {company.licences.map((l) => (
                  <li key={l.name} className="text-[0.875rem]">
                    <div className="font-medium">{l.name}</div>
                    <div className="text-ink-3 mt-0.5 leading-snug">{l.authority}</div>
                    <div className="font-mono text-[0.75rem] text-ink-3 mt-1">Ref. {l.ref}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line p-6">
              <h2 className="tech-label text-ink-3">Certifications</h2>
              <ul className="mt-4 space-y-3">
                {company.certifications.map((c) => (
                  <li key={c.name} className="text-[0.875rem]">
                    <span className="font-mono font-medium">{c.name}</span>
                    <div className="text-ink-3 mt-0.5">{c.scope}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          dark
          eyebrow="Dossier"
          title="Documents we provide"
          lead="Standard documents are kept current and normally issued within two working days. Tender-specific formatting takes three to five."
        />
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {dossier.map((d) => (
            <Card key={d.section} dark>
              <h3 className="font-semibold">{d.section}</h3>
              <ul className="mt-4 space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="text-[0.875rem] text-on-graphite-2 flex gap-2.5 leading-snug">
                    <span className="text-amber shrink-0" aria-hidden="true">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Experience"
            title="Similar works"
            lead="Full project data sheets with quantities, plus completion certificates and client references, are provided on request."
          />
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>
        <div className="mt-9 overflow-x-auto">
          <table className="w-full text-left min-w-[42rem]">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="tech-label text-ink-3 pb-3 font-normal">Project</th>
                <th scope="col" className="tech-label text-ink-3 pb-3 pl-6 font-normal">Client</th>
                <th scope="col" className="tech-label text-ink-3 pb-3 pl-6 font-normal">Period</th>
                <th scope="col" className="tech-label text-ink-3 pb-3 pl-6 font-normal text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.slug} className="border-b border-line-2">
                  <td className="py-3.5 text-[0.9rem] font-medium align-top max-w-sm">{p.name}</td>
                  <td className="py-3.5 pl-6 text-[0.85rem] text-ink-2 align-top">{p.client}</td>
                  <td className="py-3.5 pl-6 font-mono text-[0.8rem] text-ink-2 align-top whitespace-nowrap">
                    {p.endYear ? `${p.startYear}–${p.endYear}` : `${p.startYear}–`}
                  </td>
                  <td className="py-3.5 pl-6 font-mono text-[0.85rem] align-top text-right whitespace-nowrap">
                    {p.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <SectionHeading eyebrow="Systems" title="Management systems in place" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((s) => (
            <div key={s.name} className="border-t border-line pt-4">
              <div className="font-mono text-[0.8rem] text-amber-deep">{s.standard}</div>
              <div className="mt-1.5 font-medium text-[0.95rem]">{s.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ArrowLink href="/quality-safety">How these systems actually run</ArrowLink>
        </div>
      </Section>

      <Section className="border-t border-line">
        <FaqList faqs={faqs} />
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Request a prequalification pack</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Tell us the tender reference and the qualification criteria, and we will
              return the documents formatted to your submission requirements.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Request documents</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
