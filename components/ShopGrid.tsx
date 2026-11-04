"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { withSlash } from "@/lib/href";
import { landingPages, type LandingCategory } from "@/lib/landing";
import { productCategories } from "@/lib/nav";

const STATUS_LABEL: Record<string, string> = {
  available: "Available",
  "in-development": "In development",
  planned: "Planned",
};

const STATUS_CLASS: Record<string, string> = {
  available: "border-leaf/60 bg-leaf/10 text-leaf",
  "in-development": "border-marigold/50 bg-marigold/10 text-marigold",
  planned: "border-line text-ink-3",
};

/**
 * Each product gets a deterministic tinted panel until a photograph exists.
 * Derived from the slug so the grid has rhythm rather than looking randomised,
 * and so a given product keeps the same panel between visits.
 */
function hueFor(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) % 360;
  return h;
}

export default function ShopGrid() {
  const [cat, setCat] = useState<LandingCategory | "all">("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const term = q.trim().toLowerCase();
    return landingPages
      .filter((p) => (cat === "all" ? true : p.category === cat))
      .filter((p) => (onlyAvailable ? p.status === "available" : true))
      .filter((p) =>
        term
          ? p.h1.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.keywords.some((k) => k.toLowerCase().includes(term))
          : true
      );
  }, [cat, onlyAvailable, q]);

  return (
    <>
      {/* Controls */}
      <div className="sticky top-[57px] z-30 border-b border-line-2 bg-ground/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor="shop-search">
              Search the catalogue
            </label>
            <input
              id="shop-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search — grade, application, cannabinoid…"
              className="min-w-0 flex-1 rounded-full border border-line bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink-3 focus:border-ink focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setOnlyAvailable((v) => !v)}
              aria-pressed={onlyAvailable}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                onlyAvailable
                  ? "border-leaf bg-leaf/10 text-leaf"
                  : "border-line text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              Available now
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCat("all")}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                cat === "all"
                  ? "border-ink bg-ink text-ground"
                  : "border-line text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              All {landingPages.length}
            </button>
            {productCategories.map((c) => {
              const n = landingPages.filter((p) => p.category === c.key).length;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCat(c.key)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    cat === c.key
                      ? "border-ink bg-ink text-ground"
                      : "border-line text-ink-2 hover:border-ink hover:text-ink"
                  }`}
                >
                  {c.label} {n}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-sm text-ink-3" aria-live="polite">
          {items.length} {items.length === 1 ? "product" : "products"}
        </p>

        {items.length === 0 ? (
          <p className="mt-10 text-ink-2">
            Nothing matches that. Try a broader term, or{" "}
            <Link href="/quote/" className="text-marigold hover:text-ink">
              tell us what you need
            </Link>{" "}
            — the catalogue is not the limit of what we can source.
          </p>
        ) : (
          <ul className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => {
              const h = hueFor(p.slug);
              return (
                <li key={p.slug} className="group">
                  <Link href={withSlash(`/${p.slug}`)} className="block">
                    {/* Image slot — tinted panel until a photograph exists */}
                    <div
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line"
                      style={{
                        background: `linear-gradient(145deg, hsl(${h} 18% 16%), hsl(${(h + 40) % 360} 22% 11%))`,
                      }}
                    >
                      <svg
                        viewBox="0 0 120 70"
                        className="absolute inset-0 h-full w-full opacity-[0.17]"
                        aria-hidden
                      >
                        <path
                          d="M0 62 L22 30 L34 44 L52 18 L70 48 L88 26 L104 46 L120 34 L120 70 L0 70 Z"
                          fill="currentColor"
                          className="text-ink"
                        />
                      </svg>
                      <span
                        className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${STATUS_CLASS[p.status]}`}
                      >
                        {STATUS_LABEL[p.status]}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold leading-snug transition-colors group-hover:text-marigold">
                      {p.h1}
                    </h3>
                    <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-ink-2">
                      {p.description}
                    </p>
                  </Link>

                  <Link
                    href={withSlash(`/quote?product=${p.slug}`)}
                    className="mt-3 inline-block text-sm font-semibold text-marigold hover:text-ink"
                  >
                    Request a quote →
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
