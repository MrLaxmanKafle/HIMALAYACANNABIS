import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hemp Services Nepal — Lab, Seed, Consultancy",
  description:
    "THC/CBD testing laboratory, seed supply, seed-to-sale tracking, and consultancy — Himalaya Cannabis as a resource centre for Nepal's cannabis sector.",
  keywords: [
    "cannabis testing lab Nepal",
    "hemp consultancy Nepal",
    "seed to sale Nepal",
    "hemp industry services Nepal",
    "cannabis compliance systems Nepal",
  ],
    openGraph: {
    title: "Hemp Services Nepal — Himalaya Cannabis",
    description:
      "THC/CBD testing laboratory, seed supply, seed-to-sale tracking, and consultancy — Himalaya Cannabis as a resource centre for Nepal's cannabis sector.",
    url: "https://himalayacannabis.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemp Services Nepal — Himalaya Cannabis",
    description:
      "THC/CBD testing laboratory, seed supply, seed-to-sale tracking, and consultancy — Himalaya Cannabis as a resource centre for Nepal's cannabis sector.",
  },
  alternates: { canonical: "/services" },
};

const breadcrumbJsonLd_services = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Lab & Services", path: "/services" },
]);

const relatedLinks: Record<string, { href: string; label: string }[]> = {
  "THC/CBD Testing Laboratory": [
    { href: "/thc-testing-lab-nepal", label: "More on our testing laboratory →" },
    { href: "/agri-food-testing-lab-nepal", label: "Agri-food testing (coffee, tea, spice) →" },
  ],
  "Seed Supply & Genetics": [
    { href: "/hemp-seeds-nepal", label: "Hemp seeds & cultivars →" },
    { href: "/hemp-farmland-nepal", label: "Farmland for cultivation →" },
  ],
  "Seed-to-Sale & Compliance Systems": [
    { href: "/cannabis-license-consulting-nepal", label: "Licensing consultancy →" },
  ],
  "Consultancy & Training": [
    { href: "/cannabis-license-consulting-nepal", label: "Licensing consultancy →" },
    { href: "/careers", label: "Join our team →" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd_services) }}
      />

      <PageHero
        title="Laboratory & Industry Services"
        lede="A legal cannabis industry needs more than growers — it needs testing, traceability, and know-how. We're building all three."
      />

      <section className="mx-auto max-w-6xl px-5 py-8">
        {services.map((s, i) => (
          <article
            key={s.name}
            className="grid gap-4 border-b border-line py-12 last:border-b-0 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-sm font-semibold text-ink-3 tabular-nums">
              0{i + 1}
            </span>
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-[-0.01em]">
                {s.name}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">{s.summary}</p>
              {relatedLinks[s.name] && (
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
                  {relatedLinks[s.name].map((l) => (
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
            <h2 className="text-2xl font-bold">Entering the cannabis sector?</h2>
            <p className="mt-2 max-w-xl text-ink-2">
              Whether you are a farmer, cooperative, brand, or investor, we can
              support you with seed, testing, compliance, and training.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
