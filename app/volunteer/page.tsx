import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Volunteer & Work-Exchange",
  description:
    "Work-exchange placements on a licensed Himalayan hemp farm, hospitality apprenticeships at our planned Wellness Valley, and structured programmes for universities, companies, and nonprofits.",
  keywords: [
    "volunteer Nepal farm",
    "work exchange Nepal",
    "WWOOF Nepal",
    "volunteer abroad Nepal",
    "farm stay Nepal",
    "volunteer agriculture Nepal",
    "NGO partnership Nepal",
  ],
};

const tracks = [
  {
    title: "Farm & cultivation exchange",
    body: "General agricultural work — terracing, irrigation, composting, land preparation, harvest support — in exchange for accommodation, meals, and hands-on training in Himalayan hill agriculture. Typically 2–8 weeks.",
  },
  {
    title: "Hemp textile & craft apprenticeship",
    body: "Learn hand-weaving from artisans in our far-western partner communities, help document techniques, and support workshops — a cultural exchange built around a living craft.",
  },
  {
    title: "Hospitality & tour hosting",
    body: "As the Hemp Wellness Valley opens in phases: help run guest experiences — welcome hosting, kitchen support, walking tours — in exchange for stay. The same model long-running retreats worldwide use for their volunteer hosts.",
  },
  {
    title: "Research & field placements",
    body: "For university students and researchers: agronomy data collection, soil studies, and genetics fieldwork, co-supervised with academic partners.",
  },
  {
    title: "Corporate volunteer days",
    body: "Paid, structured team-building packages — a day or weekend of planting, terracing, or trail work on site. Your company pays a package fee; your team gets a day that isn't another off-site meeting.",
  },
  {
    title: "NGO & nonprofit partnerships",
    body: "Joint programmes with development, women's-livelihood, or sustainable-agriculture nonprofits — potentially grant-co-funded, bringing volunteers, staff, and funding aligned with our farmer-training mission.",
  },
];

const faqs = [
  {
    q: "Is this just free labour?",
    a: "No — it's a work-and-learn exchange, the same model as internationally recognised programmes like WWOOF and Workaway: volunteers contribute labour and receive accommodation, meals, and training in return. Individual placements carry a modest programme fee that covers coordination, training, and safety. We do not use unpaid volunteers to replace paid staff in core commercial roles — that would be inconsistent with Nepali labour law and with how we run the company.",
  },
  {
    q: "Will I work directly with the cannabis crop?",
    a: "Only trained, registered staff handle licensed cultivation tasks, consistent with our cannabis-sector licensing obligations. Volunteer roles are in general agriculture, hospitality, craft, and research support — not regulated cultivation activity.",
  },
  {
    q: "Can I volunteer if I'm not Nepali?",
    a: "Yes, international volunteers are welcome. Depending on the length of your stay you may need an appropriate visa — check with Nepali immigration authorities before applying.",
  },
  {
    q: "How long are placements?",
    a: "Individual work-exchange placements typically run 2–8 weeks. Corporate volunteer days are a single day or weekend. Academic and NGO partnerships vary by project.",
  },
  {
    q: "Can our company, university, or NGO partner with you?",
    a: "Yes — tell us about your organisation and goals, and we'll structure a placement, a corporate volunteer day, or a joint programme.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function VolunteerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Volunteer & Work-Exchange"
        lede="Real work, real skills, real mountains — work-exchange placements on a licensed Himalayan hemp farm, hospitality apprenticeships at our planned Wellness Valley, and structured programmes for universities, companies, and nonprofits."
      />

      <section className="mx-auto max-w-6xl px-5 py-8">
        {tracks.map((t, i) => (
          <article
            key={t.title}
            className="grid gap-4 border-b border-line py-9 last:border-b-0 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-sm font-semibold text-ink-3 tabular-nums">
              0{i + 1}
            </span>
            <div>
              <h2 className="text-lg font-bold">{t.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{t.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-xl font-bold">What this is — and isn&apos;t</h2>
          <p className="mt-3 leading-relaxed text-ink-2">
            This is a short-term cultural and educational exchange, not a
            substitute for paid employment. Volunteers receive genuine
            reciprocal value — accommodation, meals, training, and hands-on
            experience — not wages. Core commercial and regulated work is done
            by paid, trained, and (where required) licence-registered staff.
            Looking for paid work instead?{" "}
            <Link href="/careers" className="font-semibold text-marigold hover:text-ink">
              See Careers
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-2xl font-bold">Common questions</h2>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-bold">{f.q}</dt>
              <dd className="mt-2 leading-relaxed text-ink-2">{f.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold">Apply or propose a partnership</h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-2">
            Tell us which track interests you, your availability, and (for
            organisations) a short description of your company, university,
            or nonprofit.
          </p>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent("[Volunteer] Application / partnership")}`}
            className="mt-6 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            {company.email}
          </a>
        </div>
      </section>
    </>
  );
}
