import Link from "next/link";
import { primaryNav } from "@/lib/nav";
import { withSlash } from "@/lib/href";

export default function NotFound() {
  return (
    <div className="survey-grid">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
        <p className="tech-label text-amber-deep">Error 404</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-semibold">
          That page is not on the drawing.
        </h1>
        <p className="mt-6 text-lg text-ink-2 leading-relaxed">
          The address you followed does not exist, or the page has moved. Here is
          where most people are going.
        </p>
        <ul className="mt-9 grid gap-px bg-line border border-line sm:grid-cols-2">
          {[...primaryNav, { href: "/guides/", label: "Guides" }, { href: "/contact/", label: "Contact" }].map((l) => (
            <li key={l.href}>
              <Link
                href={withSlash(l.href)}
                className="block bg-paper p-5 hover:bg-paper-2 transition-colors font-medium"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
