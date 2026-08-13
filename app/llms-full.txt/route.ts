import { articles } from "@/lib/articles";
import { landingPages } from "@/lib/landing";
import { company } from "@/lib/company";

export const dynamic = "force-static";

const base = "https://himalayacannabis.com";

export function GET() {
  const body = `# ${company.name} — Full Content

Source: ${base} · Contact: ${company.email}
${company.name} (${company.nameNepali}) is Nepal's compliance-first medical and industrial hemp company, incorporated under the Companies Act, 2063 (2006 A.D.), registration number ${company.registrationNumber}, registered office in ${company.registeredOffice}, founded ${company.foundingDate}. Licensed activities only; THC below 0.3% for industrial hemp; certified lab testing; no recreational transactions.

## Markets & Services

${landingPages
  .map(
    (p) => `---

# ${p.h1}

URL: ${base}/${p.slug}/
Status: ${p.status}

${p.lede}

${p.sections.map((s) => `## ${s.h}\n\n${s.ps.join("\n\n")}`).join("\n\n")}
${p.howTo ? `\nSteps:\n${p.howTo.map((s, i) => `${i + 1}. ${s.name} — ${s.text}`).join("\n")}\n` : ""}
${p.offer.title}:
${p.offer.items.map((i) => `- ${i}`).join("\n")}

${p.statusNote}

FAQ:
${p.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`
  )
  .join("\n")}

## Learn — Cannabis & Hemp in Nepal

${articles
  .map(
    (a) => `---

# ${a.title}

URL: ${base}/learn/${a.slug}/
Published: ${a.date}

${a.lede}

ANSWER: ${a.answer}

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
