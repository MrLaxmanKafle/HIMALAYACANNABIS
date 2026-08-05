import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Compliance & Licensing",
  description:
    "How Himalaya Cannabis operates within Nepal's legal framework: licensed activities only, THC below 0.3%, mandatory lab testing, no recreational transactions.",

  alternates: { canonical: "/compliance" },
};

const commitments = [
  {
    title: "Licensed activities only",
    body: "Every regulated activity — cultivation, processing, storage, sale, or distribution — is undertaken only after obtaining the permissions and licences required from the relevant authority under prevailing law. Copies of licences obtained are filed with the Office of the Company Registrar as required.",
  },
  {
    title: "THC within legal limits",
    body: "Industrial cannabis is cultivated and processed maintaining the THC content prescribed by prevailing law — below 0.3% for industrial purposes. Medical cannabis activities follow the applicable medical framework.",
  },
  {
    title: "Mandatory laboratory testing",
    body: "Before cultivation, processing, storage, sale, or distribution of any cannabis product, the relevant product undergoes mandatory chemical testing at a certified laboratory.",
  },
  {
    title: "No recreational transactions",
    body: "The Company does not engage in any transaction for recreational purposes. This is an express provision of our Articles of Association.",
  },
];

const framework = [
  "Companies Act, 2063 (2006 A.D.) — incorporation and corporate governance",
  "Narcotic Drugs (Control) Act, 2033 (1976 A.D.) — the federal control framework",
  "Cannabis (medical and industrial) framework of Gandaki Province",
  "All other federal and provincial laws of Nepal in force for the time being",
];

const breadcrumbJsonLd_compliance = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Compliance & Licensing", path: "/compliance" },
]);

export default function CompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd_compliance) }}
      />

      <PageHero
        title="Compliance & Licensing"
        lede="Operating legally is not a constraint on our business — it is our business. Here is exactly how we work."
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-2xl font-bold">Our commitments</h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {commitments.map((c) => (
            <div key={c.title} className="py-6">
              <dt className="font-bold">{c.title}</dt>
              <dd className="mt-2 leading-relaxed text-ink-2">{c.body}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-20 text-2xl font-bold">
          The legal framework we operate under
        </h2>
        <ul className="mt-6 space-y-3 leading-relaxed text-ink-2">
          {framework.map((f) => (
            <li key={f} className="flex gap-3">
              <span aria-hidden className="text-marigold">—</span>
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-16 border-t border-line pt-6 text-sm leading-relaxed text-ink-3">
          This page summarises provisions of the Company&apos;s Memorandum and
          Articles of Association and is provided for general information. It is
          not legal advice. Product availability is subject to the licences and
          approvals in force at any given time.
        </p>
      </section>
    </>
  );
}
