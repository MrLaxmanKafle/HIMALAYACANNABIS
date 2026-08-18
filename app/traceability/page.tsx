import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";
import { appellation, lotFields, currentState } from "@/lib/origin";

const title = "Traceability — Every Lot, Publicly Documented";
const description =
  "How a Himalaya Cannabis lot is recorded: plot, grower, cultivar, dates, processing, independent laboratory, and a full certificate of analysis at a permanent public URL.";

export const metadata: Metadata = {
  title: "Traceability & Lot Records",
  description,
  keywords: [
    "hemp traceability",
    "cannabis certificate of analysis",
    "hemp lot tracking Nepal",
    "seed to shelf hemp",
    "third party tested hemp Nepal",
  ],
  openGraph: {
    title,
    description,
    url: "https://himalayacannabis.com/traceability",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/traceability" },
};

export default function TraceabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Traceability", path: "/traceability" },
            ])
          ),
        }}
      />

      <PageHero
        title="Traceability"
        lede="A buyer should be able to read the full history of what they are buying without asking us for it, without an account, and without a sales call. Here is the record every lot will carry."
      />

      {/* Why */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
              The problem this solves
            </p>
            <h2 className="mt-5 text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.01em]">
              &ldquo;Send me the COA&rdquo; should never be a request
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              In this trade, certificates arrive as PDFs attached to emails. They
              are easy to edit, easy to reuse across batches that have nothing to
              do with each other, and impossible to verify from the outside. Every
              serious buyer knows this and prices the risk in.
            </p>
            <p>
              A certificate that lives at a permanent public address, published by
              the producer, dated, and left up after the lot sells out is a
              different object. It can be checked by a customer, a competitor, a
              regulator or a journalist, at any time, without our involvement.
            </p>
            <p className="text-ink">
              We are publishing the schema now, before we have a single lot, so
              the format is fixed before there is any commercial incentive to
              soften it.
            </p>
          </div>
        </div>
      </section>

      {/* Lot code anatomy */}
      <section className="border-y border-line-2 bg-ink/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold">Anatomy of a lot code</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
            Printed on the lot, and resolvable to its record.
          </p>
          <div className="mt-10 overflow-x-auto">
            <div className="inline-block min-w-full">
              <p className="font-mono text-4xl font-bold tracking-tight text-marigold sm:text-5xl">
                MV<span className="text-ink-3">-</span>2027
                <span className="text-ink-3">-</span>A01
              </p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { k: "MV", v: `${appellation.name} — the defined origin area` },
                  { k: "2027", v: "Season of harvest" },
                  { k: "A01", v: "Plot A, first processing run of that season" },
                ].map((x) => (
                  <div key={x.k} className="border-t border-line pt-4">
                    <dt className="font-mono text-lg font-bold text-ink">{x.k}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">{x.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Fields */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-[-0.01em]">
            What the record contains
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">
            Ten fields, published together at the lot&rsquo;s permanent URL. None
            of them are optional, and none are withheld pending a sales
            conversation.
          </p>
        </div>

        <dl className="mt-14">
          {lotFields.map((f) => (
            <div
              key={f.field}
              className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[14rem_1fr_1fr] sm:gap-8"
            >
              <dt className="font-bold">{f.field}</dt>
              <dd className="text-ink-2">{f.example}</dd>
              <dd className="text-sm leading-relaxed text-ink-3">{f.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Current state */}
      <section className="border-t border-line-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-2xl border border-line p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-3">
              Current lot register
            </p>
            <p className="mt-5 text-3xl font-bold text-ink">
              {currentState.lots} lots published
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-2">
              {currentState.note}
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-2">
              When the first lot exists, it appears here with its full certificate,
              and this page stops being a promise and starts being a register.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/origin/standard"
              className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              The rules lots are certified against
            </Link>
            <Link
              href="/quote"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
