import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Lab & Services",
  description:
    "THC/CBD testing laboratory, seed supply, seed-to-sale tracking, compliance systems, consultancy, and training — Himalaya Cannabis as a resource centre for Nepal's cannabis sector.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Laboratory & Industry Services</h1>
          <p className="mt-3 max-w-2xl text-himalaya-200">
            A legal cannabis industry needs more than growers — it needs testing,
            traceability, and know-how. We&apos;re building all three.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="rounded-2xl border border-himalaya-100 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-semibold text-himalaya-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-xl font-bold text-himalaya-900">{s.name}</h2>
              <p className="mt-3 leading-relaxed text-himalaya-800/80">{s.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-himalaya-900 p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Entering the cannabis sector?</h2>
          <p className="mx-auto mt-3 max-w-xl text-himalaya-200">
            Whether you are a farmer, cooperative, brand, or investor, we can support
            you with seed, testing, compliance, and training.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-himalaya-900 hover:bg-himalaya-50"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
