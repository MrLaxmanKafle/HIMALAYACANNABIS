import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Himalaya Cannabis website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="mt-3 text-himalaya-200">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 leading-relaxed text-himalaya-800/90">
        <div>
          <h2 className="text-xl font-bold text-himalaya-900">1. About this website</h2>
          <p className="mt-2">
            This website is operated by {company.name}, a private limited company
            incorporated under the Companies Act, 2063 (2006 A.D.) of Nepal, with
            its registered office at {company.registeredOffice}. By using this
            website you accept these terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">2. Informational purpose only</h2>
          <p className="mt-2">
            Content on this website is provided for general information about the
            Company and its planned activities. It does not constitute an offer to
            sell any product, an offer or solicitation of securities, or legal,
            medical, or investment advice. Product availability is subject to the
            licences and approvals required under the prevailing laws of Nepal.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">3. No recreational products</h2>
          <p className="mt-2">
            The Company deals exclusively in medical and industrial cannabis
            (hemp) within legal THC limits and does not engage in any transaction
            for recreational purposes. Nothing on this website may be read as
            promoting recreational cannabis use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">4. Forward-looking statements</h2>
          <p className="mt-2">
            Statements about planned products, facilities, and services are
            forward-looking and depend on licences, approvals, and market
            conditions. The Company gives no assurance that planned activities
            will proceed as described and may update or withdraw content at any
            time without notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">5. Intellectual property</h2>
          <p className="mt-2">
            The Himalaya Cannabis name, logo, and website content are the property
            of the Company. You may not reproduce them for commercial purposes
            without written permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">6. Limitation of liability</h2>
          <p className="mt-2">
            The website is provided &ldquo;as is&rdquo;. To the maximum extent
            permitted by law, the Company accepts no liability for loss arising
            from reliance on its content or from interruption of its availability.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-himalaya-900">7. Governing law</h2>
          <p className="mt-2">
            These terms are governed by the laws of Nepal, and the courts of Nepal
            have exclusive jurisdiction over any dispute arising from them.
          </p>
        </div>
      </section>
    </>
  );
}
