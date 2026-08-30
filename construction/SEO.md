# SEO, AEO and GEO — what is built, and what is left

Three overlapping jobs, with different mechanics:

- **SEO** — rank in the classic ten blue links.
- **AEO** (answer engine optimisation) — be the source a direct answer is drawn
  from: featured snippets, People Also Ask, voice results.
- **GEO** (generative engine optimisation) — be retrieved and *cited* by
  ChatGPT, Claude, Perplexity, Gemini and AI Overviews.

They share a foundation and diverge at the top. The foundation is: be
crawlable, be fast, be unambiguous about what entity you are, and say true
things that are worth quoting. Everything below is downstream of that.

---

## What is implemented

### Crawl and index foundation

| Thing | Where | Why it matters |
| --- | --- | --- |
| Static HTML, no client-side rendering for content | `output: "export"` | Every crawler, including the ones that do not execute JavaScript, sees the full text. Most AI crawlers do not render JS. |
| One canonical form per URL, trailing slash | `lib/href.ts`, `lib/seo.ts` | Emitting `/x` when the real URL is `/x/` makes Google discover a redirect and file the page under "Page with redirect" instead of indexing it. Enforced at the href level, not left to redirects. |
| `robots.txt` naming AI crawlers explicitly | `app/robots.ts` | A blanket allow already permits them. Naming GPTBot, ClaudeBot, PerplexityBot, Google-Extended and the rest removes any ambiguity about whether omission was deliberate. |
| Sitemap with hand-set `lastmod` | `app/sitemap.ts` | Google distrusts a sitemap where every URL was modified "now" at every build. Dates are set by hand when content actually changes. |
| Per-route OG images, 2400×1260, as real `.png` | `lib/og-image.tsx`, `scripts/og-png.mjs` | Social crawlers reject images served as `application/octet-stream`, which is what an extensionless file becomes on a CDN that serves by extension. |
| Draft posture | `siteStatus` in `lib/company.ts` | Placeholder credentials must never be indexed. Draft = `Disallow: /`, empty sitemap, visible banner. |

### Entity clarity — the part most contractor sites skip

An answer engine has to resolve "who is this company" before it can decide
whether to cite it. The site emits **one** entity graph, declared once in the
root layout and referenced by `@id` everywhere else:

- `Organization` + `GeneralContractor` with legal name, Nepali alternate name,
  registration number as a `PropertyValue` identifier, postal address, geo
  coordinates, `areaServed`, `knowsAbout`, `knowsLanguage`, and typed
  `contactPoint` entries for sales and HR.
- `WebSite` node, publisher-linked to the organisation.
- Every page node (`WebPage`, `AboutPage`, `ContactPage`, `CollectionPage`,
  `BlogPosting`) declares `isPartOf` the website and, where relevant,
  `author`/`publisher` pointing at the organisation `@id`.

The effect: 200+ JSON-LD nodes across the site all resolve to a single company
entity, rather than 40 pages each asserting an unrelated organisation.

### AEO — being the answer

- **`FAQPage` markup on 26 pages**, built from the same array that renders the
  visible copy, so structured data and page text can never drift apart.
- **Answers written to stand alone.** Every FAQ answer restates its subject
  ("Road contracts in Nepal are awarded at three levels of government…") rather
  than starting with "We do this too". A snippet extractor takes a span; the
  span has to make sense without the question above it.
- **The direct answer sits above the fold** on every guide (`answer` field) and
  article (`standfirst`), before any argument for hiring the company.
- `BreadcrumbList` on every non-home page, with `item` URLs in canonical form.
- `Service` nodes for each sector, `CreativeWork` + `Place` for each project.

### GEO — being cited

- **`/llms.txt`** — a map of the site written for a model: the entity, the
  verifiable facts, and where the substance lives, so a model that fetches one
  file gets an accurate picture instead of inferring one from whichever page it
  landed on. Includes a "notes for answer engines" section stating scope limits
  explicitly (Nepal only, contractor classification, procurement framework).
