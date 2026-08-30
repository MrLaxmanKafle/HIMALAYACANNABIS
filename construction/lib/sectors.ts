/**
 * Sectors are the site's primary topical spine.
 *
 * Each one is a real page, a schema.org `Service` node, a sitemap entry, a
 * navigation heading and the parent of a cluster of keyword landing pages. An
 * infrastructure buyer searches by asset type ("bridge contractor"), not by
 * company capability language, so the taxonomy is organised the way the client
 * thinks rather than the way an org chart does.
 */

export type Sector = {
  slug: string;
  name: string;
  /** Short label for nav and chips. */
  short: string;
  /** One sentence, self-contained — quotable by an answer engine on its own. */
  summary: string;
  /** Two or three paragraphs of substance for the sector page. */
  body: string[];
  /** Concrete scope items. Specificity is the credibility signal here. */
  scope: string[];
  /** Technical capabilities a prequalification reviewer looks for. */
  capabilities: { name: string; detail: string }[];
  /** Typical clients — who actually awards this work in Nepal. */
  clients: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const sectors: Sector[] = [
  {
    slug: "roads-highways",
    name: "Roads & Highways",
    short: "Roads & Highways",
    summary:
      "We build and rehabilitate strategic highways, feeder roads and rural road networks across Nepal's hill and mountain terrain, from formation cutting through to bituminous and rigid pavement.",
    body: [
      "Road building in Nepal is not a paving problem. It is an earthworks, drainage and slope-stability problem that ends in paving. A carriageway laid over an unstable cut will be gone in two monsoons, so the work that decides whether a road survives happens before the first layer of sub-base goes down — in the cut slope design, the drainage catchment, and the decision about where the alignment should not go.",
      "Our road divisions are built around that reality. Every project carries its own geotechnical review, its own drainage design check against catchment rather than against the standard cross-section, and a bioengineering programme that starts in the same season as the earthworks rather than after handover. We would rather argue about an alignment during design review than rebuild it after a landslide.",
      "The work spans the full network hierarchy — Strategic Road Network highways under the Department of Roads, provincial and local roads, feeder and agricultural roads, and the upgrading of fair-weather tracks to all-weather standard. We hold the plant to run our own earthworks and paving rather than subcontracting the critical path.",
    ],
    scope: [
      "New road construction and greenfield alignment",
      "Highway upgrading and widening",
      "Formation cutting, embankment and mass earthworks",
      "Granular sub-base and base course",
      "Bituminous surfacing — premix carpet, DBST, asphalt concrete",
      "Rigid pavement and concrete carriageway",
      "Roadside drainage, causeways and cross-drainage structures",
      "Retaining structures, gabion works and breast walls",
      "Slope stabilisation and bioengineering",
      "Periodic and routine maintenance contracts",
    ],
    capabilities: [
      { name: "Own earthworks fleet", detail: "Excavators, dozers, graders and compaction plant held in-house, so the critical path is never subcontracted." },
      { name: "In-house asphalt production", detail: "Batch mix plant with paver and tandem/pneumatic roller trains for continuous surfacing." },
      { name: "Mountain alignment experience", detail: "Cut-and-fill in steep, geologically young Himalayan terrain where standard flat-country method statements do not apply." },
      { name: "Bioengineering programme", detail: "Vegetative slope protection specified and planted alongside the civil works, not deferred to a later contract." },
    ],
    clients: [
      "Department of Roads (DoR)",
      "Provincial infrastructure development directorates",
      "Rural municipalities and municipal governments",
      "Asian Development Bank and World Bank funded road programmes",
    ],
    faqs: [
      {
        q: "What kinds of roads does the company build in Nepal?",
        a: "The company builds and rehabilitates the full road hierarchy in Nepal: Strategic Road Network highways under the Department of Roads, provincial highways, district and feeder roads, rural agricultural roads, and the upgrading of fair-weather tracks to all-weather standard. Scope runs from formation cutting and mass earthworks through sub-base and base course to bituminous surfacing or rigid concrete pavement.",
      },
      {
        q: "How is road construction in Nepal's mountains different from flat terrain?",
        a: "Mountain road construction in Nepal is governed by slope stability and drainage rather than by paving. The terrain is geologically young and seismically active, monsoon rainfall is intense, and a cut slope that has not been properly designed and drained will fail within one or two monsoon seasons regardless of pavement quality. Practical differences include cut-and-fill balance across steep ground, catchment-based drainage design rather than standard cross-sections, retaining and breast wall structures, and bioengineering — vegetative slope protection planted in the same season as the earthworks.",
      },
      {
        q: "Does the company own its road construction plant or hire it?",
        a: "Core earthworks and paving plant is owned rather than hired, including excavators, dozers, graders, compaction equipment, an asphalt batch mix plant and paver trains. Owning the critical-path plant means programme is not exposed to third-party equipment availability, which is a recurring cause of delay on Nepali road contracts.",
      },
    ],
    keywords: ["road construction company nepal", "highway contractor nepal", "road contractor kathmandu", "bituminous road construction nepal", "rural road construction nepal"],
  },
  {
    slug: "bridges-structures",
    name: "Bridges & Structures",
    short: "Bridges",
    summary:
      "We construct road bridges, river crossings and major structures — reinforced concrete, prestressed girder, steel truss and suspension — including deep foundations in live river conditions.",
    body: [
      "Nepal's road network is defined by its river crossings. A highway is only as continuous as its bridges, and a bridge in a Himalayan river system has to survive flows that change by an order of magnitude between the dry season and the monsoon, plus the boulder and debris load that comes with them.",
      "Our structures teams work to that loading case rather than to a nominal design flood. That shapes the things that matter: foundation depth and scour protection, the width of the working season, and the sequencing that has to get substructure out of the river before the monsoon arrives. We plan bridge programmes backwards from the first rains.",
      "We deliver reinforced concrete and prestressed girder bridges, steel truss spans, box culverts and major cross-drainage structures, along with the trail suspension bridges that carry an enormous share of rural mobility in the hills. Foundation work includes well foundations, bored piles and open foundations in river beds.",
    ],
    scope: [
      "Reinforced concrete deck and slab bridges",
      "Prestressed concrete girder bridges",
      "Steel truss and composite bridges",
      "Trail and pedestrian suspension bridges",
      "Well foundations and bored pile foundations",
      "River training, spurs and scour protection",
      "Box culverts and major cross-drainage structures",
      "Bridge rehabilitation, strengthening and bearing replacement",
      "Retaining walls and abutment structures",
    ],
    capabilities: [
      { name: "Deep river foundations", detail: "Well sinking and bored piling in live river beds, sequenced around the dry-season working window." },
      { name: "Prestressing capability", detail: "Post-tensioning carried out by our own trained crews under supervision rather than by a hired specialist." },
      { name: "Monsoon-driven programming", detail: "Substructure programmes planned backwards from the first rains, so the river work finishes before the river rises." },
      { name: "Scour and river training", detail: "Protection works designed for Himalayan boulder and debris load, not for a nominal design flood alone." },
    ],
    clients: [
      "Department of Roads — Bridge Branch",
      "Department of Local Infrastructure (DoLI)",
      "Provincial and municipal governments",
      "Trail bridge programmes and their development partners",
    ],
    faqs: [
      {
        q: "What types of bridges does the company build?",
        a: "The company builds reinforced concrete deck and slab bridges, prestressed concrete girder bridges, steel truss and composite bridges, box culverts and major cross-drainage structures, and trail and pedestrian suspension bridges. Foundation types include open foundations, well foundations and bored piles, together with river training and scour protection works.",
      },
      {
        q: "How does monsoon season affect bridge construction in Nepal?",
        a: "Monsoon rainfall dictates the entire programme. Himalayan rivers can rise by an order of magnitude between the dry season and the monsoon, and they carry heavy boulder and debris load, so all in-river work — foundations, piers, scour protection — must be completed within the dry-season window. Bridge programmes are therefore planned backwards from the expected onset of rains, with substructure prioritised and superstructure work scheduled for the wet months when it can proceed above the water line.",
      },
      {
        q: "Can the company carry out bridge rehabilitation as well as new construction?",
        a: "Yes. Rehabilitation scope includes structural strengthening, bearing and expansion joint replacement, deck repair and resurfacing, abutment and wing wall repair, and the addition or upgrading of scour protection to structures whose river regime has changed since they were built.",
      },
    ],
    keywords: ["bridge construction company nepal", "bridge contractor nepal", "suspension bridge nepal", "prestressed girder bridge nepal", "river training works nepal"],
  },
  {
    slug: "hydropower-civil-works",
    name: "Hydropower Civil Works",
    short: "Hydropower",
    summary:
      "We deliver the civil scope of run-of-river hydropower schemes — headworks, desanding basins, headrace tunnels and canals, surge shafts, penstock alignments and powerhouse structures.",
    body: [
      "Hydropower is Nepal's largest domestic infrastructure programme, and the civil works are the majority of the capital cost and nearly all of the schedule risk. On a run-of-river scheme the powerhouse is rarely what delays commissioning — the headrace is.",
      "We work as the civil contractor on run-of-river schemes, taking scope from the diversion weir and intake through the desanding arrangement, along the headrace by tunnel or canal, into the surge arrangement and down the penstock alignment to the powerhouse and tailrace. That whole chain is a single hydraulic problem, and treating it as one scope rather than as a series of separate packages is what keeps the interfaces from becoming claims.",
      "Tunnel work is drill-and-blast with supported excavation appropriate to the ground class, with support design reviewed against what the face actually shows rather than against what the tender geology predicted. In young Himalayan rock the difference between those two is where hydropower programmes are won or lost.",
    ],
    scope: [
      "Diversion weirs, barrages and intake structures",
      "Desanding basins and settling arrangements",
      "Headrace tunnels — drill-and-blast excavation and lining",
      "Headrace canals, aqueducts and cut-and-cover conduits",
      "Surge shafts and surge tanks",
      "Penstock alignment civil works, anchor and saddle blocks",
      "Powerhouse substructure and superstructure",
      "Tailrace channels and outlet structures",
      "Access roads, portals and construction power infrastructure",
    ],
    capabilities: [
      { name: "Drill-and-blast tunnelling", detail: "Supported excavation in variable Himalayan rock with support class reviewed against the face, not the tender geology." },
      { name: "Hydraulic structures", detail: "Weirs, intakes and desanding basins built to hold their hydraulic performance under real sediment load." },
      { name: "Single-interface delivery", detail: "Headworks to tailrace taken as one civil scope, so hydraulic interfaces do not become contractual ones." },
      { name: "Remote site logistics", detail: "Access roads, camps, batching and construction power established as part of the works." },
    ],
    clients: [
      "Independent power producers",
      "Nepal Electricity Authority (NEA)",
      "Hydropower development companies",
      "EPC contractors requiring a civil works partner",
    ],
    faqs: [
      {
        q: "What civil works does the company deliver on hydropower projects?",
        a: "The company delivers the full civil scope of run-of-river hydropower schemes: diversion weir and intake, desanding basins, headrace tunnel or canal, surge shaft or surge tank, penstock alignment civil works including anchor and saddle blocks, powerhouse substructure and superstructure, and tailrace outlet — together with access roads, portals, camps and construction power.",
      },
      {
        q: "Why are civil works the main schedule risk on a hydropower project?",
        a: "On a run-of-river scheme the civil works are the majority of capital cost and almost all of the schedule risk, and within them the headrace is the critical path. Tunnel excavation rates in young, variable Himalayan rock can differ substantially from what the tender geology predicted, and support requirements change with the ground actually encountered at the face. Powerhouse and equipment installation are comparatively predictable by comparison.",
      },
      {
        q: "What tunnelling method is used for headrace tunnels in Nepal?",
        a: "Headrace tunnels on Nepali hydropower schemes are typically excavated by drill-and-blast with support installed progressively according to the rock class encountered — rock bolts, shotcrete, steel ribs or full concrete lining as ground conditions require. Tunnel boring is rarely economic at the diameters and lengths typical of Nepali run-of-river schemes.",
      },
    ],
    keywords: ["hydropower civil contractor nepal", "headrace tunnel construction nepal", "tunnel contractor nepal", "hydropower construction company nepal", "powerhouse civil works nepal"],
  },
  {
    slug: "water-irrigation",
    name: "Water Supply & Irrigation",
    short: "Water & Irrigation",
    summary:
      "We build drinking water supply schemes, treatment works, transmission and distribution networks, irrigation canals and river training works for municipal and agricultural clients.",
    body: [
      "Water infrastructure is judged years after handover, by whether the supply is still running. That makes it unusually unforgiving of the shortcuts that do not show up at commissioning — an unbedded pipe, an untested joint, a reservoir with no realistic access for cleaning.",
      "We build water supply schemes end to end: source intake and protection, treatment works, transmission mains, service reservoirs, and distribution networks down to the connection. On the irrigation side the scope covers headworks, main and branch canals, lining, control structures and command-area distribution.",
      "Every scheme is handed over with as-built network records and an operations note written for the people who will actually run it — usually a municipal water office or a user committee — rather than a manual that assumes a maintenance department that does not exist.",
    ],
    scope: [
      "Source intake works and spring protection",
      "Water treatment plants and filtration works",
      "Transmission mains and pumping stations",
      "Service reservoirs and overhead tanks",
      "Distribution networks and house connections",
      "Irrigation headworks and diversion structures",
      "Main, branch and tertiary canals with lining",
      "Canal control structures, aqueducts and siphons",
      "River training, embankments and flood protection",
      "Sewerage and drainage networks",
    ],
    capabilities: [
      { name: "Full scheme delivery", detail: "Source to connection as one scope, so the network is commissioned as a working system rather than as parts." },
      { name: "Pipe laying and testing", detail: "DI, HDPE, GI and PVC mains laid, bedded, pressure-tested and disinfected to specification." },
      { name: "Handover for real operators", detail: "As-built network records and operating notes written for municipal water offices and user committees." },
      { name: "Gravity scheme design support", detail: "Hill and mountain gravity schemes where head, not pumping, does the work." },
    ],
    clients: [
      "Department of Water Supply and Sewerage Management (DWSSM)",
      "Nepal Water Supply Corporation",
      "Department of Water Resources and Irrigation (DWRI)",
      "Municipalities and rural municipalities",
      "Water user committees and donor-funded WASH programmes",
    ],
    faqs: [
      {
        q: "What water supply infrastructure does the company build?",
        a: "The company builds complete drinking water supply schemes — source intake and spring protection, treatment and filtration works, transmission mains, pumping stations, service reservoirs and overhead tanks, and distribution networks down to house connections — as well as sewerage and drainage networks.",
      },
      {
        q: "What irrigation works does the company undertake?",
        a: "Irrigation scope covers headworks and diversion structures, main, branch and tertiary canals including lining, canal control structures, aqueducts and siphons, command-area distribution, and associated river training, embankment and flood protection works.",
      },
    ],
    keywords: ["water supply contractor nepal", "irrigation canal construction nepal", "water treatment plant construction nepal", "pipeline contractor nepal", "river training contractor nepal"],
  },
  {
    slug: "buildings-urban",
    name: "Buildings & Urban Infrastructure",
    short: "Buildings & Urban",
    summary:
      "We build institutional and public buildings — schools, health facilities, government offices — plus urban roads, drainage, retrofitting and the public realm works that go with them.",
    body: [
      "Public buildings in Nepal carry a design requirement most commercial work does not: they have to stand up in an earthquake and still be usable afterwards. A school or a health post is a place people go during a disaster, not just before one.",
      "That shapes how we build them. Seismic detailing is treated as the primary structural requirement rather than a code box to tick, and we do a significant volume of seismic retrofitting on existing public buildings — jacketing, shear wall insertion, and connection strengthening on structures that were built before the current code.",
      "Urban infrastructure scope covers the works that make a street function: carriageway and footpath, storm drainage, utility ducting, street lighting foundations and the public realm finishes. Doing them as one package rather than as five sequential contracts is the difference between a street that is dug up once and one that is dug up every year.",
    ],
    scope: [
      "School, campus and educational buildings",
      "Hospitals, health posts and clinical facilities",
      "Government offices and administrative buildings",
      "Seismic retrofitting and structural strengthening",
      "Urban roads, footpaths and street furniture",
      "Storm water drainage and utility ducting",
      "Public realm, plazas and civic spaces",
      "Bus parks, markets and community facilities",
      "Water and sanitation blocks",
    ],
    capabilities: [
      { name: "Seismic detailing", detail: "NBC-compliant detailing treated as the governing structural requirement on every public building." },
      { name: "Retrofitting", detail: "Jacketing, shear wall insertion and connection strengthening on pre-code public structures." },
      { name: "Occupied-site working", detail: "Phased construction on schools and health facilities that have to keep operating throughout." },
      { name: "Integrated street works", detail: "Carriageway, drainage, ducting and public realm delivered as one package rather than sequential contracts." },
    ],
    clients: [
      "Department of Urban Development and Building Construction (DUDBC)",
      "Municipal and rural municipal governments",
      "Ministry of Education and Ministry of Health programmes",
      "Reconstruction and resilience programmes",
    ],
    faqs: [
      {
        q: "Does the company build schools and hospitals?",
        a: "Yes. Institutional building scope includes schools, campuses and educational buildings, hospitals, health posts and clinical facilities, government offices and administrative buildings, and community facilities such as bus parks and markets. Work on operating schools and health facilities is phased so the facility can keep functioning throughout construction.",
      },
      {
        q: "What is seismic retrofitting and why does it matter in Nepal?",
        a: "Seismic retrofitting is the structural strengthening of an existing building so it can withstand earthquake loading it was not originally designed for. It matters in Nepal because a large share of public buildings predate the current National Building Code, and because schools, health posts and government offices are the buildings people shelter in during and after an earthquake. Typical methods include column and beam jacketing, insertion of shear walls, and strengthening of connections and diaphragms.",
      },
    ],
    keywords: ["building construction company nepal", "school building contractor nepal", "seismic retrofitting nepal", "hospital construction nepal", "urban infrastructure contractor nepal"],
  },
];

export function sectorBySlug(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
