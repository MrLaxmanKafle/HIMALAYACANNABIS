/**
 * Content for /supreme-court-cannabis-order/.
 *
 * Written from published reporting of the order. We have not read the judgment
 * itself, and the page says so — the specifics here (bench, deadline, scope)
 * are as reported, and the date the ruling was made is genuinely disputed.
 */

export const orderUpdated = "2026-11-26";

export const shortAnswer =
  "Nepal's Supreme Court has ordered the government to write regulations, within three months of receiving the order, for licensed cannabis cultivation, processing, sale, export and import for medicinal, scientific, agricultural, horticultural and industrial purposes. It does not legalise cannabis today, and it excludes recreational use. The order became public on 1 November 2026; no draft regulations have been reported yet.";

export const ordered: { h: string; p: string }[] = [
  {
    h: "Regulations under the existing act",
    p: "The government must frame regulations, standards and procedures under the Narcotic Drugs (Control) Act, 2033 (1976). No new statute is required: the court found the Act already delegates this rule-making power, and that the government had failed to use it for a prolonged period.",
  },
  {
    h: "A licensing system for the whole chain",
    p: "The rules must set up licences or permits, with strict monitoring, covering commercial cultivation, production, processing, storage, use, sale, distribution, export and import.",
  },
  {
    h: "Five permitted purposes",
    p: "Medicinal, scientific, agricultural, horticultural and industrial. Industrial hemp for fibre and seed falls within this; so does medical cannabis.",
  },
  {
    h: "A deadline",
    p: "Three months from the date the government receives the order.",
  },
  {
    h: "International compliance",
    p: "The rules must be consistent with Nepali law and with the 1961 UN Single Convention on Narcotic Drugs, which limits how permissive they can be.",
  },
];

export const notOrdered: string[] = [
  "It does not make cultivation lawful today. Growing cannabis without a licence remains an offence until regulations exist and a licence is issued under them.",
  "It does not legalise recreational use. The court said that question needs legislation and wider public consultation.",
  "It does not remove existing penalties, including those for consumption.",
  "It does not guarantee the government will meet the deadline. A mandamus creates a duty; it does not write the rules.",
  "It does not settle the status of Gandaki Province's own cannabis act, although it changes the ground that dispute stands on.",
];

export const audiences: { who: string; p: string }[] = [
  {
    who: "For farmers and cooperatives",
    p: "Nothing changes in the field yet. Do not plant on the strength of this order. What it changes is the direction: a federal licence route is now something the government is obliged to create, and households that keep records of land, seed source and prior use will be better placed to apply when it opens.",
  },
  {
    who: "For Gandaki's act",
    p: "The Province Chief objected that the provincial act conflicted with federal narcotics law. A federal licensing regime under that same law would remove much of the conflict, by supplying the federal basis the provincial act was said to lack. It could also overlap with it. How the two fit together is not addressed in the reporting we have seen.",
  },
  {
    who: "For foreign buyers and investors",
    p: "This is the first federal instrument to address cannabis export and import directly. It is a reason to open conversations and a poor reason to sign supply contracts: until the regulations are published, nobody can tell you what a compliant export from Nepal looks like. Fibre such as allo, which is not a controlled plant, is unaffected and tradeable now.",
  },
];

export const watch: string[] = [
  "The government confirming the date it received the order, which fixes the deadline.",
  "A drafting committee or a published draft from the Ministry of Home Affairs.",
  "Whether the draft sets a THC threshold separating industrial hemp from drug-type cannabis, which the 1976 Act never did.",
  "Which body is named as the licensing authority, and whether provinces have a role.",
  "Whether an accredited testing laboratory is provided for, since none currently operates in Nepal.",
];

export const orderFaq: { q: string; a: string }[] = [
  {
    q: "Is cannabis legal in Nepal now?",
    a: "No. The Supreme Court ordered the government to create a licensing framework; it did not legalise cannabis. Cultivation, sale and consumption without a licence remain offences under the Narcotic Drugs (Control) Act, 2033.",
  },
  {
    q: "When is the deadline for the regulations?",
    a: "Three months from the date the government receives the order. The order became public on 1 November 2026, so early February 2027 is widely assumed, but the government has not confirmed its date of receipt and several reports say the ruling itself was made in May 2025.",
  },
  {
    q: "Which judges issued the order?",
    a: "A joint bench of Justices Nahakul Subedi and Til Prasad Shrestha, according to published reporting.",
  },
  {
    q: "Does the order cover industrial hemp?",
    a: "Yes. Industrial, agricultural and horticultural purposes are named alongside medicinal and scientific ones, so hemp grown for fibre and seed falls within the framework the government must create.",
  },
  {
    q: "Does the order allow recreational cannabis?",
    a: "No. The court excluded recreational use, saying it would require legislation and wider consultation.",
  },
  {
    q: "Can cannabis be exported from Nepal under this order?",
    a: "Not yet. The order requires the regulations to cover export and import licensing, but until those regulations are published and a licence is issued, there is no lawful route for cannabis exports.",
  },
];

export const orderSources: { name: string; url: string }[] = [
  {
    name: "The Kathmandu Post, 1 November 2026",
    url: "https://kathmandupost.com/national/2026/11/01/supreme-court-orders-government-to-regulate-cannabis-cultivation-for-medicinal-and-industrial-use",
  },
  {
    name: "Asia News Network",
    url: "https://asianews.network/nepals-supreme-court-orders-government-to-regulate-cannabis-cultivation-for-medicinal-and-industrial-use/",
  },
  {
    name: "Ratopati English",
    url: "https://english.ratopati.com/story/85341/supreme-court-orders-to-enact-laws-for-medicinal-and-industrial-use-of-marijuana-within-three-months",
  },
  {
    name: "NEPYORK, 2 November 2026",
    url: "https://nepyork.com/2026/11/02/after-53-year-ban-nepals-cannabis-industry-sees-a-possible-opening/",
  },
  {
    name: "Ganjapreneur",
    url: "https://ganjapreneur.com/nepal-supreme-court-orders-government-to-create-regulatory-framework-for-industrial-and-medical-cannabis/",
  },
];
