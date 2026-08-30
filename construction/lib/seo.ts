import { company, origin, ids, siteStatus } from "@/lib/company";

/**
 * The site builds with `trailingSlash: true`, so every canonical URL ends in a
 * slash. Breadcrumb and JSON-LD `url` values are crawled directly, so they have
 * to match the canonical exactly — emitting the unslashed form makes Google
 * discover a URL that 308s to the real one and file the page under "Page with
 * redirect" instead of indexing it.
 */
export function canonical(path: string) {
  return `${origin}${path}/`.replace(/\/\/$/, "/");
}

/** OG image URL for a route. `postbuild` writes the .png copies. */
export function ogUrl(path: string) {
  return `${canonical(path)}opengraph-image.png`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

/**
 * An `FAQPage` node built from question/answer pairs.
 *
 * This is the highest-leverage markup on the site for answer engines: it hands
 * a retrieval system a pre-segmented question and a self-contained answer, so
 * the answer can be quoted without the model having to infer where it begins
 * and ends. Answers are written to stand alone for exactly that reason.
 */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  areaServed = "Nepal",
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: canonical(path),
    provider: { "@id": ids.organization },
    areaServed: { "@type": "Country", name: areaServed },
  };
}

/**
 * Wraps nodes into one `@graph` and serialises them for a `<script>` tag.
 * `<` is escaped to its unicode form so a stray angle bracket in content can
 * never close the script element early.
 */
export function jsonLdScript(nodes: object[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  }).replace(/</g, "\\u003c");
}

/**
 * Robots directives. While the site carries placeholder project and licence
 * data, nothing may be indexed — see `siteStatus` in lib/company.ts.
 */
export const robotsDirective =
  siteStatus === "live"
    ? { index: true, follow: true }
    : { index: false, follow: false };

/** Standard page metadata. Every route builds its metadata through this. */
export function pageMeta({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
}) {
  const url = canonical(path);
  const image = ogUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: `${path}/`.replace(/\/\/$/, "/") },
    robots: robotsDirective,
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      siteName: company.name,
      images: [{ url: image, width: 2400, height: 1260, alt: title }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
