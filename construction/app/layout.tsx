import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DraftBanner from "@/components/DraftBanner";
import { company, origin, ids } from "@/lib/company";
import { jsonLdScript, ogUrl, robotsDirective } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: `${company.shortName} — Roads, Bridges & Infrastructure in Nepal`,
    template: `%s — ${company.shortName}`,
  },
  description:
    "Nepali civil engineering contractor building roads, bridges, tunnels, water systems and hydropower civil works for government and donor-funded infrastructure programmes.",
  keywords: [
    "construction company nepal",
    "road construction nepal",
    "bridge contractor nepal",
    "infrastructure company nepal",
    "hydropower civil contractor nepal",
    "government contractor nepal",
  ],
  authors: [{ name: company.name, url: origin }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  robots: robotsDirective,
  openGraph: {
    type: "website",
    url: origin,
    siteName: company.name,
    title: `${company.name} — Civil & Infrastructure Contractor, Nepal`,
    description: company.oneLiner,
    images: [{ url: ogUrl(""), width: 2400, height: 1260, alt: company.name }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} — Infrastructure Contractor, Nepal`,
    description: company.oneLiner,
    images: [ogUrl("")],
  },
};

/**
 * The site's entity graph, emitted once in the layout so every page inherits
 * the same Organization and WebSite nodes and can reference them by @id rather
 * than redeclaring them. One entity, consistently identified, is what lets a
 * knowledge graph — and an answer engine's retrieval layer — resolve pages
 * across the site to a single company.
 */
const siteJsonLd = [
  {
    "@type": ["Organization", "GeneralContractor"],
    "@id": ids.organization,
    name: company.name,
    legalName: company.name,
    alternateName: company.nameNepali,
    slogan: company.tagline,
    description: company.oneLiner,
    url: origin,
    logo: `${origin}/icon.svg`,
    image: ogUrl(""),
    email: company.email,
    telephone: company.phone,
    foundingDate: company.foundingDate,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "OCR Registration Number",
      value: company.registration.number,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: company.addressLocality,
      addressRegion: company.addressRegion,
      addressCountry: company.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    areaServed: { "@type": "Country", name: "Nepal" },
    knowsAbout: company.knowsAbout,
    knowsLanguage: company.languages,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.tenderEmail,
        availableLanguage: ["en", "ne"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: company.careersEmail,
        availableLanguage: ["en", "ne"],
      },
    ],
  },
  {
    "@type": "WebSite",
    "@id": ids.website,
    url: origin,
    name: company.name,
    description: company.oneLiner,
    inLanguage: "en",
    publisher: { "@id": ids.organization },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(siteJsonLd) }}
        />
        <DraftBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
