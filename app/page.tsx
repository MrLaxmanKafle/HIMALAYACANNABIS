import Link from "next/link";
import { company, productCategories, services } from "@/lib/company";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-himalaya-900 via-himalaya-800 to-himalaya-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-himalaya-200">
            {company.nameNepali}
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Himalayan hemp, <span className="text-himalaya-300">grown right.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-himalaya-100">
            We cultivate and process licensed medical and industrial cannabis in the
            Himalayan and hilly regions of Nepal — turning a plant our mountains have
            known for centuries into lab-tested textiles, foods, wellness products,
            and opportunity for Nepali farmers.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-white px-6 py-3 font-medium text-himalaya-900 shadow hover:bg-himalaya-50"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-himalaya-300 px-6 py-3 font-medium text-white hover:bg-himalaya-800"
            >
              B2B & Export Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="border-b border-himalaya-100 bg-himalaya-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-sm text-himalaya-800">
          <span>✓ Industrial hemp: THC below 0.3%</span>
          <span>✓ Laboratory-tested products</span>
          <span>✓ Licensed activities only</span>
          <span>✓ No recreational sales</span>
        </div>
      </section>

      {/* Product categories */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold text-himalaya-900">
          From the mountains, five ways
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-himalaya-800/70">
          One plant, many livelihoods — fibre for weavers, seed for kitchens,
          extracts for wellness, formulations for healing.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products#${cat.slug}`}
              className="group rounded-xl border border-himalaya-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-himalaya-900 group-hover:text-himalaya-600">
                {cat.name}
                {cat.nameNepali && (
                  <span className="ml-2 text-sm font-normal text-himalaya-500">
                    ({cat.nameNepali})
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-himalaya-800/70">
                {cat.summary}
              </p>
              <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wide text-himalaya-500">
                {cat.status === "in-development" ? "In development" : "Planned"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold">
            A resource centre for Nepal&apos;s cannabis sector
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-himalaya-200">
            Beyond our own products, we build the infrastructure the industry needs.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl bg-himalaya-800 p-6">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-himalaya-200">{s.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg border border-himalaya-400 px-6 py-3 text-sm font-medium hover:bg-himalaya-800"
            >
              Learn more about our services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-himalaya-900">Why we exist</h2>
        <p className="mt-6 text-lg leading-relaxed text-himalaya-800/80">
          Cannabis has grown wild across the Himalaya for as long as anyone can
          remember. Our mission is to bring it into the legal economy — generating
          employment through the cannabis business, supporting hill farmers, and
          making Nepal more self-reliant, one licensed harvest at a time.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-lg bg-himalaya-600 px-6 py-3 font-medium text-white shadow hover:bg-himalaya-700"
          >
            Our story
          </Link>
          <Link
            href="/investors"
            className="rounded-lg border border-himalaya-600 px-6 py-3 font-medium text-himalaya-700 hover:bg-himalaya-50"
          >
            Invest with us
          </Link>
        </div>
      </section>
    </>
  );
}
