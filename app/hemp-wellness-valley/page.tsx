import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  ValleyHero,
  SpaArt,
  RestaurantArt,
  TourArt,
  LodgeArt,
  TrainingArt,
  HeritageArt,
} from "@/components/illustrations/ValleyArt";

export const metadata: Metadata = {
  title: "Himalaya Hemp Wellness Valley — Concept",
  description:
    "A planned 500-ropani flagship destination in Nepal's hills: ayurvedic hemp spa, farm-to-table dining, eco-lodges, and farmer training. Concept stage, licence-gated.",
  keywords: [
    "hemp wellness retreat Nepal",
    "ayurvedic hemp spa Nepal",
    "agritourism Nepal",
    "eco lodge Nepal hemp farm",
    "wellness retreat Nepal hills",
    "hemp farm tour Nepal",
  ],

  alternates: { canonical: "/hemp-wellness-valley" },
};

const zones = [
  {
    Art: SpaArt,
    title: "Ayurvedic hemp spa & wellness retreat",
    body: "Treatments built on our own hemp seed oil — and, once licensed, our CBD line: massage oils, hot-stone therapy, detox programmes, and yoga and meditation packages set against the hills. Nepal's ayurvedic tradition, applied rather than only sold in a bottle.",
  },
  {
    Art: RestaurantArt,
    title: "Farm-to-table bhango dining",
    body: "A menu built around hemp seed — the ingredient that has fed hill kitchens for generations, elevated for visitors who have never tasted it. Sourced from our own fields, a short walk from the table.",
  },
  {
    Art: TourArt,
    title: "Field-to-lab transparency tours",
    body: "Walk the route every product actually takes: cultivation rows, drying and processing, our certified testing laboratory, finished goods. Compliance you can see, not just read about — the clearest proof of \"licensed, lab-tested\" we can offer.",
  },
  {
    Art: LodgeArt,
    title: "Eco-lodges among the terraces",
    body: "Simple, low-impact lodges and glamping set into hemp terraces with mountain views — built for travellers already coming to Nepal for wellness and trekking, now with somewhere new to stay.",
  },
  {
    Art: TrainingArt,
    title: "Farmer training & demonstration centre",
    body: "The physical home of our resource-centre mission: seed, agronomy, and compliance training for farmers and enterprises entering the licensed sector, plus research partnerships with Nepali universities.",
  },
  {
    Art: HeritageArt,
    title: "Hemp heritage pavilion",
    body: "Hand-weaving demonstrations, the history of bhango in Himalayan kitchens, and the story of a plant Nepal is only now reclaiming — told on-site, for visitors, students, and press.",
  },
];

const faqs = [
  {
    q: "Is the Hemp Wellness Valley open now?",
    a: "No — this is a concept for a planned flagship site on land we intend to acquire (approximately 500 ropani). It will open in phases as land acquisition, licensing, and construction proceed.",
  },
  {
    q: "Can I visit the farm or book a stay today?",
    a: "Not yet. Register your interest and we will contact you as each phase — tours, dining, lodging — becomes bookable.",
  },
  {
    q: "Does a cannabis-linked wellness site involve recreational cannabis?",
    a: "No. Every guest-facing product and experience draws on non-intoxicating hemp — seed oil, food, and (once licensed) CBD — within Nepal's medical and industrial framework. We do not offer, sell, or permit recreational cannabis on site.",
  },
  {
    q: "Is hospitality covered by your company's current objectives?",
    a: "Our Memorandum of Association currently covers cultivation, products, laboratory services, and consultancy. Hospitality and tourism operations will require an objectives amendment (or a dedicated affiliate structure) before guest-facing operations begin — a straightforward process under Nepali company law that we will complete ahead of opening.",
  },
  {
    q: "Where will the Valley be located?",
    a: "Site selection is underway in Nepal's hill and Himalayan districts, using the same criteria as our land programme: water access, workable roads, and community partnership. We will announce the location once acquisition is finalised.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Himalaya Hemp Wellness Valley",
      description:
        "A planned 500-ropani flagship wellness, agritourism, and training destination built on licensed Himalayan hemp cultivation.",
      url: "https://himalayacannabis.com/hemp-wellness-valley/",
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
      { name: "Hemp Wellness Valley", path: "/hemp-wellness-valley" },
    ]),
  ],
};

export default function WellnessValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <ValleyHero className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ground/55 via-transparent to-ground" />
        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-24 sm:pb-36">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">
            Concept · Land acquisition in progress
          </p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
            The Himalaya Hemp <span className="text-marigold">Wellness Valley</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            A planned 500-ropani flagship destination where licensed hemp
            cultivation, ayurvedic wellness, farm-to-table dining, and heritage
            craft meet in one place — not just a farm, a place people travel
            to.
          </p>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent("[Wellness Valley] Register interest")}`}
            className="mt-8 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            Register interest
          </a>
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-line-2 bg-ground-2">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center">
          <p className="text-lg leading-relaxed text-ink-2">
            Nepal already draws the world for two things: mountains and
            wellness. We are building the place where both meet a plant the
            Himalaya has known for centuries — grown under licence, tested in
            our own laboratory, and finally given room to be more than a line
            on a products page.
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        {zones.map((z, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={z.title}
              className="grid items-center gap-8 border-b border-line py-14 last:border-b-0 sm:grid-cols-[minmax(0,220px)_1fr]"
            >
              <div
                className={`aspect-[4/3] w-full max-w-[260px] ${reversed ? "sm:order-2" : "sm:order-1"}`}
              >
                <z.Art className="h-full w-full overflow-hidden rounded-2xl" />
              </div>
              <div className={reversed ? "sm:order-1" : "sm:order-2"}>
                <span className="text-sm font-semibold text-ink-3 tabular-nums">
                  0{i + 1}
                </span>
                <h2 className="mt-1 text-2xl font-bold tracking-[-0.01em]">{z.title}</h2>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-2">{z.body}</p>
              </div>
            </article>
          );
        })}
      </section>

      {/* Status / legal note */}
      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="text-xl font-bold">Where this stands today</h2>
          <p className="mt-3 leading-relaxed text-ink-2">
            This is a concept, not a built facility. Land acquisition
            (approximately 500 ropani) is in progress; hospitality and
            tourism operations will require an amendment to our company&apos;s
            objectives (or a dedicated affiliate) and the tourism, land-use,
            and cannabis-sector licences applicable to each activity, all
            under prevailing Nepali law. Nothing here is a booking, an offer,
            or a guarantee of timeline. Illustrations on this page are concept
            art, not photographs of an existing site.
          </p>
        </div>
      </section>

      {/* FAQ */}
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

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent("[Wellness Valley] Register interest")}`}
            className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            Register interest
          </a>
          <Link
            href="/land"
            className="rounded-full border border-line px-7 py-3 font-medium transition-colors hover:border-ink"
          >
            Our land programme →
          </Link>
        </div>
      </section>
    </>
  );
}
