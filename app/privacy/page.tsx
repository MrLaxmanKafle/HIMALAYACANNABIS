import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Himalaya Cannabis Pvt. Ltd. handles personal information.",

  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "Who we are",
    body: (
      <>
        This website is operated by {company.name} ({company.nameNepali}),
        registered at {company.registeredOffice}. For any privacy question,
        contact us at{" "}
        <a href={`mailto:${company.email}`} className="text-marigold hover:text-ink">
          {company.email}
        </a>
        .
      </>
    ),
  },
  {
    h: "What we collect",
    body: "This website does not use cookies, analytics trackers, or advertising pixels, and it has no user accounts. The only personal information we receive is what you choose to send us — for example, your name, email address, organisation, and message when you contact us by email or through the inquiry form (which composes an email in your own mail client; nothing is submitted through the website itself).",
  },
  {
    h: "How we use it",
    body: "We use the information you send solely to respond to your inquiry and conduct the resulting business relationship. We do not sell, rent, or trade personal information. We may share it only where required by the prevailing laws of Nepal or with professional advisers under confidentiality.",
  },
  {
    h: "Retention and your rights",
    body: `We keep correspondence for as long as needed for the purpose it was sent, or as required by law. You may ask us at any time to access, correct, or delete the personal information we hold about you by writing to ${company.email}.`,
  },
  {
    h: "Hosting",
    body: "The website is served as static pages by our hosting provider, which may record standard technical logs (such as IP addresses) to operate and secure the service, under its own privacy terms.",
  },
  {
    h: "Changes",
    body: "We will post any changes to this policy on this page with an updated date.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" lede="Last updated: July 2026" />
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
