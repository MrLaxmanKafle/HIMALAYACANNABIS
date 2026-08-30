import Link from "next/link";
import Logo from "@/components/Logo";
import { primaryNav } from "@/lib/nav";
import { withSlash } from "@/lib/href";
import { company } from "@/lib/company";

/**
 * A server component with no client JavaScript. The mobile menu is a
 * <details> element, which gives a working disclosure without hydration —
 * on a static site read over slow mobile connections in Nepal, shipping a
 * client bundle for a navigation toggle is a poor trade.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/92 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0" aria-label={`${company.shortName} — home`}>
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={withSlash(item.href)}
                className="text-[0.9rem] text-ink-2 hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={withSlash("/contact")}
              className="text-[0.9rem] font-medium bg-graphite text-on-graphite px-4 py-2 hover:bg-graphite-2 transition-colors"
            >
              Enquire
            </Link>
          </nav>

          <details className="md:hidden relative">
            <summary
              className="list-none cursor-pointer p-2 -mr-2"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-60 bg-paper border border-line shadow-lg">
              {[...primaryNav, { href: "/contact/", label: "Contact" }].map((item) => (
                <Link
                  key={item.href}
                  href={withSlash(item.href)}
                  className="block px-4 py-3 text-[0.9rem] border-b border-line-2 last:border-0 hover:bg-paper-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
