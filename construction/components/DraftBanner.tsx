import { siteStatus } from "@/lib/company";

/**
 * Shown on every page while `siteStatus` is "draft".
 *
 * The site ships with invented project records, client names and licence
 * numbers so the templates can be reviewed. Anyone who reaches a page — a
 * colleague, a client shown an early link, a crawler that ignores the noindex —
 * needs to know that before they read a project value as a fact. Delete this
 * component's usage when the real data lands and the status flips.
 */
export default function DraftBanner() {
  if (siteStatus === "live") return null;
  return (
    <div className="bg-amber text-graphite border-b border-amber-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="tech-label font-semibold">Draft — placeholder content</span>
        <span className="text-[0.8rem] leading-snug">
          Company name, project records, licence numbers and figures on this site
          are placeholders for layout review. They are not real and must be
          replaced before launch.
        </span>
      </div>
    </div>
  );
}
