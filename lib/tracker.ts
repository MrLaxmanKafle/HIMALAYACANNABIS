/**
 * Nepal Cannabis Industry Tracker — data layer.
 *
 * SOURCING RULE: every entry here must trace to a document we hold or to
 * reporting we can name. Where the underlying instrument (gazetted act text,
 * draft regulations) has not been obtained, that is stated on the page rather
 * than smoothed over. Accuracy is the entire value of this page.
 */

export const trackerUpdated = "2026-11-11";

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
    answer: "Not yet — but the Supreme Court has ordered a framework",
    detail:
      "The Narcotic Drugs (Control) Act, 2033 still makes no distinction between industrial hemp and drug-type cannabis and sets no THC threshold, so cultivation remains unlawful federally today. On 1 November 2026 the Supreme Court issued a mandamus directing the government to put the necessary legal provisions in place within three months — regulations, standards and procedures made under that same Act. The prohibition has not been lifted; a deadline to replace it with a licensing regime has been set.",
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
    status: "partial",
    answer: "Licences have begun to issue",
    detail:
      "Himalaya Cannabis Pvt. Ltd. holds an industrial hemp cultivation licence, and certificates are supplied to buyers and journalists on request. How wide the issuing has gone beyond that, and on what criteria, is not something we can characterise for the whole country — we report our own position and leave the national picture to those who can document it.",
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
    body: "Province Chief Dilliraj Bhatta withholds assent under Article 201(3) and returns the bill with a three-point message, on the stated ground that it conflicts with the federal Narcotic Drugs (Control) Act. The objection is public and reasoned — which makes it a roadmap for any future legal challenge.",
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
    date: "1 Nov 2026",
    label: "Supreme Court orders a federal framework",
    body: "A joint bench of Justices Nahakul Subedi and Til Prasad Shrestha issues a mandamus directing the government to frame regulations, standards and procedures under the Narcotic Drugs (Control) Act, 2033 itself, and to establish a licensing and monitoring mechanism covering commercial cultivation, production, processing, storage, use, sale, distribution, export and import for medicinal, scientific, agricultural, horticultural and industrial purposes. The stated basis is that the government failed, over a prolonged period, to exercise the rule-making authority the Act already delegates to it. The government has three months from receiving the order, and any rules must satisfy both domestic law and the 1961 UN Single Convention on Narcotic Drugs — a real constraint on how permissive they can be. Recreational use is expressly left out and referred for wider consultation, and existing penalties for consumption are untouched. This is the most consequential development since 1976: it does not make cultivation lawful, but it puts a federal deadline on building the regime that would.",
    weight: "major",
  },
  {
    date: "16 Oct 2026",
    label: "Ten weeks on, nothing has moved",
    body: "Checked again on this date: no rules under Section 31, no ministry standards, no gazette designation of any area, and no public indication that the Cannabis Cultivation Regulation and Management Unit is operating. The act has been law for ten weeks and the machinery it depends on does not yet exist. We record the absence of news because, for anyone planning around this framework, the absence is the news.",
    weight: "major",
  },
  {
    date: "Pending",
    label: "Gazette designation of districts",
    body: "Cultivation is permitted only in areas designated by provincial gazette notice. Designation is made by the ministry on the recommendation of the Cannabis Cultivation Regulation and Management Unit — the body the act creates to issue licences and carry out inspections. No designation is known to have been published.",
  },
  {
    date: "Pending",
    label: "Draft regulations",
    body: "Rules must be framed by the provincial government under Section 31 of the act, with ministry standards beneath them, before the licensing machinery can operate at all. Neither has been published. Their terms will determine whether the framework is commercially workable.",
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
    a: "Unresolved. The act is in force, was passed unanimously twice, and the Chief Minister is reported to chair its steering committee. Against that, the Province Chief's written objection is public and citable by any challenger, and the federal/provincial jurisdiction question has not been settled for this subject matter. Gandaki's chief attorney has argued publicly that the act is consistent with the Constitution and with existing law, on the ground that agriculture is an exclusive provincial subject under Schedule 6. The Supreme Court's 1 November order cuts across the question from a different angle: a federal licensing regime built under the Narcotic Drugs (Control) Act would remove much of the conflict the Province Chief objected to, by supplying the federal basis the provincial act was said to lack. Anyone telling you the outcome is certain in either direction is still guessing.",
  },
  {
    q: "Does a provincial licence protect against federal prosecution?",
    a: "On the face of the provincial act, no — it provides that criminal violations fall under federal narcotics law. This is the exposure that any operator, investor, or director should obtain written legal advice on before committing capital.",
  },
  {
    q: "When does the three-month clock actually start?",
    a: "Genuinely unclear, and it matters. Most reporting treats the order as made on 1 November 2026. At least one wire account instead dates the ruling to May 2025 and says the court\u2019s records were destroyed in a fire during the September protests, with the full text only published in late 2026. The order runs three months from when the government receives it, so a 2025 ruling published in 2026 and a 2026 ruling imply very different deadlines. We have not seen the judgment itself and are not going to pick between the accounts on the strength of secondary reporting.",
  },
  {
    q: "Will the government meet the three-month deadline?",
    a: "Unknown, and worth watching closely — it falls around the start of February 2027. A mandamus sets an obligation, not a guarantee of performance, and Nepal has missed court-set deadlines on other subjects before. What makes this one different is that it creates a federal duty to regulate rather than merely permitting a province to: if the regulations appear, the central legal objection to provincial frameworks largely dissolves. If they do not, the sector stays where it has been since 1976.",
  },
  {
    q: "When will districts be designated?",
    a: "Unknown. No timeline has been published. Designation is the precondition for any application, so this is the date the whole sector is effectively waiting on.",
  },
  {
    q: "Can hemp products be exported from Nepal?",
    a: "Clearer than it was, and still not settled. Nepal recorded USD 12,900 of hemp fibre exports in 2022 (UN COMTRADE, HS 5302), so some trade has occurred. The Supreme Court's 1 November order expressly directs that the licensing mechanism cover export and import — the first time a federal instrument has addressed cannabis export directly. Until those regulations exist, what may lawfully leave the country is still a question for counsel, not for a website.",
  },
  {
    q: "How many licences have been issued nationally?",
    a: "We hold an industrial hemp cultivation licence and publish that fact on our compliance page. We have no reliable count for the country as a whole — no register is published — so we report what we can document and decline to estimate the rest.",
  },
];
