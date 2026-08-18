/**
 * Origin & terroir data.
 *
 * Every environmental claim on this site carries a status. `measured` means we
 * hold a dated result from a named laboratory or instrument. `reference` means
 * it is a published third-party figure about the region, not our own reading.
 * `pending` means we have committed to measuring it and have not yet done so.
 *
 * Nothing is published as `measured` until the result exists. That rule is the
 * point of the whole system — see /origin/standard, clause 7.
 */

export type ClaimStatus = "measured" | "reference" | "pending";

/**
 * The growing area is deliberately unnamed while plots are still being
 * negotiated. Province is public (it is in our Memorandum of Association and on
 * the farmland pages); the valley, district, and villages are not, until the
 * condition in `disclosure.trigger` is met.
 */
export const appellation = {
  /** Formal term used throughout the standard. */
  name: "The Defined Area",
  province: "Gandaki Province",
  country: "Nepal",
  latitude: "≈28° N",
  altitudeBand: "1,200–2,200 m",
  /** Placeholder segment in lot codes until the area is named. */
  lotPrefix: "NP",
  summary:
    "A defined stretch of mid-hill valley in Gandaki Province, Nepal, between 1,200 and 2,200 metres — the growing area whose soil, altitude, and genetics we are documenting lot by lot.",
  disclosure: {
    withheld: "Valley, district, and villages.",
    why: "Land a company is known to want costs more than land nobody is asking about. Naming the valley before the plots are under contract means bidding against our own announcement, and it hands a competitor a map to the same ground.",
    trigger:
      "The area is named once every plot in the first block is under signed lease or sale agreement — and in any case no later than the first lot certificate. A lot record without a location is not traceability, so this is a deadline, not an intention.",
  },
};

export type Parameter = {
  label: string;
  value: string;
  status: ClaimStatus;
  detail: string;
  source?: string;
  /** For pending parameters: when we expect the first result. */
  expected?: string;
};

export const parameters: Parameter[] = [
  {
    label: "Latitude",
    value: "28.2° N",
    status: "reference",
    detail:
      "Nearly all legally-grown hemp in the world sits between 45° and 52° N — Saskatchewan, Normandy, Heilongjiang. At 28° N the day-length curve is flatter and the flowering trigger arrives differently, which changes when the plant can be harvested and how long it holds terpenes on the stalk. Yunnan is the one major hemp region at a comparable latitude.",
    source: "Geographic; verifiable on any map.",
  },
  {
    label: "Altitude band",
    value: "1,200–2,200 m",
    status: "reference",
    detail:
      "Two things follow from altitude. UV-B exposure rises roughly 10–12% per 1,000 m, and there is a real if still-contested body of work linking UV-B stress to trichome and cannabinoid density. The diurnal temperature swing also widens, which is the same mechanism that makes high-altitude coffee and tea taste the way they do.",
    source: "Elevation from survey data; UV-B relationship from published literature.",
  },
  {
    label: "Soil heavy metals",
    value: "Not yet measured",
    status: "pending",
    detail:
      "This is the number that matters most and we do not have it yet. Hemp is a hyperaccumulator — it is used deliberately to pull cadmium, lead, arsenic and nickel out of contaminated ground. That makes soil history the single largest quality risk in this crop, and it is the reason hemp shipments get rejected at the border. Much of this farmland has never seen industrial agrochemicals. We intend to prove that with a full ICP-MS panel per plot rather than assert it.",
    expected: "First panels commissioned before any plot is planted.",
  },
  {
    label: "Soil composition & pH",
    value: "Not yet measured",
    status: "pending",
    detail:
      "Mountain soils here are largely alluvial, built from glacial and monsoon deposition off the Annapurna and Manaslu massifs. Texture, organic matter, pH and cation exchange capacity get measured per plot and published with the plot record.",
    expected: "With the first heavy-metal panels.",
  },
  {
    label: "Irrigation water",
    value: "Not yet measured",
    status: "pending",
    detail:
      "Snowmelt-fed. Tested to the same panel as the soil, because water is the second route by which contaminants enter the plant.",
    expected: "With the first soil panels.",
  },
  {
    label: "Agrochemical history",
    value: "Declared per plot",
    status: "pending",
    detail:
      "Every plot we take on carries a written declaration from the landholder covering prior use, and that declaration is published with the plot. A declaration is not a lab result — it is a starting point that the soil panel then confirms or contradicts. Where they contradict, the panel wins and the plot is out.",
    expected: "At plot acquisition.",
  },
  {
    label: "Genetics",
    value: "Nepali landrace base",
    status: "reference",
    detail:
      "Nepal is one of the foundational cannabis gene pools. 'Nepalese' appears in the documented ancestry of a large share of modern cultivars, carried out of these valleys through the charas trade and into seed banks worldwide. That heritage is real and it is ours by geography — but a landrace claim is only worth anything with a chemotype behind it, so every cultivar we plant gets profiled and published.",
    source: "Documented cannabis genetic history; cultivar profiling to follow.",
  },
  {
    label: "Cannabinoid & terpene profile",
    value: "Not yet measured",
    status: "pending",
    detail:
      "The actual terroir claim — that hemp grown in this valley at this altitude expresses differently from the same seed grown at 50° N — is unproven until we have several seasons of profiles across altitude bands. We are building the record to find out. It may show less than we hope. We will publish it either way.",
    expected: "First profiles at first harvest.",
  },
];

