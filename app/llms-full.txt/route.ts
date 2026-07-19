import { articles } from "@/lib/articles";
import { company } from "@/lib/company";

export const dynamic = "force-static";

const base = "https://himalayacannabis.com";

export function GET() {
  const body = `# ${company.name} — Full Content

Source: ${base} · Contact: ${company.email}
${company.name} is Nepal's compliance-first medical and industrial hemp company. Licensed activities only; THC below 0.3% for industrial hemp; certified lab testing; no recreational transactions.

${articles
  .map(
    (a) => `---

# ${a.title}

URL: ${base}/learn/${a.slug}/
Published: ${a.date}

${a.lede}

Key points:
${a.keyPoints.map((k) => `- ${k}`).join("\n")}

${a.sections.map((s) => `## ${s.h}\n\n${s.ps.join("\n\n")}`).join("\n\n")}

FAQ:
${a.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`
  )
  .join("\n")}`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
