import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { productCategories } from "@/lib/company";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Hemp textiles and fibre, hemp seed foods (bhango), CBD and wellness products, ayurvedic formulations, and hemp cosmetics — lab-tested and produced under licence in Nepal.",
};

export default function ProductsPage() {
  return (
    <>
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
            <ul className="self-center border-l border-line pl-6 text-sm leading-loose text-ink-2">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
