import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hemp & Cannabis Farmland — Buy, Sell, or Lease",
  description:
    "Hemp and cannabis farmland in Nepal. Landowners: sell or lease hill land for licensed hemp cultivation. Buyers & investors: register interest in licensed farmland.",
  keywords: [
    "hemp farm land Nepal",
    "cannabis land for sale Nepal",
    "cannabis farmland Nepal",
    "hemp farmland lease Nepal",
    "buy agricultural land Nepal",
    "lease land Nepal hills",
    "hemp farming Nepal",
    "marijuana farm land Nepal",
    "contract farming Nepal",
    "farmland investment Nepal",
  ],

  alternates: { canonical: "/land" },
};

const models = [
  {
    title: "Lease your land",
    body: "A multi-year lease at fair, agreed rates — your land stays yours, earns steady income, and returns to you at the end of the term. Our preferred model for cultivation areas.",
  },
  {
    title: "Farm with us",
    body: "You farm your own land; we provide seed, training, compliance support, and a committed buyer for the licensed harvest. You keep your independence — and gain a market.",
  },
  {
    title: "Sell to us",
    body: "For select parcels — processing sites, nursery and laboratory locations — we purchase outright in the company's name, with full legal due diligence and transparent valuation.",
  },
];

const lookFor = [
  "Hill or mountain districts — mid-hills and Himalayan regions preferred",
  "Terraced or terraceable agricultural land with water access",
  "Reasonable road access for transport of inputs and harvest",
  "Clear title (lalpurja) with no tenancy disputes or encumbrances",
  "Communities interested in long-term agricultural employment",
];

const faqs = [
  {
    q: "Can I buy cannabis or hemp farm land in Nepal?",
    a: "You can buy agricultural land in Nepal, but cultivating cannabis on it — including industrial hemp — is legal only under the licences prescribed by prevailing law. Land itself is not licensed; the cultivation activity is. The practical route is to acquire suitable hill land and cultivate through a licensed operator such as Himalaya Cannabis.",
  },
  {
    q: "Can foreigners buy farmland in Nepal?",
    a: "Generally no — Nepali law does not permit foreign individuals to own land in Nepal. Foreign participation typically happens through investment in a Nepali company (subject to foreign investment approval) or long-term lease structures. Seek Nepali legal advice for your specific situation.",
  },
  {
    q: "How can I sell or lease my land for hemp farming?",
    a: "Tell us the district, area (ropani/bigha), altitude if known, road access, and whether you want to lease, partner, or sell. We evaluate every serious offer, conduct legal due diligence at the Land Revenue Office, and agree transparent terms. Use the contact form or email with subject 'Land offer'.",
  },
  {
    q: "Is hemp farming profitable in Nepal?",
    a: "Hemp suits Nepal's marginal hill land: it grows with low inputs, and its fibre, seed (bhango), and extract markets carry export demand with Himalayan provenance as a premium. Returns depend on licensing, altitude, and market access — which is why we operate on lease and contract-farming models that share risk with landowners.",
  },
  {
    q: "What makes land suitable for hemp cultivation?",
    a: "Mid-hill terraced land with year-round water, workable road access, and clear title. South-facing aspects help. Altitude drives what the land is best for — fibre, seed, or extract cultivars.",
  },
  {
    q: "Do you already hold cultivation licences?",
    a: "We operate strictly licence-first: cultivation begins only once the licences required under prevailing law are issued. We are building our land bank and partnerships now so licensed planting can start without delay — early landowner partners are first in line.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Hemp & Cannabis Farm Land in Nepal — Buy, Sell, or Lease",
      description:
        "Landowners sell or lease hill land for licensed hemp cultivation; buyers and investors register interest in licensed hemp farmland in Nepal.",
      url: "https://himalayacannabis.com/land/",
      provider: { "@type": "Organization", name: company.name },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Land & Farmer Partnerships", path: "/land" },
    ]),
  ],
};

export default function LandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Hemp & cannabis farmland in Nepal"
        lede="The meeting point for Nepal's licensed hemp land market: landowners with hill land to offer, and buyers and investors who want licensed cultivation on it. Every transaction compliance-first."
      />

      {/* Two-sided entry */}
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
        <div className="border-t-2 border-marigold pt-6">
          <h2 className="text-2xl font-bold">I have land to sell or lease</h2>
          <p className="mt-3 leading-relaxed text-ink-2">
            Hill land in the mid-hills or Himalayan districts? We lease, buy,
            and contract-farm — fair terms, registered agreements, and full
            legal due diligence. Your land can join Nepal&apos;s licensed hemp
            economy.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            Offer your land
          </Link>
        </div>
        <div className="border-t-2 border-leaf pt-6">
          <h2 className="text-2xl font-bold">I want licensed hemp farmland</h2>
          <p className="mt-3 leading-relaxed text-ink-2">
            Investors and buyers: register your interest in Nepali hemp
            farmland. We match capital with vetted parcels and licensed
            cultivation — land acquisition, lease structuring, and
            seed-to-sale compliance under one roof.
          </p>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent(
              "[Land buyer] Interest in hemp farmland"
            )}`}
            className="mt-6 inline-block rounded-full border border-line px-7 py-3 font-medium transition-colors hover:border-ink"
          >
            Register buyer interest
          </a>
        </div>
      </section>

      {/* Models */}
      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold">Three ways to work with us</h2>
          <div className="mt-4 divide-y divide-line">
            {models.map((m, i) => (
              <article
                key={m.title}
                className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-sm font-semibold text-ink-3 tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{m.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-bold">What we look for in land</h2>
        <ul className="mt-6 max-w-2xl space-y-3">
          {lookFor.map((l) => (
            <li key={l} className="flex gap-3 leading-relaxed text-ink-2">
              <span aria-hidden className="text-marigold">—</span>
              {l}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-3">
          Cultivation begins only under the licences required by prevailing law.
          Until then, we are building our land bank and partnerships so that
          licensed planting can start without delay. All transactions follow
          full legal due diligence and registration at the Land Revenue Office.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-line-2">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-2xl font-bold">
            Common questions about hemp land in Nepal
          </h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Offer your land
            </Link>
            <Link
              href="/learn"
              className="rounded-full border border-line px-7 py-3 font-medium transition-colors hover:border-ink"
            >
              Learn about hemp in Nepal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
