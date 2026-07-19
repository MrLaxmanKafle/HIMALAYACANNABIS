import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Licensing",
  description:
    "How Himalaya Cannabis Pvt. Ltd. operates within Nepal's legal framework: licensed activities only, THC below 0.3% for industrial hemp, mandatory laboratory testing, and no recreational transactions.",
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

export default function CompliancePage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Compliance & Licensing</h1>
          <p className="mt-3 max-w-2xl text-himalaya-200">
            Operating legally is not a constraint on our business — it is our
            business. Here is exactly how we work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold text-himalaya-900">Our commitments</h2>
        <div className="mt-8 space-y-6">
          {commitments.map((c) => (
            <article
              key={c.title}
              className="rounded-xl border-l-4 border-himalaya-600 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-himalaya-900">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-himalaya-800/80">{c.body}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold text-himalaya-900">
          The legal framework we operate under
        </h2>
        <ul className="mt-6 space-y-3">
          {framework.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-lg bg-himalaya-50 px-5 py-3 text-himalaya-800"
            >
              <span aria-hidden className="mt-0.5 text-himalaya-600">⚖</span>
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-12 rounded-xl border border-himalaya-100 bg-white p-6 text-sm leading-relaxed text-himalaya-800/70">
          This page summarises provisions of the Company&apos;s Memorandum and Articles
          of Association and is provided for general information. It is not legal
          advice. Product availability is subject to the licences and approvals in
          force at any given time.
        </p>
      </section>
    </>
  );
}
