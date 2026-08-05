import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://himalayacannabis.com"),
  title: {
    default: `${company.name} — Himalayan Hemp & Medical Cannabis, Nepal`,
    template: `%s — ${company.name}`,
  },
  description:
    "Himalaya Cannabis Pvt. Ltd. cultivates and processes licensed medical and industrial cannabis (hemp) in Nepal — hemp textiles, seed foods, CBD wellness, ayurvedic products, and cannabis-sector services. Lab-tested. No recreational sales.",
  keywords: [
    "Himalaya Cannabis",
    "Nepal hemp",
    "industrial hemp Nepal",
    "medical cannabis Nepal",
    "hemp textiles",
    "hemp seed oil",
    "bhango",
    "CBD Nepal",
  ],
  alternates: { canonical: "/", languages: { en: "/", ne: "/ne" } },
  openGraph: {
    type: "website",
    url: "https://himalayacannabis.com",
    siteName: company.name,
    title: `${company.name} — Himalayan Hemp & Medical Cannabis, Nepal`,
    description:
      "Licensed medical and industrial hemp from the Himalayan and hilly regions of Nepal. Lab-tested textiles, seed foods, wellness products, and cannabis-sector services.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Himalaya Cannabis" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Himalayan Hemp, Nepal`,
    description:
      "Licensed medical and industrial hemp from the Himalayan regions of Nepal. Lab-tested. No recreational sales.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.nameNepali,
  url: "https://himalayacannabis.com",
  logo: "https://himalayacannabis.com/icon.svg",
  email: company.email,
  description: company.natureOfBusiness,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
