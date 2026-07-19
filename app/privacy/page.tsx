import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Himalaya Cannabis Pvt. Ltd. handles personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-himalaya-200">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 leading-relaxed text-himalaya-800/90">
        <div>
          <h2 className="text-xl font-bold text-himalaya-900">Who we are</h2>
          <p className="mt-2">
            This website is operated by {company.name} ({company.nameNepali}),
            registered at {company.registeredOffice}. For any privacy question,
            contact us at{" "}
            <a href={`mailto:${company.email}`} className="text-himalaya-600 hover:underline">
              {company.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">What we collect</h2>
          <p className="mt-2">
            This website does not use cookies, analytics trackers, or advertising
            pixels, and it has no user accounts. The only personal information we
            receive is what you choose to send us — for example, your name, email
            address, organisation, and message when you contact us by email or
            through the inquiry form (which composes an email in your own mail
            client; nothing is submitted through the website itself).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">How we use it</h2>
          <p className="mt-2">
            We use the information you send solely to respond to your inquiry and
            conduct the resulting business relationship. We do not sell, rent, or
            trade personal information. We may share it only where required by the
            prevailing laws of Nepal or with professional advisers under
            confidentiality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">Retention and your rights</h2>
          <p className="mt-2">
            We keep correspondence for as long as needed for the purpose it was
            sent, or as required by law. You may ask us at any time to access,
            correct, or delete the personal information we hold about you by
            writing to {company.email}.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">Hosting</h2>
          <p className="mt-2">
            The website is served as static pages by our hosting provider, which
            may record standard technical logs (such as IP addresses) to operate
            and secure the service, under its own privacy terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">Changes</h2>
          <p className="mt-2">
            We will post any changes to this policy on this page with an updated
            date.
          </p>
        </div>
      </section>
    </>
  );
}