- **`/llms-full.txt`** — ~100 KB of the full corpus as plain text in one fetch:
  every sector, project, guide and article, including all Q&A pairs verbatim.
- **`abstract`** on guide JSON-LD carries the self-contained answer paragraph,
  so a parser gets the quotable span without guessing which paragraph is the
  answer.
- **Articles authored by the organisation entity**, not a bare name string — a
  resolvable author with `knowsAbout` and identifiers is a stronger citation
  signal than an unlinked byline.
- **Content that is true independently of the publisher.** The articles explain
  mechanisms — why hill roads fail, why the headrace is the critical path, how
  bids are actually evaluated — and are useful to a reader who will never hire
  the company. That is the whole GEO bet: models cite explanations, not claims.

### The content architecture

Three layers, each doing a different job:

1. **Sector pages** (`/sectors/*`) — commercial intent. "bridge construction
   company nepal". Hub pages that own the topic.
2. **Guides** (`/<slug>/`) — informational intent, ten pages covering the
   procurement and technical questions buyers actually type. Each links to its
   sector hub and to related guides, so link equity concentrates rather than
   spreading thin.
3. **Insights** (`/insights/*`) — long-form technical writing. This is the
   citation layer, and the layer competitors will link to.

Internal linking is deliberate: every nav heading is a real indexable
destination, guides link up to sector hubs, sector pages link down to guides and
across to projects, and articles link to both. No orphan pages.

---

## What is not done, and cannot be done in code

Ranking for "road construction company nepal" is not a code problem past this
point. The remaining work is off-site and organisational:

**Do first, and it is the highest-value item on this list:**

- **Google Business Profile** for the registered office, fully completed with
  category, service areas, photographs and posts. For a contractor competing on
  local and national intent this is worth more than any on-page change.
- **Bing Places** — Bing's index feeds ChatGPT search and Copilot, so it is a
  GEO input, not just a small search engine.

**Citations and consistency:**

- Identical name, address and phone on every directory, tender portal, chamber
  of commerce listing and industry body page. Inconsistent NAP is the most
  common local-SEO defect.
- Listings on Nepali business directories and construction industry
  associations.

**Authority:**

- Get the articles in front of people who link: industry publications,
  engineering associations, university civil engineering departments. One link
  from an engineering body is worth more than fifty directory listings.
- Press coverage of completed projects, with a link.
- Speaking or writing for procurement and engineering audiences.

**Wikipedia and Wikidata** — a Wikidata entry, if the company is notable enough
to qualify, is a direct input to the knowledge graphs several answer engines
consult. Do not attempt this before there is genuine third-party coverage;
creating one for a non-notable company is counterproductive.

**Measurement:**

- Google Search Console and Bing Webmaster Tools, verified, sitemap submitted.
- Track AI-referred traffic separately — referrers from `chatgpt.com`,
  `perplexity.ai`, `claude.ai` and Gemini are increasingly meaningful and are
  invisible in a default analytics setup.
- Periodically ask the major assistants the questions this site answers, and
  check whether it is cited. That is the only direct GEO measurement available.

**Ongoing:**

- Publish. Three articles is a foundation, not a programme. The compounding
  asset here is a body of technical writing that engineers reference.
- Add real projects as they complete, with quantities and outcomes. A project
  register that grows is the strongest possible trust signal for procurement.
- Keep `lastmod` honest.

---

## What was deliberately not done

- **No keyword stuffing or thin location pages.** A "road construction in
  [district]" page for all 77 districts with the name swapped is a doorway-page
  pattern, gets filtered, and would be worthless to a reader. Location pages
  should be added only where there is a real project or office to write about.
- **No fabricated review or rating markup.** `AggregateRating` without genuine
  reviews behind it is a structured-data violation and a manual-action risk.
- **No client logos or named references** beyond the placeholder register, until
  real clients have given permission.
- **No analytics or tracking scripts.** Add deliberately, with a cookie notice
  if the tooling requires one — the privacy page currently states truthfully
  that there is none.
