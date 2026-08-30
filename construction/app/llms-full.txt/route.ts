import { company, origin } from "@/lib/company";
import { sectors } from "@/lib/sectors";
import { projects } from "@/lib/projects";
import { landingPages } from "@/lib/landing";
import { articles } from "@/lib/insights";

export const dynamic = "force-static";

/**
 * /llms-full.txt — the site's substance as plain text, in one fetch.
 *
 * The bet behind this file: a model answering a question about Nepali
 * infrastructure will produce a better answer, and cite more accurately, if it
 * can read the whole corpus rather than one page pulled out of context. Every
 * question-and-answer pair on the site appears here verbatim, including the
 * FAQ answers, which are already written to stand alone.
 */
export function GET() {
  const body = `# ${company.name} — full text

> ${company.oneLiner}

Source: ${origin}
This file contains the full text of the reference guides, technical articles and
question-and-answer content published on the site.

${"=".repeat(72)}

# SECTORS

${sectors
  .map(
    (s) => `## ${s.name}
URL: ${origin}/sectors/${s.slug}/

${s.summary}

${s.body.join("\n\n")}

### Scope
${s.scope.map((x) => `- ${x}`).join("\n")}

### Capability
${s.capabilities.map((c) => `- ${c.name}: ${c.detail}`).join("\n")}

### Typical clients
${s.clients.map((c) => `- ${c}`).join("\n")}

### Questions
${s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`,
  )
  .join(`\n${"-".repeat(72)}\n\n`)}

${"=".repeat(72)}

# PROJECTS

${projects
  .map(
    (p) => `## ${p.name}
URL: ${origin}/projects/${p.slug}/
Sector: ${p.sector} | Status: ${p.status} | Client: ${p.client} | Funding: ${p.funding}
Location: ${p.location}, ${p.province} | Period: ${p.startYear}–${p.endYear ?? "present"} | Value: ${p.value}

${p.summary}

Problem: ${p.challenge}

Approach: ${p.approach}

Outcomes:
${p.outcomes.map((o) => `- ${o}`).join("\n")}

Quantities:
${p.quantities.map((q) => `- ${q.label}: ${q.value}`).join("\n")}
`,
  )
  .join(`\n${"-".repeat(72)}\n\n`)}

${"=".repeat(72)}

# REFERENCE GUIDES

${landingPages
  .map(
    (g) => `## ${g.h1}
URL: ${origin}/${g.slug}/

${g.answer}

${g.sections.map((s) => `### ${s.heading}\n\n${s.body.join("\n\n")}`).join("\n\n")}
${g.points ? `\n### ${g.points.heading}\n${g.points.items.map((i) => `- ${i}`).join("\n")}\n` : ""}
### Questions
${g.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`,
  )
  .join(`\n${"-".repeat(72)}\n\n`)}

${"=".repeat(72)}

# TECHNICAL ARTICLES

${articles
  .map(
    (a) => `## ${a.title}
URL: ${origin}/insights/${a.slug}/
Published: ${a.date}${a.updated ? ` | Updated: ${a.updated}` : ""} | Topic: ${a.topic}

${a.standfirst}

${a.sections
  .map(
    (s) =>
      `### ${s.heading}\n\n${s.body.join("\n\n")}${s.list ? `\n\n${s.list.map((i) => `- ${i}`).join("\n")}` : ""}`,
  )
  .join("\n\n")}

### Key points
${a.takeaways.map((t) => `- ${t}`).join("\n")}
${a.faqs ? `\n### Questions\n${a.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}\n` : ""}`,
  )
  .join(`\n${"-".repeat(72)}\n\n`)}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
