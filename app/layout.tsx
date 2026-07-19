import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
