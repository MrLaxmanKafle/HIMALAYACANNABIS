"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

type MenuKey = "origin" | "products" | "services" | "land" | "company";

const simpleLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/ne", label: "नेपाली" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMenu(null);
    setOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Close on outside click / Escape
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const triggerClass = (active: boolean) =>
    `flex items-center gap-1 text-sm transition-colors ${
      active ? "font-semibold text-marigold" : "text-ink-2 hover:text-ink"
    }`;

  const Chevron = ({ up }: { up: boolean }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`transition-transform ${up ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line-2 bg-ground/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Logo className="size-9" />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.14em]">
              HIMALAYA CANNABIS
            </span>
            <span className="block text-[11px] text-ink-3">{company.nameNepali}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div ref={navRef} className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Main">
            {/* Origin */}
            <div className="relative">
              <button
                type="button"
                className={triggerClass(menu === "origin" || isActive("/origin"))}
                aria-expanded={menu === "origin"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "origin" ? null : "origin")}
              >
                Origin <Chevron up={menu === "origin"} />
              </button>
              {menu === "origin" && <DropList items={originLinks} />}
            </div>

            {/* Products mega menu */}
            <div className="relative">
              <button
                type="button"
                className={triggerClass(menu === "products")}
                aria-expanded={menu === "products"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "products" ? null : "products")}
              >
                Products <Chevron up={menu === "products"} />
              </button>
              {menu === "products" && (
                <div className="absolute left-1/2 top-full z-50 mt-3 w-[42rem] -translate-x-1/2 rounded-2xl border border-line bg-ground-2 p-3 shadow-2xl">
                  <div className="grid grid-cols-2 gap-1">
                    {productCategories.map((c) => (
                      <Link
                        key={c.key}
                        href={c.hub}
                        className="group rounded-xl p-3 transition-colors hover:bg-ground-3"
                      >
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="font-semibold text-ink group-hover:text-marigold">
                            {c.label}
                          </span>
                          <span className="shrink-0 text-[11px] tabular-nums text-ink-3">
                            {countIn(c.key)}
                          </span>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-ink-3">
                          {c.blurb}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-line px-3 pt-3">
                    <Link href="/products" className="text-sm font-semibold text-marigold hover:text-ink">
                      All product lines →
                    </Link>
                    <Link href="/quote" className="text-sm font-semibold text-ink-2 hover:text-marigold">
                      Request a quote →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="relative">
              <button
                type="button"
                className={triggerClass(menu === "services")}
                aria-expanded={menu === "services"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "services" ? null : "services")}
              >
                Services <Chevron up={menu === "services"} />
              </button>
              {menu === "services" && (
                <DropList items={serviceLinks} />
              )}
            </div>

            {/* Land */}
            <div className="relative">
              <button
                type="button"
                className={triggerClass(menu === "land")}
                aria-expanded={menu === "land"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "land" ? null : "land")}
              >
                Land <Chevron up={menu === "land"} />
              </button>
              {menu === "land" && <DropList items={landLinks} />}
            </div>

            <Link
              href="/learn"
              className={`text-sm transition-colors ${
                isActive("/learn") ? "font-semibold text-marigold" : "text-ink-2 hover:text-ink"
              }`}
            >
              Learn
            </Link>

            {/* Company */}
            <div className="relative">
              <button
                type="button"
                className={triggerClass(menu === "company")}
                aria-expanded={menu === "company"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "company" ? null : "company")}
              >
                Company <Chevron up={menu === "company"} />
              </button>
              {menu === "company" && <DropList items={companyLinks} />}
            </div>

            <Link
              href="/ne"
              className={`text-sm transition-colors ${
                isActive("/ne") ? "font-semibold text-marigold" : "text-ink-2 hover:text-ink"
              }`}
            >
              नेपाली
            </Link>
          </nav>

          <Link
            href="/quote"
            className="shrink-0 rounded-full bg-marigold px-5 py-2 text-sm font-semibold text-ground transition-colors hover:bg-ink"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-ink-2 hover:text-ink lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="max-h-[75vh] overflow-y-auto border-t border-line-2 px-5 pb-6 lg:hidden"
          aria-label="Mobile"
        >
          <Link
            href="/quote"
            className="mt-4 block rounded-full bg-marigold px-5 py-2.5 text-center font-semibold text-ground"
          >
            Request a Quote
          </Link>

          <MobileSection
            label="Origin"
            open={mobileSection === "origin"}
            onToggle={() => setMobileSection(mobileSection === "origin" ? null : "origin")}
          >
            <MobileLinks items={originLinks} />
          </MobileSection>

          <MobileSection
            label="Products"
            open={mobileSection === "products"}
            onToggle={() => setMobileSection(mobileSection === "products" ? null : "products")}
          >
            {productCategories.map((c) => (
              <div key={c.key} className="py-1.5">
                <Link href={c.hub} className="block font-medium text-ink hover:text-marigold">
                  {c.label}{" "}
                  <span className="text-xs tabular-nums text-ink-3">({countIn(c.key)})</span>
                </Link>
                <ul className="mt-1 space-y-1 border-l border-line pl-3">
                  {pagesIn(c.key, 4).map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block py-0.5 text-sm text-ink-3 hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link href="/products" className="mt-2 block font-semibold text-marigold">
              All product lines →
            </Link>
          </MobileSection>

          <MobileSection
            label="Services"
            open={mobileSection === "services"}
            onToggle={() => setMobileSection(mobileSection === "services" ? null : "services")}
          >
            <MobileLinks items={serviceLinks} />
          </MobileSection>

          <MobileSection
            label="Land"
            open={mobileSection === "land"}
            onToggle={() => setMobileSection(mobileSection === "land" ? null : "land")}
          >
            <MobileLinks items={landLinks} />
          </MobileSection>

          <Link href="/learn" className="block border-b border-line py-3 font-medium text-ink-2 hover:text-ink">
            Learn
          </Link>

          <MobileSection
            label="Company"
            open={mobileSection === "company"}
            onToggle={() => setMobileSection(mobileSection === "company" ? null : "company")}
          >
            <MobileLinks items={companyLinks} />
          </MobileSection>

          <Link href="/ne" className="block py-3 font-medium text-ink-2 hover:text-ink">
            नेपाली
          </Link>
        </nav>
      )}
    </header>
  );
}

function DropList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-line bg-ground-2 p-2 shadow-2xl">
      <ul>
        {items.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block rounded-lg px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-ground-3 hover:text-marigold"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 font-medium text-ink-2 hover:text-ink"
      >
        {label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  );
}

function MobileLinks({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-1">
      {items.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="block py-1.5 text-sm text-ink-3 hover:text-ink">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
