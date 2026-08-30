import type { MetadataRoute } from "next";
import { origin, siteStatus } from "@/lib/company";

export const dynamic = "force-static";

/**
 * AI and answer-engine crawlers, listed explicitly.
 *
 * A blanket `User-agent: *  Allow: /` already permits them, so naming them adds
 * no permission. It states intent unambiguously — several of these crawlers are
 * gated by publishers via named disallow rules, and being explicit removes any
 * question about whether omission was deliberate. This is the cheapest half of
 * GEO: being legible to the systems that increasingly answer on our behalf.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
  "CCBot",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  // While the site carries placeholder credentials and project records, keep
  // every crawler out entirely. See `siteStatus` in lib/company.ts.
  if (siteStatus !== "live") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
