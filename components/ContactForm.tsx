"use client";

import { useState } from "react";
import { company } from "@/lib/company";

const inquiryTypes = [
  "Wholesale supply",
  "Retail partnership",
  "Export inquiry",
  "Land offer (sell / lease / partner)",
  "Laboratory / testing",
  "Consultancy / training",
  "Investment",
  "Other",
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-ground-2 px-4 py-2.5 text-ink placeholder:text-ink-3 focus:border-marigold focus:outline-none";

export default function ContactForm() {
  const [type, setType] = useState(inquiryTypes[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${type}] Inquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation") || "—"}`,
      `Email: ${data.get("email")}`,
      `Inquiry type: ${type}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
      <h2 className="text-2xl font-bold">Send an inquiry</h2>
      <p className="mt-1 text-sm text-ink-3">
        This opens your email client with the details pre-filled.
      </p>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-ink-2">Your name *</span>
          <input required name="name" className={inputClass} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">Organisation</span>
          <input name="organisation" className={inputClass} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">Email *</span>
          <input required type="email" name="email" className={inputClass} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">Inquiry type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={inputClass}
          >
            {inquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">Message *</span>
          <textarea required name="message" rows={5} className={inputClass} />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-marigold px-6 py-3 font-semibold text-ground transition-colors hover:bg-ink"
        >
          Compose email
        </button>
      </div>
    </form>
  );
}
