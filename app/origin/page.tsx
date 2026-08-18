import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  appellation,
  parameters,
  currentState,
  standardVersion,
  type ClaimStatus,
} from "@/lib/origin";

const title = "Origin — A Valley We Have Not Named Yet";
const description =
  "A mid-hill valley in Gandaki Province, Nepal, 1,200–2,200 m. What we can prove about this growing area, what we have not measured yet, and why we are not naming it until the plots are signed.";

export const metadata: Metadata = {
  title: "Origin — Our Growing Area",
  description,
  keywords: [
    "Himalayan hemp terroir",
    "Nepal hemp origin",
    "Gandaki hemp cultivation",
    "hemp soil heavy metals",
    "high altitude hemp Nepal",
    "Nepali landrace cannabis",
  ],
  openGraph: {
    title,
    description,
    url: "https://himalayacannabis.com/origin",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/origin" },
};

const statusLabel: Record<ClaimStatus, string> = {
  measured: "Measured",
  reference: "Reference",
  pending: "Not yet measured",
};

const statusClass: Record<ClaimStatus, string> = {
  measured: "border-marigold/50 bg-marigold/10 text-marigold",
  reference: "border-line text-ink-2",
  pending: "border-line-2 text-ink-3",
};

export default function OriginPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Origin", path: "/origin" },
            ])
          ),
        }}
      />

      <PageHero
        title="A valley we have not named yet"
        lede={`${appellation.altitudeBand} · ${appellation.latitude} · ${appellation.province}, ${appellation.country}. A defined growing area, an honest account of what we have and have not measured in it, and a plain reason for the one thing we are withholding.`}
      />

      {/* The premise — stated plainly, including what we cannot claim */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
              Why origin, and why not yet
            </p>
            <h2 className="mt-5 text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.01em]">
              Every hemp supplier says pristine. Almost none of them show you a
              soil panel.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Terroir is not a mood. In wine it means a place whose soil, altitude
              and climate leave a measurable signature in the crop — measurable
              being the operative word. Applied to hemp it means something
              specific and commercially serious, because hemp is a{" "}
              <span className="text-ink">hyperaccumulator</span>: it is used
              deliberately to pull cadmium, lead and arsenic out of poisoned
              ground. Whatever is in the soil ends up in the plant, and from
              there in the oil.
            </p>
            <p>
              That is why hemp consignments get turned away at borders, and it is
              why farmland with no industrial history is worth more than
              marketing copy about mountains. Much of the land in this valley has
              never seen a synthetic input. We think that is our strongest asset.
              We have not proved it yet.
            </p>
            <p className="text-ink">
              So this page is not a claim that our hemp is superior. It is the
              instrument we are building to find out — published before we have
              anything to sell, so that the record cannot be tidied up later.
            </p>
          </div>
        </div>
      </section>

      {/* Why the area is unnamed — answer the obvious objection immediately */}
      <section className="border-t border-line-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 rounded-2xl border border-line p-8 sm:p-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
                The one thing we are withholding
              </p>
              <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-[1.14] tracking-[-0.01em]">
                We name the province. We do not yet name the valley.
              </h2>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-t border-line pt-3">
                  <dt className="text-ink-3">Published</dt>
                  <dd className="text-right font-semibold text-ink">
                    {appellation.province}, {appellation.country}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-line pt-3">
                  <dt className="text-ink-3">Published</dt>
                  <dd className="text-right font-semibold text-ink">
                    {appellation.altitudeBand} · {appellation.latitude}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-line pt-3">
                  <dt className="text-ink-3">Withheld</dt>
                  <dd className="text-right font-semibold text-ink-2">
                    {appellation.disclosure.withheld}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-5 leading-relaxed text-ink-2">
              <p>{appellation.disclosure.why}</p>
              <p>{appellation.disclosure.trigger}</p>
              <p className="text-ink">
                We would rather say plainly that we are holding something back,
                and why, than be vague and hope nobody notices. Buyers who need
                the location before then can have it under mutual
                non-disclosure — it is clause 2 of the standard, not a
                favour.
              </p>
              <p className="text-sm text-ink-3">
                Nothing else on this page is withheld. Every measurement we take
                is published whether or not it flatters us, including the ones
                that are still blank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current state — the honesty anchor */}
      <section className="border-y border-line-2 bg-ink/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { n: currentState.plotsQualified, l: "Plots soil-qualified" },
              { n: currentState.soilPanelsRun, l: "Soil panels run" },
              { n: currentState.lots, l: "Lots produced" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-5xl font-extrabold tabular-nums text-ink">{s.n}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-ink-3">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl leading-relaxed text-ink-2">
            {currentState.note}
          </p>
        </div>
      </section>

      {/* Parameters — the substance */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-[-0.01em]">
            The growing envelope
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">
            Eight parameters define this origin. Three we can cite from geography
            and published work. Five we have to measure ourselves, and have not.
            Each is marked accordingly — a habit we would rather build now than
            adopt after somebody catches us.
          </p>
        </div>

        <dl className="mt-14">
          {parameters.map((p) => (
            <div
              key={p.label}
              className="grid gap-4 border-t border-line py-8 last:border-b sm:grid-cols-[16rem_1fr] sm:gap-10"
            >
              <div>
                <dt className="text-lg font-bold">{p.label}</dt>
                <p className="mt-1.5 text-ink-2">{p.value}</p>
                <span
                  className={`mt-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] ${statusClass[p.status]}`}
                >
                  {statusLabel[p.status]}
                </span>
              </div>
              <dd className="leading-relaxed text-ink-2">
                {p.detail}
                {p.source && (
                  <span className="mt-3 block text-sm text-ink-3">
                    Source — {p.source}
                  </span>
                )}
                {p.expected && (
                  <span className="mt-3 block text-sm text-ink-3">
                    Expected — {p.expected}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The standard */}
      <section className="border-t border-line-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
              The rulebook
            </p>
            <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.01em]">
              We wrote down what origin means here, so it can be held against us
            </h2>
            <p className="mt-5 leading-relaxed text-ink-2">
              Ten clauses covering the defined area, when we disclose it, soil
              qualification before
              planting, the agrochemical prohibition, lot integrity, independent
              testing, public certificates, named growers, and the rule that we
              state no figure we cannot show the paperwork for.
            </p>
            <Link
              href="/origin/standard"
              className="mt-8 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Read the Origin Standard {standardVersion.split(" ")[0]}
            </Link>
          </div>

          <div className="rounded-2xl border border-line p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-3">
              Clause 8
            </p>
            <blockquote className="mt-4 text-xl leading-relaxed text-ink">
              &ldquo;No environmental or quality figure is stated as fact on our
              materials until the dated result exists and is published. A claim we
              cannot show the paperwork for is a claim we do not make.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm leading-relaxed text-ink-3">
              This is the clause that costs us something. It is the reason five of
              the eight parameters above read &ldquo;not yet measured&rdquo;
              instead of something more flattering.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="border-t border-line-2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-marigold">
                Genetics
              </p>
              <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.01em]">
                The valleys this plant came from
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Nepal is one of the foundational cannabis gene pools on earth.
                &ldquo;Nepalese&rdquo; sits in the documented ancestry of a large
                share of the cultivars grown commercially today — genetics carried
                out of these valleys through the charas trade and into seed banks
                in Amsterdam and California, where they were crossed, renamed and
                sold back to the world.
              </p>
              <p>
                That heritage is real, and by geography it is ours. It is also,
                on its own, worth nothing commercially. A landrace claim without a
                chemotype behind it is a story. So every cultivar we plant gets
                profiled, and the profiles get published against the plot and the
                altitude they came from.
              </p>
              <p className="text-ink">
                If several seasons of that record show this valley expresses no
                differently from hemp at 50° N, we will publish that too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line-2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-16">
          <div>
            <h2 className="text-2xl font-bold">Follow the record, or test it</h2>
            <p className="mt-2 max-w-xl text-ink-2">
              Every lot we ever produce will carry a public certificate at a
              permanent URL. Here is the schema, published before lot one.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/traceability"
              className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              How traceability works
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
