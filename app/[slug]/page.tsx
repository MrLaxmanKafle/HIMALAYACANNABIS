import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landingPages } from "@/lib/landing";
import { company } from "@/lib/company";
import { breadcrumbJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
  };
}

const statusLabel = {
  "in-development": "In development",
  planned: "Planned — licence-gated",
  available: "Available now",
} as const;

export default async function KeywordLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const related = page.related
    .map((r) => landingPages.find((p) => p.slug === r))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.metaTitle,
        description: page.description,
        url: `https://himalayacannabis.com/${page.slug}/`,
        provider: { "@type": "Organization", name: company.name },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: page.h1, path: `/${page.slug}` },
      ]),
      ...(page.howTo
        ? [
            {
              "@type": "HowTo",
              name: page.h1,
              description: page.description,
              step: page.howTo.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.name,
                text: s.text,
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line-2">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-20">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.14em] ${
              page.status === "available" ? "text-leaf" : "text-marigold"
            }`}
          >
            {statusLabel[page.status]}
          </p>
          <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-[-0.015em]">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            {page.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href={`/quote?product=${page.slug}`}
              className="inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              Request a quote
            </Link>
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent(page.inquirySubject)}`}
              className="text-sm font-semibold text-ink-2 hover:text-marigold"
            >
              or email us directly →
            </a>
          </div>
        </div>
      </section>

      {page.howTo && (
        <section className="border-b border-line-2 bg-ground-2">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-2xl font-bold">{page.h1}: step by step</h2>
            <ol className="mt-8 space-y-8">
              {page.howTo.map((s, i) => (
                <li key={s.name} className="flex gap-5">
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marigold text-sm font-bold text-ground"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{s.name}</p>
                    <p className="mt-1.5 leading-relaxed text-ink-2">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          {page.sections.map((s) => (
            <div key={s.h} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold">{s.h}</h2>
              {s.ps.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-ink-2">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <p className="mt-10 border-t border-line pt-5 text-sm leading-relaxed text-ink-3">
            {page.statusNote}
          </p>
        </div>

        <aside className="h-fit border-l border-line pl-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
            {page.offer.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {page.offer.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                <span aria-hidden className="text-marigold">—</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-2xl font-bold">Common questions</h2>
          <dl className="mt-6 divide-y divide-line">
            {page.faq.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
          Related
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/${r.slug}`}
              className="font-semibold text-marigold hover:text-ink"
            >
              {r.h1} →
            </Link>
          ))}
          <Link href="/land" className="font-semibold text-marigold hover:text-ink">
            Hemp &amp; cannabis farmland →
          </Link>
        </div>
      </section>
    </>
  );
}
