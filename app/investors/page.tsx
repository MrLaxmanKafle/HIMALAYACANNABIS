import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Partner with Himalaya Cannabis Pvt. Ltd. — a licensed-track Nepali medical and industrial hemp company. Private investment discussions with serious investors.",
};

const whyPoints = [
  {
    title: "A crop the Himalaya already grows",
    body: "Cannabis grows naturally across Nepal's hills and mountains. Cultivation costs are structurally low, and generations of local knowledge — from fibre to bhango — already exist in the workforce.",
  },
  {
    title: "An opening legal market",
    body: "Nepal's medical and industrial cannabis framework is taking shape, led by provincial initiatives. Early, compliance-first operators are positioned to hold the licences, land relationships, and brand recognition that later entrants will have to buy.",
  },
  {
    title: "Five product lines, one supply chain",
    body: "Textiles, seed foods, CBD wellness, ayurvedic formulations, and cosmetics all draw on the same licensed cultivation and testing infrastructure — diversified revenue on shared fixed costs.",
  },
  {
    title: "Export economics",
    body: "Global demand for hemp fibre, seed oil, and CBD continues to grow. Our founding objectives expressly cover overseas sales and distribution, and 'Himalayan' provenance is a premium story in every category we operate in.",
  },
];

const useOfFunds = [
  "Licensed cultivation in the Himalayan and hilly regions — land, seed, and farmer partnerships",
  "Processing and manufacturing capacity for fibre, oil, and extract lines",
  "A certified THC/CBD testing laboratory serving the company and the wider sector",
  "Brand development, packaging, and domestic and export market entry",
  "Seed-to-sale tracking and compliance systems",
];

const companyFacts = [
  { label: "Company", value: company.name },
  {
    label: "Structure",
    value: "Single-shareholder private limited company",
  },
  {
    label: "Incorporation",
    value: "Companies Act, 2063 (2006 A.D.), Nepal",
  },
  {
    label: "Registered office",
    value: company.registeredOffice,
  },
  {
    label: "Authorised capital",
    value: "NPR 1,00,00,000 (one crore) — 1,00,000 ordinary shares of NPR 100",
  },
  {
    label: "Share transferability",
    value:
      "No restriction on sale or transfer of shares under the Memorandum of Association",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Invest in Himalaya Cannabis</h1>
          <p className="mt-3 max-w-2xl text-himalaya-200">
            We are seeking aligned investors and strategic partners to build
            Nepal&apos;s compliance-first hemp and medical cannabis company — from
            licensed Himalayan cultivation to lab-tested products for home and
            export markets.
          </p>
        </div>
      </section>

      {/* Why invest */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-himalaya-900">The opportunity</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {whyPoints.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-himalaya-100 bg-white p-7 shadow-sm"
            >
              <h3 className="font-semibold text-himalaya-900">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-himalaya-800/80">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Use of funds */}
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">What investment builds</h2>
          <ul className="mt-8 space-y-4">
            {useOfFunds.map((u, i) => (
              <li key={u} className="flex items-start gap-4">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-himalaya-600 text-sm font-semibold">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-himalaya-100">{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Company facts */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold text-himalaya-900">
          Company facts for investors
        </h2>
        <dl className="mt-6 divide-y divide-himalaya-100 rounded-xl border border-himalaya-100 bg-white shadow-sm">
          {companyFacts.map((f) => (
            <div key={f.label} className="grid gap-1 px-6 py-4 sm:grid-cols-3">
              <dt className="text-sm font-medium uppercase tracking-wide text-himalaya-500">
                {f.label}
              </dt>
              <dd className="sm:col-span-2 text-himalaya-900">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-himalaya-800/60">
          English translations of the Memorandum and Articles of Association are
          available to serious investors on request. The Nepali originals filed with
          the Office of the Company Registrar govern.
        </p>
      </section>

      {/* How to approach */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-2xl bg-himalaya-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-himalaya-900">Start a conversation</h2>
          <p className="mx-auto mt-3 max-w-xl text-himalaya-800/80">
            Write to us with a short introduction — who you are, your investment
            focus, and what you&apos;d like to explore. We respond to every serious
            inquiry with our investor pack and a call.
          </p>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent(
              "[Investment] Introduction"
            )}`}
            className="mt-6 inline-block rounded-lg bg-himalaya-600 px-8 py-3 font-medium text-white shadow hover:bg-himalaya-700"
          >
            {company.email}
          </a>
        </div>

        <p className="mt-8 rounded-xl border border-himalaya-100 bg-white p-6 text-xs leading-relaxed text-himalaya-800/60">
          <strong>Important notice.</strong> {company.name} is a private limited
          company. Nothing on this page or website constitutes a public offering,
          invitation, or solicitation to subscribe for securities, in Nepal or any
          other jurisdiction. Any investment would take place only through private,
          individually negotiated transactions with a limited number of persons, in
          accordance with the Companies Act, 2063 and other prevailing laws of
          Nepal, and subject to definitive documentation and due diligence. This
          page contains forward-looking statements about planned activities that
          depend on licences and approvals not yet obtained; no assurance is given
          that they will be obtained. Nothing here is investment, legal, or tax
          advice.
        </p>
      </section>
    </>
  );
}
