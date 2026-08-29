import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import RfqForm from "@/components/RfqForm";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Request a Quote — Bulk & Wholesale RFQ",
  description:
    "Request a quote from Himalaya Cannabis — hemp seed oil, fibre, cannabinoid, and finished-goods sourcing from Nepal. Tell us your volume, destination, and timeline.",
  keywords: [
    "hemp wholesale quote",
    "hemp seed oil RFQ",
    "Nepal hemp supplier quote",
    "bulk hemp oil pricing",
    "hemp export quote Nepal",
  ],
  openGraph: {
    title: "Request a Quote — Himalaya Cannabis",
    description:
      "Bulk and wholesale sourcing from Nepal — hemp seed oil, fibre, cannabinoid, and finished-goods lines. Tell us your volume, destination, and timeline.",
    url: "https://himalayacannabis.com/quote",
    type: "website",
    images: [
      {
        url: "https://himalayacannabis.com/quote/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Himalaya Cannabis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote — Himalaya Cannabis",
    description:
      "Bulk and wholesale sourcing from Nepal. Tell us your volume, destination, and timeline.",
    images: ["https://himalayacannabis.com/quote/opengraph-image.png"],
  },
  alternates: { canonical: "/quote" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Request a Quote",
      description:
        "Bulk and wholesale RFQ intake for Himalaya Cannabis's product lines.",
      url: "https://himalayacannabis.com/quote/",
      provider: { "@id": "https://himalayacannabis.com/#organization" },
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Request a Quote", path: "/quote" },
    ]),
  ],
};

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Request a quote"
        lede="One form, whatever you're sourcing — hemp seed oil, fibre, cannabinoid lines, or finished goods. Tell us volume, destination, and timeline, and we'll come back with real answers."
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <Suspense fallback={<div className="h-96" />}>
          <RfqForm />
        </Suspense>

        <p className="mt-10 text-sm leading-relaxed text-ink-3">
          Prefer email directly?{" "}
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent("[RFQ] Sourcing inquiry")}`}
            className="font-semibold text-marigold hover:text-ink"
          >
            {company.email}
          </a>
          . For investment discussions specifically, see our{" "}
          <a
            href="/investors/"
            className="font-semibold text-marigold hover:text-ink"
          >
            Investors page
          </a>
          .
        </p>
      </section>
    </>
  );
}
