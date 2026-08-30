import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { workforce } from "@/lib/capability";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical, faqJsonLd } from "@/lib/seo";
import { PageHero, Section, SectionHeading, Card, Breadcrumbs, FaqList, Button } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description: `Engineering, survey, quantity surveying, HSE and plant roles at ${company.shortName} — site-based infrastructure work across Nepal.`,
  path: "/careers",
  keywords: ["civil engineer jobs nepal", "construction jobs nepal", "site engineer vacancy nepal"],
});

const faqs = [
  {
    q: "What roles does the company recruit for?",
    a: "Civil, geotechnical and materials engineers; surveyors; quantity surveyors and contract staff; HSE officers; plant operators and workshop mechanics; and site supervision. Most roles are site-based, with rotation between project sites and the Kathmandu office.",
  },
  {
    q: "Does the company take graduate engineers?",
    a: "Yes. Graduate engineers join a structured site rotation covering earthworks, structures and contract administration before specialising. Site posting is from the start rather than after an office period, because the engineering judgement this work requires is not learned from drawings.",
  },
  {
    q: "How do I apply?",
    a: `Send a CV to ${company.careersEmail} stating the role and the sectors you are interested in. Applications are reviewed continuously rather than against fixed vacancy windows, and site recruitment also happens locally at each project as work fronts open.`,
  },
];

const crumbs = [
  { name: "Home", path: "" },
  { name: "Careers", path: "/careers" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/careers")}#webpage`,
    url: canonical("/careers"),
    name: "Careers",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
  faqJsonLd(faqs),
];

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Careers"
        title="Engineering that happens outdoors, mostly uphill"
        lead="Most of our work is on site, in terrain that decides the engineering. If you want to learn how infrastructure actually behaves rather than how it is drawn, this is a good place to do it."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-doc max-w-none">
            <h2 className="!mt-0 !border-0 !pt-0">What working here is like</h2>
            <p className="text-[1.05rem]">
              Site-based, seasonal and demanding. The construction season is seven to
              eight months, so the dry months are intense and the monsoon months are
              for tunnelling, casting, planning and training. Project sites range from
              the Terai to high mountain districts, and remote postings mean camp
              accommodation for extended periods.
            </p>
            <p>
              Engineers are posted to site from the start. We think the judgement this
              work needs — reading a cut face, knowing when a drainage design will not
              survive the catchment above it, sequencing around a river — is learned
              on site and not otherwise, so a graduate rotation runs through
              earthworks, structures and contract administration before anyone
              specialises.
            </p>
            <h2>What we look for</h2>
            <p>
              Technical competence is the entry requirement. Beyond it we look for
              people who raise a problem when they first see it rather than when it
              becomes unavoidable, who write down what happened on the day it
              happened, and who are willing to argue with a design they think is
              wrong — including ours.
            </p>
            <h2>Safety</h2>
            <p>
              Construction in steep terrain, in rivers and underground carries real
              risk, and the sector&rsquo;s record in Nepal is not good. Everyone on
              site goes through induction and daily pre-task briefing, permit systems
              apply to confined space, height and underground work, and near-miss
              reporting is encouraged rather than penalised. Anyone can stop a work
              front they believe is unsafe, and that is not a formality.
            </p>
          </div>

          <aside>
            <div className="border border-line bg-paper-2 p-6">
              <h2 className="tech-label text-ink-3">Disciplines we employ</h2>
              <ul className="mt-4 space-y-3">
                {workforce.map((w) => (
                  <li key={w.role} className="text-[0.875rem]">
                    <div className="font-medium">{w.role}</div>
                    <div className="text-ink-3 mt-0.5 leading-snug">{w.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section dark>
        <SectionHeading dark eyebrow="Applying" title="How to apply" />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            { n: "01", h: "Send a CV", p: `Email ${company.careersEmail} with the role and the sectors that interest you. Applications are reviewed continuously, not against fixed vacancy windows.` },
            { n: "02", h: "Technical conversation", p: "A conversation with an engineer about work you have actually done — what the problem was, what you decided, and what you would do differently." },
            { n: "03", h: "Site visit", p: "Where practical, a visit to a live site before either side commits. The work is site work, and it is better to see it first." },
          ].map((s) => (
            <Card key={s.n} dark>
              <span className="font-mono text-amber text-[0.85rem]">{s.n}</span>
              <h3 className="mt-3 font-semibold">{s.h}</h3>
              <p className="mt-2.5 text-[0.9rem] text-on-graphite-2 leading-relaxed">{s.p}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <FaqList faqs={faqs} />
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Interested?</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Send a CV to{" "}
              <a href={`mailto:${company.careersEmail}`} className="text-amber-deep underline">
                {company.careersEmail}
              </a>{" "}
              with the role and sectors you are interested in.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact">Contact us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