/** The public rulebook. Versioned, dated, and amendable only in the open. */
export const standardVersion = "1.0 (draft for comment)";
export const standardDate = "2026";

export type Clause = {
  title: string;
  body: string;
};

export const clauses: Clause[] = [
  {
    title: "Defined area",
    body:
      "Origin may be claimed only for material grown within a single contiguous mid-hill valley area in Gandaki Province, Nepal, between 1,200 and 2,200 metres, recorded by plot in the registered plot schedule. Material grown outside that area may be bought, processed and sold by us, but it does not carry the origin mark and is labelled by its true source.",
  },
  {
    title: "Disclosure of the defined area",
    body:
      "The valley, district and villages that make up the defined area are withheld while plots are under negotiation, for the commercial reason stated openly on the origin page. They are published once every plot in the first block is under signed lease or sale agreement, and in no case later than the first lot certificate — a lot record without a location is not traceability. Until then the area's identity sits with our counsel and is disclosed to any buyer under mutual non-disclosure on request.",
  },
  {
    title: "Soil qualification before planting",
    body:
      "No plot enters the programme until a full heavy-metal panel (minimum: cadmium, lead, arsenic, nickel, chromium, mercury) has been run on its soil by an accredited laboratory. Results are published with the plot record whether or not they are flattering. A plot that fails is recorded as failed and named.",
  },
  {
    title: "Agrochemical prohibition",
    body:
      "No synthetic pesticide, herbicide, or growth regulator on any qualifying plot, and none in the three seasons preceding first planting. The three-season look-back is by landholder declaration plus soil panel; where the two disagree, the panel governs.",
  },
  {
    title: "Lot integrity",
    body:
      "A lot is the harvest of one plot in one season, processed as one run. Lots are not blended across plots or across seasons under the origin mark. Blends are permitted, labelled as blends, and list their constituent lots.",
  },
  {
    title: "Testing",
    body:
      "Every lot is tested by an independent ISO/IEC 17025-accredited laboratory for cannabinoid profile, terpene profile, heavy metals, pesticide residue, residual solvent where applicable, and microbial load. We do not run our own compliance testing on our own material.",
  },
  {
    title: "Public certificate of analysis",
    body:
      "Every lot's full certificate of analysis is published at a permanent public URL, reachable without an account, a login, or a sales conversation. The URL is printed on the lot. It stays live after the lot sells out.",
  },
  {
    title: "No claim without a result",
    body:
      "No environmental or quality figure is stated as fact on our materials until the dated result exists and is published. Until then it is marked as pending, with the date we expect it. A claim we cannot show the paperwork for is a claim we do not make.",
  },
  {
    title: "Named growers",
    body:
      "Plots are recorded against the name of the household or cooperative farming them, published with their consent, together with plot size and the terms on which we buy. Anonymous supply does not carry the origin mark.",
  },
  {
    title: "Amendment in the open",
    body:
      "This standard is versioned. Changes are published with the date and the reason. Prior versions stay accessible, so that a lot certified under version 1.0 can always be read against the rules that were in force when it was certified.",
  },
];

/** What a lot record carries. Published before we have any lots, on purpose. */
export const lotFields: { field: string; example: string; note: string }[] = [
  { field: "Lot code", example: "NP-2027-A01", note: "Origin, season, plot, run. The origin segment becomes the area code on disclosure." },
  { field: "Plot", example: "Plot A — 0.8 ha, 1,640 m", note: "GPS to plot centroid, published." },
  { field: "Grower", example: "Named household or cooperative", note: "With consent, per clause 8." },
  { field: "Cultivar", example: "Landrace selection, generation recorded", note: "Seed source traced." },
  { field: "Sown / harvested", example: "Dates", note: "Not seasons — dates." },
  { field: "Drying & processing", example: "Method, facility, run date", note: "Every hand it passed through." },
  { field: "Laboratory", example: "ISO/IEC 17025 accredited, named", note: "Independent of us." },
  { field: "Full COA", example: "Permanent public PDF", note: "Cannabinoids, terpenes, heavy metals, pesticides, microbials." },
  { field: "Soil panel", example: "The plot's qualifying panel", note: "Run before planting, per clause 2." },
  { field: "Yield & disposition", example: "Kg produced, kg sold, kg held", note: "So the arithmetic can be checked." },
];

/** Honest current state. Updated as things actually happen. */
export const currentState = {
  lots: 0,
  plotsQualified: 0,
  soilPanelsRun: 0,
  note:
    "We have no lots. No plot has been soil-qualified, because no plot has been acquired. The standard above is published now, before we have anything to certify against it, so that the record starts clean and so that anyone can hold us to it later.",
};
