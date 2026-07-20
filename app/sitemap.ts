import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { landingPages } from "@/lib/landing";

export const dynamic = "force-static";

const base = "https://himalayacannabis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/services",
    "/investors",
    "/land",
    ...landingPages.map((p) => `/${p.slug}`),
    "/learn",
    ...articles.map((a) => `/learn/${a.slug}`),
    "/compliance",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${base}${route}/`.replace(/\/\/$/, "/"),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7,
  }));
}
