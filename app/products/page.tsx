import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { company, productCategories } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hemp Products Nepal — Textiles, Oil & CBD",
  description:
    "Hemp textiles and fibre, hemp seed foods (bhango), CBD and wellness products, ayurvedic formulations, and hemp cosmetics — lab-tested and produced under licence in Nepal.",
  keywords: [
    "hemp products Nepal",
    "buy hemp products Nepal",
    "wholesale hemp Nepal",
    "hemp textiles seed oil CBD Nepal",
    "Nepal hemp brand",
  ],
    openGraph: {
    title: "Hemp Products Nepal — Himalaya Cannabis",
    description:
      "Hemp textiles and fibre, hemp seed foods (bhango), CBD and wellness products, ayurvedic formulations, and hemp cosmetics — lab-tested and produced under licence in Nepal.",
    url: "https://himalayacannabis.com/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemp Products Nepal — Himalaya Cannabis",
    description:
      "Hemp textiles and fibre, hemp seed foods (bhango), CBD and wellness products, ayurvedic formulations, and hemp cosmetics — lab-tested and produced under licence in Nepal.",
  },
  alternates: { canonical: "/products" },
};

const relatedLinks: Record<string, { href: string; label: string }[]> = {
  "textiles-fibre": [
    { href: "/hemp-fabric-nepal", label: "Hemp fabric & textiles →" },
    { href: "/hemp-clothing-manufacturer-nepal", label: "Clothing manufacturing →" },
    { href: "/allo-fibre-nepal", label: "Allo & natural bast fibre →" },
  ],
  "seed-food": [
    { href: "/hemp-seeds-nepal", label: "Hemp seeds (bhango) →" },
    { href: "/hemp-seed-oil-nepal", label: "Hemp seed oil — all grades →" },
    { href: "/cannabis-sativa-seed-oil-nepal", label: "Cannabis Sativa Seed Oil (INCI) →" },
    { href: "/hulled-hemp-hearts-nepal", label: "Hulled hemp hearts →" },
    { href: "/hemp-protein-powder-nepal", label: "Hemp protein powder →" },
    { href: "/hemp-flour-nepal", label: "Hemp flour →" },
    { href: "/hemp-culinary-oil-nepal", label: "Hemp culinary oil (retail) →" },
  ],
  "cbd-wellness": [
    { href: "/cbd-oil-nepal", label: "CBD oil in Nepal →" },
    { href: "/full-spectrum-hemp-extract-nepal", label: "Full-spectrum hemp extract →" },
    { href: "/cbd-isolate-nepal", label: "CBD isolate →" },
    { href: "/cbd-distillate-nepal", label: "CBD distillate →" },
    { href: "/water-soluble-cbd-nepal", label: "Water-soluble CBD →" },
    { href: "/minor-cannabinoids-nepal", label: "Minor cannabinoids (CBG, CBN, CBC…) →" },
  ],
  ayurvedic: [
    { href: "/learn/hemp-products-guide", label: "Hemp products guide →" },
    { href: "/hemp-essential-oil-nepal", label: "Hemp essential oil →" },
    { href: "/hemp-hydrosol-nepal", label: "Hemp hydrosol →" },
  ],
  cosmetics: [
    { href: "/hemp-carrier-oil-nepal", label: "Hemp carrier oil →" },
    { href: "/hemp-face-oil-nepal", label: "Hemp face oil →" },
    { href: "/hemp-soap-nepal", label: "Hemp soap →" },
    { href: "/hemp-body-butter-nepal", label: "Hemp body butter →" },
    { href: "/hemp-gift-sets-nepal", label: "Himalayan gift sets →" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
    ]),
    {
      "@type": "ItemList",
      itemListElement: productCategories.map((cat, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: cat.name,
          description: cat.summary,
          brand: { "@type": "Organization", name: company.name },
          url: `https://himalayacannabis.com/products/#${cat.slug}`,
        },
      })),
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="Our Products"
        lede="Every line below is built on licensed cultivation and certified laboratory testing. Categories marked planned launch as the corresponding licences are obtained."
      />

      <section className="mx-auto max-w-6xl px-5 py-8">
        {productCategories.map((cat, i) => (
          <article
            key={cat.slug}
            id={cat.slug}
            className="grid scroll-mt-24 gap-6 border-b border-line py-14 last:border-b-0 lg:grid-cols-[4rem_1.2fr_1fr]"
          >
            <span className="text-sm font-semibold text-ink-3 tabular-nums">
              0{i + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold tracking-[-0.01em]">
                  {cat.name}
                </h2>
                {cat.nameNepali && (
                  <span className="text-lg text-ink-3">{cat.nameNepali}</span>
                )}
              </div>
              <p
                className={`mt-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                  cat.status === "in-development" ? "text-leaf" : "text-ink-3"
                }`}
              >
                {cat.status === "in-development" ? "In development" : "Planned"}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-2">
                {cat.summary}
              </p>
            </div>
            <div className="self-center border-l border-line pl-6">
              <ul className="text-sm leading-loose text-ink-2">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {relatedLinks[cat.slug] && (
                <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
                  {relatedLinks[cat.slug].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm font-semibold text-marigold hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line-2 bg-ground-2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <div>
            <h2 className="text-2xl font-bold">
              Wholesale, retail partnership, or export?
            </h2>
            <p className="mt-2 max-w-xl text-ink-2">
              We supply on a wholesale and retail basis through physical and
              online channels, subject to prevailing law.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            Make an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
