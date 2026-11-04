import { company } from "@/lib/company";
import { withSlash } from "@/lib/href";
import type { LandingPage } from "@/lib/landing";
import { productCategories } from "@/lib/nav";
import { specPropertiesFor } from "@/lib/specs";

const BASE = "https://himalayacannabis.com";

/**
 * Product and Offer structured data.
 *
 * Why this exists: the 68 product pages carried FAQPage and BreadcrumbList but
 * nothing declaring they were products at all. Google product results and — more
 * importantly for a B2B supplier — the assistants buyers now use to shortlist
 * sources both read Product/Offer. Without it we are invisible to both.
 *
 * Two deliberate omissions:
 *
 * `price` is never emitted. We quote per enquiry, and inventing a number to
 * satisfy a rich-result requirement would put a figure on the web we would then
 * have to honour or retract.
 *
 * `offers` is emitted only where something can actually be supplied. A product
 * still at the planned stage gets a Product node and no Offer, because an Offer
 * asserts a thing can be bought.
 */

const AVAILABILITY: Record<LandingPage["status"], string | null> = {
  available: "https://schema.org/InStock",
  "in-development": "https://schema.org/PreOrder",
  planned: null, // no Offer at all — nothing is on sale
};

export function productJsonLd(page: LandingPage) {
  const url = `${BASE}${withSlash(`/${page.slug}`)}`;
  const availability = AVAILABILITY[page.status];
  const category = productCategories.find((c) => c.key === page.category);

  const node: Record<string, unknown> = {
    "@type": "Product",
    "@id": `${url}#product`,
    name: page.h1,
    description: page.description,
    url,
    brand: { "@type": "Organization", "@id": `${BASE}/#organization` },
    manufacturer: { "@type": "Organization", "@id": `${BASE}/#organization` },
    countryOfOrigin: { "@type": "Country", name: "Nepal" },
    ...(category ? { category: category.label } : {}),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Supply status",
        value: page.statusNote,
      },
      // The technical sheet, machine-readable — this is what an assistant
      // answering "who supplies cold-pressed hemp seed oil" can actually quote.
      ...specPropertiesFor(page),
    ],
  };

  if (availability) {
    node.offers = {
      "@type": "Offer",
      "@id": `${url}#offer`,
      availability,
      // Wholesale supply, quoted per enquiry — no price is published.
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
      seller: { "@type": "Organization", "@id": `${BASE}/#organization` },
      url: `${BASE}${withSlash(`/quote?product=${page.slug}`)}`,
      availableAtOrFrom: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NP",
        },
      },
    };
  }

  return node;
}

/** The catalogue as an ItemList, for the shop page. */
export function catalogueJsonLd(pages: LandingPage[]) {
  return {
    "@type": "ItemList",
    name: `${company.name} product catalogue`,
    numberOfItems: pages.length,
    itemListElement: pages.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}${withSlash(`/${p.slug}`)}`,
      name: p.h1,
    })),
  };
}
