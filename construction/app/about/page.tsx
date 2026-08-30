import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { sectors } from "@/lib/sectors";
import { workforceTotal, fleetTotal } from "@/lib/capability";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, SectionHeading, Card, Stat, Breadcrumbs, FaqList, Button } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description: `${company.oneLiner.slice(0, 155)}`,
  path: "/about",
  keywords: ["about construction company nepal", "civil engineering firm nepal"],
});

const faqs = [
  {
    q: `When was ${company.shortName} founded?`,
    a: `${company.name} was incorporated in ${new Date(company.foundingDate).getFullYear()} under the Companies Act, 2063 (2006 A.D.) of Nepal, and is registered with the Office of the Company Registrar. Its registered office is in ${company.registeredOffice}.`,
  },
  {
    q: "How large is the company?",
    a: `The company employs approximately ${workforceTotal} permanent staff — engineers, surveyors, quantity surveyors, HSE officers, plant operators and site supervision — and owns around ${fleetTotal} items of major construction plant. Peak site workforce on a large contract is substantially higher, with locally recruited crew.`,
  },
  {
    q: "What certifications does the company hold?",
    a: `The company holds a Class 'A' civil contractor licence from the Department of Urban Development and Building Construction, contractor registration with the Department of Roads, and ISO 9001, ISO 14001 and ISO 45001 certification covering quality, environmental and occupational health and safety management.`,
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "About", path: "/about" },
];

const jsonLd = [
  {
    "@type": "AboutPage",
    "@id": `${canonical("/about")}#webpage`,
    url: canonical("/about"),
    name: `About ${company.name}`,
    description: company.oneLiner,
    isPartOf: { "@id": ids.website },
    mainEntity: { "@id": ids.organization },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(faqs),
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="About us"
        title="We build infrastructure for a country that makes it difficult"
        lead={company.oneLiner}
        meta={[
          { label: "Registered", value: company.registration.number },
          { label: "Incorporated", value: new Date(company.foundingDate).getFullYear().toString() },
          { label: "Office", value: company.addressLocality },
          { label: "Sectors", value: String(sectors.length) },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-doc max-w-none">
            <h2 className="!mt-0 !border-0 !pt-0">What we do</h2>
            <p className="text-[1.05rem]">
              We are a civil engineering contractor. We build roads through hill and
              mountain terrain, bridges across Himalayan rivers, the civil works of
              run-of-river hydropower schemes, water supply and irrigation systems,
              and public buildings — schools, health facilities and government
              offices. Most of it is publicly procured, and a substantial share is
              funded by development partners under FIDIC conditions of contract.
            </p>
            <h2>Why Nepal is a hard place to build</h2>
            <p>
              Three constraints shape every project here, and they are worth stating
              plainly because they explain most of what a client will experience.
            </p>
            <p>
              The terrain is steep and geologically young. Outside the Terai, almost
              every project is dominated by earthworks, slope stability and drainage
              rather than by the structure itself, and the characteristic failure
              mode is a slope moving rather than a structure breaking.
            </p>
            <p>
              The season is short. Monsoon rainfall from roughly June to September
              halts earthworks and surfacing, makes haul roads impassable, and puts
              rivers beyond the reach of in-river construction. The effective working
              year is seven to eight months, and a programme that assumes otherwise
              is a bid document rather than a plan.
            </p>
            <p>
              The ground moves. Nepal sits on an active convergent plate boundary,
              and the 2015 Gorkha earthquake made the consequences concrete. Seismic
              design is a governing requirement rather than a code formality,
              particularly for the public buildings people shelter in afterwards.
            </p>
            <h2>How we work with that</h2>
            <p>
              None of those constraints are negotiable, so the discipline is to build
              the programme and the engineering around them from the start rather
              than to discover them in the second monsoon. In practice that means
              three habits.
            </p>
            <p>
              We design drainage against the catchments a road alignment actually
              crosses rather than against a standard cross-section, because that is
              where hill roads are lost. We fix the monsoon onset date first and
              schedule backwards from it, so in-river work finishes inside the dry
              window and weather-independent work is moved into the wet months
              deliberately. And we keep contemporaneous records to the standard a
              formal determination would require, from day one, because most disputes
              on donor-funded contracts are about what can be proved rather than
              about what happened.
            </p>
            <h2>What we will and will not say</h2>
            <p>
              We would rather argue about an alignment or a drainage design at review
              stage than rebuild it afterwards, and we would rather decline a tender
              than price a programme we do not believe. That is not a virtue claim —
              it is the cheaper option over a portfolio, and it is the reason the
              project pages on this site state quantities and what went wrong rather
              than adjectives.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="tech-label text-ink-3">Company facts</h2>
              <dl className="mt-4 space-y-3.5 text-[0.875rem]">
                <div>
                  <dt className="text-ink-3">Registered name</dt>
                  <dd className="mt-0.5 font-medium">{company.name}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">Nepali name</dt>
                  <dd className="mt-0.5">{company.nameNepali}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">Registration</dt>
                  <dd className="mt-0.5 font-mono">{company.registration.number}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">Registering authority</dt>
                  <dd className="mt-0.5 leading-snug">{company.registration.authority}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">PAN / VAT</dt>
                  <dd className="mt-0.5 font-mono">{company.registration.pan}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">Registered office</dt>
                  <dd className="mt-0.5">{company.registeredOffice}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-line p-6">
              <h2 className="tech-label text-ink-3">Licences</h2>
              <ul className="mt-4 space-y-3.5">
                {company.licences.map((l) => (
                  <li key={l.name} className="text-[0.875rem]">
                    <div className="font-medium">{l.name}</div>
                    <div className="text-ink-3 mt-0.5 leading-snug">{l.authority}</div>
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
                    <span className="text-ink-3"> — {c.scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section dark>
        <SectionHeading dark eyebrow="By the numbers" title="Scale" />
        <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {company.stats.map((s) => (
            <Stat key={s.label} dark value={s.value} label={s.label} detail={s.detail} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Expertise"
          title="What we know about"
          lead="The subjects our engineers are asked about, and the ones we write about publicly."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {company.knowsAbout.map((k) => (
            <Card key={k} className="!p-4">
              <span className="text-[0.9rem]">{k}</span>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <FaqList faqs={faqs} heading="About the company" />
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Assessing us for a contract?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              The prequalification page sets out credentials, capacity and the
              documents we can provide for a submission.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href="/prequalification">Prequalification</Button>
            <Button href="/contact" variant="outline">Contact</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
