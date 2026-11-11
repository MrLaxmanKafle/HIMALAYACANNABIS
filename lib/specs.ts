import type { LandingPage } from "@/lib/landing";

/**
 * Technical specifications for the hemp seed oil line.
 *
 * These are TYPICAL values for the product class, drawn from the published
 * compositional literature for Cannabis sativa seed oil — not measured values
 * from our own lots. That distinction is stated on the page, because it is the
 * distinction a buyer's QA department cares about: typical values let them
 * judge whether to request a sample, and the lot certificate governs what they
 * actually receive.
 *
 * Commercial terms (MOQ, pack formats, lead time) are deliberately absent.
 * They are a decision, not a fact, and quoting one before it is settled is how
 * a supplier loses a buyer at the second email.
 */

export type SpecRow = { k: string; v: string };
export type SpecGroup = { title: string; rows: SpecRow[]; note?: string };

const IDENTITY: SpecRow[] = [
  { k: "INCI name", v: "Cannabis Sativa Seed Oil" },
  { k: "CAS number", v: "89958-21-4" },
  { k: "EC / EINECS", v: "289-644-3" },
  { k: "HS heading", v: "1515.90 — national subheadings vary by market" },
  { k: "Botanical source", v: "Cannabis sativa L., seed" },
  { k: "Country of origin", v: "Nepal" },
];

const COMPOSITION: SpecRow[] = [
  { k: "Linoleic acid (C18:2, ω-6)", v: "50–60%" },
  { k: "α-Linolenic acid (C18:3, ω-3)", v: "15–25%" },
  { k: "Oleic acid (C18:1, ω-9)", v: "8–16%" },
  { k: "Palmitic acid (C16:0)", v: "6–9%" },
  { k: "γ-Linolenic acid (GLA)", v: "1–4%" },
  { k: "Stearic acid (C18:0)", v: "2–4%" },
  { k: "ω-6 : ω-3 ratio", v: "approx. 3 : 1" },
];

const PHYSICAL: SpecRow[] = [
  { k: "Appearance", v: "Clear to slightly hazy, light to dark green" },
  { k: "Odour and taste", v: "Characteristic, nutty" },
  { k: "Relative density (20 °C)", v: "0.920–0.930" },
  { k: "Refractive index (20 °C)", v: "1.470–1.478" },
  { k: "Iodine value", v: "150–170" },
  { k: "Saponification value", v: "190–195" },
  { k: "Smoke point", v: "approx. 165 °C — not suitable for frying" },
];

const QUALITY: SpecRow[] = [
  { k: "Free fatty acids (as oleic)", v: "≤ 2.0%" },
  { k: "Peroxide value", v: "≤ 10 meq O₂/kg" },
  { k: "Moisture and volatiles", v: "≤ 0.2%" },
  { k: "THC", v: "Below the 0.3% industrial threshold" },
];

const HANDLING: SpecRow[] = [
  { k: "Storage", v: "Cool, dark, sealed; inert headspace preferred" },
  { k: "Shelf life", v: "12–14 months unopened, cold-stored" },
  { k: "Pack formats", v: "On request" },
  { k: "Minimum order", v: "On request" },
];

/** Per-product deltas, applied over the base. */
const OVERRIDES: Record<string, Partial<Record<string, SpecRow[]>>> = {
  "refined-hemp-seed-oil-nepal": {
    physical: [
      { k: "Appearance", v: "Pale yellow to near colourless" },
      { k: "Odour and taste", v: "Neutral — refining removes the characteristic note" },
      { k: "Smoke point", v: "approx. 210 °C" },
    ],
  },
  "winterized-hemp-seed-oil-nepal": {
    physical: [
      { k: "Appearance", v: "Clear, remains bright at 4 °C" },
      { k: "Waxes", v: "Removed by winterisation" },
    ],
  },
  "high-gla-hemp-seed-oil-nepal": {
    composition: [{ k: "γ-Linolenic acid (GLA)", v: "4–6% — selected cultivars" }],
  },
  "dehulled-kernel-pressed-hemp-seed-oil-nepal": {
    physical: [
      { k: "Appearance", v: "Lighter green — reduced chlorophyll from hull removal" },
    ],
  },
  "co2-extracted-hemp-seed-oil-nepal": {
    quality: [{ k: "Residual solvent", v: "None — supercritical CO₂, no solvent carried" }],
  },
  "pharmaceutical-grade-hemp-seed-oil-nepal": {
    quality: [
      { k: "Free fatty acids (as oleic)", v: "≤ 0.5%" },
      { k: "Peroxide value", v: "≤ 5 meq O₂/kg" },
    ],
  },
};

function merge(base: SpecRow[], over?: SpecRow[]): SpecRow[] {
  if (!over) return base;
  const out = [...base];
  for (const row of over) {
    const i = out.findIndex((r) => r.k === row.k);
    if (i >= 0) out[i] = row;
    else out.push(row);
  }
  return out;
}


