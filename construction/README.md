# Construction & Infrastructure Site

A self-contained Next.js site for the construction arm — roads, bridges, tunnels,
water infrastructure and public buildings in Nepal. It lives in this repository
but is **a separate site with its own domain and its own build**; it shares no
routes, styles or data with the cannabis site at the repository root.

That separation is deliberate. Government procurement officers, prequalification
committees and donor programme staff are the audience here, and topical authority
for "road construction contractor" and for "hemp seed oil" do not help each
other. Keeping them on separate domains protects both.

```bash
cd construction
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

## Before launch — required

The site ships in **draft** posture: `siteStatus` in `lib/company.ts` is
`"draft"`, which serves `robots.txt` as `Disallow: /`, emits an empty sitemap,
and renders a banner on every page saying the content is placeholder.

That is because the company name, project register, licence numbers and capacity
figures are **invented placeholders**, realistic in shape so the templates could
be built and reviewed. Publishing invented public-sector project records and
licence numbers would be a live procurement and misrepresentation problem, so
the flag stays where it is until a person has done this list:

1. **`lib/company.ts`** — the only file with brand identity in it. Name, short
   name, Nepali name, domain, emails, phone, founding date, OCR registration
   number, PAN, licence references, certification references, headline stats.
   Nothing else in the codebase hard-codes a company name or a URL.
2. **`lib/projects.ts`** — replace the entire placeholder register with real
   projects. Keep the shape; the page templates, schema markup and the
   prequalification table all read from it.
3. **`lib/capability.ts`** — real fleet counts and real establishment numbers.
   These appear in prequalification submissions and are physically verifiable.
4. **`public/CNAME`** — the real domain.
5. **`app/sitemap.ts`** — set `CONTENT_UPDATED` to a real content-change date.
6. Flip **`siteStatus`** to `"live"`.

Everything else — the sector pages, guides and articles — is general engineering
and procurement material that is true independently of who publishes it, and
does not need replacing.

## Structure

| Path | Purpose |
| --- | --- |
| `lib/company.ts` | **Single source of brand truth.** Name, domain, registration, licences, stats. Rename the company here and the whole site follows. |
| `lib/sectors.ts` | The five sectors — scope, capability, clients, FAQs. The site's topical spine. |
| `lib/projects.ts` | Project register. Feeds `/projects`, sector pages and the prequalification table. |
| `lib/capability.ts` | Owned plant schedule, technical establishment, management systems. |
| `lib/landing.ts` | Programmatic keyword guides at `/<slug>/`. |
| `lib/insights.ts` | Long-form technical articles — the primary citation asset. |
| `lib/seo.ts` | Canonicals, JSON-LD helpers, page metadata, robots directive. |
| `lib/href.ts` | Trailing-slash enforcement on internal hrefs. |
| `lib/og-image.tsx` | Shared OG card renderer. |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home — positioning, sectors, project record, method, insights, FAQ |
| `/sectors/` + `/sectors/[slug]/` | Five sector pages with scope, capability, clients, FAQs |
| `/projects/` + `/projects/[slug]/` | Project register and case studies with quantities |
| `/capabilities/` | Plant, people and systems overview |
| `/equipment/` | Full owned-plant schedule and technical establishment |
| `/quality-safety/` | ISO systems, HSE practice, environmental controls |
| `/prequalification/` | Capability statement and PQ document dossier |
| `/insights/` + `/insights/[slug]/` | Technical articles |
| `/guides/` + `/[slug]/` | Programmatic reference guides |
| `/about/`, `/careers/`, `/suppliers/`, `/contact/`, `/faq/` | Company pages |
| `/privacy/`, `/terms/` | Legal |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/manifest.webmanifest` | Machine-readable |

See [`SEO.md`](SEO.md) for how search, answer-engine and generative-engine
optimisation are actually implemented, and what still needs doing off-site.

## Deployment

The build is a static export (`output: "export"`) — plain HTML/CSS/JS in `out/`,
servable from any CDN.

**GitHub Pages can only serve one site per repository**, and the repository root
already deploys the cannabis site. So this site needs one of:

- its own repository (move `construction/` to its root and reuse the workflow at
  the repo root), or
- Cloudflare Pages / Netlify / Vercel, with build command `npm run build`,
  output directory `out`, and root directory `construction`.

`.github/workflows/construction-ci.yml` builds and lints this project on every
push that touches it, so the site is verified even though it is not deployed
from this repository.

`npm run build` runs `postbuild`, which copies each extensionless
`opengraph-image` to `opengraph-image.png` — GitHub Pages and most CDNs serve by
extension, and social crawlers reject images that arrive as
`application/octet-stream`.

## Content conventions

- **Every internal href ends in a slash.** `withSlash()` in `lib/href.ts`
  enforces it before the href reaches `<Link>`, because the raw prop is
  serialised into the RSC payload and Google's renderer reads it.
- **Visible FAQ copy and `FAQPage` markup come from the same array.** Never
  write one without the other; mismatched structured data is a violation, not
  an enhancement.
- **Answers are written to stand alone.** Every FAQ answer and guide lead
  restates its subject instead of relying on the question for context, because
  that is how a retrieval system will quote it.
- **No invented facts.** Where a real figure is not available, the placeholder
  is marked as one and `siteStatus` stays `"draft"`.
