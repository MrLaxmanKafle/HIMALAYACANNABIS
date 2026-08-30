/**
 * The site builds with `trailingSlash: true`, so `/x` permanently redirects to
 * `/x/`. next/link normalises the anchor it renders, but the raw `href` prop is
 * also serialised into the RSC flight payload — and Google's renderer reads the
 * payload, discovers the unslashed form, and files the page under "Page with
 * redirect" in Search Console.
 *
 * So internal hrefs have to carry the slash before they reach <Link>, not after.
 * Keep query strings and fragments after the slash: `/quote/?product=x`,
 * `/products/#fibre`.
 */
export function withSlash(href: string): string {
  // Leave anything that isn't a site-internal path alone.
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const split = href.search(/[?#]/);
  const path = split === -1 ? href : href.slice(0, split);
  const rest = split === -1 ? "" : href.slice(split);

  return path.endsWith("/") ? path + rest : `${path}/${rest}`;
}

/** Apply withSlash across a link list defined as data. */
export function withSlashes<T extends { href: string }>(links: T[]): T[] {
  return links.map((l) => ({ ...l, href: withSlash(l.href) }));
}
