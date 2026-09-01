/**
 * Licence register.
 *
 * This is the single source of truth for what the company is authorised to do.
 * Every page that makes a licensing claim renders from here, so the claim can
 * only ever be as strong as this file.
 *
 * FILL IN FROM THE CERTIFICATES. Leave a field empty rather than approximating —
 * `number`, `issued` and `validTo` are what turn "we are licensed" into a claim a
 * buyer can verify, and a wrong reference is worse than an absent one. A record
 * with no `number` still renders; it just renders honestly, as a licence held
 * with the certificate available on request rather than published.
 */

export type LicenceRecord = {
  key: string;
  /** As written on the certificate. */
  name: string;
  nameNepali?: string;
  /** Issuing body, as written on the certificate. */
  authority: string;
  /** Certificate/registration number. Empty until transcribed from the document. */
  number?: string;
  /** ISO date of issue. */
  issued?: string;
  /** ISO date of expiry, or "" where the instrument does not expire. */
  validTo?: string;
  /** Plain-language statement of what this instrument actually permits. */
  scope: string;
  /** What it does NOT cover — stated so buyers do not over-read it. */
  limits?: string;
};

export const licences: LicenceRecord[] = [
  {
    key: "cultivation",
    name: "Industrial hemp cultivation licence",
    authority: "", // TODO: exact issuing body as printed on the certificate
    number: "",
    issued: "",
    validTo: "",
    scope:
      "Cultivation of industrial hemp within the licensed area, under the THC threshold and testing conditions set by the licensing framework.",
    limits:
      "A cultivation right is not a harvest. Product availability follows the growing and processing cycle, not the licence date.",
  },
  {
    key: "processing",
    name: "Processing and manufacturing licence",
    authority: "",
    number: "",
    issued: "",
    validTo: "",
    scope:
      "Processing of harvested material and manufacture of finished goods — pressing, extraction, formulation and packing — at the licensed facility.",
  },
  {
    key: "export",
    name: "Export licence and EXIM registration",
    authority: "",
    number: "",
    issued: "",
    validTo: "",
    scope:
      "Export of goods from Nepal, including the customs and foreign-exchange registrations an overseas buyer's freight forwarder will ask for.",
    limits:
      "Export authorisation from Nepal does not substitute for the destination country's own import requirements — those sit with the buyer.",
  },
  {
    key: "company",
    name: "Company registration, PAN and VAT",
    nameNepali: "कम्पनी दर्ता",
    authority: "Office of the Company Registrar, Government of Nepal",
    number: "",
    issued: "",
    validTo: "",
    scope:
      "Incorporation as a private limited company with hemp cultivation, processing and export within the objects of the Memorandum of Association, plus tax registration.",
  },
];

/** A record is publishable in full once it carries a verifiable reference. */
export function isVerifiable(l: LicenceRecord): boolean {
  return Boolean(l.number && l.authority);
}

/** How many records are ready to publish with a citable reference. */
export function verifiableCount(): number {
  return licences.filter(isVerifiable).length;
}

/**
 * Whether the site may state, unqualified, that the company holds the licences
 * it claims. True regardless of transcription status — the licences are held;
 * `isVerifiable` only governs whether the certificate reference is shown.
 */
export const licensed = true;

/**
 * Independent accredited cannabis testing inside Nepal remains the open
 * constraint. Set to true only when an accredited laboratory is actually
 * available to test our lots — buyers read testing claims closely.
 */
export const accreditedTestingAvailable = false;
