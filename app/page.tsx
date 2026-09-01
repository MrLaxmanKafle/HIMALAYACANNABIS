import type { Metadata } from "next";
import Link from "next/link";
import { company, productCategories, services } from "@/lib/company";
import Mountains from "@/components/Mountains";

const OG_IMAGE = "https://himalayacannabis.com/opengraph-image.png";

// Set at page level so the .png URL wins over the extensionless URL that the
// sibling opengraph-image file convention would otherwise inject.
export const metadata: Metadata = {
  openGraph: {
    images: [
      { url: OG_IMAGE, width: 2400, height: 1260, alt: "Himalaya Cannabis" },
    ],
  },
  twitter: { images: [OG_IMAGE] },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — type over a receding Himalayan ridge scene */}
      <section className="relative overflow-hidden">
        <Mountains className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ground/60 via-transparent to-ground" />

        <div className="relative mx-auto max-w-6xl px-5 pb-40 pt-24 sm:pb-52 sm:pt-32">
          <p className="rise rise-1 text-sm tracking-[0.35em] text-ink-2">
            {company.nameNepali}
          </p>
          <h1 className="rise rise-2 mt-5 max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.02em]">
            Himalayan hemp,
            <br />
            <span className="text-marigold">grown right.</span>
          </h1>
          <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-2">
            We cultivate and process licensed medical and industrial cannabis in
            the mountains of Nepal — turning a plant the Himalaya has known for
            centuries into lab-tested textiles, foods, and wellness products.
          </p>
          <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
            <Link
              href="/products/"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Explore products
            </Link>
            <Link
              href="/investors/"
              className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              Invest with us
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance line — one quiet sentence, not a badge strip */}
      <section className="border-y border-line-2">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm leading-relaxed text-ink-2">
          <span className="font-semibold text-ink">Licensed.</span>{" "}
          Cultivation, processing and export licences held · industrial hemp
          below 0.3% THC · every lot laboratory-tested · no recreational sales,
          ever — it&apos;s written into our founding documents.{" "}
          <Link href="/compliance/" className="underline hover:text-ink">
            See the register
          </Link>
          .
        </p>
      </section>

      {/* Product lines — a ledger, not a card grid */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-[-0.01em]">
            One plant, five livelihoods
          </h2>
          <p className="mt-4 text-ink-2">
            Fibre for weavers, seed for kitchens, extracts for wellness,
            formulations for healing — every line drawing on the same licensed
            cultivation and testing infrastructure.
          </p>
        </div>

        <ol className="mt-14">
          {productCategories.map((cat, i) => (
            <li
              key={cat.slug}
              className="group border-t border-line last:border-b"
            >
              <Link
                href={`/products/#${cat.slug}`}
                className="grid gap-2 py-7 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="text-sm font-semibold text-ink-3 tabular-nums">
                  0{i + 1}
                </span>
                <span>
                  <span className="text-xl font-bold transition-colors group-hover:text-marigold sm:text-2xl">
                    {cat.name}
                    {cat.nameNepali && (
                      <span className="ml-3 text-base font-normal text-ink-3">
                        {cat.nameNepali}
                      </span>
                    )}
                  </span>
                  <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-ink-2">
                    {cat.summary}
                  </span>
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    cat.status === "in-development" ? "text-leaf" : "text-ink-3"
                  }`}
                >
                  {cat.status === "in-development"
                    ? "In development"
                    : "Planned"}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Services — quiet two-column ruled list on raised ground */}
      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-[-0.01em]">
                A resource centre for Nepal&apos;s cannabis sector
              </h2>
              <p className="mt-4 text-ink-2">
                Beyond our own products, we build the infrastructure the
                industry needs — testing, traceability, and know-how.
              </p>
              <Link
                href="/services/"
                className="mt-8 inline-block text-sm font-semibold text-marigold hover:text-ink"
              >
                About our services →
              </Link>
            </div>
            <dl className="divide-y divide-line">
              {services.map((s) => (
                <div key={s.name} className="py-6 first:pt-0 last:pb-0">
                  <dt className="font-bold">{s.name}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    {s.summary}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mission — one loud idea */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <p className="max-w-3xl text-[clamp(1.5rem,3.2vw,2.4rem)] font-bold leading-snug tracking-[-0.01em]">
          Cannabis has grown wild across the Himalaya for as long as anyone can
          remember. Our mission is to bring it into the legal economy —{" "}
          <span className="text-marigold">
            employment for hill farmers, self-reliance for Nepal
          </span>
          , one licensed harvest at a time.
        </p>
        <Link
          href="/about/"
          className="mt-10 inline-block rounded-full border border-line px-7 py-3 font-medium transition-colors hover:border-ink"
        >
          Our story
        </Link>
      </section>

      {/* Explore the ecosystem — quick links into every part of the site */}
      <section className="border-t border-line-2 bg-ground-2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold tracking-[-0.01em]">
            Explore more
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/learn/",
                label: "Learn: Cannabis in Nepal",
                body: "Plain-language guides to the law, the history, and the plant.",
              },
              {
                href: "/land/",
                label: "Hemp Farmland",
                body: "Landowners and buyers — lease, sell, or invest in licensed hemp land.",
              },
              {
                href: "/hemp-wellness-valley/",
                label: "Hemp Wellness Valley",
                body: "A planned 500-ropani wellness and agritourism destination.",
              },
              {
                href: "/careers/",
                label: "Careers",
                body: "Cultivation, lab, product, and hospitality roles as we grow.",
              },
              {
                href: "/volunteer/",
                label: "Volunteer & Work-Exchange",
                body: "Work-exchange placements and partnerships for universities and NGOs.",
              },
              {
                href: "/press/",
                label: "Press & Media",
                body: "Boilerplate, company facts, and media contact.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border-t border-line pt-5"
              >
                <span className="font-bold transition-colors group-hover:text-marigold">
                  {item.label} →
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-ink-2">
                  {item.body}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
