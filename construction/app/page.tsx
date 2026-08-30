import type { Metadata } from "next";
import Link from "next/link";
import { company, ids } from "@/lib/company";
import { sectors } from "@/lib/sectors";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/insights";
import { fleetTotal, workforceTotal } from "@/lib/capability";
import { pageMeta, jsonLdScript, faqJsonLd, canonical } from "@/lib/seo";
import { withSlash } from "@/lib/href";
import { Section, SectionHeading, Card, ArrowLink, Button, Stat, FaqList } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: `${company.shortName} — Roads, Bridges & Infrastructure in Nepal`,
  description:
    "Nepali civil engineering contractor building roads, bridges, tunnels, water systems and hydropower civil works for government and donor-funded infrastructure programmes.",
  path: "",
  absoluteTitle: true,
  keywords: [
    "construction company nepal",
    "infrastructure contractor nepal",
    "road construction company nepal",
    "bridge construction nepal",
  ],
});

/**
 * Home page FAQs are the ones an answer engine gets asked about a company it
 * has just encountered: who are they, what do they build, where, and can they
 * be trusted with public money. Answering those plainly on the home page is
 * worth more than a hero video.
 */
const faqs = [
  {
    q: `What does ${company.shortName} do?`,
    a: company.oneLiner,
  },
  {
    q: "Where does the company work?",
    a: "The company works throughout Nepal, across all seven provinces, with a registered office in Kathmandu. Project sites range from the Terai to high mountain districts, and the company establishes its own access roads, camps, aggregate production and construction power at remote sites where none exists.",
  },
  {
    q: "What types of infrastructure does the company build?",
    a: "Five sectors: roads and highways, including mountain road construction and rehabilitation; bridges and major structures; hydropower civil works including headworks and headrace tunnels; water supply and irrigation systems; and public buildings and urban infrastructure, including seismic retrofitting.",
  },
  {
    q: "Does the company work on government contracts?",
    a: "Yes. Public infrastructure is the core of the business, procured through the Government of Nepal's e-GP system under the Public Procurement Act, 2063, as well as through donor-funded programmes financed by the Asian Development Bank and the World Bank and administered under FIDIC conditions of contract.",
  },
  {
    q: "Does the company own its construction equipment?",
    a: "Yes. Core earthworks, paving, production and tunnelling plant is owned rather than hired, including excavators, dozers, graders, compaction equipment, asphalt batch mix plants, concrete batching plants and drill jumbos. Owning critical-path plant means programme is not exposed to third-party equipment availability, which is a recurring cause of delay on Nepali contracts.",
  },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("")}#webpage`,
    url: canonical(""),
    name: `${company.name} — Civil & Infrastructure Contractor, Nepal`,
    description: company.oneLiner,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
  },
  faqJsonLd(faqs),
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      {/* Hero */}
      <section className="survey-grid border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <p className="tech-label text-amber-deep rise rise-1">
            Civil &amp; Infrastructure Contractor · Nepal
          </p>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold max-w-4xl leading-[1.05] rise rise-2">
            Roads, bridges and public infrastructure — built to last in hard country.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-ink-2 max-w-2xl leading-relaxed rise rise-3">
            We build the infrastructure Nepal runs on: highways through hill terrain,
            river crossings, hydropower headworks and tunnels, water systems and
            public buildings. Steep ground, a seven-month season and a monsoon that
            tests everything — that is the design case, not the excuse.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 rise rise-3">
            <Button href="/projects">See our projects</Button>
            <Button href="/prequalification" variant="outline">
              Prequalification &amp; credentials
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} detail={s.detail} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="Five sectors, one engineering discipline"
          lead="Different assets, the same underlying problem: terrain, water and a working season that closes without asking. We organise around the asset the client is procuring rather than around our own org chart."
        />
        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border border-line">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={withSlash(`/sectors/${s.slug}`)}
              className="group bg-paper p-7 hover:bg-paper-2 transition-colors flex flex-col"
            >
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed flex-1">
                {s.summary}
              </p>
              <span className="mt-5 text-[0.85rem] font-medium text-amber-deep group-hover:underline">
                {s.scope.length} scope areas →
              </span>
            </Link>
          ))}
          <div className="bg-graphite text-on-graphite p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">Owned plant, not hired</h3>
              <p className="mt-3 text-[0.9rem] text-on-graphite-2 leading-relaxed">
                {fleetTotal} items of major plant and {workforceTotal} staff on the
                establishment. Equipment availability is one of the most common causes
                of delay on Nepali contracts — we hold our own critical path.
              </p>
            </div>
            <div className="mt-5">
              <ArrowLink href="/equipment" dark>
                Fleet schedule
              </ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Project record"
            title="What we have built"
            lead="Each project below states the engineering problem, what we did about it, and the quantities — the things a prequalification reviewer actually needs."
          />
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={withSlash(`/projects/${p.slug}`)}
              className="group border border-line bg-paper p-7 hover:bg-paper-2 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="tech-label text-amber-deep">
                  {p.status === "ongoing" ? "Ongoing" : "Completed"}
                </span>
                <span className="tech-label text-ink-3">
                  {p.endYear ? `${p.startYear}–${p.endYear}` : `${p.startYear}–`}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:underline">
                {p.name}
              </h3>
              <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed flex-1">
                {p.summary}
              </p>
              <dl className="mt-5 pt-4 border-t border-line-2 grid grid-cols-2 gap-3 text-[0.8rem]">
                <div>
                  <dt className="tech-label text-ink-3">Client</dt>
                  <dd className="mt-1">{p.client}</dd>
                </div>
                <div>
                  <dt className="tech-label text-ink-3">Value</dt>
                  <dd className="mt-1 font-mono">{p.value}</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section dark>
        <SectionHeading
          eyebrow="How we work"
          dark
          title="Three things that decide whether infrastructure in Nepal lasts"
          lead="None of them are visible at handover, which is exactly why they get value-engineered out."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              n: "01",
              h: "Drainage designed to the catchment",
              p: "Most hill road failures in Nepal are slope failures, not pavement failures, and the usual cause is drainage sized to a standard cross-section rather than to the catchment actually discharging onto the slope. We argue about this at design review rather than pricing the repair later.",
              href: "/insights/why-mountain-roads-fail-drainage",
              cta: "Read the mechanism",
            },
            {
              n: "02",
              h: "Programmes built backwards from the monsoon",
              p: "The effective construction season is seven to eight months. We fix the monsoon onset date first and schedule backwards from it, so in-river work finishes inside the dry window and weather-independent work is deliberately moved into the wet months.",
              href: "/insights/monsoon-construction-scheduling-nepal",
              cta: "How we programme",
            },
            {
              n: "03",
              h: "Records kept to determination standard",
              p: "Most disputes on donor-funded contracts are records disputes — the parties agree about what happened and disagree about what can be proved. We keep contemporaneous records from day one and issue early warning on programme threats rather than claiming after the fact.",
              href: "/quality-safety",
              cta: "Our systems",
            },
          ].map((item) => (
            <Card key={item.n} dark className="flex flex-col">
              <span className="font-mono text-amber text-[0.85rem]">{item.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.h}</h3>
              <p className="mt-3 text-[0.9rem] text-on-graphite-2 leading-relaxed flex-1">
                {item.p}
              </p>
              <div className="mt-5">
                <ArrowLink href={item.href} dark>
                  {item.cta}
                </ArrowLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Technical writing on building in Nepal"
            lead="Written to be useful to anyone procuring or delivering infrastructure here, including our competitors."
          />
          <ArrowLink href="/insights">All insights</ArrowLink>
        </div>
        <div className="mt-10 grid gap-px bg-line border border-line lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={withSlash(`/insights/${a.slug}`)}
              className="group bg-paper p-7 hover:bg-paper-2 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="tech-label text-amber-deep">{a.topic}</span>
                <span className="tech-label text-ink-3">{a.readingMinutes} min</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:underline">
                {a.title}
              </h3>
              <p className="mt-3 text-[0.9rem] text-ink-2 leading-relaxed flex-1">
                {a.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-line">
        <FaqList faqs={faqs} heading={`About ${company.shortName}`} />
      </Section>

      {/* CTA */}
      <Section className="border-t border-line bg-paper-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Tendering a project, or looking for a civil works partner?
            </h2>
            <p className="mt-4 text-ink-2 leading-relaxed">
              Send us the scope. If we are the right contractor for it we will tell
              you what it will actually take; if we are not, we will say so.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button href="/contact">Start an enquiry</Button>
            <Button href="/prequalification" variant="outline">
              Credentials
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
