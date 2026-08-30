import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { company } from "@/lib/company";
import { sectorLinks, capabilityLinks, companyLinks, legalLinks, guideLinks } from "@/lib/nav";
import { withSlash } from "@/lib/href";

function Column({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="tech-label text-on-graphite-2 mb-4">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={withSlash(l.href)}
              className="text-[0.875rem] text-on-graphite/85 hover:text-on-graphite transition-colors"
            >
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
    <footer className="bg-graphite text-on-graphite mt-24">
      <div className="survey-grid-inv border-b border-line-inv-2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Column title="Sectors" links={sectorLinks} />
            <Column title="Capabilities" links={capabilityLinks} />
            <Column title="Company" links={companyLinks} />
            <div>
              <h2 className="tech-label text-on-graphite-2 mb-4">Guides</h2>
              <ul className="space-y-2.5">
                {guideLinks.slice(0, 6).map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[0.875rem] text-on-graphite/85 hover:text-on-graphite transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={withSlash("/guides")}
                    className="text-[0.875rem] text-amber hover:underline"
                  >
                    All guides →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-9">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <LogoMark className="w-7 h-7" />
              <span className="font-semibold tracking-tight">{company.name}</span>
            </div>
            <p className="text-[0.85rem] text-on-graphite-2 leading-relaxed">
              {company.tagline}
            </p>
            <p className="text-[0.8rem] text-on-graphite-2/80 mt-3 leading-relaxed">
              {company.nameNepali} · {company.registeredOffice}
              <br />
              {company.incorporation}
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 text-[0.85rem]">
            <div>
              <div className="tech-label text-on-graphite-2 mb-2">General</div>
              <a href={`mailto:${company.email}`} className="hover:text-amber">
                {company.email}
              </a>
            </div>
            <div>
              <div className="tech-label text-on-graphite-2 mb-2">Tenders</div>
              <a href={`mailto:${company.tenderEmail}`} className="hover:text-amber">
                {company.tenderEmail}
              </a>
            </div>
            <div>
              <div className="tech-label text-on-graphite-2 mb-2">Careers</div>
              <a href={`mailto:${company.careersEmail}`} className="hover:text-amber">
                {company.careersEmail}
              </a>
            </div>
            <div>
              <div className="tech-label text-on-graphite-2 mb-2">Registration</div>
              <span className="font-mono text-[0.8rem] text-on-graphite-2">
                {company.registration.number}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-9 pt-6 border-t border-line-inv-2 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.78rem] text-on-graphite-2">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={withSlash(l.href)}
                  className="text-[0.78rem] text-on-graphite-2 hover:text-on-graphite"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
