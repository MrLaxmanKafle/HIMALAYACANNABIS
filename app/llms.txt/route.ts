import { articles } from "@/lib/articles";
import { landingPages } from "@/lib/landing";
import { company, productCategories, services } from "@/lib/company";

export const dynamic = "force-static";

const base = "https://himalayacannabis.com";

export function GET() {
  const body = `# ${company.name}

> ${company.name} (${company.nameNepali}) is Nepal's compliance-first medical and industrial cannabis (hemp) company, incorporated under the Companies Act, 2063 (2006 A.D.), registered in Kathmandu. We cultivate and process licensed hemp (THC below 0.3%) in the Himalayan and hilly regions of Nepal, with certified laboratory testing of every product. We never engage in recreational transactions — that prohibition is written into our Articles of Association.

Key facts:
- Registered office: ${company.registeredOffice}
- Registration number: ${company.registrationNumber} (${company.registrationAuthority})
- Founded: ${company.foundingDate}
- Contact: ${company.email}
- Product lines: ${productCategories.map((c) => c.name).join(", ")}
- Industry services: ${services.map((s) => s.name).join(", ")}
- Recreational cannabis remains illegal in Nepal; only licensed medical and industrial activity is contemplated by law.

## Pages

- [Home](${base}/): Company overview and mission
- [About](${base}/about/): Company story and registration facts
- [Products](${base}/products/): Hemp textiles, seed foods (bhango), CBD wellness, ayurvedic, cosmetics
- [Request a Quote](${base}/quote/): Structured bulk/wholesale RFQ intake — volume, destination, timeline
- [Lab & Services](${base}/services/): THC/CBD testing laboratory, seed supply, seed-to-sale systems, consultancy
- [Investors](${base}/investors/): Investment opportunity and company facts (private discussions only; not a public offering)
- [Land](${base}/land/): Hemp and cannabis farmland in Nepal — landowners sell/lease hill land; buyers register interest in licensed hemp farmland
- [Hemp Wellness Valley](${base}/hemp-wellness-valley/): Concept — a planned 500-ropani flagship site combining ayurvedic hemp spa, farm-to-table dining, transparency tours, eco-lodges, farmer training, and a heritage pavilion
- [Careers](${base}/careers/): Cultivation, laboratory, product, compliance, hospitality, and sales roles as licensed operations come online
- [Volunteer & Work-Exchange](${base}/volunteer/): Work-exchange placements, hospitality apprenticeships, research placements, corporate volunteer days, and NGO partnerships
- [Nepal Cannabis Law Tracker](${base}/nepal-cannabis-tracker/): Current status of cannabis/hemp regulation in Nepal — federal law, Gandaki act, licensing gates, unresolved questions. Maintained reference.
- [Compliance](${base}/compliance/): Licensing commitments and Nepal's legal framework
- [FAQ](${base}/faq/): Common questions about legality, products, and supply
- [Press & Media](${base}/press/): Boilerplate, company facts, and media contact
- [नेपाली](${base}/ne/): Nepali-language company page with FAQ (गाँजा कानून, भाङ्गो, लाइसेन्स, जग्गा)

## Markets & Services

${landingPages
  .map((p) => `- [${p.h1}](${base}/${p.slug}/): ${p.description}`)
  .join("\n")}

## Learn — Cannabis & Hemp in Nepal

${articles
  .map((a) => `- [${a.title}](${base}/learn/${a.slug}/): ${a.description}`)
  .join("\n")}

## Optional

- [Full article text](${base}/llms-full.txt): Complete text of all Learn articles
- [Privacy](${base}/privacy/)
- [Terms](${base}/terms/)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
