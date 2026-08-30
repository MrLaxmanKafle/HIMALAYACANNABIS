import type { MetadataRoute } from "next";
import { origin, siteStatus } from "@/lib/company";
import { sectors } from "@/lib/sectors";
import { projects } from "@/lib/projects";
import { landingPages } from "@/lib/landing";
import { articles } from "@/lib/insights";

export const dynamic = "force-static";

/**
 * Real content-change dates.
 *
 * Google ignores — and actively distrusts — a sitemap whose lastmod is "now"
 * on every URL at every build. Set this by hand when the underlying content
 * actually changes; do not stamp it from the build clock.
 */
const CONTENT_UPDATED = "2026-08-30";

type Entry = { path: string; lastmod: string; priority: number };

const staticRoutes: Entry[] = [
  { path: "", lastmod: CONTENT_UPDATED, priority: 1 },
  { path: "/sectors", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/projects", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/prequalification", lastmod: CONTENT_UPDATED, priority: 0.9 },
  { path: "/capabilities", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/guides", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/insights", lastmod: CONTENT_UPDATED, priority: 0.8 },
  { path: "/equipment", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/quality-safety", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/about", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/faq", lastmod: CONTENT_UPDATED, priority: 0.7 },
  { path: "/contact", lastmod: CONTENT_UPDATED, priority: 0.6 },
  { path: "/careers", lastmod: CONTENT_UPDATED, priority: 0.5 },
  { path: "/suppliers", lastmod: CONTENT_UPDATED, priority: 0.5 },
  { path: "/privacy", lastmod: CONTENT_UPDATED, priority: 0.3 },
  { path: "/terms", lastmod: CONTENT_UPDATED, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // A draft site with placeholder credentials should not be submitting URLs
  // for indexing. Ship an empty sitemap rather than a misleading one.
  if (siteStatus !== "live") return [];

  const entries: Entry[] = [
    ...staticRoutes,
    ...sectors.map((s) => ({
      path: `/sectors/${s.slug}`,
      lastmod: CONTENT_UPDATED,
      priority: 0.85,
    })),
    ...projects.map((p) => ({
      path: `/projects/${p.slug}`,
      lastmod: CONTENT_UPDATED,
      // Ongoing work is the freshest evidence of current capacity.
      priority: p.status === "ongoing" ? 0.75 : 0.7,
    })),
    ...landingPages.map((p) => ({
      path: `/${p.slug}`,
      lastmod: CONTENT_UPDATED,
      priority: 0.75,
    })),
    // Articles carry their own real publication date.
    ...articles.map((a) => ({
      path: `/insights/${a.slug}`,
      lastmod: a.updated ?? a.date,
      priority: 0.7,
    })),
  ];

  return entries.map((e) => ({
    url: `${origin}${e.path}/`.replace(/\/\/$/, "/"),
    lastModified: e.lastmod,
    changeFrequency: e.path === "" ? "weekly" : "monthly",
    priority: e.priority,
  }));
}
