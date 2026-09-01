import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/seo";
import { licences, isVerifiable, accreditedTestingAvailable } from "@/lib/licence";

export const metadata: Metadata = {
  title: "Cannabis Compliance & Licensing — Nepal Hemp Law",
  description:
    "How Himalaya Cannabis operates within Nepal's legal framework: licensed activities only, THC below 0.3%, mandatory lab testing, no recreational transactions.",
  keywords: [
    "cannabis compliance Nepal",
    "hemp licensing Nepal",
    "Nepal cannabis regulation",
    "THC limit Nepal law",
    "cannabis law Nepal 2033",
  ],
  openGraph: {
    title: "Cannabis Compliance & Licensing — Himalaya Cannabis",
    description:
      "How Himalaya Cannabis operates within Nepal's legal framework: licensed activities only, THC below 0.3%, mandatory lab testing, no recreational transactions.",
    url: "https://himalayacannabis.com/compliance",
    type: "website",
    images: [
      {
        url: "https://himalayacannabis.com/compliance/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Himalaya Cannabis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Compliance & Licensing — Himalaya Cannabis",
    description:
      "How Himalaya Cannabis operates within Nepal's legal framework: licensed activities only, THC below 0.3%, mandatory lab testing, no recreational transactions.",
    images: ["https://himalayacannabis.com/compliance/opengraph-image.png"],
  },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd_compliance),
        }}
      />

      <PageHero
        title="Compliance & Licensing"
        lede="Operating legally is not a constraint on our business — it is our business. Here are the licences we hold, what each one permits, and the limits we state rather than gloss."
      />

      {/* Licence register — renders from lib/licence.ts so the claim can only be
          as strong as the recorded evidence. */}
      <section className="border-b border-line-2 bg-ink/[0.02]">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-2xl font-bold">What we are authorised to do</h2>
          <p className="mt-4 leading-relaxed text-ink-2">
            Four instruments, listed with the body that issued each one. Buyers
            conducting supplier due diligence should ask for the certificates —
            we send them on request, and we would think less of a buyer who did
            not ask.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {licences.map((l) => (
              <div key={l.key} className="py-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <dt className="font-bold">
                    {l.name}
                    {l.nameNepali && (
                      <span className="ml-2.5 text-sm font-normal text-ink-3">
                        {l.nameNepali}
                      </span>
                    )}
                  </dt>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] ${
                      isVerifiable(l)
                        ? "border-marigold/50 bg-marigold/10 text-marigold"
                        : "border-line text-ink-3"
                    }`}
                  >
                    {isVerifiable(l) ? "Reference published" : "On request"}
                  </span>
                </div>

                <dd className="mt-3 leading-relaxed text-ink-2">{l.scope}</dd>

                {isVerifiable(l) ? (
                  <dl className="mt-4 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-[8rem_1fr]">
                    <dt className="text-ink-3">Issuing authority</dt>
                    <dd className="text-ink">{l.authority}</dd>
                    <dt className="text-ink-3">Reference</dt>
                    <dd className="font-mono text-ink">{l.number}</dd>
                    {l.issued && (
                      <>
                        <dt className="text-ink-3">Issued</dt>
                        <dd className="text-ink">{l.issued}</dd>
                      </>
                    )}
                    {l.validTo && (
                      <>
                        <dt className="text-ink-3">Valid to</dt>
                        <dd className="text-ink">{l.validTo}</dd>
                      </>
                    )}
                  </dl>
                ) : (
                  <p className="mt-4 text-sm text-ink-3">
                    {l.authority
                      ? `Issued by ${l.authority}. Certificate reference supplied to buyers on request.`
                      : "Certificate supplied to buyers on request."}
                  </p>
                )}

                {l.limits && (
                  <p className="mt-4 border-l-2 border-line pl-4 text-sm leading-relaxed text-ink-2">
                    {l.limits}
                  </p>
                )}
              </div>
            ))}
          </dl>

          {!accreditedTestingAvailable && (
            <p className="mt-8 text-sm leading-relaxed text-ink-3">
              One gap we state rather than gloss: no accredited cannabis testing
              laboratory is yet operating inside Nepal. Until one is, lot testing
              for export goes to an accredited laboratory abroad, and the
              certificate names that laboratory.
            </p>
          )}
        </div>
      </section>

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
              <span aria-hidden className="text-marigold">
                —
              </span>
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
