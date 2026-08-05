import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Himalaya Cannabis Pvt. Ltd. — cultivation, laboratory, product, and hospitality roles building Nepal's licensed hemp sector. Employment is written into our founding mission.",
  keywords: [
    "hemp jobs Nepal",
    "cannabis jobs Nepal",
    "careers Himalaya Cannabis",
    "agriculture jobs Nepal",
    "hemp company careers",
  ],
};

const areas = [
  {
    title: "Cultivation & agronomy",
    body: "Field agronomists, farm supervisors, and seasonal cultivation teams across our licensed growing sites — working directly with hill farmer partners.",
  },
  {
    title: "Laboratory & quality",
    body: "Analytical chemists and lab technicians for THC/CBD potency testing and quality control, as our certified laboratory comes online.",
  },
  {
    title: "Product & processing",
    body: "Textile and fibre processing, seed food production, and (under licence) extraction and formulation roles across our five product lines.",
  },
  {
    title: "Compliance & software",
    body: "Roles building our seed-to-sale tracking and compliance systems — the software layer that keeps every licensed operator traceable.",
  },
  {
    title: "Hospitality & wellness",
    body: "As the Hemp Wellness Valley develops: spa therapists, culinary staff, tour guides, and hospitality management for a destination built around licensed hemp.",
  },
  {
    title: "Sales, export & consultancy",
    body: "Domestic and export sales, and consultancy/training staff supporting farmers and enterprises entering Nepal's licensed cannabis sector.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at Himalaya Cannabis"
        lede="Generating employment through the cannabis business — and making Nepal more self-reliant — is written into our founding objectives, not a slogan added after the fact."
      />

      <section className="mx-auto max-w-3xl px-5 py-10">
        <p className="leading-relaxed text-ink-2">
          Most roles open as licences, land, and facilities come online — from
          cultivation and our testing laboratory through to the Hemp Wellness
          Valley. We are building the team ahead of each phase rather than
          after it, so early conversations matter even before a formal
          opening exists.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        {areas.map((a, i) => (
          <article
            key={a.title}
            className="grid gap-4 border-b border-line py-9 last:border-b-0 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-sm font-semibold text-ink-3 tabular-nums">
              0{i + 1}
            </span>
            <div>
              <h2 className="text-lg font-bold">{a.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{a.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line-2 bg-ground-2">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="text-2xl font-bold">No formal opening yet — reach out anyway</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-2">
            Tell us your background, the area you&apos;re interested in, and
            your location. We keep every serious inquiry on file and contact
            people directly as roles open.
          </p>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent("[Careers] Interest")}`}
            className="mt-8 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            {company.email}
          </a>
        </div>
      </section>
    </>
  );
}
