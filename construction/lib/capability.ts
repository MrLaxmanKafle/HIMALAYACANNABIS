/**
 * Plant, people, systems and prequalification facts.
 *
 * PLACEHOLDER quantities throughout — see the banner in lib/projects.ts. Fleet
 * counts and staff numbers appear in prequalification submissions, so they must
 * be replaced with audited figures before `siteStatus` is flipped to "live".
 */

export type FleetGroup = {
  group: string;
  note: string;
  items: { name: string; count: number; detail: string }[];
};

/**
 * Owned plant is the single most scrutinised section of a prequalification
 * dossier after financial capacity, because it is the one claim a client can
 * physically verify. It is published here in the same shape a PQ form asks for.
 */
export const fleet: FleetGroup[] = [
  {
    group: "Earthmoving",
    note: "The core of any road or hydropower programme. Held in-house so the critical path is never subcontracted.",
    items: [
      { name: "Hydraulic excavators", count: 34, detail: "20t–45t class, including long-reach and rock-breaker attachments" },
      { name: "Bulldozers", count: 11, detail: "D6–D8 class for mass earthworks and haul road formation" },
      { name: "Motor graders", count: 9, detail: "Formation and sub-base trimming" },
      { name: "Wheel loaders", count: 16, detail: "3–5 m³ bucket, quarry and stockpile handling" },
      { name: "Backhoe loaders", count: 14, detail: "Trenching, drainage and confined-site works" },
    ],
  },
  {
    group: "Hauling & Compaction",
    note: "Sized so earthworks and compaction fronts can run together rather than in sequence.",
    items: [
      { name: "Tipper trucks", count: 62, detail: "10–16 m³, own fleet plus contracted capacity at peak" },
      { name: "Vibratory soil compactors", count: 18, detail: "10–14t single drum" },
      { name: "Tandem rollers", count: 12, detail: "Bituminous compaction" },
      { name: "Pneumatic tyred rollers", count: 8, detail: "Final surface compaction" },
      { name: "Water tankers", count: 15, detail: "Moisture conditioning and dust suppression" },
    ],
  },
  {
    group: "Paving & Production",
    note: "Owning production plant removes the dependence on third-party supply that delays most Nepali road contracts.",
    items: [
      { name: "Asphalt batch mix plants", count: 3, detail: "60–120 TPH" },
      { name: "Asphalt pavers", count: 6, detail: "Sensor-controlled screed" },
      { name: "Concrete batching plants", count: 5, detail: "30–60 m³/hr, stationary and mobile" },
      { name: "Transit mixers", count: 21, detail: "6–8 m³" },
      { name: "Concrete pumps", count: 7, detail: "Boom and line pumps" },
      { name: "Crushing and screening plants", count: 4, detail: "Aggregate production from own quarries" },
    ],
  },
  {
    group: "Tunnelling & Drilling",
    note: "Drill-and-blast capability for hydropower headrace and portal works.",
    items: [
      { name: "Drill jumbos", count: 4, detail: "Two-boom, hydraulic" },
      { name: "Shotcrete machines", count: 6, detail: "Wet and dry mix" },
      { name: "Tunnel loaders and muckers", count: 7, detail: "Low-profile underground loading" },
      { name: "Air compressors", count: 22, detail: "Surface and underground supply" },
      { name: "Piling and well-sinking rigs", count: 5, detail: "Bored pile and well foundation works" },
    ],
  },
  {
    group: "Lifting & Support",
    note: "Structures work, plus the site infrastructure that remote projects need before anything else can start.",
    items: [
      { name: "Mobile and crawler cranes", count: 9, detail: "25t–80t" },
      { name: "Post-tensioning equipment sets", count: 4, detail: "Jacks, pumps and stressing gear for girder prestressing" },
      { name: "Diesel generator sets", count: 28, detail: "Construction power at off-grid sites" },
      { name: "Survey equipment sets", count: 19, detail: "Total stations, GNSS receivers and levels" },
    ],
  },
];

export const fleetTotal = fleet.reduce(
  (sum, g) => sum + g.items.reduce((s, i) => s + i.count, 0),
  0,
);

/** PLACEHOLDER — replace with the real establishment. */
export const workforce = [
  { role: "Civil engineers", count: 84, detail: "Including chartered and NEC-registered engineers" },
  { role: "Geotechnical and materials engineers", count: 11, detail: "Slope stability, pavement and concrete technology" },
  { role: "Surveyors", count: 38, detail: "Setting out, as-built and quantity survey" },
  { role: "Quantity surveyors and contract staff", count: 22, detail: "Measurement, valuation and FIDIC claims administration" },
  { role: "HSE officers", count: 19, detail: "Site safety, environmental compliance and training" },
  { role: "Plant operators and mechanics", count: 246, detail: "Certified operators and workshop technicians" },
  { role: "Supervisory and site staff", count: 173, detail: "Foremen, site engineers and administration" },
];

export const workforceTotal = workforce.reduce((s, w) => s + w.count, 0);

/** The management systems a prequalification committee asks to see evidence of. */
export const systems = [
  {
    name: "Quality management",
    standard: "ISO 9001",
    detail:
      "Inspection and test plans issued per work package, with hold and witness points agreed with the engineer before work starts rather than negotiated after a non-conformance.",
    points: [
      "Inspection and test plans per work package",
      "Site materials laboratory with independent verification testing",
      "Non-conformance register with root-cause closure, not just rectification",
      "As-built records produced progressively, not assembled at handover",
    ],
  },
  {
    name: "Health and safety",
    standard: "ISO 45001",
    detail:
      "Construction in steep terrain and underground carries real fatality risk. Safety performance is reported to the board monthly alongside programme and cost, on the view that a metric not reported to the board is not managed.",
    points: [
      "Task-based risk assessment before each work front opens",
      "Mandatory induction and daily pre-task briefing on every site",
      "Confined space, working-at-height and underground permit systems",
      "Monthly board-level reporting of lost-time incidents and near misses",
    ],
  },
  {
    name: "Environmental management",
    standard: "ISO 14001",
    detail:
      "Nepali infrastructure works in fragile, seismically active terrain where poor spoil and drainage management causes damage far beyond the site boundary.",
    points: [
      "Spoil disposal to designated, stabilised sites — never to the slope below",
      "Sediment control on all watercourse crossings",
      "Bioengineering and revegetation programmed with the works, not after",
      "Quarry and borrow pit rehabilitation as a contract deliverable",
    ],
  },
  {
    name: "Contract administration",
    standard: "FIDIC",
    detail:
      "Most disputes on donor-funded contracts are records disputes. Contemporaneous records are kept to the standard a determination would require, from day one.",
    points: [
      "FIDIC Red and Pink Book contract administration",
      "Contemporaneous records maintained to determination standard",
      "Programme maintained as a live critical-path model, not a tender artefact",
      "Early warning issued on programme threats rather than claimed after the fact",
    ],
  },
];
