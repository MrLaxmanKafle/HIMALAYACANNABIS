import { specsFor } from "@/lib/specs";
import type { LandingPage } from "@/lib/landing";

/**
 * The technical sheet. This is the part of the page a buyer's QA department
 * reads, so it is set as a document rather than as marketing: ruled rows,
 * tabular figures, no illustration.
 */
export default function SpecSheet({ page }: { page: LandingPage }) {
  const groups = specsFor(page);
  if (!groups) return null;

  return (
    <section className="border-y border-line-2 bg-ink/[0.02]">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-[-0.01em]">
            Technical specification
          </h2>
          <p className="text-sm text-ink-3">
            Typical values for the product class
          </p>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
          The figures below describe hemp seed oil as a class, drawn from the
          published compositional literature. They are what you need to decide
          whether to request a sample. The measured values for what you actually
          receive sit on that lot&rsquo;s certificate of analysis.
        </p>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">
                {g.title}
              </h3>
              <dl className="mt-4">
                {g.rows.map((r) => (
                  <div
                    key={r.k}
                    className="flex items-baseline justify-between gap-6 border-t border-line py-2.5 last:border-b"
                  >
                    <dt className="text-sm text-ink-2">{r.k}</dt>
                    <dd className="shrink-0 text-right text-sm font-semibold tabular-nums text-ink">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
              {g.note && (
                <p className="mt-3 text-xs leading-relaxed text-ink-3">{g.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
