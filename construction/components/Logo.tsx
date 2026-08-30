import { company } from "@/lib/company";

/**
 * The mark is a bridge span abstracted to its structural diagram: a deck line
 * carried on two piers with the load paths drawn in. It reads as engineering
 * rather than as scenery, and it survives being rendered at 20px in a footer.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="3" fill="currentColor" opacity="0.09" />
      {/* deck */}
      <path d="M5 17h30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      {/* piers */}
      <path d="M13 17v16M27 17v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      {/* ground line */}
      <path d="M4 33h32" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeLinecap="square" />
      {/* truss / load path */}
      <path d="M13 17 20 8l7 9" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" fill="none" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="w-8 h-8 shrink-0" />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-semibold tracking-tight text-[0.95rem]">
            {company.shortName}
          </span>
          <span className="tech-label text-ink-3 mt-1 text-[0.6rem]">
            Civil &amp; Infrastructure
          </span>
        </span>
      )}
    </span>
  );
}
