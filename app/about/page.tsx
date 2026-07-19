import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Himalaya Cannabis Pvt. Ltd. is a Nepali company cultivating and processing licensed medical and industrial cannabis (hemp) in the Himalayan and hilly regions of Nepal.",
};

const facts = [
  { label: "Company", value: company.name },
  { label: "Registered office", value: company.registeredOffice },
  { label: "Incorporation", value: "Companies Act, 2063 (2006 A.D.), Nepal" },
  { label: "Nature of business", value: company.natureOfBusiness },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Himalaya Cannabis"
        lede="A Nepali company bringing the Himalaya's oldest crop into the legal, lab-tested economy."
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-ink-2">
          <p>
            The cannabis plant is not new to Nepal. It has grown wild across our
            mountains and hills for centuries — woven into rope and cloth, its
            seed (<em className="text-ink">bhango</em>) ground into chutneys in
            Himalayan kitchens, its oils used in traditional medicine.
          </p>
          <p>
            <strong className="text-ink">Himalaya Cannabis Pvt. Ltd.</strong> was
            founded to give that heritage a legal, modern future. We cultivate
            and process medical and industrial cannabis — always under licence,
            always within the THC limits prescribed by law — and turn it into
            products Nepal can be proud of: textiles, foods, wellness goods,
            ayurvedic formulations, and cosmetics, for the domestic market and
            for export.
          </p>
          <p>
            We are equally committed to building the sector around us: a
            certified THC/CBD testing laboratory, seed supply, seed-to-sale
            tracking software, compliance systems, consultancy, and training —
            so that farmers and enterprises across Nepal can participate in this
            industry safely and legally.
          </p>
          <p className="border-t border-line pt-6 text-xl font-bold text-ink">
            Our purpose, written into our founding documents, is simple: to
            generate employment through the cannabis business and thereby make
            the country more self-reliant.
          </p>
        </div>

        <h2 className="mt-20 text-2xl font-bold">Company facts</h2>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {facts.map((f) => (
            <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                {f.label}
              </dt>
              <dd className="sm:col-span-2">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
