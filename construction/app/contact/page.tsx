import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: `Contact ${company.name} — tender and project enquiries, prequalification documents, subcontracting, supply and careers.`,
  path: "/contact",
  keywords: ["contact construction company nepal", "tender enquiry nepal"],
});

const crumbs = [
  { name: "Home", path: "" },
  { name: "Contact", path: "/contact" },
];

const jsonLd = [
  {
    "@type": "ContactPage",
    "@id": `${canonical("/contact")}#webpage`,
    url: canonical("/contact"),
    name: `Contact ${company.name}`,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
  },
  breadcrumbJsonLd(crumbs),
];

const routes = [
  {
    label: "Tenders & prequalification",
    email: company.tenderEmail,
    detail: "Tender enquiries, prequalification documents, capability statements and project references.",
  },
  {
    label: "General enquiries",
    email: company.email,
    detail: "Partnerships, joint ventures, supply, media and everything else.",
  },
  {
    label: "Careers",
    email: company.careersEmail,
    detail: "Engineering, site supervision, plant operation and technical roles.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building"
        lead="Send the scope, the location and the programme constraints. If we are the right contractor for it we will say what it realistically takes; if we are not, we will say that instead."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold">Send an enquiry</h2>
            <div className="mt-7">
              <EnquiryForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="tech-label text-ink-3">Direct contacts</h2>
              <ul className="mt-4 space-y-5">
                {routes.map((r) => (
                  <li key={r.email}>
                    <div className="font-medium text-[0.9rem]">{r.label}</div>
                    <a
                      href={`mailto:${r.email}`}
                      className="text-[0.875rem] text-amber-deep hover:underline break-all"
                    >
                      {r.email}
                    </a>
                    <p className="text-[0.8rem] text-ink-3 mt-1 leading-snug">{r.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line p-6">
              <h2 className="tech-label text-ink-3">Registered office</h2>
              <address className="mt-4 not-italic text-[0.9rem] leading-relaxed">
                {company.name}
                <br />
                {company.registeredOffice}
              </address>
              <dl className="mt-5 pt-4 border-t border-line-2 space-y-2.5 text-[0.85rem]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-3">Phone</dt>
                  <dd className="font-mono">{company.phone}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-3">Registration</dt>
                  <dd className="font-mono">{company.registration.number}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-3">PAN / VAT</dt>
                  <dd className="font-mono">{company.registration.pan}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-line p-6">
              <h2 className="tech-label text-ink-3">Languages</h2>
              <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed">
                We work in Nepali and English. Tender correspondence, technical
                submissions and contract administration are handled in either.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
