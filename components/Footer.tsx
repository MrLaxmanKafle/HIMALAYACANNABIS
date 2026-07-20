import Link from "next/link";
import { company } from "@/lib/company";
import { landingPages } from "@/lib/landing";

export default function Footer() {
  return (
    <footer className="border-t border-line-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-bold tracking-wide">{company.name}</p>
          <p className="text-sm text-ink-3">{company.nameNepali}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            {company.registeredOffice}
          </p>
          <p className="mt-1 text-sm text-ink-3">{company.incorporation}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-3">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/products" className="text-ink-2 hover:text-ink">Products</Link></li>
            <li><Link href="/services" className="text-ink-2 hover:text-ink">Lab & Services</Link></li>
            <li><Link href="/investors" className="text-ink-2 hover:text-ink">Investors</Link></li>
            <li><Link href="/land" className="text-ink-2 hover:text-ink">Land & Farmer Partnerships</Link></li>
            <li><Link href="/learn" className="text-ink-2 hover:text-ink">Learn: Cannabis in Nepal</Link></li>
            <li><Link href="/compliance" className="text-ink-2 hover:text-ink">Compliance & Licensing</Link></li>
            <li><Link href="/faq" className="text-ink-2 hover:text-ink">FAQ</Link></li>
            <li><Link href="/contact" className="text-ink-2 hover:text-ink">B2B & Export Inquiries</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-3">
            Markets & Services
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {landingPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-ink-2 hover:text-ink">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-3">
            Our Commitment
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            Medical and industrial cannabis (hemp) only, with THC content within
            legal limits. Every product is laboratory-tested before sale. We do
            not engage in any transaction for recreational purposes.
          </p>
        </div>
      </div>

      <div className="border-t border-line-2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 text-xs text-ink-3">
          <p>
            © {new Date().getFullYear()} {company.name} All activities are subject to
            the licences and approvals required under the prevailing laws of Nepal.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
