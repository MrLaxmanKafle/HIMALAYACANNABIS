import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ShopGrid from "@/components/ShopGrid";
import { breadcrumbJsonLd } from "@/lib/seo";
import { catalogueJsonLd } from "@/lib/product-schema";
import { landingPages } from "@/lib/landing";

const title = "Product Catalogue — Himalaya Cannabis";
const description =
  "The full Himalaya Cannabis catalogue: hemp seed oil grades, cannabinoid extracts, seed foods, fibre and textiles, essential oils and finished goods. Filter by category and supply status, then request a quote.";

export const metadata: Metadata = {
  title: "Shop — Full Product Catalogue",
  description,
  keywords: [
    "hemp product catalogue",
    "hemp supplier catalogue Nepal",
    "wholesale hemp products",
    "bulk hemp oil catalogue",
    "hemp ingredient supplier",
  ],
  openGraph: { title, description, url: "https://himalayacannabis.com/shop", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  const available = landingPages.filter((p) => p.status === "available").length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
              ]),
              catalogueJsonLd(landingPages),
            ],
          }),
        }}
      />

      <PageHero
        title="Catalogue"
        lede={`${landingPages.length} products across six lines. Each one carries its real supply status — ${available} available now, the rest in development or planned — because a catalogue that hides which is which wastes everyone's week.`}
      />

      <ShopGrid />

      <section className="border-t border-line-2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <div>
            <h2 className="text-2xl font-bold">Not sure which grade you need?</h2>
            <p className="mt-2 max-w-xl text-ink-2">
              Tell us the application, the destination market and the volume.
              We will come back with the grade that fits and the documentation
              your side will need at customs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/compliance/"
              className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              Our licences
            </Link>
            <Link
              href="/quote/"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
