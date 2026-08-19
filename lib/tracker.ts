/**
 * Nepal Cannabis Industry Tracker — data layer.
 *
 * SOURCING RULE: every entry here must trace to a document we hold or to
 * reporting we can name. Where the underlying instrument (gazetted act text,
 * draft regulations) has not been obtained, that is stated on the page rather
 * than smoothed over. Accuracy is the entire value of this page.
 */

export const trackerUpdated = "2026-08-13";

export type StatusLevel = "no" | "partial" | "yes" | "unknown";

export const statusBoard: {
  question: string;
  status: StatusLevel;
  answer: string;
  detail: string;
}[] = [
  {
    question: "Is recreational cannabis legal in Nepal?",
    status: "no",
    answer: "No",
    detail:
      "Prohibited under the federal Narcotic Drugs (Control) Act, 2033 (1976). Unlicensed cultivation, production, sale, purchase, and consumption are criminal offences. This applies to everyone, including tourists.",
  },
  {
    question: "Is industrial hemp legal at federal level?",
    status: "no",
    answer: "Not yet",
    detail:
      "The Narcotic Drugs (Control) Act, 2033 makes no distinction between industrial hemp and drug-type cannabis, and sets no THC threshold. A federal reform bill drafted by the Ministries of Finance and Home Affairs is reported to exist but has not passed.",
  },
  {
    question: "Has any province legalised cultivation?",
    status: "partial",
    answer: "Gandaki has — over objection",
    detail:
      "Gandaki Province's cannabis act was authenticated on 3 August 2026 under Article 201(4), after the Province Chief refused assent on 24 July citing conflict with federal law and the Assembly re-passed it unamended. It is law; its relationship to the federal act is unresolved.",
  },
  {
    question: "Can anyone obtain a cultivation licence today?",
    status: "no",
    answer: "No",
    detail:
      "No licence is known to have been issued to any company in Nepal. The licensing unit is not reported as operational, and no district has been designated by gazette notice — a precondition for applying.",
  },
  {
    question: "Does Nepal have an accredited cannabis testing lab?",
    status: "no",
    answer: "No",
    detail:
      "No accredited cannabis testing laboratory is known to exist anywhere in Nepal. Since the provincial framework mandates certified testing before harvest, processing, or sale, this gap blocks the regime from functioning for any licensee.",
  },
  {
    question: "Are hemp seed foods (bhango) legal?",
    status: "yes",
    answer: "Long established",
    detail:
      "Hemp seed has been eaten in Nepali hill kitchens for generations. It is a seed product containing negligible cannabinoids, distinct from the cultivation of the plant itself, which is what the licensing framework governs.",
  },
];

export const timeline: {
  date: string;
  label: string;
  body: string;
  weight?: "major";
}[] = [
  {
    date: "1976",
    label: "Narcotic Drugs (Control) Act, 2033",
    body: "Cannabis prohibited federally, ending the era of government-licensed hashish shops in Kathmandu. The Act draws no line between industrial hemp and drug-type cannabis and sets no THC threshold — the ambiguity every subsequent effort has had to work around.",
  },
  {
    date: "Nov 2025",
    label: "Gandaki bill tabled",
    body: "A medical and industrial cannabis bill is tabled in the Gandaki Provincial Assembly.",
  },
  {
    date: "9–10 Jul 2026",
    label: "Passed unanimously",
    body: "The Provincial Assembly passes the bill without a dissenting vote.",
  },
  {
    date: "24 Jul 2026",
    label: "Province Chief refuses assent",
    body: "Assent is withheld under Article 201(3), on the stated ground that the act conflicts with the federal Narcotic Drugs (Control) Act. The objection is public and reasoned — which makes it a roadmap for any future legal challenge.",
    weight: "major",
  },
  {
    date: "31 Jul 2026",
    label: "Assembly re-passes, unamended",
    body: "The Assembly passes the act a second time without amendment, triggering the constitutional override route.",
  },
  {
    date: "3 Aug 2026",
    label: "Authenticated — it is law",
    body: "The act is authenticated under Article 201(4) and takes effect in Gandaki Province, with a 0.3% THC ceiling for industrial cultivation and mandatory pre-harvest certified laboratory testing.",
    weight: "major",
  },
  {
    date: "Pending",
    label: "Gazette designation of districts",
    body: "Cultivation is permitted only in districts designated by provincial gazette notice. No designation is known to have been published. Until one is, no application can proceed — including in Lamjung.",
  },
  {
    date: "Pending",
    label: "Draft regulations",
    body: "The regulations that will govern application, inspection, and enforcement have not been published. Their terms will determine whether the framework is commercially workable.",
  },
];

