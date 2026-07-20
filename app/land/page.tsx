import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Land & Farmer Partnerships",
  description:
    "Offer your hill land for sale, lease, or farming partnership with Himalaya Cannabis — licensed hemp cultivation in Nepal's Himalayan and hilly regions with fair terms for landowners and farmers.",
  keywords: [
    "lease land Nepal",
    "sell land Nepal hills",
    "farming partnership Nepal",
    "hemp farming Nepal",
    "contract farming Nepal",
  ],
};

const models = [
  {
    title: "Lease your land",
    body: "A multi-year lease at fair, agreed rates — your land stays yours, earns steady income, and returns to you at the end of the term. Our preferred model for cultivation areas.",
  },
  {
    title: "Farm with us",
    body: "You farm your own land; we provide seed, training, compliance support, and a committed buyer for the licensed harvest. You keep your independence — and gain a market.",
  },
  {
    title: "Sell to us",
    body: "For select parcels — processing sites, nursery and laboratory locations — we purchase outright in the company's name, with full legal due diligence and transparent valuation.",
  },
];

const lookFor = [
  "Hill or mountain districts — mid-hills and Himalayan regions preferred",
  "Terraced or terraceable agricultural land with water access",
  "Reasonable road access for transport of inputs and harvest",
  "Clear title (lalpurja) with no tenancy disputes or encumbrances",
  "Communities interested in long-term agricultural employment",
];

export default function LandPage() {
  return (
    <>
      <PageHero
        title="Land & Farmer Partnerships"
        lede="Our cultivation will grow on Nepal's hillsides — with the people who own them. If you have hill land, we want to hear from you."
      />

      <section className="mx-auto max-w-6xl px-5 py-8">
        {models.map((m, i) => (
          <article
            key={m.title}
            className="grid gap-4 border-b border-line py-10 last:border-b-0 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-sm font-semibold text-ink-3 tabular-nums">
              0{i + 1}
            </span>
            <div>
              <h2 className="text-xl font-bold">{m.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{m.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold">What we look for</h2>
          <ul className="mt-6 max-w-2xl space-y-3">
            {lookFor.map((l) => (
              <li key={l} className="flex gap-3 leading-relaxed text-ink-2">
                <span aria-hidden className="text-marigold">—</span>
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-3">
            Cultivation begins only under the licences required by prevailing
            law. Until then, we are building our land bank and partnerships so
            that licensed planting can start without delay. All transactions
            follow full legal due diligence and registration at the Land Revenue
            Office.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Have land to offer?</h2>
            <p className="mt-2 max-w-xl text-ink-2">
              Tell us the district, area (ropani/bigha), altitude if known, road
              access, and whether you want to lease, partner, or sell. We reply
              to every serious offer.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Offer your land
            </Link>
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent("[Land offer] ")}`}
              className="rounded-full border border-line px-7 py-3 font-medium transition-colors hover:border-ink"
            >
              Email us directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
