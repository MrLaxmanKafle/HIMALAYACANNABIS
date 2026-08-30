import type { Metadata } from "next";
import { company, ids } from "@/lib/company";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, canonical } from "@/lib/seo";
import { PageHero, Section, Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description: `How ${company.name} handles personal information submitted through this website.`,
  path: "/privacy",
});

const crumbs = [
  { name: "Home", path: "" },
  { name: "Privacy", path: "/privacy" },
];

const jsonLd = [
  {
    "@type": "WebPage",
    "@id": `${canonical("/privacy")}#webpage`,
    url: canonical("/privacy"),
    name: "Privacy",
    isPartOf: { "@id": ids.website },
  },
  breadcrumbJsonLd(crumbs),
];

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow="Legal" title="Privacy" />
      <Section>
        <div className="prose-doc max-w-3xl">
          <h2 className="!mt-0 !border-0 !pt-0">What this website collects</h2>
          <p className="text-[1.05rem]">
            This website is a set of static pages. It has no database, no accounts, no
            login, and no server-side form processing. It does not set cookies, and it
            does not run analytics or advertising trackers.
          </p>
          <h2>The enquiry form</h2>
          <p>
            The enquiry form on the contact page does not submit anything to this
            website. It assembles the details you type into a pre-filled message and
            opens your own email client so you can review and send it yourself.
            Nothing you type is transmitted to or stored on this site, and if you
            close the page without sending, nothing leaves your device.
          </p>
          <h2>Information you send us by email</h2>
          <p>
            When you email us — through the enquiry form or directly — we receive the
            information you choose to include. We use it to respond to your enquiry
            and, where it leads to a commercial relationship, to administer that
            relationship. We retain business correspondence for as long as it is
            relevant to a contract, a tender, or a legal or tax obligation, and we do
            not sell it or share it with third parties for marketing.
          </p>
          <h2>Hosting</h2>
          <p>
            The site is served as static files from a content delivery network. Like
            any web server, the host processes standard technical request data such as
            IP address, user agent and requested URL in order to serve the page and to
            protect the service. We do not combine that data with anything else or use
            it to identify individuals.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask us what personal information we hold about you, ask us to
            correct it, or ask us to delete it where we are not required to keep it.
            Write to{" "}
            <a href={`mailto:${company.email}`} className="text-amber-deep underline">
              {company.email}
            </a>
            .
          </p>
          <h2>Changes</h2>
          <p>
            If this notice changes, the updated version will be published on this
            page. Material changes affecting how we handle information already given
            to us will be communicated directly to the people affected.
          </p>
        </div>
      </Section>
    </>
  );
}
