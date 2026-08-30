import Link from "next/link";
import { withSlash } from "@/lib/href";

/** Page heading block. Every route above the fold looks the same on purpose. */
export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="survey-grid border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <p className="tech-label text-amber-deep rise rise-1">{eyebrow}</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-semibold max-w-4xl rise rise-2">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 text-lg sm:text-xl text-ink-2 max-w-3xl leading-relaxed rise rise-3">
            {lead}
          </p>
        )}
        {meta && meta.length > 0 && (
          <dl className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl">
            {meta.map((m) => (
              <div key={m.label} className="border-t border-line pt-3">
                <dt className="tech-label text-ink-3">{m.label}</dt>
                <dd className="mt-1.5 font-mono text-[0.95rem]">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`${dark ? "bg-graphite text-on-graphite" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className={`tech-label ${dark ? "text-amber" : "text-amber-deep"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">{title}</h2>
      {lead && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-on-graphite-2" : "text-ink-2"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** A bordered card. Hairline borders rather than shadows — drawing, not UI. */
export function Card({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`border ${
        dark ? "border-line-inv bg-graphite-2" : "border-line bg-paper"
      } p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={withSlash(href)}
      className={`inline-flex items-center gap-1.5 text-[0.9rem] font-medium ${
        dark ? "text-amber" : "text-amber-deep"
      } hover:gap-2.5 transition-all`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 text-[0.9rem] font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-graphite text-on-graphite hover:bg-graphite-2"
      : "border border-line text-ink hover:bg-paper-2";
  return (
    <Link href={withSlash(href)} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/**
 * A rendered FAQ list. Always paired with `faqJsonLd` for the same data — the
 * visible copy and the structured data must match, or the markup is a
 * mismatched-content violation rather than an enhancement.
 */
export function FaqList({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: { q: string; a: string }[];
  heading?: string;
}) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold">{heading}</h2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
              <h3 className="text-base sm:text-lg font-medium">{f.q}</h3>
              <span
                aria-hidden="true"
                className="shrink-0 mt-1 text-ink-3 group-open:rotate-45 transition-transform"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-ink-2 leading-relaxed max-w-3xl">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line-2 bg-paper-2">
      <ol className="mx-auto max-w-7xl px-5 py-3 flex flex-wrap items-center gap-2 text-[0.78rem] text-ink-3">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className="text-ink-2">{item.name}</span>
            ) : (
              <Link href={withSlash(item.path)} className="hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Stat({
  value,
  label,
  detail,
  dark = false,
}: {
  value: string;
  label: string;
  detail?: string;
  dark?: boolean;
}) {
  return (
    <div className={`border-t ${dark ? "border-line-inv" : "border-line"} pt-4`}>
      <div className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-[0.9rem] font-medium">{label}</div>
      {detail && (
        <div
          className={`mt-1 text-[0.8rem] ${dark ? "text-on-graphite-2" : "text-ink-3"}`}
        >
          {detail}
        </div>
      )}
    </div>
  );
}
