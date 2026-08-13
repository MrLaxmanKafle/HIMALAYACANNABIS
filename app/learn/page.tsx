import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { articles } from "@/lib/articles";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Learn — Cannabis & Hemp in Nepal",
  description:
    "Plain-language guides to cannabis, hemp, marijuana, and CBD in Nepal: the law, the history, the products, and the emerging medical and industrial framework.",
  keywords: [
    "cannabis Nepal",
    "hemp Nepal",
    "marijuana Nepal",
    "CBD Nepal",
    "bhango",
    "Nepal cannabis law",
  ],
  openGraph: {
    title: "Learn — Cannabis & Hemp in Nepal",
    description:
      "Plain-language guides to cannabis, hemp, marijuana, and CBD in Nepal: the law, the history, the products, and the emerging medical and industrial framework.",
    url: "https://himalayacannabis.com/learn/",
    type: "website",
    images: [
      {
        url: "https://himalayacannabis.com/learn/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Learn — Cannabis & Hemp in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn — Cannabis & Hemp in Nepal",
    description:
      "Plain-language guides to cannabis, hemp, marijuana, and CBD in Nepal — the law, the history, and the products.",
    images: ["https://himalayacannabis.com/learn/opengraph-image.png"],
  },
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title="Learn: Cannabis & Hemp in Nepal"
        lede="Plain-language, compliance-first guides to the plant, the law, and the industry — from the people building Nepal's licensed hemp sector."
      />

      <section className="mx-auto max-w-3xl px-5 py-10">
        <div className="divide-y divide-line border-y border-line">
          {articles.map((a) => (
            <Link key={a.slug} href={`/learn/${a.slug}`} className="group block py-8">
              <h2 className="text-2xl font-bold transition-colors group-hover:text-marigold">
                {a.title}
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{a.lede}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-marigold">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
