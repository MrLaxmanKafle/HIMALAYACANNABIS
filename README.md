# himalayacannabis.com

Official website of **Himalaya Cannabis Pvt. Ltd.** (हिमालय क्यानाबिस प्रा.लि.) — a Nepali
company cultivating and processing licensed medical and industrial cannabis (hemp)
in the Himalayan and hilly regions of Nepal.

Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Brand home — hero, compliance strip, product categories, services, mission |
| `/about` | Company story and registration facts |
| `/products` | Product catalogue: textiles & fibre, seed & foods, CBD & wellness, ayurvedic, cosmetics |
| `/services` | THC/CBD testing lab, seed supply, seed-to-sale systems, consultancy & training |
| `/compliance` | Licence register and the legal framework (from the MoA/AoA) |
| `/nepal-cannabis-tracker` | Nepal Cannabis Law Tracker — status board, timeline, licence requirements |
| `/investors` | Investor overview and interest form |
| `/land` | Hemp farmland — buy, sell, or lease |
| `/quote` | Bulk & wholesale RFQ form |
| `/learn`, `/learn/[slug]` | Articles on cannabis and hemp in Nepal |
| `/[slug]` | Keyword landing pages (hemp seed oil, fabric, farmland by province, …) |
| `/hemp-wellness-valley` | Hemp Wellness Valley concept |
| `/faq` | Hemp & cannabis FAQ |
| `/press` | Press & media kit, downloadable logos |
| `/careers`, `/volunteer` | Jobs and volunteer / work-exchange |
| `/contact` | B2B / export / lab inquiries (mailto-based form, no backend required) |
| `/ne` | Nepali-language home page |
| `/privacy`, `/terms` | Legal pages |
| `/llms.txt`, `/llms-full.txt` | Plain-text site summaries for AI answer engines |

## Where content lives

| File | Controls |
| --- | --- |
| [`lib/company.ts`](lib/company.ts) | Company facts, products, services, contact details |
| [`lib/licence.ts`](lib/licence.ts) | Licence register — every licensing claim on the site renders from here |
| [`lib/tracker.ts`](lib/tracker.ts) | Law tracker data; bump `trackerUpdated` on every check |
| [`lib/articles.ts`](lib/articles.ts) | `/learn` articles |
| [`lib/landing.ts`](lib/landing.ts) | `/[slug]` landing pages |
| [`lib/nav.ts`](lib/nav.ts) | Header and footer navigation |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out, then generates OG PNGs
```

## Compliance notes

Per the Company's Articles of Association, the site presents **medical and
industrial cannabis (hemp) only** — THC within legal limits, laboratory-tested,
licensed activities only, and **no recreational marketing or sales**. There is
deliberately no online checkout; commerce features should only be added once the
required licences are in place.

## Deployment

Pushing to `claude/himalayacannabis-development-ype4jb` (the default branch) or `main`
builds the static export and deploys it to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The site is served at
himalayacannabis.com (`public/CNAME`), so `BASE_PATH` must stay unset.

### GitHub Pages needs the repository to be public

GitHub Pages does not serve a **private** repository on the free plan. Making this
repository private switches Pages off, which takes the live site down and makes every
subsequent deploy fail at the `configure-pages` step with:

```
Get Pages site failed. Error: Not Found
Create Pages site failed. Error: Resource not accessible by integration
```

That second line is not a permissions bug to chase. `GITHUB_TOKEN` can deploy *to*
Pages but cannot switch Pages *on*, so `enablement: true` cannot recover from this by
itself. Two things have to be true, and neither can be set from CI:

1. The repository is public (or the account is on GitHub Pro, which allows Pages on
   private repositories).
2. **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**.

Re-enabling Pages also clears the custom domain, so check `himalayacannabis.com` is
still set in **Settings → Pages → Custom domain** afterwards. `public/CNAME` re-applies
it on deploy, but the domain verification lives in repository settings.

### Keeping the repository private: Cloudflare Pages

Cloudflare Pages serves private repositories on the free plan, is a faster CDN than
GitHub Pages, and includes cookieless analytics the site otherwise has none of. The
build is an ordinary static export, so no code changes are needed:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | `22` (set `NODE_VERSION=22` as a build variable) |
| Environment | leave `BASE_PATH` unset |

Then point `himalayacannabis.com` at the Cloudflare Pages project and remove the
GitHub Pages workflow. `public/CNAME` is a GitHub Pages file and is ignored elsewhere;
it is harmless to leave in place.
