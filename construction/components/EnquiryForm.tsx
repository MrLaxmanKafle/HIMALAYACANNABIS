"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import { sectors } from "@/lib/sectors";

/**
 * A mailto-composing form. The site is a static export with no backend, and a
 * contractor's enquiry volume does not justify one — but a bare mailto: link
 * loses the structure that makes an enquiry answerable. This collects the
 * fields we actually need to reply usefully, then hands off to the user's mail
 * client so nothing is stored and no third-party form service sees it.
 */
const enquiryTypes = [
  "Tender / project enquiry",
  "Prequalification documents",
  "Subcontracting or supply",
  "Partnership or joint venture",
  "Media or general enquiry",
];

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    const type = get("type");
    const subject = `${type} — ${get("organisation") || get("name")}`;
    const body = [
      `Enquiry type: ${type}`,
      `Name: ${get("name")}`,
      `Organisation: ${get("organisation")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Sector: ${get("sector")}`,
      `Location / district: ${get("location")}`,
      "",
      "Details:",
      get("message"),
    ].join("\n");

    const to =
      type === "Prequalification documents" || type === "Tender / project enquiry"
        ? company.tenderEmail
        : company.email;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full border border-line bg-paper px-3.5 py-2.5 text-[0.9rem] focus:outline-none focus:border-amber-deep";
  const label = "tech-label text-ink-3 block mb-1.5";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div>
        <label htmlFor="type" className={label}>
          Enquiry type
        </label>
        <select id="type" name="type" required className={field} defaultValue={enquiryTypes[0]}>
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="organisation" className={label}>
            Organisation
          </label>
          <input id="organisation" name="organisation" className={field} autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sector" className={label}>
            Sector
          </label>
          <select id="sector" name="sector" className={field} defaultValue="">
            <option value="">Not sure / other</option>
            {sectors.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location" className={label}>
            Location or district
          </label>
          <input id="location" name="location" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Scope, programme and anything else we should know
        </label>
        <textarea id="message" name="message" rows={6} required className={field} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="bg-graphite text-on-graphite px-5 py-3 text-[0.9rem] font-medium hover:bg-graphite-2 transition-colors"
        >
          Compose enquiry
        </button>
        <p className="text-[0.8rem] text-ink-3 max-w-sm leading-snug">
          This opens your email client with the details filled in. Nothing is
          submitted to or stored on this website.
        </p>
      </div>

      {sent && (
        <p role="status" className="text-[0.875rem] border border-line bg-paper-2 p-4">
          Your email client should have opened with the enquiry ready to send. If it
          did not, email us directly at{" "}
          <a href={`mailto:${company.email}`} className="text-amber-deep underline">
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
