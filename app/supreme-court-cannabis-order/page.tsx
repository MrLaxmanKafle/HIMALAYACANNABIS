import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";
import { prettyDate } from "@/lib/news";
import {
  orderUpdated,
  shortAnswer,
  ordered,
  notOrdered,
  audiences,
  watch,
  orderFaq,
  orderSources,
} from "@/lib/court-order";

const TITLE = "Nepal Supreme Court Cannabis Order, Explained";
const DESC =
  "What Nepal's Supreme Court ordered on cannabis, what it did not, when the three-month deadline falls, and what it means for farmers, Gandaki's act and foreign buyers.";
const URL = "https://himalayacannabis.com/supreme-court-cannabis-order/";
const IMG = `${URL}opengraph-image.png`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Himalaya Cannabis` },
  description: DESC,
  keywords: [
    "Nepal Supreme Court cannabis",
    "Nepal cannabis mandamus",
    "Nepal cannabis regulations deadline",
    "is cannabis legal in Nepal 2026",
    "Nepal cannabis export law",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    type: "article",
    publishedTime: "2026-11-26",
    modifiedTime: orderUpdated,
    images: [{ url: IMG, width: 2400, height: 1260, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [IMG] },
  alternates: { canonical: "/supreme-court-cannabis-order" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Nepal Cannabis Law Tracker", path: "/nepal-cannabis-tracker" },
      { name: "Supreme Court order", path: "/supreme-court-cannabis-order" },
    ]),
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESC,
      url: URL,
      datePublished: "2026-11-26",
      dateModified: orderUpdated,
      image: IMG,
      author: { "@id": "https://himalayacannabis.com/#organization" },
      publisher: { "@id": "https://himalayacannabis.com/#organization" },
      isPartOf: { "@id": "https://himalayacannabis.com/#website" },
      articleBody: shortAnswer,
      citation: orderSources.map((s) => s.url),
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-answer]"] },
    },
    {
      "@type": "FAQPage",
      mainEntity: orderFaq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function CourtOrderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title="The Supreme Court's cannabis order, explained"
        lede="What the court told the government to do, what it left alone, and what changes for anyone growing, buying or investing."
      />

      <section className="border-b border-line-2 bg-ground-2">
        <div className="mx-auto max-w-4xl px-5 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">
            The short answer
          </h2>
          <p data-answer className="mt-3 text-lg leading-relaxed text-ink">
            {shortAnswer}
          </p>
          <p className="mt-4 text-sm text-ink-3">
            Last reviewed{" "}
            <time dateTime={orderUpdated}>{prettyDate(orderUpdated)}</time>.
            Written from published reporting; we have not read the judgment
            itself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold">What did the court order?</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {ordered.map((o) => (
            <div key={o.h} className="grid gap-2 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-8">
              <dt className="font-bold">{o.h}</dt>
              <dd className="leading-relaxed text-ink-2">{o.p}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-2xl font-bold">What does the order not do?</h2>
          <ul className="mt-6 space-y-4">
            {notOrdered.map((n) => (
              <li key={n.slice(0, 40)} className="flex gap-3 leading-relaxed text-ink-2">
                <span aria-hidden className="mt-0.5 font-bold text-marigold">
                  ×
                </span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold">When is the deadline?</h2>
        <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-ink-2">
          <p>
            Three months from the date the government receives the order. The
            order became public on 1 November 2026, which is why early February
            2027 is the date most commentary assumes.
          </p>
          <p>
            That date is an inference. Several reports say the court decided
            the case in May 2025 and that the full text went unpublished for
            more than a year. The government has not said when it formally
            received the order, and until it does, nobody outside it can state
            the deadline with confidence.
          </p>
          <p className="text-ink">
            As of {prettyDate(orderUpdated)}, no draft regulations, drafting
            committee or timetable has been reported.
          </p>
        </div>
      </section>

      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-2xl font-bold">What does it mean in practice?</h2>
          <div className="mt-8 space-y-8">
            {audiences.map((a) => (
              <div key={a.who}>
                <h3 className="font-bold">{a.who}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{a.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl font-bold">What should you watch for next?</h2>
        <ol className="mt-6 max-w-2xl list-decimal space-y-3 pl-5 leading-relaxed text-ink-2">
          {watch.map((w) => (
            <li key={w.slice(0, 40)}>{w}</li>
          ))}
        </ol>
        <p className="mt-6 text-ink-2">
          We record each of these as it happens on the{" "}
          <Link href="/nepal-cannabis-news/" className="font-semibold text-marigold hover:text-ink">
            news page
          </Link>
          .
        </p>
      </section>

      <section className="border-t border-line-2">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-2xl font-bold">Common questions</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {orderFaq.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-2 max-w-2xl leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-14 text-lg font-bold">Reporting this page rests on</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {orderSources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-2 underline hover:text-ink"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-3">
            General information, not legal advice. Anyone acting on the order
            should read the judgment and take advice from counsel in Nepal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/nepal-cannabis-tracker/"
              className="rounded-full border border-line px-7 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              Full law tracker
            </Link>
            <Link
              href="/cannabis-license-consulting-nepal/"
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Licensing advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
