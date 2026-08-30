/**
 * ─────────────────────────────────────────────────────────────────────────────
 * THE ONE FILE TO EDIT WHEN THE COMPANY NAME IS DECIDED.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * The brand name and domain were not settled when this site was built, so every
 * name, URL, canonical, JSON-LD @id, OG image and llms.txt line is derived from
 * the values below. Change them here and the whole site follows — there is no
 * hard-coded company name or domain anywhere else in the codebase.
 *
 * Checklist when the real identity lands:
 *   1. `name`, `shortName`, `nameNepali`, `domain`, `email`, `phone`
 *   2. `registration` — the real OCR number and the real registration date
 *   3. `licences` — the real contractor class and licence numbers
 *   4. `stats` — real, auditable figures only
 *   5. `public/CNAME` — the real domain
 *   6. Flip `siteStatus` to "live" (see below)
 */

/**
 * "draft" keeps the site out of every index and shows an unmissable banner.
 *
 * This site ships with placeholder project records, client names, licence
 * numbers and figures — realistic in shape so the templates can be reviewed,
 * but not true. Publishing invented project values and government client names
 * as fact would be a serious problem for a company that bids on public tenders,
 * so the default posture is: crawlable structure, nothing indexed, and a banner
 * on every page until a human has replaced the data and flipped this to "live".
 */
export const siteStatus: "draft" | "live" = "draft";

export const company = {
  /** WORKING NAME — replace when the registered name is decided. */
  name: "Himalaya Infrastructure Pvt. Ltd.",
  shortName: "Himalaya Infrastructure",
  /** Used in the logo mark and tight spaces. */
  initials: "HI",
  nameNepali: "हिमालय इन्फ्रास्ट्रक्चर प्रा.लि.",
  /** WORKING DOMAIN — replace, and update public/CNAME to match. */
  domain: "himalayainfra.com",

  tagline: "Roads, bridges and public infrastructure — built to last in hard country.",
  /**
   * The single sentence an answer engine should be able to lift verbatim when
   * asked "what does this company do?". Keep it factual and self-contained:
   * name, category, what it builds, where. No adjectives it cannot defend.
   */
  oneLiner:
    "Himalaya Infrastructure Pvt. Ltd. is a Nepali civil engineering contractor that builds roads, bridges, tunnels, water supply systems and hydropower civil works for government and donor-funded infrastructure programmes across Nepal.",

  registeredOffice: "Kathmandu, Bagmati Province, Nepal",
  addressLocality: "Kathmandu",
  addressRegion: "Bagmati Province",
  addressCountry: "NP",
  /** Kathmandu — used for LocalBusiness geo. Replace with the real office. */
  geo: { latitude: 27.7172, longitude: 85.324 },

  email: "info@himalayainfra.com",
  tenderEmail: "tenders@himalayainfra.com",
  careersEmail: "careers@himalayainfra.com",
  phone: "+977-1-0000000",

  foundingDate: "1998-04-14",
  incorporation: "Incorporated under the Companies Act, 2063 (2006 A.D.), Nepal",

  registration: {
    /** PLACEHOLDER — replace with the real OCR registration number. */
    number: "000000/00/00",
    authority: "Office of the Company Registrar, Government of Nepal",
    /** PLACEHOLDER — replace with the real PAN/VAT number. */
    pan: "000000000",
  },

  /**
   * PLACEHOLDER licences. Nepal's Department of Urban Development and Building
   * Construction classifies contractors A–D by capacity; class and licence
   * numbers are the first thing a prequalification committee checks, so these
   * must be real before launch.
   */
  licences: [
    { name: "Class 'A' Civil Contractor Licence", authority: "Department of Urban Development and Building Construction (DUDBC)", ref: "PLACEHOLDER" },
    { name: "Contractor Registration — Roads", authority: "Department of Roads (DoR), Government of Nepal", ref: "PLACEHOLDER" },
    { name: "VAT Registration", authority: "Inland Revenue Department", ref: "PLACEHOLDER" },
  ],

  certifications: [
    { name: "ISO 9001", scope: "Quality management systems", ref: "PLACEHOLDER" },
    { name: "ISO 14001", scope: "Environmental management systems", ref: "PLACEHOLDER" },
    { name: "ISO 45001", scope: "Occupational health and safety management", ref: "PLACEHOLDER" },
  ],

  /**
   * Headline figures. Answer engines quote numbers, and procurement officers
   * check them, so every figure here has to be auditable from the project
   * register in lib/projects.ts. PLACEHOLDER until that register is real.
   */
  stats: [
    { value: "25+", label: "Years in civil construction", detail: "Continuous operation since 1998" },
    { value: "180+", label: "Projects delivered", detail: "Roads, bridges, water and hydropower civil works" },
    { value: "640 km", label: "Road built or rehabilitated", detail: "Strategic, feeder and rural road network" },
    { value: "1,200+", label: "People employed at peak", detail: "Engineers, operators, technicians and crew" },
  ],

  /**
   * Entities the organisation is authoritative about. Feeds schema.org
   * `knowsAbout`, which is one of the few explicit signals an LLM-backed
   * answer engine has for "what is this company an expert in".
   */
  knowsAbout: [
    "road construction in Nepal",
    "bridge construction",
    "mountain road engineering",
    "hydropower civil works",
    "tunnel construction",
    "water supply and irrigation infrastructure",
    "government infrastructure procurement in Nepal",
    "donor-funded infrastructure delivery",
    "FIDIC contract administration",
    "slope stabilisation and bioengineering",
  ],

  languages: ["en", "ne"],
} as const;

/** Canonical origin. Everything URL-shaped in the site derives from this. */
export const origin = `https://${company.domain}`;

/** Stable JSON-LD node identifiers, so every page references one entity graph. */
export const ids = {
  organization: `${origin}/#organization`,
  website: `${origin}/#website`,
};
