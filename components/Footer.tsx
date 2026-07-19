import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="bg-himalaya-950 text-himalaya-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-semibold text-white">{company.name}</p>
          <p className="text-sm">{company.nameNepali}</p>
          <p className="mt-3 text-sm text-himalaya-200">{company.registeredOffice}</p>
          <p className="mt-1 text-sm text-himalaya-200">{company.incorporation}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/services" className="hover:text-white">Lab & Services</Link></li>
            <li><Link href="/investors" className="hover:text-white">Investors</Link></li>
            <li><Link href="/compliance" className="hover:text-white">Compliance & Licensing</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">B2B & Export Inquiries</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Our Commitment</p>
          <p className="mt-3 text-sm leading-relaxed text-himalaya-200">
            Medical and industrial cannabis (hemp) only, with THC content within legal
            limits. Every product is laboratory-tested before sale. We do not engage in
            any transaction for recreational purposes.
          </p>
        </div>
      </div>

      <div className="border-t border-himalaya-900">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-himalaya-300">
          <p>
            © {new Date().getFullYear()} {company.name} All activities are subject to
            the licences and approvals required under the prevailing laws of Nepal.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
