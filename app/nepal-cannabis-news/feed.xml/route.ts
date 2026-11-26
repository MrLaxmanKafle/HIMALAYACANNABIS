import { news } from "@/lib/news";
import { company } from "@/lib/company";

export const dynamic = "force-static";

const base = "https://himalayacannabis.com";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = news
    .map((n) => {
      const link = `${base}/nepal-cannabis-news/#${n.slug}`;
      return `    <item>
      <title>${esc(n.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${n.date}T06:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(n.tag)}</category>
      <description>${esc(n.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nepal Cannabis News — ${esc(company.name)}</title>
    <link>${base}/nepal-cannabis-news/</link>
    <atom:link href="${base}/nepal-cannabis-news/feed.xml" rel="self" type="application/rss+xml" />
    <description>Dated, sourced developments in cannabis and hemp regulation in Nepal.</description>
    <language>en</language>
    <lastBuildDate>${new Date(`${news[0].date}T06:00:00Z`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
