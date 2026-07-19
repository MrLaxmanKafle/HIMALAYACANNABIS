import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
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
  { label: "Structure", value: "Single-shareholder private limited company" },
  { label: "Incorporation", value: "Companies Act, 2063 (2006 A.D.), Nepal" },
  { label: "Registered office", value: company.registeredOffice },
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
      <PageHero
        title="Invest in Himalaya Cannabis"
        lede="We are seeking aligned investors and strategic partners to build Nepal's compliance-first hemp and medical cannabis company — from licensed Himalayan cultivation to lab-tested products for home and export markets."
      />

      {/* The opportunity */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        {whyPoints.map((p, i) => (
          <article
            key={p.title}
            className="grid gap-4 border-b border-line py-10 last:border-b-0 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-sm font-semibold text-ink-3 tabular-nums">
              0{i + 1}
            </span>
            <div>
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{p.body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Use of funds */}
      <section className="border-y border-line-2 bg-ground-2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold tracking-[-0.01em]">
            What investment builds
          </h2>
          <ol className="mt-10 max-w-3xl space-y-5">
            {useOfFunds.map((u, i) => (
              <li key={u} className="flex items-baseline gap-5">
                <span className="text-sm font-semibold text-marigold tabular-nums">
                  0{i + 1}
                </span>
                <span className="leading-relaxed text-ink-2">{u}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Company facts */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-2xl font-bold">Company facts for investors</h2>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {companyFacts.map((f) => (
            <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                {f.label}
              </dt>
              <dd className="sm:col-span-2">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-ink-3">
          English translations of the Memorandum and Articles of Association are
          available to serious investors on request. The Nepali originals filed
          with the Office of the Company Registrar govern.
        </p>

        <div className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-bold">Start a conversation</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-2">
            Write to us with a short introduction — who you are, your investment
            focus, and what you&apos;d like to explore. We respond to every
            serious inquiry with our investor pack and a call.
          </p>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent(
              "[Investment] Introduction"
            )}`}
            className="mt-6 inline-block rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
          >
            {company.email}
          </a>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-xs leading-relaxed text-ink-3">
          <strong className="text-ink-2">Important notice.</strong> {company.name}{" "}
          is a private limited company. Nothing on this page or website
          constitutes a public offering, invitation, or solicitation to
          subscribe for securities, in Nepal or any other jurisdiction. Any
          investment would take place only through private, individually
          negotiated transactions with a limited number of persons, in
          accordance with the Companies Act, 2063 and other prevailing laws of
          Nepal, and subject to definitive documentation and due diligence. This
          page contains forward-looking statements about planned activities that
          depend on licences and approvals not yet obtained; no assurance is
          given that they will be obtained. Nothing here is investment, legal,
          or tax advice.
        </p>
      </section>
    </>
  );
}
