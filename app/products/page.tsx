import type { Metadata } from "next";
import Link from "next/link";
import { productCategories } from "@/lib/company";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Hemp textiles and fibre, hemp seed foods (bhango), CBD and wellness products, ayurvedic formulations, and hemp cosmetics — lab-tested and produced under licence in Nepal.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="mt-3 max-w-2xl text-himalaya-200">
            Every product line below is built on licensed cultivation and certified
            laboratory testing. Categories marked &ldquo;planned&rdquo; launch as the
            corresponding licences are obtained.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
        {productCategories.map((cat) => (
          <article
            key={cat.slug}
            id={cat.slug}
            className="scroll-mt-24 rounded-2xl border border-himalaya-100 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-himalaya-900">
                {cat.name}
                {cat.nameNepali && (
                  <span className="ml-3 text-lg font-normal text-himalaya-500">
                    {cat.nameNepali}
                  </span>
                )}
              </h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${
                  cat.status === "in-development"
                    ? "bg-himalaya-100 text-himalaya-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {cat.status === "in-development" ? "In development" : "Planned"}
              </span>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-himalaya-800/80">
              {cat.summary}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-himalaya-50 px-4 py-2 text-sm text-himalaya-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="rounded-2xl bg-himalaya-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-himalaya-900">
            Wholesale, retail partnership, or export?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-himalaya-800/70">
            We supply on a wholesale and retail basis through physical and online
            channels, subject to prevailing law. Tell us what you need.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-himalaya-600 px-6 py-3 font-medium text-white shadow hover:bg-himalaya-700"
          >
            Make an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
