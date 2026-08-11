import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Himalaya Cannabis website.",

    openGraph: {
    title: "Terms of Use — Himalaya Cannabis",
    description:
      "Terms governing use of the Himalaya Cannabis website.",
    url: "https://himalayacannabis.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use — Himalaya Cannabis",
    description:
      "Terms governing use of the Himalaya Cannabis website.",
  },
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    h: "1. About this website",
    body: `This website is operated by ${company.name}, a private limited company incorporated under the Companies Act, 2063 (2006 A.D.) of Nepal, with its registered office at ${company.registeredOffice}. By using this website you accept these terms.`,
  },
  {
    h: "2. Informational purpose only",
    body: "Content on this website is provided for general information about the Company and its planned activities. It does not constitute an offer to sell any product, an offer or solicitation of securities, or legal, medical, or investment advice. Product availability is subject to the licences and approvals required under the prevailing laws of Nepal.",
  },
  {
    h: "3. No recreational products",
    body: "The Company deals exclusively in medical and industrial cannabis (hemp) within legal THC limits and does not engage in any transaction for recreational purposes. Nothing on this website may be read as promoting recreational cannabis use.",
  },
  {
    h: "4. Forward-looking statements",
    body: "Statements about planned products, facilities, and services are forward-looking and depend on licences, approvals, and market conditions. The Company gives no assurance that planned activities will proceed as described and may update or withdraw content at any time without notice.",
  },
  {
    h: "5. Intellectual property",
    body: "The Himalaya Cannabis name, logo, and website content are the property of the Company. You may not reproduce them for commercial purposes without written permission. Consistent with our Memorandum of Association, the Company registers and protects its trademarks, designs, and other commercial interests under prevailing Nepali law.",
  },
  {
    h: "6. Limitation of liability",
    body: "The website is provided “as is”. To the maximum extent permitted by law, the Company accepts no liability for loss arising from reliance on its content or from interruption of its availability.",
  },
  {
    h: "7. Governing law",
    body: "These terms are governed by the laws of Nepal, and the courts of Nepal have exclusive jurisdiction over any dispute arising from them.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" lede="Last updated: July 2026" />
      <section className="mx-auto max-w-3xl space-y-10 px-5 py-16">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="text-xl font-bold">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-ink-2">{s.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
