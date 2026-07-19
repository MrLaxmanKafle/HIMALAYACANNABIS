"use client";

import { useState } from "react";
import { company } from "@/lib/company";

const inquiryTypes = [
  "Wholesale supply",
  "Retail partnership",
  "Export inquiry",
  "Laboratory / testing",
  "Consultancy / training",
  "Investment",
  "Other",
];

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
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-himalaya-100 bg-white p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-himalaya-900">Send an inquiry</h2>
      <p className="mt-1 text-sm text-himalaya-800/60">
        This opens your email client with the details pre-filled.
      </p>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-himalaya-800">Your name *</span>
          <input
            required
            name="name"
            className="mt-1 w-full rounded-lg border border-himalaya-200 px-4 py-2.5 focus:border-himalaya-600 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-himalaya-800">Organisation</span>
          <input
            name="organisation"
            className="mt-1 w-full rounded-lg border border-himalaya-200 px-4 py-2.5 focus:border-himalaya-600 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-himalaya-800">Email *</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-himalaya-200 px-4 py-2.5 focus:border-himalaya-600 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-himalaya-800">Inquiry type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-himalaya-200 bg-white px-4 py-2.5 focus:border-himalaya-600 focus:outline-none"
          >
            {inquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-himalaya-800">Message *</span>
          <textarea
            required
            name="message"
            rows={5}
            className="mt-1 w-full rounded-lg border border-himalaya-200 px-4 py-2.5 focus:border-himalaya-600 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-himalaya-600 px-6 py-3 font-medium text-white shadow hover:bg-himalaya-700"
        >
          Compose email
        </button>
      </div>
    </form>
  );
}
