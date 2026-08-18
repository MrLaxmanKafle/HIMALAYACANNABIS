import Link from "next/link";
import { company } from "@/lib/company";
import Logo from "@/components/Logo";
import {
  productCategories,
  originLinks,
  serviceLinks,
  landLinks,
  companyLinks,
  pagesIn,
  countIn,
} from "@/lib/nav";

const learnLinks = [
  { href: "/nepal-cannabis-tracker", label: "Nepal Cannabis Law Tracker" },
  { href: "/learn/is-cannabis-legal-in-nepal", label: "Is cannabis legal in Nepal?" },
  { href: "/learn/hemp-vs-marijuana-difference", label: "Hemp vs marijuana" },
  { href: "/learn/hemp-seed-oil-vs-cbd-oil", label: "Hemp seed oil vs CBD oil" },
  { href: "/learn/hemp-cannabis-glossary-nepal", label: "Hemp & cannabis glossary" },
  { href: "/learn", label: "All guides →" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-2 hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line-2">
      {/* Products, grouped by category */}
      <div className="mx-auto max-w-6xl px-5 pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
          Products &amp; Markets
        </p>
        <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <div key={c.key}>
              <Link
                href={c.hub}
                className="text-sm font-semibold text-ink hover:text-marigold"
              >
                {c.label}
                <span className="ml-1.5 text-xs font-normal tabular-nums text-ink-3">
                  {countIn(c.key)}
                </span>
              </Link>
              <ul className="mt-2.5 space-y-1.5 text-sm">
                {pagesIn(c.key, 5).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ink-2 hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
                {countIn(c.key) > 5 && (
                  <li>
                    <Link href={c.hub} className="font-medium text-marigold hover:text-ink">
                      All {c.label.toLowerCase()} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Services / Land / Learn / Company */}
      <div className="mx-auto mt-14 grid max-w-6xl gap-10 border-t border-line-2 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <Column title="Origin" links={originLinks} />
        <Column title="Lab & Services" links={serviceLinks} />
        <Column title="Land & Farming" links={landLinks} />
        <Column title="Learn" links={learnLinks} />
        <Column title="Company" links={companyLinks} />
      </div>

      {/* Identity + commitment */}
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-line-2 px-5 py-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="size-9" />
            <div>
              <p className="font-bold tracking-wide">{company.name}</p>
              <p className="text-sm text-ink-3">{company.nameNepali}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
            {company.registeredOffice}
          </p>
          <p className="mt-1 text-sm text-ink-3">{company.incorporation}</p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-block text-sm font-semibold text-marigold hover:text-ink"
          >
            {company.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
            Our Commitment
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            Medical and industrial cannabis (hemp) only, with THC content within
            legal limits. Every product is laboratory-tested before sale. We do
            not engage in any transaction for recreational purposes.
          </p>
          <Link
            href="/quote"
            className="mt-5 inline-block rounded-full bg-marigold px-6 py-2.5 text-sm font-semibold text-ground transition-colors hover:bg-ink"
          >
            Request a Quote
          </Link>
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
