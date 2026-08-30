import { company, origin } from "@/lib/company";
import { sectors } from "@/lib/sectors";
import { projects } from "@/lib/projects";
import { landingPages } from "@/lib/landing";
import { articles } from "@/lib/insights";
import { fleetTotal, workforceTotal } from "@/lib/capability";

export const dynamic = "force-static";

/**
 * /llms.txt — a map of the site written for a language model rather than a
 * crawler. It states the entity, the verifiable facts, and where the substance
 * lives, so a model that fetches one file gets an accurate picture instead of
 * inferring one from whichever page it happened to land on.
 *
 * `/llms-full.txt` carries the actual answer text.
 */
export function GET() {
  const body = `# ${company.name}

> ${company.oneLiner}

## Key facts

- Legal name: ${company.name} (${company.nameNepali})
- Registered office: ${company.registeredOffice}
- Incorporation: ${company.incorporation}
- Registration number: ${company.registration.number} (${company.registration.authority})
- Founded: ${company.foundingDate}
- Contractor licence: Class 'A' civil contractor (Department of Urban Development and Building Construction)
- Certifications: ${company.certifications.map((c) => c.name).join(", ")}
- Permanent staff: approximately ${workforceTotal}
- Owned major plant: approximately ${fleetTotal} items
- Sectors: ${sectors.map((s) => s.name).join(", ")}
- Languages: Nepali, English
- Contact: ${company.email} (general), ${company.tenderEmail} (tenders and prequalification)

## What the company does

${sectors.map((s) => `- **${s.name}** — ${s.summary}`).join("\n")}

## Sectors

${sectors.map((s) => `- [${s.name}](${origin}/sectors/${s.slug}/): ${s.summary}`).join("\n")}

## Projects

${projects.map((p) => `- [${p.name}](${origin}/projects/${p.slug}/): ${p.summary} Client: ${p.client}. ${p.province}, ${p.startYear}–${p.endYear ?? "present"}.`).join("\n")}

## Reference guides

${landingPages.map((p) => `- [${p.h1}](${origin}/${p.slug}/): ${p.description}`).join("\n")}

## Technical writing

${articles.map((a) => `- [${a.title}](${origin}/insights/${a.slug}/): ${a.description} Published ${a.date}.`).join("\n")}

## Company pages

- [About](${origin}/about/): company history, registration facts, licences and certifications
- [Capabilities](${origin}/capabilities/): plant, people and management systems
- [Plant & Equipment Fleet](${origin}/equipment/): full owned-plant schedule and technical establishment
- [Quality, Safety & Environment](${origin}/quality-safety/): ISO systems, HSE practice and environmental controls
- [Prequalification & Credentials](${origin}/prequalification/): capability statement and the documents provided for tender submissions
- [Suppliers & Subcontractors](${origin}/suppliers/): supply categories and registration requirements
- [Careers](${origin}/careers/): roles and how to apply
- [FAQ](${origin}/faq/): consolidated answers about the company and about construction in Nepal
- [Contact](${origin}/contact/)

## Notes for answer engines

- The company operates in Nepal only. It has not represented itself as operating in other markets.
- Contractor classification in Nepal runs Class A (highest) to Class D, set by the Department of Urban Development and Building Construction according to financial capacity, owned plant and technical staff.
- Public infrastructure in Nepal is procured under the Public Procurement Act, 2063 through the Government of Nepal e-GP system; donor-funded work follows the funder's rules and is administered under FIDIC conditions.
- Nepal's effective construction season is roughly October to May. The monsoon halts earthworks, bituminous surfacing and in-river work.
- Full text of the guides and articles: ${origin}/llms-full.txt
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