export const licenceRequirements: {
  item: string;
  requirement: string;
  implication: string;
}[] = [
  {
    item: "Who may hold a licence",
    requirement:
      "Registered companies only, with no drug-related conviction in the preceding ten years.",
    implication:
      "Individual farmers and households cannot be licensees in their own right. Participation routes through a company structure.",
  },
  {
    item: "Site security",
    requirement:
      "Perimeter wall or fencing and CCTV, built and passing inspection before a licence is granted.",
    implication:
      "Capital must be spent before any licence exists. Because perimeter cost scales with the number of boundaries rather than total area, many small dispersed plots are dramatically more expensive to secure than a few consolidated blocks.",
  },
  {
    item: "THC ceiling",
    requirement: "Below 0.3% THC for industrial cultivation.",
    implication:
      "Certified seed provenance becomes essential — a crop that tests above the line is not a compliant crop.",
  },
  {
    item: "Laboratory testing",
    requirement:
      "Mandatory testing at certified laboratories before harvest, processing, or sale.",
    implication:
      "No accredited cannabis laboratory currently exists in Nepal. This is the binding constraint on the entire regime, not a paperwork step.",
  },
  {
    item: "Permitted areas",
    requirement: "Districts designated by provincial gazette notice.",
    implication:
      "No district is known to be designated yet. This is the first gate, and it is currently closed for everyone.",
  },
  {
    item: "Licence term",
    requirement: "Five years.",
    implication:
      "Renewal risk sits inside any business plan longer than five years, and a compliance record is the renewal argument.",
  },
  {
    item: "Penalties",
    requirement:
      "Administrative fines reported in the range of NPR 50,000–500,000; criminal violations fall under federal narcotics law.",
    implication:
      "A provincial licence is not a shield against federal criminal liability. This is the single most important sentence on this page for anyone considering entering the sector.",
  },
];

export const openQuestions: { q: string; a: string }[] = [
  {
    q: "Will the Gandaki act survive a constitutional challenge?",
    a: "Unresolved. The act is in force, was passed unanimously twice, and the Chief Minister is reported to chair its steering committee. Against that, the Province Chief's written objection is public and citable by any challenger, and the federal/provincial jurisdiction question has not been settled for this subject matter. Anyone telling you the outcome is certain in either direction is guessing.",
  },
  {
    q: "Does a provincial licence protect against federal prosecution?",
    a: "On the face of the provincial act, no — it provides that criminal violations fall under federal narcotics law. This is the exposure that any operator, investor, or director should obtain written legal advice on before committing capital.",
  },
  {
    q: "When will districts be designated?",
    a: "Unknown. No timeline has been published. Designation is the precondition for any application, so this is the date the whole sector is effectively waiting on.",
  },
  {
    q: "Can hemp products be exported from Nepal?",
    a: "Unclear and worth resolving carefully. Nepal recorded USD 12,900 of hemp fibre exports in 2022 (UN COMTRADE, HS 5302), so some trade has occurred. Whether processed fibre and seed products can be exported routinely under the current federal act is a question for counsel, not for a website.",
  },
  {
    q: "Who has actually obtained a licence?",
    a: "As far as we are aware, nobody — in any province, including us. We will update this line the moment that changes, whether or not the first licence is ours.",
  },
];
