const base = "https://himalayacannabis.com";

/**
 * The site is built with `trailingSlash: true`, so every canonical URL ends in
 * a slash. Breadcrumb `item` URLs are crawled, so they have to match — emitting
 * the unslashed form makes Google discover a URL that 308s to the real one and
 * report the page under "Page with redirect".
 */
function canonical(path: string) {
  return `${base}${path}/`.replace(/\/\/$/, "/");
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}
