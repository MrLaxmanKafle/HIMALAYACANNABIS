"use client";

import { useState } from "react";
import { company } from "@/lib/company";

const investorTypes = [
  "Individual / angel",
  "Venture capital fund",
  "Institutional investor",
  "Strategic / corporate",
  "Family office",
  "Other",
];

const rangeOptions = [
  "Under NPR 10 lakh",
  "NPR 10 lakh – 50 lakh",
  "NPR 50 lakh – 2 crore",
  "NPR 2 crore – 5 crore",
  "NPR 5 crore+",
  "Prefer to discuss",
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-ground-2 px-4 py-2.5 text-ink placeholder:text-ink-3 focus:border-marigold focus:outline-none";

export default function InvestorInterestForm() {
  const [investorType, setInvestorType] = useState(investorTypes[0]);
  const [range, setRange] = useState(rangeOptions[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[Investment] Funding interest — ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation") || "—"}`,
      `Email: ${data.get("email")}`,
      `Investor type: ${investorType}`,
      `Indicative range of interest: ${range}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-ground-2 p-8">
      <h2 className="text-2xl font-bold">Register funding interest</h2>
      <p className="mt-1 text-sm text-ink-3">
        This is an expression of interest, not a share purchase or a binding
        commitment of any kind — it opens your email client with the details
        pre-filled, addressed to us directly.
      </p>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-ink-2">Your name *</span>
          <input required name="name" className={inputClass} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">Organisation (if any)</span>
          <input name="organisation" className={inputClass} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">Email *</span>
          <input required type="email" name="email" className={inputClass} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">You are an</span>
          <select
            value={investorType}
            onChange={(e) => setInvestorType(e.target.value)}
            className={inputClass}
          >
            {investorTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">
            Indicative range you&apos;d consider
          </span>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className={inputClass}
          >
            {rangeOptions.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink-2">
            Tell us about your investment focus *
          </span>
          <textarea required name="message" rows={4} className={inputClass} />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-marigold px-6 py-3 font-semibold text-ground transition-colors hover:bg-ink"
        >
          Compose email
        </button>

        <p className="text-xs leading-relaxed text-ink-3">
          Submitting this form is not an offer, solicitation, or sale of any
          security. No share price is quoted here — valuation and terms are
          discussed and agreed individually with each investor, subject to due
          diligence and definitive documentation.
        </p>
      </div>
    </form>
  );
}
