import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press kit and media contact for Himalaya Cannabis — Nepal's compliance-first medical and industrial hemp company. Boilerplate, brand assets, and interview requests.",
  openGraph: {
    title: "Press & Media — Himalaya Cannabis",
    description:
      "Press kit and media contact for Himalaya Cannabis — Nepal's compliance-first medical and industrial hemp company.",
    url: "https://himalayacannabis.com/press",
    type: "website",
    images: [
      {
        url: "https://himalayacannabis.com/press/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Himalaya Cannabis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media — Himalaya Cannabis",
    description:
      "Press kit and media contact for Himalaya Cannabis — Nepal's compliance-first medical and industrial hemp company.",
    images: ["https://himalayacannabis.com/press/opengraph-image.png"],
  },
  alternates: { canonical: "/press" },
};

const boilerplate =
  "Himalaya Cannabis Pvt. Ltd. is a Nepali company cultivating and processing licensed medical and industrial hemp in the Himalayan and hilly regions of Nepal. Its product lines span hemp textiles, seed foods, CBD wellness, ayurvedic formulations, and cosmetics, alongside a certified testing laboratory and compliance services for Nepal's emerging cannabis sector. The Company operates on a strict licence-first basis and does not engage in any transaction for recreational purposes.";

const kit = [
  { label: "Company name", value: company.name },
  { label: "Founded / registered", value: `${company.incorporation}` },
  { label: "Headquarters", value: company.registeredOffice },
  { label: "Sector", value: "Medical & industrial hemp, Nepal" },
  { label: "Media contact", value: company.email },
];

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Press & Media", path: "/press" },
]);

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Press & Media"
        lede="Boilerplate, company facts, and a direct line for interviews, quotes, and coverage of Nepal's licensed hemp sector."
      />

      <section className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="text-xl font-bold">Boilerplate</h2>
        <p className="mt-3 rounded-xl border border-line bg-ground-2 p-6 leading-relaxed text-ink-2">
          {boilerplate}
        </p>

        <h2 className="mt-14 text-xl font-bold">Company facts</h2>
        <dl className="mt-4 divide-y divide-line border-y border-line">
          {kit.map((f) => (
            <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                {f.label}
              </dt>
              <dd className="sm:col-span-2">{f.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-14 text-xl font-bold">Coverage</h2>
        <p className="mt-3 leading-relaxed text-ink-2">
          No press coverage yet — check back as our licensed operations come
          online. Journalists covering Nepal&apos;s cannabis and hemp policy are
          welcome to reach out for background, data, or interviews ahead of
          publication.
        </p>

        <h2 className="mt-14 text-xl font-bold">Media inquiries</h2>
        <p className="mt-3 leading-relaxed text-ink-2">
          For interviews, quotes, fact-checking, or high-resolution brand
          assets, contact us directly.
        </p>
        <a
          href={`mailto:${company.email}?subject=${encodeURIComponent("[Press] Media inquiry")}`}
          className="mt-6 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
        >
          {company.email}
        </a>
      </section>
    </>
  );
}
