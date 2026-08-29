import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  trackerUpdated,
  statusBoard,
  timeline,
  licenceRequirements,
  openQuestions,
  type StatusLevel,
} from "@/lib/tracker";

const TITLE = "Nepal Cannabis Law Tracker — Current Status";
const DESC =
  "The current status of cannabis and hemp regulation in Nepal: federal law, the Gandaki Province act, licensing gates, and what remains unresolved. Updated as things change.";
const URL = "https://himalayacannabis.com/nepal-cannabis-tracker/";
const IMG = `${URL}opengraph-image.png`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Himalaya Cannabis` },
  description: DESC,
  keywords: [
    "Nepal cannabis law",
    "cannabis legalization Nepal",
    "Gandaki cannabis act",
    "Nepal hemp licence",
    "is cannabis legal in Nepal",
    "Nepal cannabis regulation status",
  ],
  alternates: { canonical: "/nepal-cannabis-tracker" },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: company.name,
    publishedTime: trackerUpdated,
    modifiedTime: trackerUpdated,
    authors: [company.name],
    images: [{ url: IMG, width: 2400, height: 1260, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [IMG],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESC,
      abstract:
        "Recreational cannabis is illegal in Nepal. Industrial hemp is not yet lawful at federal level. Gandaki Province enacted a cannabis act on 3 August 2026 over the Province Chief's objection, but no district has been designated by gazette notice and no cultivation licence is known to have been issued to anyone.",
      datePublished: trackerUpdated,
      dateModified: trackerUpdated,
      inLanguage: "en",
      image: IMG,
      author: { "@id": "https://himalayacannabis.com/#organization" },
      publisher: { "@id": "https://himalayacannabis.com/#organization" },
      isPartOf: { "@id": "https://himalayacannabis.com/#website" },
      mainEntityOfPage: URL,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-answer]"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        ...statusBoard.map((s) => ({
          "@type": "Question",
          name: s.question,
          acceptedAnswer: { "@type": "Answer", text: `${s.answer}. ${s.detail}` },
        })),
        ...openQuestions.map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
      ],
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Nepal Cannabis Law Tracker", path: "/nepal-cannabis-tracker" },
    ]),
  ],
};

const dot: Record<StatusLevel, string> = {
  no: "bg-red-400",
  partial: "bg-marigold",
  yes: "bg-leaf",
  unknown: "bg-ink-3",
};

const prettyDate = new Date(trackerUpdated).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function TrackerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line-2">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-20">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">
              Industry Tracker
            </p>
            <p className="text-xs text-ink-3">
              Last reviewed <time dateTime={trackerUpdated}>{prettyDate}</time>
            </p>
          </div>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Where cannabis regulation in Nepal actually stands
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            There is no official public record of how far Nepal&apos;s cannabis
            framework has progressed, so we maintain one. It covers the whole
            sector, not our own position in it — including the parts that are
            inconvenient for us.
          </p>
        </div>
      </section>

      {/* Direct answer */}
      <section className="border-b border-line-2 bg-ground-2">
        <div className="mx-auto max-w-4xl px-5 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">
            The short answer
          </h2>
          <p data-answer className="mt-3 text-lg leading-relaxed text-ink">
            Recreational cannabis is illegal in Nepal. Industrial hemp is not yet
            lawful at federal level. Gandaki Province enacted a cannabis act on
            3 August 2026 over its Province Chief&apos;s written objection — but
            no district has been designated by gazette notice, no accredited
            testing laboratory exists in the country, and no cultivation licence
            is known to have been issued to anyone, including us.
          </p>
        </div>
      </section>

      {/* Status board */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold">Status at a glance</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {statusBoard.map((s) => (
            <div key={s.question} className="grid gap-2 py-6 sm:grid-cols-[1fr_1.3fr]">
              <dt className="flex items-start gap-3">
                <span
                  aria-hidden
                  className={`mt-2 size-2 shrink-0 rounded-full ${dot[s.status]}`}
                />
                <span>
                  <span className="block font-bold leading-snug">{s.question}</span>
                  <span className="mt-1 block text-sm font-semibold text-marigold">
                    {s.answer}
                  </span>
                </span>
              </dt>
              <dd className="text-sm leading-relaxed text-ink-2 sm:pt-0.5">
                {s.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Timeline */}
      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-2xl font-bold">How Gandaki&apos;s act became law</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
            The route it took matters, because it is the reason the act&apos;s
            standing is contested rather than settled.
          </p>
          <ol className="mt-10 space-y-0">
            {timeline.map((t, i) => (
              <li key={t.label} className="grid gap-x-6 gap-y-1 sm:grid-cols-[9rem_1fr]">
                <div className="flex items-start gap-4 sm:block">
                  <p
                    className={`text-sm font-semibold tabular-nums ${
                      t.weight === "major" ? "text-marigold" : "text-ink-3"
                    }`}
                  >
                    {t.date}
                  </p>
                </div>
                <div
                  className={`border-l-2 pb-8 pl-6 ${
                    t.weight === "major" ? "border-marigold" : "border-line"
                  } ${i === timeline.length - 1 ? "pb-0" : ""}`}
                >
                  <h3 className="font-bold leading-snug">{t.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <blockquote className="mt-10 border-l-2 border-marigold pl-6">
            <p className="text-lg italic leading-relaxed text-ink">
              &ldquo;Unless the federal law is amended or revised, it is not
              possible to legalize cannabis cultivation at the provincial
              level.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-ink-3">
              — Gandaki Province Chief, refusing assent, 24 July 2026 (as reported)
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Licence requirements */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold">What a licence is reported to require</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
          These provisions come from press reporting of the Gandaki act. The
          gazetted text and draft regulations have not been published, so treat
          every line below as indicative until they are.
        </p>
        <div className="mt-8 space-y-5">
          {licenceRequirements.map((r) => (
            <article key={r.item} className="rounded-xl border border-line bg-ground-2 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-marigold">
                {r.item}
              </h3>
              <p className="mt-2 leading-relaxed text-ink">{r.requirement}</p>
              <p className="mt-2 border-t border-line pt-2 text-sm leading-relaxed text-ink-3">
                <span className="font-semibold text-ink-2">What it means: </span>
                {r.implication}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Open questions */}
      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-2xl font-bold">What is still unresolved</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
            The questions below do not have confident answers yet. Anyone giving
            you one should be asked what they are relying on.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {openQuestions.map((q) => (
              <div key={q.q} className="py-6">
                <dt className="font-bold">{q.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2">{q.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sourcing + corrections */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold">How this page is sourced</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-ink-2">
          <p>
            Provisions of the Gandaki act described here come from press
            reporting. We have not obtained the gazetted text or the draft
            regulations, and we say so rather than implying a certainty we
            don&apos;t have. Trade figures are from UN COMTRADE (HS 5302).
            Federal law references are to the Narcotic Drugs (Control) Act, 2033
            (1976).
          </p>
          <p>
            This page is general information, not legal advice. Nobody should
            commit capital, plant a crop, or sign an agreement on the strength of
            a website — including this one. Obtain written advice from Nepali
            counsel.
          </p>
          <p className="border-t border-line pt-4">
            <strong className="text-ink">Found something wrong?</strong> Tell us
            and we will correct it. A tracker that is wrong is worse than no
            tracker at all, so corrections are genuinely welcome —{" "}
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent("[Tracker] Correction")}`}
              className="font-semibold text-marigold hover:text-ink"
            >
              {company.email}
            </a>
            .
          </p>
          <p className="text-sm text-ink-3">
            Journalists, researchers, and organisations are free to cite this
            page. Attribution to {company.name} with a link is appreciated.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          <Link href="/learn/is-cannabis-legal-in-nepal/" className="font-semibold text-marigold hover:text-ink">
            Is cannabis legal in Nepal? →
          </Link>
          <Link href="/cannabis-license-consulting-nepal/" className="font-semibold text-marigold hover:text-ink">
            Licence readiness →
          </Link>
          <Link href="/compliance/" className="font-semibold text-marigold hover:text-ink">
            How we comply →
          </Link>
        </div>
      </section>
    </>
  );
}
