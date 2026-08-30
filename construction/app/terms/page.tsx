import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Terms",
  description: `Terms governing use of the ${company.name} website.`,
  path: "/terms",
});

const crumbs = [
  { name: "Home", path: "" },
  { name: "Terms", path: "/terms" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/terms")}#webpage`,
    url: canonical("/terms"),
    name: "Terms",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
];

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow="Legal" title="Terms" />
      <Section>
        <div className="prose-doc max-w-3xl">
          <h2 className="!mt-0 !border-0 !pt-0">About this site</h2>
          <p className="text-[1.05rem]">
            This website is published by {company.name}, a company incorporated under
            the Companies Act, 2063 (2006 A.D.) of Nepal and registered with the
            Office of the Company Registrar under registration number{" "}
            {company.registration.number}, with its registered office at{" "}
            {company.registeredOffice}.
          </p>
          <h2>Information, not an offer</h2>
          <p>
            The content of this site is published for information. Nothing on it
            constitutes an offer, a tender, a quotation, or a commitment to
            contract, and nothing here forms part of any contract between us unless
            it is expressly incorporated into a signed agreement.
          </p>
          <h2>Technical content</h2>
          <p>
            The guides and insight articles describe general engineering and
            procurement practice. They are written carefully but they are not
            project-specific engineering advice, and they cannot account for the
            conditions of any particular site, contract or tender. Do not rely on
            them as a substitute for advice from a qualified engineer engaged on your
            project.
          </p>
          <h2>Project and capability information</h2>
          <p>
            Project records, quantities, capacity figures and credentials published
            here are summaries. Formal evidence — completion certificates, audited
            accounts, plant registration documents, certification certificates — is
            provided directly on request as part of a prequalification or tender
            submission, and it is that evidence, not this website, that should be
            relied on for any evaluation.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The text, drawings, diagrams and design of this site belong to{" "}
            {company.name}. You may quote from and link to it with attribution.
            Reproducing substantial parts of it as your own material is not permitted.
          </p>
          <h2>External links</h2>
          <p>
            Where we link to external sites — government departments, funders,
            standards bodies — we do not control their content and are not
            responsible for it.
          </p>
          <h2>Governing law</h2>
          <p>
            These terms and any dispute arising from the use of this website are
            governed by the laws of Nepal and subject to the jurisdiction of the
            courts of Nepal.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${company.email}`} className="text-amber-deep underline">
              {company.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
