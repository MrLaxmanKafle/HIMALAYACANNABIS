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
| `/compliance` | Licensing commitments and the legal framework (from the MoA/AoA) |
| `/contact` | B2B / export / lab inquiries (mailto-based form, no backend required) |

Company data (products, services, contact details) lives in [`lib/company.ts`](lib/company.ts) —
edit that file to update content across the site.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

## Compliance notes

Per the Company's Articles of Association, the site presents **medical and
industrial cannabis (hemp) only** — THC within legal limits, laboratory-tested,
licensed activities only, and **no recreational marketing or sales**. There is
deliberately no online checkout; commerce features should only be added once the
required licences are in place.
