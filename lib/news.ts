/**
 * Nepal cannabis news — dated entries behind /nepal-cannabis-news/ and its feed.
 *
 * Same sourcing rule as the tracker: every entry names the reporting it rests
 * on. Entries are written from published reporting, not from documents we hold,
 * and say so where that matters. An entry recording that nothing happened is a
 * legitimate entry — for anyone planning around this framework, silence is news.
 */

export type NewsTag = "Federal" | "Gandaki" | "Region";

export type NewsEntry = {
  slug: string;
  /** ISO date the development happened or was checked. */
  date: string;
  tag: NewsTag;
  title: string;
  summary: string;
  body: string[];
  sources: { name: string; url: string }[];
};

export const news: NewsEntry[] = [
  {
    slug: "no-draft-regulations-yet",
    date: "2026-11-26",
    tag: "Federal",
    title: "Nearly four weeks on, no draft regulations have been reported",
    summary:
      "Checked on 26 November: no outlet has reported a government draft of the regulations the Supreme Court ordered, and no public schedule for producing them.",
    body: [
      "The Supreme Court's order gives the government three months from receiving it to frame regulations, standards and procedures under the Narcotic Drugs (Control) Act. Since the order became public on 1 November, we have found no report of a draft, a drafting committee, or a published timetable.",
      "Commentary in the Nepali press has asked for three specific things: that the government confirm the date it received the order, start drafting immediately, and publish a schedule. None has been reported as done. We will record it here when one is.",
    ],
    sources: [
      {
        name: "Review Nepal — From Promises to Policy",
        url: "https://www.reviewnepal.com/from-promises-to-policy-nepals-court-forces-action-on-cannabis/",
      },
      {
        name: "Review Nepal — Supreme Court Directive Demands Action",
        url: "https://www.reviewnepal.com/nepals-cannabis-policy-supreme-court-directive-demands-action-not-more-promises/",
      },
    ],
  },
  {
    slug: "when-was-the-ruling-made",
    date: "2026-11-11",
    tag: "Federal",
    title: "The ruling may date from May 2025, which changes the deadline",
    summary:
      "Several reports say the Supreme Court decided the case in May 2025 and that the full text only became public in November 2026. The three-month clock runs from when the government receives the order, so the difference matters.",
    body: [
      "Most first-day coverage treated the order as made on 1 November 2026. Later accounts, including wire reporting, describe a ruling issued in May 2025 whose text went unpublished for more than a year; one says court records were destroyed in a fire during the September 2025 protests.",
      "We have not seen the judgment. Until the government states the date it received the order, any specific deadline, including the early-February 2027 date widely assumed, is an inference.",
    ],
    sources: [
      {
        name: "inkl — verdict was long unpublished",
        url: "https://www.inkl.com/news/sc-orders-cannabis-rules-court-tells-govt-to-enable-regulated-cultivation-verdict-was-long-unpublished",
      },
      {
        name: "Yahoo News / AFP — court gives green light to controlled cultivation",
        url: "https://www.yahoo.com/news/world/articles/nepal-court-gives-green-light-100530421.html",
      },
    ],
  },
  {
    slug: "supreme-court-orders-federal-framework",
    date: "2026-11-01",
    tag: "Federal",
    title: "Supreme Court orders the government to regulate cannabis cultivation",
    summary:
      "A mandamus directs the government to frame rules under the 1976 narcotics act for licensed cultivation, processing, sale, export and import of cannabis for medicinal, scientific, agricultural, horticultural and industrial purposes, within three months.",
    body: [
      "A joint bench of Justices Nahakul Subedi and Til Prasad Shrestha found that the government had failed, over a prolonged period, to use the rule-making authority the Narcotic Drugs (Control) Act already gives it. The order requires regulations, standards and procedures, plus a licensing and monitoring mechanism across the whole supply chain.",
      "Recreational use is excluded: the court said that question needs legislation and wider consultation. Existing penalties stay in force, and the rules must comply with the 1961 UN Single Convention on Narcotic Drugs. Cultivation is not lawful today as a result of this order; it sets a deadline for building the regime under which it could be.",
    ],
    sources: [
      {
        name: "The Kathmandu Post",
        url: "https://kathmandupost.com/national/2026/11/01/supreme-court-orders-government-to-regulate-cannabis-cultivation-for-medicinal-and-industrial-use",
      },
      {
        name: "Asia News Network",
        url: "https://asianews.network/nepals-supreme-court-orders-government-to-regulate-cannabis-cultivation-for-medicinal-and-industrial-use/",
      },
      {
        name: "NEPYORK",
        url: "https://nepyork.com/2026/11/02/after-53-year-ban-nepals-cannabis-industry-sees-a-possible-opening/",
      },
    ],
  },
  {
    slug: "gandaki-ten-weeks-no-machinery",
    date: "2026-10-16",
    tag: "Gandaki",
    title: "Ten weeks after Gandaki's act, the licensing machinery does not exist",
    summary:
      "No rules under Section 31, no ministry standards, no gazetted cultivation area, and no sign that the province's licensing unit is operating.",
    body: [
      "Gandaki's act cannot issue a single licence until the provincial government frames rules under Section 31 and the ministry publishes standards beneath them. Cultivation areas must then be designated by gazette notice on the recommendation of the Cannabis Cultivation Regulation and Management Unit.",
      "As of this check, none of those steps had been reported. The act is law; the system it describes has not been built.",
    ],
    sources: [
      {
        name: "The Kathmandu Post — the harder one comes next",
        url: "https://kathmandupost.com/columns/2026/08/12/gandaki-passed-the-cannabis-law-the-harder-one-comes-next",
      },
    ],
  },
  {
    slug: "himachal-pradesh-hemp-rules",
    date: "2026-08-27",
    tag: "Region",
    title: "Across the border, Himachal Pradesh publishes hemp licensing rules",
    summary:
      "Trade press reports that the Indian state now has detailed rules for licensing industrial hemp cultivation, processing and manufacturing.",
    body: [
      "This matters to Nepal because Himachal Pradesh shares the same mountain range, a similar growing environment, and the same marketing claim to Himalayan hemp. A neighbouring jurisdiction with working rules will reach export buyers before one whose rules are still unwritten.",
      "We have this from trade reporting only and have not read the rules themselves.",
    ],
    sources: [
      { name: "HempToday — Asia", url: "https://hemptoday.net/category/asia/" },
    ],
  },
  {
    slug: "gandaki-act-becomes-law",
    date: "2026-08-03",
    tag: "Gandaki",
    title: "Gandaki's cannabis act becomes law over the Province Chief's objection",
    summary:
      "The first provincial law in Nepal to license cannabis cultivation for medicinal and industrial purposes is authenticated after the Assembly passes it a second time, unamended.",
    body: [
      "The Provincial Assembly passed the bill unanimously on 9 July. Province Chief Dilliraj Bhatta returned it on 24 July with a three-point message arguing it conflicted with federal narcotics law; the Assembly re-passed it and it was authenticated on 3 August.",
      "The act caps industrial cannabis at 0.3% THC, limits licences to registered companies for five-year terms, and provides for administrative fines of NPR 50,000 to 500,000. It leaves criminal offences to federal law, which is why its relationship to the 1976 act has been contested from the first day.",
    ],
    sources: [
      {
        name: "The Kathmandu Post — inside the law",
        url: "https://kathmandupost.com/gandaki-province/2026/08/07/inside-gandaki-s-new-cannabis-law-who-can-grow-it-where-and-under-what-rules",
      },
      {
        name: "Himal Press",
        url: "https://en.himalpress.com/gandakis-new-law-allows-cannabis-cultivation-for-medicinal-industrial-uses/",
      },
    ],
  },
];

export const newsUpdated = news[0].date;

export function prettyDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
