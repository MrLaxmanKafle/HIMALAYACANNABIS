import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";
import { appellation, clauses, standardVersion, standardDate } from "@/lib/origin";

const title = "The Marsyangdi Valley Origin Standard";
const description =
  "Nine published clauses defining what origin means for Himalaya Cannabis: defined area, soil qualification before planting, agrochemical prohibition, lot integrity, independent testing, and public certificates of analysis.";

export const metadata: Metadata = {
  title: "Origin Standard — Himalaya Cannabis",
  description,
  keywords: [
    "hemp origin standard",
    "cannabis appellation Nepal",
    "hemp soil testing standard",
    "hemp traceability standard",
    "certificate of analysis hemp",
  ],
  openGraph: {
    title,
    description,
    url: "https://himalayacannabis.com/origin/standard",
    type: "article",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/origin/standard" },
};

export default function StandardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Origin", path: "/origin" },
              { name: "Origin Standard", path: "/origin/standard" },
            ])
          ),
        }}
      />

      <PageHero
        title="Origin Standard"
        lede={`The rules material must meet to carry the ${appellation.name} mark. Published in full, versioned, and amendable only in the open.`}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[18rem_1fr]">
          {/* Document metadata rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <dl className="space-y-5 rounded-2xl border border-line p-6 text-sm">
              <div>
                <dt className="uppercase tracking-[0.14em] text-ink-3">Version</dt>
                <dd className="mt-1 font-semibold text-ink">{standardVersion}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-ink-3">Issued</dt>
                <dd className="mt-1 font-semibold text-ink">{standardDate}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-ink-3">Applies to</dt>
                <dd className="mt-1 leading-relaxed text-ink-2">
                  {appellation.name}, {appellation.district} District,{" "}
                  {appellation.province} — {appellation.altitudeBand}
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-ink-3">Status</dt>
                <dd className="mt-1 leading-relaxed text-ink-2">
                  Draft, open for comment. No lots have yet been certified against
                  it.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-ink-3">
              Comments and objections to{" "}
              <a href="mailto:info@himalayacannabis.com" className="text-ink-2 underline hover:text-ink">
                info@himalayacannabis.com
              </a>
              . Substantive changes will be published with the reason.
            </p>
          </aside>

          {/* Clauses */}
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-2">
              This document exists because &ldquo;premium&rdquo; and
              &ldquo;pristine&rdquo; are worth nothing in a market where every
              supplier says both. A standard you can read, cite, and catch us
              breaking is worth something. That is the only reason to publish one
              before you have a harvest to certify.
            </p>

            <ol className="mt-14">
              {clauses.map((c) => (
                <li
                  key={c.n}
                  className="grid gap-3 border-t border-line py-8 last:border-b sm:grid-cols-[3.5rem_1fr] sm:gap-6"
                >
                  <span className="text-sm font-semibold tabular-nums text-ink-3">
                    {String(c.n).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold">{c.title}</h2>
                    <p className="mt-3 leading-relaxed text-ink-2">{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-14 rounded-2xl border border-line p-8">
              <h2 className="text-lg font-bold">On enforcement</h2>
              <p className="mt-3 leading-relaxed text-ink-2">
                Nothing here is enforced by a regulator. There is no appellation
                authority for Himalayan hemp, and we are not pretending to be one
                — we wrote a rulebook for our own material and put it where
                buyers, journalists and competitors can read it. The enforcement
                mechanism is that it is public and dated. If a lot ever ships
                that does not meet these clauses, the evidence of the gap will be
                on our own website.
              </p>
              <p className="mt-4 leading-relaxed text-ink-2">
                If a competitor wants to adopt this standard, or a better one, we
                would rather that than have the category stay unregulated. Take
                it.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/origin"
                className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
              >
                ← Back to Origin
              </Link>
              <Link
                href="/traceability"
                className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
              >
                How a lot is recorded →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
