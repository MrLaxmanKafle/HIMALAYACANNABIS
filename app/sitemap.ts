import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { landingPages } from "@/lib/landing";

export const dynamic = "force-static";

const base = "https://himalayacannabis.com";

// Real content-change dates. Google ignores (and distrusts) a sitemap whose
// lastmod is "now" on every URL at every build, so these are set by hand when
// the underlying content actually changes — not stamped from build time.
const CONTENT_UPDATED = "2026-08-13";

type Entry = { path: string; lastmod: string; priority: number };

const staticRoutes: Entry[] = [
  { path: "", lastmod: CONTENT_UPDATED, priority: 1 },
  { path: "/origin", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/origin/standard", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/traceability", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/products", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/quote", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/services", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/about", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/investors", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/land", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/hemp-wellness-valley", lastmod: CONTENT_UPDATED, priority: 0.6 },
  { path: "/careers", lastmod: CONTENT_UPDATED, priority: 0.5 },
  { path: "/volunteer", lastmod: CONTENT_UPDATED, priority: 0.5 },
  { path: "/ne", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/learn", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/nepal-cannabis-tracker", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/compliance", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/contact", lastmod: CONTENT_UPDATED, priority: 0.6 },
  { path: "/faq", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/press", lastmod: CONTENT_UPDATED, priority: 0.5 },
  { path: "/privacy", lastmod: CONTENT_UPDATED, priority: 0.3 },
  { path: "/terms", lastmod: CONTENT_UPDATED, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    ...staticRoutes,
    ...landingPages.map((p) => ({
      path: `/${p.slug}`,
      lastmod: CONTENT_UPDATED,
      // Lines available or in development rank ahead of licence-gated concepts.
      priority: p.status === "available" ? 0.8 : p.status === "in-development" ? 0.7 : 0.6,
    })),
    // Articles carry their own real publication date.
    ...articles.map((a) => ({
      path: `/learn/${a.slug}`,
      lastmod: a.date,
      priority: 0.7,
    })),
  ];

  return entries.map((e) => ({
    url: `${base}${e.path}/`.replace(/\/\/$/, "/"),
    lastModified: e.lastmod,
    changeFrequency: e.path === "" ? "weekly" : "monthly",
    priority: e.priority,
  }));
}
