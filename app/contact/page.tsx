import type { Metadata } from "next";
import { company } from "@/lib/company";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Contact Himalaya Cannabis Pvt. Ltd. in Kathmandu, Nepal for wholesale, retail partnership, export, laboratory, and consultancy inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-himalaya-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold">Contact & Inquiries</h1>
          <p className="mt-3 max-w-2xl text-himalaya-200">
            Wholesale, retail partnership, export, testing, or consultancy — we
            respond to every serious inquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-himalaya-900">Reach us</h2>
          <dl className="mt-6 space-y-5 text-himalaya-800">
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-himalaya-500">
                Registered office
              </dt>
              <dd className="mt-1">{company.registeredOffice}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-himalaya-500">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${company.email}`} className="text-himalaya-600 hover:underline">
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 rounded-xl bg-himalaya-50 p-6 text-sm leading-relaxed text-himalaya-800/80">
            <p className="font-medium text-himalaya-900">A note on what we can supply</p>
            <p className="mt-2">
              We deal exclusively in medical and industrial cannabis (hemp) products
              under licence, with THC within the limits prescribed by Nepali law. We
              do not respond to inquiries seeking recreational products.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
