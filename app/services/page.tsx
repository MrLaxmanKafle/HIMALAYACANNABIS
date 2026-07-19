import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Lab & Services",
  description:
    "THC/CBD testing laboratory, seed supply, seed-to-sale tracking, compliance systems, consultancy, and training — Himalaya Cannabis as a resource centre for Nepal's cannabis sector.",
};

export default function ServicesPage() {
  return (
    <>
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
