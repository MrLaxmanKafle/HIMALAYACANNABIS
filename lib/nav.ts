import { landingPages, type LandingCategory } from "@/lib/landing";

/**
 * Shared information architecture for the header and footer.
 * Categories map to an existing hub page rather than a new index route,
 * so every grouping heading is itself a real, indexable destination.
 */
export const productCategories: {
  key: LandingCategory;
  label: string;
  hub: string;
  blurb: string;
}[] = [
  {
    key: "seed-oil",
    label: "Hemp Seed Oil",
    hub: "/hemp-seed-oil-nepal",
    blurb: "Cold-pressed, refined, organic, carrier & INCI grades",
  },
  {
    key: "cannabinoid",
    label: "Cannabinoid Extracts",
    hub: "/cbd-oil-nepal",
    blurb: "CBD, CBG, CBN, distillates & isolates — licence-gated",
  },
  {
    key: "seed-food",
    label: "Hemp Seed & Foods",
    hub: "/hemp-seeds-nepal",
    blurb: "Bhango, hemp hearts, protein, flour & press cake",
  },
  {
    key: "fibre",
    label: "Fibre & Textiles",
    hub: "/hemp-fabric-nepal",
    blurb: "Hemp fabric, clothing manufacturing & allo fibre",
  },
  {
    key: "essential-oil",
    label: "Essential Oils & Terpenes",
    hub: "/hemp-essential-oil-nepal",
    blurb: "Steam-distilled oils, terpene blends & hydrosol",
  },
  {
    key: "finished",
    label: "Finished Goods",
    hub: "/products",
    blurb: "Skincare, balms, soaps, culinary oil & gift sets",
  },
];

export const serviceLinks = [
  { href: "/thc-testing-lab-nepal", label: "THC & CBD Testing Lab" },
  { href: "/agri-food-testing-lab-nepal", label: "Agri-Food Testing Lab" },
  { href: "/cannabis-license-consulting-nepal", label: "Licence & Compliance Consulting" },
  { href: "/hemp-exporter-nepal", label: "Export & Import Partnerships" },
  { href: "/services", label: "All services →" },
];

export const landLinks = [
  { href: "/hemp-farmland-nepal", label: "Hemp Farmland in Nepal" },
  { href: "/hemp-farmland-gandaki", label: "Gandaki Province" },
  { href: "/hemp-farmland-karnali", label: "Karnali Province" },
  { href: "/hemp-farmland-sudurpashchim", label: "Sudurpashchim" },
  { href: "/land", label: "Land & farmer partnerships →" },
];

export const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/nepal-cannabis-tracker", label: "Nepal Cannabis Law Tracker" },
  { href: "/compliance", label: "Compliance & Licensing" },
  { href: "/investors", label: "Investors" },
  { href: "/hemp-wellness-valley", label: "Hemp Wellness Valley" },
  { href: "/careers", label: "Careers" },
  { href: "/volunteer", label: "Volunteer & Work-Exchange" },
  { href: "/press", label: "Press & Media" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/** Pages in a category, hub first, capped for footer display. */
export function pagesIn(category: LandingCategory, limit?: number) {
  const cat = productCategories.find((c) => c.key === category);
  const items = landingPages
    .filter((p) => p.category === category)
    .map((p) => ({ href: `/${p.slug}`, label: p.h1 }))
    .sort((a, b) => (a.href === cat?.hub ? -1 : b.href === cat?.hub ? 1 : 0));
  return limit ? items.slice(0, limit) : items;
}

export function countIn(category: LandingCategory) {
  return landingPages.filter((p) => p.category === category).length;
}
