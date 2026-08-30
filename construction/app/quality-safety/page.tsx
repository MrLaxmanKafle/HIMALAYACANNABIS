import type { Metadata } from "next";
import { systems } from "@/lib/capability";
import { company, ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, SectionHeading, Card, Breadcrumbs, FaqList, Button } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Quality, Safety & Environment",
  description:
    "ISO 9001, 45001 and 14001 management systems, FIDIC contract administration, and the record-keeping discipline that decides donor-funded contracts.",
  path: "/quality-safety",
  keywords: ["iso 9001 contractor nepal", "construction safety nepal", "hse construction nepal"],
});

const faqs = [
  {
    q: "What management system certifications does the company hold?",
    a: "ISO 9001 for quality management, ISO 14001 for environmental management and ISO 45001 for occupational health and safety management. Certificates and scope statements are provided with prequalification submissions.",
  },
  {
    q: "How is site safety managed on construction projects in Nepal?",
    a: "Through task-based risk assessment before each work front opens, mandatory induction and daily pre-task briefing on every site, permit systems for confined space, working at height and underground work, and monthly reporting of lost-time incidents and near misses to board level. Construction in steep terrain and underground carries real fatality risk, and a safety metric that is not reported to the board is not managed.",
  },
  {
    q: "What environmental controls apply to construction in Nepal?",
    a: "The main controls are spoil management, sediment control and slope revegetation. Spoil must go to designated, stabilised disposal sites rather than over the slope below, which is the single largest cause of construction-related environmental damage in Nepali hill terrain. Sediment control is required at all watercourse crossings, bioengineering and revegetation are programmed with the works rather than after them, and quarry and borrow pit rehabilitation is treated as a contract deliverable.",
  },
  {
    q: "Why do contemporaneous records matter on FIDIC contracts?",
    a: "Because entitlement to extension of time or additional payment normally depends on giving notice within a stated period and evidencing the effect with records made at the time. A late notice can time-bar a genuine entitlement, and an unevidenced effect cannot be quantified. Most disputes on donor-funded contracts turn on what can be proved rather than on what happened.",
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "Capabilities", path: "/capabilities" },
  { name: "Quality, Safety & Environment", path: "/quality-safety" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/quality-safety")}#webpage`,
    url: canonical("/quality-safety"),
    name: "Quality, Safety & Environment",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(faqs),
];

export default function QualitySafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Capability"
        title="Quality, Safety & Environment"
        lead="Certification is a floor, not a differentiator. What matters is whether the system produces records a client can rely on when something goes wrong — and whether anyone senior looks at them when nothing has."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {systems.map((s) => (
            <Card key={s.name}>
              <div className="flex items-baseline gap-3">
                <h2 className="text-xl font-semibold">{s.name}</h2>
                <span className="font-mono text-[0.75rem] text-amber-deep">{s.standard}</span>
              </div>
              <p className="mt-3 text-ink-2 leading-relaxed">{s.detail}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line-2 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="text-[0.9rem] text-ink-2 flex gap-3 leading-snug">
                    <span className="text-amber-deep shrink-0" aria-hidden="true">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          dark
          eyebrow="The uncomfortable part"
          title="Safety in Nepali construction is a real problem, not a compliance exercise"
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2 max-w-5xl">
          <p className="text-on-graphite-2 leading-relaxed">
            Construction in steep terrain, in and around live rivers, and underground
            carries genuine fatality risk, and the sector&rsquo;s record in Nepal is not
            good. Slope work, tunnelling, working at height on structures and plant
            movement on narrow hill haul roads are where people are actually hurt.
          </p>
          <p className="text-on-graphite-2 leading-relaxed">
            We report lost-time incidents and near misses to board level monthly,
            alongside programme and cost, because a metric that only circulates
            within the HSE function is not managed. Near-miss reporting is
            deliberately encouraged rather than penalised — a site with zero reported
            near misses is a site with a reporting problem, not a safe one.
          </p>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Environment"
          title="Where construction damage in Nepal actually comes from"
          lead="Not from the permanent works. From spoil, drainage and bare slopes during construction."
        />
        <div className="mt-8 prose-doc max-w-3xl">
          <p className="text-[1.05rem]">
            The largest environmental impact of hill construction in Nepal is
            typically spoil disposal. Material pushed over the edge of a cut loads
            the slope below, blocks natural drainage and travels far beyond the site
            boundary during the monsoon — damaging land, watercourses and often other
            infrastructure downstream.
          </p>
          <p>
            It is also the impact most easily avoided, because it is a logistics
            decision rather than an engineering one. Designated, stabilised disposal
            sites cost haulage; not designating them costs someone else their field.
            We treat spoil disposal sites as a pre-start deliverable rather than a
            site-level improvisation.
          </p>
          <p>
            The second is bare slope during the wet season. Bioengineering programmed
            into the same season as the earthworks establishes roots before the
            monsoon; bioengineering deferred to a follow-on contract faces its first
            monsoon as bare cuttings and washes off. This is a programming decision
            that determines whether an environmental commitment is real.
          </p>
        </div>
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <FaqList faqs={faqs} />
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Need our HSE and quality documentation?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              {company.shortName} provides certificates, scope statements, safety
              statistics and sample inspection and test plans as part of a
              prequalification submission.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href="/prequalification">Prequalification</Button>
            <Button href="/contact" variant="outline">Request documents</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
