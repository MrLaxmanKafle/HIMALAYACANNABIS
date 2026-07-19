import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// All crawlers welcome — including AI/LLM crawlers, listed explicitly so the
// intent to be cited by answer engines is unambiguous.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://himalayacannabis.com/sitemap.xml",
  };
}
