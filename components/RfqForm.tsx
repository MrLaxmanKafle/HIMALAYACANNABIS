"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { company } from "@/lib/company";
import { landingPages } from "@/lib/landing";

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "Netherlands",
  "Italy", "Spain", "Switzerland", "Poland", "Sweden", "Australia", "Japan",
  "South Korea", "China", "India", "UAE", "Saudi Arabia", "Singapore",
  "Nepal (domestic)", "Other",
];

const timelines = [
  "Immediate / in stock now",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "12+ months / exploring options",
];

const volumeUnits = ["kg", "tonnes", "litres", "drums (190kg)", "IBC totes (1000L)", "20ft container", "units / pieces"];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-ground-2 px-4 py-2.5 text-ink placeholder:text-ink-3 focus:border-marigold focus:outline-none";

export default function RfqForm() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [timeline, setTimeline] = useState(timelines[0]);
  const [volumeUnit, setVolumeUnit] = useState(volumeUnits[0]);

  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      const match = landingPages.find((p) => p.slug === productParam);
      setProduct(match ? match.h1 : productParam);
    }
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const companyName = data.get("company") || data.get("name");
    const subject = `[RFQ] ${companyName} — ${data.get("product")} — ${country}`;
    const body = [
      `Company / organisation: ${data.get("company") || "—"}`,
      `Contact name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Destination country: ${country}`,
      "",
      `Product(s) of interest: ${data.get("product")}`,
      `Target volume: ${data.get("volume") || "—"} ${volumeUnit}`,
      `Timeline: ${timeline}`,
      `End use / application: ${data.get("application") || "—"}`,
      "",
      "Additional specs or notes:",
      `${data.get("notes") || "—"}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-ground-2 p-8">
      <h2 className="text-2xl font-bold">Request a quote</h2>
      <p className="mt-1 text-sm text-ink-3">
        Tell us what you need — this opens your email client with a structured
        request pre-filled, so we can respond with real answers rather than
        back-and-forth questions.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink-2">Company / organisation</span>
          <input name="company" className={inputClass} placeholder="Optional if individual" />
        </label>

        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink-2">Your name *</span>
          <input required name="name" className={inputClass} />
        </label>

        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink-2">Email *</span>
          <input required type="email" name="email" className={inputClass} />
        </label>

        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink-2">Destination country</span>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass}>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-2">Product(s) of interest *</span>
          <input
            required
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className={inputClass}
            placeholder="e.g. Cold-pressed hemp seed oil, CBD isolate, allo fibre…"
          />
        </label>

        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink-2">Target volume</span>
          <input name="volume" className={inputClass} placeholder="e.g. 500" />
        </label>

        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-ink-2">Unit</span>
          <select value={volumeUnit} onChange={(e) => setVolumeUnit(e.target.value)} className={inputClass}>
            {volumeUnits.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-2">Timeline</span>
          <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputClass}>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-2">End use / application</span>
          <input name="application" className={inputClass} placeholder="e.g. skincare formulation, food manufacturing, retail resale" />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-2">Additional specs or notes</span>
          <textarea name="notes" rows={4} className={inputClass} placeholder="Certifications required, packaging preferences, existing supplier comparisons, anything else we should know" />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-marigold px-6 py-3 font-semibold text-ground transition-colors hover:bg-ink sm:w-auto"
      >
        Compose RFQ email
      </button>

      <p className="mt-6 text-xs leading-relaxed text-ink-3">
        This is a request for information and pricing, not a purchase order or
        binding commitment on either side. Several of our lines are still
        pre-licence or pre-production — we'll tell you plainly where each
        product actually stands when we reply.
      </p>
    </form>
  );
}
