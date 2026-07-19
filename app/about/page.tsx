import type { Metadata } from "next";
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
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">About Himalaya Cannabis</h1>
          <p className="mt-3 max-w-2xl text-himalaya-200">
            A Nepali company bringing the Himalaya&apos;s oldest crop into the legal,
            lab-tested economy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="prose-lg space-y-6 leading-relaxed text-himalaya-800/90">
          <p>
            The cannabis plant is not new to Nepal. It has grown wild across our
            mountains and hills for centuries — woven into rope and cloth, its seed
            (<em>bhango</em>) ground into chutneys in Himalayan kitchens, its oils used
            in traditional medicine.
          </p>
          <p>
            <strong>Himalaya Cannabis Pvt. Ltd.</strong> was founded to give that
            heritage a legal, modern future. We cultivate and process medical and
            industrial cannabis — always under licence, always within the THC limits
            prescribed by law — and turn it into products Nepal can be proud of:
            textiles, foods, wellness goods, ayurvedic formulations, and cosmetics,
            for the domestic market and for export.
          </p>
          <p>
            We are equally committed to building the sector around us: a certified
            THC/CBD testing laboratory, seed supply, seed-to-sale tracking software,
            compliance systems, consultancy, and training — so that farmers and
            enterprises across Nepal can participate in this industry safely and
            legally.
          </p>
          <p>
            Our purpose, written into our founding documents, is simple:{" "}
            <strong>
              to generate employment through the cannabis business and thereby make
              the country more self-reliant.
            </strong>
          </p>
        </div>

        <h2 className="mt-16 text-2xl font-bold text-himalaya-900">Company facts</h2>
        <dl className="mt-6 divide-y divide-himalaya-100 rounded-xl border border-himalaya-100 bg-white shadow-sm">
          {facts.map((f) => (
            <div key={f.label} className="grid gap-1 px-6 py-4 sm:grid-cols-3">
              <dt className="text-sm font-medium uppercase tracking-wide text-himalaya-500">
                {f.label}
              </dt>
              <dd className="sm:col-span-2 text-himalaya-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
