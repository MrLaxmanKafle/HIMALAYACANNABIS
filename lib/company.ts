export const company = {
  name: "Himalaya Cannabis Pvt. Ltd.",
  nameNepali: "हिमालय क्यानाबिस प्रा.लि.",
  domain: "himalayacannabis.com",
  tagline: "Himalayan hemp, grown right.",
  registeredOffice: "Kathmandu, Bagmati Province, Nepal",
  incorporation:
    "Incorporated under the Companies Act, 2063 (2006 A.D.), Nepal",
  email: "info@himalayacannabis.com",
  natureOfBusiness:
    "Cultivation, processing, and manufacturing of medical and industrial cannabis (hemp) and related products.",
};

export type ProductCategory = {
  slug: string;
  name: string;
  nameNepali?: string;
  summary: string;
  items: string[];
  status: "in-development" | "planned";
};

export const productCategories: ProductCategory[] = [
  {
    slug: "textiles-fibre",
    name: "Hemp Textiles & Fibre",
    summary:
      "Fibre, yarn, and cloth spun from Himalayan industrial hemp — durable, breathable, and fully traceable from field to fabric.",
    items: ["Raw hemp fibre", "Hemp yarn", "Woven hemp cloth", "Hemp bags & accessories"],
    status: "in-development",
  },
  {
    slug: "seed-food",
    name: "Hemp Seed & Foods",
    nameNepali: "भाङ्गो",
    summary:
      "Hemp seed (bhango) has been part of Himalayan kitchens for generations. We package it to modern food-safety standards.",
    items: ["Whole hemp seed", "Hemp seed oil (cold-pressed)", "Hemp seed powder & flour", "Hemp food products"],
    status: "in-development",
  },
  {
    slug: "cbd-wellness",
    name: "CBD & Wellness",
    summary:
      "Lab-tested CBD and wellness formulations produced under licence, with certified THC content below the legal threshold.",
    items: ["CBD extracts", "Tinctures", "Topicals & balms", "Wellness supplements"],
    status: "planned",
  },
  {
    slug: "ayurvedic",
    name: "Ayurvedic & Medicinal",
    summary:
      "Ayurvedic oils and medicinal preparations that pair traditional Himalayan formulations with certified laboratory testing.",
    items: ["Ayurvedic oils", "Medicinal preparations", "Therapeutic blends"],
    status: "planned",
  },
  {
    slug: "cosmetics",
    name: "Hemp Cosmetics",
    summary:
      "Skin and body care built on hemp seed oil — clean formulations, Himalayan botanicals, and honest labelling.",
    items: ["Hemp soaps", "Skin care oils", "Creams & lotions", "Hair care"],
    status: "planned",
  },
];

export const services = [
  {
    name: "THC/CBD Testing Laboratory",
    summary:
      "A certified laboratory for THC/CBD content and quality testing as prescribed by prevailing law — for our own products and as a service to the sector, in collaboration with the relevant authority.",
  },
  {
    name: "Seed Supply & Genetics",
    summary:
      "Research-backed cultivation and seed production for medical and industrial cannabis suited to Nepal's Himalayan and hilly regions.",
  },
  {
    name: "Seed-to-Sale & Compliance Systems",
    summary:
      "Software and tracking systems that give regulators and buyers full traceability from cultivation through processing to sale.",
  },
  {
    name: "Consultancy & Training",
    summary:
      "Packaging, equipment, marketing, consultancy, and training for farmers and enterprises entering Nepal's legal cannabis sector — functioning as a resource centre for the industry.",
  },
];