/* ---------------------------------------------------------------------------
 * Fibre line.
 *
 * Allo (Girardinia diversifolia) and hemp bast are the only products here that
 * are legal, uncontrolled and available today, so the figures matter more than
 * anywhere else on the site — a textile buyer evaluates bast fibre on staple
 * length, fineness and moisture regain the way an oil buyer evaluates on fatty
 * acids. Ranges are typical for hand-processed Himalayan bast, not measured
 * values from our own bales; the page says so.
 * ------------------------------------------------------------------------- */

const ALLO_IDENTITY: SpecRow[] = [
  { k: "Common name", v: "Allo — Himalayan giant nettle" },
  { k: "Botanical source", v: "Girardinia diversifolia, inner bark (bast)" },
  { k: "Nepali name", v: "अल्लो" },
  { k: "HS heading", v: "5303 / 5305 — other vegetable textile fibres" },
  { k: "Harvest", v: "Wild-collected, 1,200–3,000 m" },
  { k: "Country of origin", v: "Nepal" },
];

const HEMP_FIBRE_IDENTITY: SpecRow[] = [
  { k: "Common name", v: "Hemp bast fibre" },
  { k: "Botanical source", v: "Cannabis sativa L., stem bast" },
  { k: "HS heading", v: "5302 — true hemp, raw or processed" },
  { k: "Country of origin", v: "Nepal" },
];

const FIBRE_PHYSICAL: SpecRow[] = [
  { k: "Staple length", v: "60–180 mm, hand-stripped" },
  { k: "Fineness", v: "20–50 µm single fibre" },
  { k: "Tensile strength", v: "High for a bast fibre; comparable to ramie" },
  { k: "Elongation at break", v: "2–4%" },
  { k: "Moisture regain", v: "8–12% at 20 °C / 65% RH" },
  { k: "Colour", v: "Natural ecru to pale grey-brown; undyed" },
  { k: "Lustre", v: "Silky — the property allo is bought for" },
];

const FIBRE_PROCESS: SpecRow[] = [
  { k: "Retting", v: "Traditional ash-boil and water retting" },
  { k: "Degumming", v: "Non-chemical; wood-ash alkali" },
  { k: "Spinning", v: "Hand-spun or mill-blended to order" },
  { k: "Bleaching", v: "None unless specified" },
];

const FIBRE_SUPPLY: SpecRow[] = [
  { k: "Formats", v: "Raw bast, degummed sliver, hand-spun yarn, woven cloth" },
  { k: "Bale / pack", v: "On request" },
  { k: "Minimum order", v: "On request" },
  { k: "Licensing", v: "Allo requires no cannabis licence — it is not a controlled plant" },
];

/** Specs for a product, or null where the line has no published spec sheet yet. */
export function specsFor(page: LandingPage): SpecGroup[] | null {
  if (page.category === "fibre") return fibreSpecs(page);
  if (page.category !== "seed-oil") return null;
  const o = OVERRIDES[page.slug] ?? {};
  return [
    { title: "Identity", rows: merge(IDENTITY, o.identity) },
    {
      title: "Typical fatty acid profile",
      rows: merge(COMPOSITION, o.composition),
      note: "Percentage of total fatty acids. Varies with cultivar, altitude and season — the lot certificate carries the measured figures.",
    },
    { title: "Physical properties", rows: merge(PHYSICAL, o.physical) },
    {
      title: "Quality limits",
      rows: merge(QUALITY, o.quality),
      note: "Trade specification limits. Each lot ships with a certificate of analysis from an independent accredited laboratory.",
    },
    { title: "Handling and supply", rows: merge(HANDLING, o.handling) },
  ];
}

/** Flattened for Product schema additionalProperty. */
export function specPropertiesFor(page: LandingPage) {
  const groups = specsFor(page);
  if (!groups) return [];
  return groups.flatMap((g) =>
    g.rows.map((r) => ({
      "@type": "PropertyValue" as const,
      name: r.k,
      value: r.v,
    }))
  );
}

function fibreSpecs(page: LandingPage): SpecGroup[] {
  const isAllo = page.slug.includes("allo");
  return [
    {
      title: "Identity",
      rows: isAllo ? ALLO_IDENTITY : HEMP_FIBRE_IDENTITY,
    },
    {
      title: "Fibre properties",
      rows: FIBRE_PHYSICAL,
      note: "Typical for hand-processed Himalayan bast. Hand-stripping gives a wider staple spread than mill decortication — buyers blending with cotton or wool should specify the range they can run.",
    },
    { title: "Processing", rows: FIBRE_PROCESS },
    {
      title: "Supply",
      rows: FIBRE_SUPPLY,
      note: isAllo
        ? "Allo is wild-collected by households under existing community forest arrangements, outside the cannabis licensing framework entirely."
        : "Hemp bast supply follows the cultivation licence and the harvest cycle.",
    },
  ];
}
