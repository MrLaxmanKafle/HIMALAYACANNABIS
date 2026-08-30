/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER PROJECT REGISTER — NOT REAL PROJECTS.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Every record below is invented. The shapes, terminology, client names and
 * contract structures are realistic so the templates, filtering, schema markup
 * and prequalification tables can be reviewed against something lifelike — but
 * no project here was built, no contract value here was awarded, and no client
 * listed here has engaged the company.
 *
 * `siteStatus` in lib/company.ts is "draft" for exactly this reason, and it
 * must stay "draft" until this file is replaced with the real project register.
 * Publishing invented public-sector project records is a live procurement and
 * misrepresentation risk, not a cosmetic one.
 *
 * To replace: keep the shape, swap the data, delete this banner, flip
 * `siteStatus` to "live".
 */

import type { Sector } from "@/lib/sectors";

export type ProjectStatus = "completed" | "ongoing";

export type Project = {
  slug: string;
  name: string;
  sector: Sector["slug"];
  status: ProjectStatus;
  client: string;
  /** Funding source — procurement audiences read this first. */
  funding: string;
  location: string;
  province: string;
  /** ISO years. */
  startYear: number;
  endYear: number | null;
  /** Contract value in NPR crore, displayed as written. */
  value: string;
  /** One sentence a person or an answer engine can quote standalone. */
  summary: string;
  /** The engineering problem, in plain language. */
  challenge: string;
  /** What was actually done about it. */
  approach: string;
  /** Verifiable outcomes. Numbers, not adjectives. */
  outcomes: string[];
  /** Headline quantities — the table a PQ reviewer scans. */
  quantities: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "midhill-highway-section-upgrading",
    name: "Mid-Hill Highway — Section Upgrading and Slope Stabilisation",
    sector: "roads-highways",
    status: "completed",
    client: "Department of Roads",
    funding: "Government of Nepal",
    location: "Baglung–Burtibang corridor",
    province: "Gandaki Province",
    startYear: 2019,
    endYear: 2023,
    value: "NPR 148 crore",
    summary:
      "Upgrading of a 42 km hill highway section to all-weather bituminous standard, including reconstruction of eleven chronic landslide-affected slopes that had closed the corridor every monsoon.",
    challenge:
      "The corridor carried the only year-round road access for four municipalities, but eleven slope failures along the alignment closed it for weeks at a time each monsoon. Previous contracts had repeatedly repaired the carriageway without addressing the drainage catchments that were saturating the slopes above it, so each rebuild lasted a single season.",
    approach:
      "The alignment was re-surveyed and the drainage designed against actual catchment areas rather than the standard cross-section, moving discharge points away from the failure zones. Slope treatment combined gabion and breast wall structures at the toe with bioengineering planted in the same monsoon the earthworks were completed, so root systems established before the following season. Paving followed only once a full monsoon had passed over the treated slopes.",
    outcomes: [
      "42 km upgraded to all-weather bituminous standard",
      "Eleven chronic failure slopes treated; no closure recorded in the two monsoons following handover",
      "Year-round access restored for four municipalities",
      "Bioengineering established across 18,000 m² of treated slope face",
    ],
    quantities: [
      { label: "Road length", value: "42 km" },
      { label: "Earthworks", value: "610,000 m³" },
      { label: "Bituminous surfacing", value: "294,000 m²" },
      { label: "Retaining structures", value: "8,400 m³" },
    ],
  },
  {
    slug: "trishuli-corridor-bridge",
    name: "Trishuli Corridor — 120 m Prestressed Girder Bridge",
    sector: "bridges-structures",
    status: "completed",
    client: "Department of Roads — Bridge Branch",
    funding: "Government of Nepal",
    location: "Trishuli River crossing",
    province: "Bagmati Province",
    startYear: 2020,
    endYear: 2023,
    value: "NPR 96 crore",
    summary:
      "A three-span, 120 m prestressed concrete girder bridge with well foundations sunk in a live river bed, replacing a single-lane structure that had become the corridor's capacity constraint.",
    challenge:
      "The crossing carried freight traffic on a single-lane bridge with a posted load limit well below the vehicles actually using it. The new structure required well foundations in a boulder-bed river with a dry-season working window of roughly five months and monsoon flows more than twenty times the dry-season discharge.",
    approach:
      "The programme was built backwards from the monsoon: both river piers were sequenced into the first dry season, with well sinking running double shift and cofferdam dewatering sized for the boulder bed rather than for a sand bed. Girder casting was moved to an off-river casting yard so superstructure work could continue through the wet months, and launching was scheduled for the second dry season.",
    outcomes: [
      "120 m three-span crossing opened to two-lane traffic",
      "Both river piers completed within a single dry-season window",
      "Posted load restriction on the corridor removed",
      "Scour protection designed for boulder and debris load, not nominal flood alone",
    ],
    quantities: [
      { label: "Total span", value: "120 m (3 × 40 m)" },
      { label: "Well foundations", value: "2 no., 22 m depth" },
      { label: "Prestressed girders", value: "15 no." },
      { label: "Structural concrete", value: "6,900 m³" },
    ],
  },
  {
    slug: "run-of-river-headrace-tunnel",
    name: "22 MW Run-of-River Scheme — Headrace Tunnel and Headworks",
    sector: "hydropower-civil-works",
    status: "ongoing",
    client: "Independent power producer",
    funding: "Private, with commercial bank syndication",
    location: "Myagdi district",
    province: "Gandaki Province",
    startYear: 2023,
    endYear: null,
    value: "NPR 212 crore",
    summary:
      "Civil works for a 22 MW run-of-river scheme, comprising a diversion weir and intake, twin desanding basins, a 4.1 km drill-and-blast headrace tunnel, surge shaft and powerhouse substructure.",
    challenge:
      "Tender geology predicted predominantly Class II and III rock along the headrace alignment. Approximately 900 m in, the drive encountered a sheared and water-bearing zone requiring a substantially heavier support class, which threatened both the excavation rate and the overall commissioning date.",
    approach:
      "Support class was re-designed against the ground actually mapped at the face rather than the tender assumption, moving to steel rib support with forepoling and systematic probe drilling ahead of the face through the sheared zone. A second heading was opened from the surge shaft to recover programme, and the desanding and headworks packages were resequenced to absorb the tunnel float rather than sit idle behind it.",
    outcomes: [
      "3.4 km of 4.1 km headrace excavated to date",
      "Sheared zone traversed without collapse or unplanned stoppage",
      "Programme recovery through second heading from surge shaft",
      "Headworks and desanding basins substantially complete",
    ],
    quantities: [
      { label: "Headrace tunnel", value: "4.1 km" },
      { label: "Installed capacity served", value: "22 MW" },
      { label: "Desanding basins", value: "2 no., 68 m" },
      { label: "Surge shaft", value: "44 m depth" },
    ],
  },
  {
    slug: "municipal-water-supply-scheme",
    name: "Municipal Water Supply Scheme — Source to Connection",
    sector: "water-irrigation",
    status: "completed",
    client: "Department of Water Supply and Sewerage Management",
    funding: "Asian Development Bank",
    location: "Mid-hill municipality",
    province: "Lumbini Province",
    startYear: 2021,
    endYear: 2024,
    value: "NPR 71 crore",
    summary:
      "A gravity-fed municipal water supply scheme serving roughly 9,400 households, from protected spring sources through treatment and transmission to a metered distribution network.",
    challenge:
      "The municipality's existing supply drew from unprotected sources with no treatment and lost a large share of production to an undocumented distribution network. There were no as-built records, so leak location was guesswork and every repair required excavation to find the main.",
    approach:
      "Sources were protected and a slow sand filtration works built at the head of the transmission main, with the whole scheme run on gravity so operation does not depend on grid availability. The distribution network was rebuilt rather than patched, laid with pressure-tested HDPE and district metering at each zone, and handed over with a full as-built network record and an operating note written for the municipal water office.",
    outcomes: [
      "Approximately 9,400 households connected",
      "Fully gravity-fed — no pumping dependency on grid supply",
      "District metered zones enabling loss detection without excavation",
      "Complete as-built network records handed to the municipal water office",
    ],
    quantities: [
      { label: "Households served", value: "~9,400" },
      { label: "Transmission main", value: "14.2 km" },
      { label: "Distribution network", value: "63 km" },
      { label: "Service reservoirs", value: "6 no., 2,400 m³ total" },
    ],
  },
  {
    slug: "school-seismic-retrofitting-programme",
    name: "School Seismic Retrofitting Programme — 34 Buildings",
    sector: "buildings-urban",
    status: "completed",
    client: "Municipal government, education programme",
    funding: "Government of Nepal with development partner support",
    location: "Multiple sites",
    province: "Bagmati Province",
    startYear: 2022,
    endYear: 2024,
    value: "NPR 58 crore",
    summary:
      "Seismic assessment and structural retrofitting of 34 pre-code school buildings, carried out in phases so that no school lost a full academic session.",
    challenge:
      "All 34 buildings predated the current National Building Code and had been assessed as structurally deficient under design earthquake loading. All were in continuous use, and closing them for the works would have displaced roughly 11,000 students across the municipality.",
    approach:
      "Each building was assessed individually rather than treated to a standard package, because the deficiencies varied — some needed column and beam jacketing, others shear wall insertion, others diaphragm and connection strengthening. Works were phased block by block and scheduled around examination periods and school holidays, with a rolling programme that kept each school partially occupied throughout.",
    outcomes: [
      "34 buildings retrofitted to current code loading",
      "No school lost a full academic session",
      "Approximately 11,000 students in buildings assessed as code-compliant",
      "Individual assessment reports handed to each school management committee",
    ],
    quantities: [
      { label: "Buildings retrofitted", value: "34 no." },
      { label: "Floor area treated", value: "31,600 m²" },
      { label: "Column jacketing", value: "1,180 no." },
      { label: "Shear walls inserted", value: "96 no." },
    ],
  },
  {
    slug: "rural-road-network-upgrading",
    name: "Rural Road Network — Fair-Weather to All-Weather Upgrading",
    sector: "roads-highways",
    status: "ongoing",
    client: "Provincial infrastructure development directorate",
    funding: "Provincial government",
    location: "Multiple rural municipalities",
    province: "Karnali Province",
    startYear: 2024,
    endYear: null,
    value: "NPR 89 crore",
    summary:
      "Upgrading of 78 km of fair-weather rural road to all-weather standard, with cross-drainage, causeways and slope protection across four rural municipalities.",
    challenge:
      "The network was passable for roughly seven months a year. The binding constraint was not surfacing but cross-drainage: dozens of stream crossings had no structure at all, and each became impassable during the monsoon, cutting the network into disconnected fragments.",
    approach:
      "Cross-drainage was treated as the primary scope rather than an ancillary item, with causeways and box culverts prioritised ahead of surfacing so that connectivity improved from the first construction season rather than only at handover. Surfacing follows behind on a rolling front.",
    outcomes: [
      "41 km of 78 km upgraded to date",
      "62 cross-drainage structures completed",
      "Connectivity improved from the first construction season rather than at handover",
      "Four rural municipalities served",
    ],
    quantities: [
      { label: "Road length", value: "78 km" },
      { label: "Cross-drainage structures", value: "94 no. (62 complete)" },
      { label: "Causeways", value: "18 no." },
      { label: "Earthworks", value: "480,000 m³" },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsInSector(slug: string) {
  return projects.filter((p) => p.sector === slug);
}
