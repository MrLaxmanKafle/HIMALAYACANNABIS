import { sectors } from "@/lib/sectors";
import { landingPages } from "@/lib/landing";
import { withSlash } from "@/lib/href";

/**
 * Shared information architecture for header, footer and sitemap.
 *
 * Every grouping heading is itself a real, indexable destination rather than a
 * bare label — a nav heading that goes nowhere wastes internal link equity and
 * gives a crawler no hub to attribute the cluster to.
 */

export const sectorLinks = sectors.map((s) => ({
  href: withSlash(`/sectors/${s.slug}`),
  label: s.name,
  blurb: s.short,
}));

export const capabilityLinks = [
  { href: "/capabilities/", label: "Capabilities Overview" },
  { href: "/equipment/", label: "Plant & Equipment Fleet" },
  { href: "/quality-safety/", label: "Quality, Safety & Environment" },
  { href: "/prequalification/", label: "Prequalification & Credentials" },
];

export const companyLinks = [
  { href: "/about/", label: "About Us" },
  { href: "/projects/", label: "Projects" },
  { href: "/insights/", label: "Insights" },
  { href: "/careers/", label: "Careers" },
  { href: "/suppliers/", label: "Suppliers & Subcontractors" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
];

/** Guides cluster — the programmatic layer, grouped for the footer. */
export const guideLinks = landingPages.map((p) => ({
  href: withSlash(`/${p.slug}`),
  label: p.h1,
  category: p.category,
}));

export const primaryNav = [
  { href: "/sectors/", label: "Sectors" },
  { href: "/projects/", label: "Projects" },
  { href: "/capabilities/", label: "Capabilities" },
  { href: "/insights/", label: "Insights" },
  { href: "/about/", label: "About" },
];
