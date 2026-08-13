import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";
import ContactForm from "@/components/ContactForm";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us — Nepal Hemp Inquiries",
  description:
    "Contact Himalaya Cannabis Pvt. Ltd. in Kathmandu, Nepal for wholesale, retail partnership, export, laboratory, and consultancy inquiries.",
  keywords: [
    "contact hemp company Nepal",
    "Himalaya Cannabis contact",
    "Nepal hemp wholesale inquiry",
    "hemp supplier contact Nepal",
  ],
  openGraph: {
    title: "Contact Us — Himalaya Cannabis",
    description:
      "Contact Himalaya Cannabis Pvt. Ltd. in Kathmandu, Nepal for wholesale, retail partnership, export, laboratory, and consultancy inquiries.",
    url: "https://himalayacannabis.com/contact",
    type: "website",
    images: [
      {
        url: "https://himalayacannabis.com/contact/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Himalaya Cannabis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Himalaya Cannabis",
    description:
      "Contact Himalaya Cannabis Pvt. Ltd. in Kathmandu, Nepal for wholesale, retail partnership, export, laboratory, and consultancy inquiries.",
    images: ["https://himalayacannabis.com/contact/opengraph-image.png"],
  },
  alternates: { canonical: "/contact" },
};

const breadcrumbJsonLd_contact = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd_contact),
        }}
      />

      <PageHero
        title="Contact & Inquiries"
        lede="Wholesale, retail partnership, export, testing, or consultancy — we respond to every serious inquiry."
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-bold">Reach us</h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                Registered office
              </dt>
              <dd className="mt-1.5 leading-relaxed text-ink-2">
                {company.registeredOffice}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-marigold hover:text-ink"
                >
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-12 border-t border-line pt-6 text-sm leading-relaxed text-ink-2">
            <p className="font-bold text-ink">A note on what we can supply</p>
            <p className="mt-2">
              We deal exclusively in medical and industrial cannabis (hemp)
              products under licence, with THC within the limits prescribed by
              Nepali law. We do not respond to inquiries seeking recreational
              products.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
