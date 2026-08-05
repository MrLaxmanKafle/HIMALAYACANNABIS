import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Himalaya Cannabis Pvt. Ltd. — legality, products, THC limits, wholesale, export, and investment.",

  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Is your business legal in Nepal?",
    a: "Yes — that is the entire premise of the company. We deal only in medical and industrial cannabis (hemp) under the licences and approvals required by Nepali law, including the Narcotic Drugs (Control) Act, 2033 and the provincial medical and industrial cannabis framework. Regulated activities begin only after the corresponding licence is obtained.",
  },
  {
    q: "Do you sell recreational cannabis?",
    a: "No. Our Articles of Association expressly prohibit any transaction for recreational purposes. We do not respond to inquiries seeking recreational products.",
  },
  {
    q: "What THC levels do your products contain?",
    a: "Industrial hemp products are produced maintaining THC content below 0.3%, as prescribed by prevailing law. Every product undergoes mandatory chemical testing at a certified laboratory before sale or distribution.",
  },
  {
    q: "What products do you offer?",
    a: "Five lines are in development or planned: hemp textiles and fibre; hemp seed and foods (bhango); CBD and wellness products; ayurvedic and medicinal formulations; and hemp cosmetics. Availability follows licensing — see the Products page for current status.",
  },
  {
    q: "Do you supply wholesale or export?",
    a: "Yes. Our founding objectives cover wholesale and retail distribution through physical and online channels, in domestic and overseas markets, subject to prevailing law. Use the contact form to describe your requirements.",
  },
  {
    q: "Can I order online?",
    a: "Not yet. Online sales will open only once the required licences are in place. For now, all supply is arranged through direct inquiry.",
  },
  {
    q: "Do you work with farmers?",
    a: "Working with farmers in Nepal's Himalayan and hilly regions is central to our mission of generating employment through the cannabis business. We also plan to provide seed supply, training, and compliance support to growers.",
  },
  {
    q: "How can I invest?",
    a: "We are in private discussions with aligned investors. See the Investors page for the opportunity and company facts, then write to us with a short introduction. Investment occurs only through private, individually negotiated transactions — nothing on this site is a public offering.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ]),
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="Frequently Asked Questions"
        lede="Straight answers about what we do — and what we don't."
      />

      <section className="mx-auto max-w-3xl px-5 py-12">
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="cursor-pointer list-none py-5 font-bold marker:content-none">
                <span className="flex items-baseline justify-between gap-4">
                  {f.q}
                  <span
                    aria-hidden
                    className="text-marigold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-ink-2">
          Something else?{" "}
          <Link href="/contact" className="font-semibold text-marigold hover:text-ink">
            Ask us directly
          </Link>
          .
        </p>
      </section>
    </>
  );
}
