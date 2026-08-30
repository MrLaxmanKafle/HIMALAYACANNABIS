/**
 * Keyword landing pages.
 *
 * Each entry becomes a real page at `/<slug>/` with its own H1, canonical, OG
 * image, FAQ block and internal links. These are not doorway pages: every one
 * answers a distinct question a real buyer types, with content that would be
 * worth reading if search engines did not exist. That is the line between a
 * programmatic SEO layer that compounds and one that gets filtered out.
 *
 * The `answer` field is deliberately written as a self-contained paragraph. An
 * answer engine retrieving this page needs a span it can quote without the
 * surrounding page for context — so the first substantive paragraph always
 * restates the question's subject rather than saying "we do this too".
 */

export type LandingCategory = "sector" | "location" | "procurement" | "capability";

export type LandingPage = {
  slug: string;
  category: LandingCategory;
  /** The visible H1. */
  h1: string;
  /** <title>. Kept under ~60 chars where possible. */
  metaTitle: string;
  /** Meta description. ~150-160 chars. */
  description: string;
  /** The lead paragraph — self-contained and quotable. */
  answer: string;
  /** Body sections. */
  sections: { heading: string; body: string[] }[];
  /** Bulleted specifics. */
  points?: { heading: string; items: string[] };
  faqs: { q: string; a: string }[];
  keywords: string[];
  /** Related landing page slugs. */
  related: string[];
  /** Sector page this belongs under, if any. */
  sector?: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "road-construction-company-nepal",
    category: "sector",
    sector: "roads-highways",
    h1: "Road Construction Company in Nepal",
    metaTitle: "Road Construction Company in Nepal",
    description:
      "How road construction contracts work in Nepal — the road hierarchy, who awards the work, what mountain terrain demands, and how to evaluate a road contractor.",
    answer:
      "A road construction company in Nepal builds and rehabilitates roads across a four-tier network: the Strategic Road Network of national highways and feeder roads administered by the Department of Roads, provincial highways under provincial infrastructure directorates, and local and rural roads under municipal and rural municipal governments. Work is awarded by competitive tender, usually through the Public Procurement Monitoring Office's electronic procurement system, and contractors must hold a valid construction licence of the class matching the contract value.",
    sections: [
      {
        heading: "The road network, and who awards work on each tier",
        body: [
          "Nepal's roads are administered at three levels of government, and knowing which one owns a given road determines everything about how the contract is procured. The Strategic Road Network — national highways and major feeder roads — sits with the Department of Roads under the federal Ministry of Physical Infrastructure and Transport. Provincial highways and secondary corridors are awarded by provincial infrastructure development directorates. Local, rural and agricultural roads are the responsibility of the 753 municipal and rural municipal governments, often with technical support from the Department of Local Infrastructure.",
          "Donor-funded road programmes sit alongside this structure rather than replacing it. Asian Development Bank and World Bank funded corridors are usually implemented through a government department as employer, but procured under the funder's own procurement rules and administered under FIDIC conditions of contract. For a contractor, the practical difference is in documentation standards and in how variations and claims are handled — not in the engineering.",
        ],
      },
      {
        heading: "Why mountain roads are an earthworks problem, not a paving problem",
        body: [
          "The dominant technical fact about road construction in Nepal is that most of the country is steep, geologically young and subject to intense monsoon rainfall. A carriageway built over an inadequately drained cut slope will not survive two monsoons, regardless of how well the pavement itself was laid. The engineering that determines whether a road lasts happens before any surfacing: in the alignment choice, the cut slope angle, and above all in the drainage design.",
          "The most common failure mode on Nepali hill roads is not pavement failure but slope failure above or below the road, usually because drainage was designed to a standard cross-section rather than to the actual catchment discharging onto the slope. Correcting that after the fact is far more expensive than getting it right during design review, which is why a serious road contractor argues about drainage at design stage rather than pricing repairs later.",
          "Bioengineering — vegetative slope protection using locally appropriate grasses and shrubs — is the other differentiator. It only works if it is planted in the same season the earthworks are completed, so that root systems establish before the following monsoon. Deferring it to a separate later contract, which is common, means the slope faces a monsoon bare.",
        ],
      },
      {
        heading: "How to evaluate a road contractor",
        body: [
          "Licence class and financial capacity are the entry requirements, not the differentiators. Beyond them, the questions that predict whether a road contract finishes on time are about plant and about drainage.",
          "Ask whether the contractor owns its earthworks and paving plant or hires it. Equipment availability is one of the most common causes of delay on Nepali road contracts, and a contractor whose critical path depends on a third party's excavator fleet has no control over its own programme. Ask to see the drainage design approach on a comparable completed project, and ask what happened to that road in the two monsoons after handover — the second question is the one that actually tests the first.",
        ],
      },
    ],
    points: {
      heading: "Typical road contract scope in Nepal",
      items: [
        "Formation cutting, embankment and mass earthworks",
        "Granular sub-base and base course",
        "Bituminous surfacing — premix carpet, DBST or asphalt concrete",
        "Rigid concrete pavement on steep gradients and settlement-prone sections",
        "Side drains, catch drains and cross-drainage structures",
        "Retaining walls, gabion works and breast walls",
        "Bioengineering and slope protection",
        "Road furniture, signage and safety works",
      ],
    },
    faqs: [
      {
        q: "Who awards road construction contracts in Nepal?",
        a: "Road contracts in Nepal are awarded at three levels of government. The Department of Roads awards work on the Strategic Road Network of national highways and major feeder roads. Provincial infrastructure development directorates award provincial highways and secondary corridors. Municipal and rural municipal governments award local, rural and agricultural roads. Donor-funded corridors are typically implemented through a government department as employer but procured under Asian Development Bank or World Bank rules and administered under FIDIC conditions of contract.",
      },
      {
        q: "What licence does a road contractor need in Nepal?",
        a: "Contractors in Nepal are registered and classified by the Department of Urban Development and Building Construction into classes A, B, C and D according to financial and technical capacity. The class determines the maximum contract value a contractor may bid for, so a Class A licence is required for major highway and bridge contracts. Contractors also require VAT registration and, for road work, registration with the Department of Roads.",
      },
      {
        q: "What is the biggest cause of road failure in Nepal?",
        a: "Slope failure caused by inadequate drainage, rather than pavement failure. Nepal's hill terrain is geologically young and receives intense monsoon rainfall, so a cut slope whose drainage was designed to a standard cross-section rather than to the actual catchment discharging onto it will saturate and fail. The pavement is then lost with the slope. This is why drainage design and slope stabilisation, not surfacing quality, are the decisive engineering questions on a Nepali hill road.",
      },
      {
        q: "How long does the construction season last in Nepal?",
        a: "Effective road construction is concentrated in the roughly seven to eight dry months between October and May. The monsoon, typically June to September, halts most earthworks and surfacing, makes haul roads impassable and raises rivers beyond the point where in-river structures can be built. Realistic programmes are built around this window rather than assuming twelve productive months a year.",
      },
    ],
    keywords: [
      "road construction company nepal",
      "road contractor nepal",
      "highway construction nepal",
      "road building company kathmandu",
      "nepal road construction tender",
    ],
    related: ["bridge-construction-company-nepal", "government-construction-contractor-nepal", "class-a-contractor-nepal", "rural-road-construction-nepal"],
  },
  {
    slug: "bridge-construction-company-nepal",
    category: "sector",
    sector: "bridges-structures",
    h1: "Bridge Construction Company in Nepal",
    metaTitle: "Bridge Construction Company in Nepal",
    description:
      "Bridge construction in Nepal — structure types, foundations in Himalayan rivers, the dry-season working window, and who procures bridge contracts.",
    answer:
      "A bridge construction company in Nepal builds road and pedestrian crossings over Himalayan river systems, typically as reinforced concrete deck bridges, prestressed concrete girder bridges, steel truss spans or trail suspension bridges. The defining engineering constraint is hydrological: Himalayan rivers can rise by more than an order of magnitude between dry season and monsoon and carry heavy boulder and debris load, so all in-river foundation work must be completed within a dry-season window of roughly five months.",
    sections: [
      {
        heading: "Structure types and where each is used",
        body: [
          "Span length and river regime decide the structure. Short crossings up to roughly 25 metres are usually reinforced concrete deck or slab bridges, cast in situ. Spans between about 25 and 50 metres are most commonly prestressed concrete girders, either cast at an off-river yard and launched or cast in place on falsework where the river permits. Longer spans and locations with difficult access use steel truss structures, which can be transported in sections and assembled on site without heavy lifting plant.",
          "Trail suspension bridges are a distinct and important category in Nepal. They carry an enormous share of rural mobility in the hills, connecting settlements that no road reaches, and they are procured under their own programmes with standardised designs. They are engineering-light compared with road bridges but logistics-heavy, since every component must be portered to sites with no vehicle access.",
        ],
      },
      {
        heading: "Foundations, scour and the monsoon calendar",
        body: [
          "Foundation work is where bridge programmes succeed or fail. Himalayan rivers run over boulder beds rather than sand, which makes both well sinking and cofferdam dewatering substantially harder than the equivalent work on an alluvial plain. Well foundations remain the most common solution for river piers, with bored piles used where ground conditions allow and open foundations only where sound rock is reachable.",
          "Scour is the other governing consideration, and it is routinely underestimated. Designing scour protection to a nominal design flood misses the actual failure mechanism, which is boulder and debris impact during a high-discharge event. Protection has to be sized for the material the river moves, not only for the water it carries.",
          "All of this must happen between roughly October and May. A bridge programme that has not got its substructure out of the river before the first rains has lost a year, so competent programming works backwards from the monsoon: river piers into the first dry season, superstructure work scheduled for the wet months when it proceeds above the water line, and launching in the second dry season.",
        ],
      },
      {
        heading: "Who procures bridge work",
        body: [
          "Road bridges on the Strategic Road Network are procured by the Bridge Branch of the Department of Roads. Local and district bridges are procured by the Department of Local Infrastructure and by municipal governments. Trail and pedestrian suspension bridges run through dedicated trail bridge programmes, historically with substantial development partner support.",
        ],
      },
    ],
    points: {
      heading: "Bridge scope typically tendered in Nepal",
      items: [
        "Reinforced concrete deck and slab bridges",
        "Prestressed concrete girder bridges, cast in situ or launched",
        "Steel truss and composite structures",
        "Trail and pedestrian suspension bridges",
        "Well foundations, bored piles and open foundations",
        "River training, spurs and scour protection",
        "Approach roads and embankments",
        "Rehabilitation, strengthening and bearing replacement",
      ],
    },
    faqs: [
      {
        q: "What types of bridges are built in Nepal?",
        a: "The main types are reinforced concrete deck and slab bridges for short spans up to about 25 metres, prestressed concrete girder bridges for spans of roughly 25 to 50 metres, steel truss and composite bridges for longer spans or difficult-access sites, and trail suspension bridges for pedestrian river crossings in the hills. Foundation types are predominantly well foundations and bored piles, with open foundations where sound rock is reachable.",
      },
      {
        q: "Why must bridge foundations in Nepal be built in the dry season?",
        a: "Himalayan rivers can rise by more than an order of magnitude between the dry season and the monsoon and carry heavy boulder and debris load. In-river work — well sinking, pier construction, cofferdam dewatering and scour protection — is only feasible during the low-flow window of roughly October to May. A bridge programme that fails to complete substructure within a dry season loses an entire year, so programmes are planned backwards from the expected onset of the monsoon.",
      },
      {
        q: "What is scour and why does it cause bridge failures?",
        a: "Scour is the erosion of river bed material from around bridge foundations by flowing water. It causes failures because it removes the material supporting a pier or abutment, undermining the foundation. In Himalayan rivers the risk is amplified by boulder and debris load during high-discharge events, which both accelerates erosion and impacts the structure directly. Scour protection therefore has to be sized for the material the river moves, not only for the design flood discharge.",
      },
    ],
    keywords: [
      "bridge construction company nepal",
      "bridge contractor nepal",
      "prestressed girder bridge nepal",
      "suspension bridge construction nepal",
      "river training works nepal",
    ],
    related: ["road-construction-company-nepal", "government-construction-contractor-nepal", "hydropower-civil-contractor-nepal", "infrastructure-company-nepal"],
  },
  {
    slug: "hydropower-civil-contractor-nepal",
    category: "sector",
    sector: "hydropower-civil-works",
    h1: "Hydropower Civil Contractor in Nepal",
    metaTitle: "Hydropower Civil Contractor in Nepal",
    description:
      "The civil works scope on Nepali run-of-river hydropower — headworks, headrace tunnels, surge shafts and powerhouse — and why the headrace drives the schedule.",
    answer:
      "A hydropower civil contractor in Nepal delivers the civil scope of run-of-river schemes: the diversion weir and intake, desanding basins, the headrace tunnel or canal, the surge shaft, the penstock alignment civil works, and the powerhouse and tailrace structures. On a typical Nepali run-of-river project the civil works represent the majority of capital cost and nearly all of the schedule risk, with the headrace tunnel almost always on the critical path.",
    sections: [
      {
        heading: "What the civil scope actually covers",
        body: [
          "A run-of-river scheme diverts part of a river's flow, removes its sediment, carries it along a contour at minimal gradient to a point where a useful head has developed, then drops it through a penstock to a powerhouse and returns it to the river. Almost every element of that chain is a civil structure.",
          "The scope begins at the diversion weir and intake, which must keep abstracting during low flow and survive the monsoon. It continues through the desanding basins, whose job is to settle out the sediment that would otherwise destroy the turbines — a genuinely demanding hydraulic design problem in Himalayan rivers, which carry very high sediment loads. The headrace then runs by tunnel or canal, often for kilometres, at a gradient measured in fractions of a percent. A surge shaft or surge tank absorbs the pressure transient when the turbines trip. Finally the penstock alignment, with its anchor and saddle blocks, drops the water to the powerhouse.",
        ],
      },
      {
        heading: "Why the headrace tunnel determines the commissioning date",
        body: [
          "Electromechanical equipment delivery is predictable. Tunnel excavation is not. A headrace of three to six kilometres, driven by drill-and-blast in young Himalayan rock, is exposed to geology that the tender investigation can only sample. Sheared zones, water ingress and squeezing ground all reduce advance rates and require heavier support classes than the tender assumed.",
          "This is why the difference between a competent hydropower civil contractor and a cheap one shows up in the tunnel. The competent contractor probes ahead of the face, maps the ground actually encountered, and re-designs support against it rather than against the tender geology — and has a plan for recovering programme, such as opening a second heading from the surge shaft or an adit, before it is needed rather than after.",
        ],
      },
      {
        heading: "Site logistics as part of the works",
        body: [
          "Nepali hydropower sites are typically remote, off-grid and reachable only by roads that do not yet exist. Access road construction, portal preparation, camp establishment, aggregate production and construction power supply are all part of the civil contractor's scope, and they precede everything else. A schedule that assumes these are instantaneous is not a schedule.",
        ],
      },
    ],
    points: {
      heading: "Civil works packages on a run-of-river scheme",
      items: [
        "Diversion weir, barrage and intake structure",
        "Desanding basins and flushing arrangements",
        "Headrace tunnel — drill-and-blast excavation, support and lining",
        "Headrace canal, aqueducts and cut-and-cover conduit",
        "Surge shaft or surge tank",
        "Penstock alignment, anchor blocks and saddle blocks",
        "Powerhouse substructure and superstructure",
        "Tailrace channel and outlet structure",
        "Access roads, adits, portals, camps and construction power",
      ],
    },
    faqs: [
      {
        q: "What does a hydropower civil contractor do in Nepal?",
        a: "A hydropower civil contractor delivers all the civil structures of a hydropower scheme: the diversion weir and intake, desanding basins, headrace tunnel or canal, surge shaft, penstock alignment civil works including anchor and saddle blocks, powerhouse substructure and superstructure, and the tailrace outlet. On remote Nepali sites the scope also includes access roads, tunnel portals and adits, construction camps, aggregate production and construction power supply.",
      },
      {
        q: "Why is the headrace tunnel the critical path on a hydropower project?",
        a: "Because tunnel advance rates depend on geology that cannot be fully known before excavation. A headrace of several kilometres driven by drill-and-blast through young Himalayan rock may encounter sheared zones, water ingress or squeezing ground that require heavier support and slow progress well below the tender assumption. Electromechanical equipment delivery and powerhouse construction are comparatively predictable, so the tunnel usually determines the commissioning date.",
      },
      {
        q: "Why do Nepali hydropower schemes need desanding basins?",
        a: "Himalayan rivers carry very high sediment loads, including hard abrasive particles from young eroding geology. Without effective settlement this sediment passes through the turbines and erodes the runners rapidly, cutting both efficiency and equipment life. Desanding basins slow the flow enough for particles above a design size to settle out, and are periodically flushed back to the river. Their hydraulic design is one of the more demanding elements of a run-of-river scheme.",
      },
    ],
    keywords: [
      "hydropower civil contractor nepal",
      "headrace tunnel contractor nepal",
      "tunnel construction company nepal",
      "hydropower construction nepal",
      "run of river civil works nepal",
    ],
    related: ["tunnel-construction-nepal", "bridge-construction-company-nepal", "infrastructure-company-nepal", "road-construction-company-nepal"],
  },
  {
    slug: "government-construction-contractor-nepal",
    category: "procurement",
    h1: "Government Construction Contractor in Nepal",
    metaTitle: "Government Construction Contractor in Nepal",
    description:
      "How public infrastructure procurement works in Nepal — the Public Procurement Act, e-GP bidding, contractor classification, and how bids are actually evaluated.",
    answer:
      "A government construction contractor in Nepal is a licensed construction company that bids for and delivers publicly procured infrastructure under the Public Procurement Act, 2063 and the Public Procurement Regulations. Contracts are advertised and bid through the Government of Nepal's electronic government procurement (e-GP) system, evaluated against published qualification criteria, and awarded to the lowest substantially responsive bid from a qualified bidder.",
    sections: [
      {
        heading: "The legal framework",
        body: [
          "Public procurement in Nepal is governed by the Public Procurement Act, 2063 (2007) and the Public Procurement Regulations, 2064, administered by the Public Procurement Monitoring Office. The Act sets the procurement methods available to a public entity, the thresholds at which each applies, the required advertisement periods, and the grounds on which a bid may be rejected.",
          "For infrastructure of any significant value the default method is open competitive bidding, advertised nationally, with international competitive bidding used for larger contracts and for donor-funded work. Donor-funded procurement under Asian Development Bank or World Bank rules follows the funder's guidelines where they differ from the Act, and is normally administered under FIDIC conditions of contract.",
        ],
      },
      {
        heading: "Contractor classification and qualification",
        body: [
          "Construction companies in Nepal are licensed and classified by the Department of Urban Development and Building Construction into classes A, B, C and D, according to financial capacity, plant holding and technical staff. The class caps the contract value a contractor may bid for, so major highway, bridge and hydropower contracts are restricted to Class A contractors.",
          "Beyond the licence, each tender publishes its own qualification criteria. These usually cover average annual construction turnover over a recent period, experience of a stated number of similar contracts of a stated minimum value, availability of specified key plant, availability of named key personnel with stated qualifications and experience, and financial resources or a credit line of a stated amount. A bid that fails any one of these is rejected regardless of price.",
        ],
      },
      {
        heading: "How bids are actually evaluated",
        body: [
          "Evaluation is sequential rather than weighted. Bids are first checked for completeness and responsiveness — bid security, signatures, required forms and unconditional acceptance of the conditions of contract. Substantially non-responsive bids are eliminated here, and a surprising share of bids fail at this stage on administrative grounds alone.",
          "Responsive bids are then evaluated against the published qualification criteria, and only the qualified bids are compared on price, with the contract awarded to the lowest evaluated bid. Because price only matters among bids that have already qualified, the practical work of winning public contracts in Nepal is qualification work: keeping the licence class current, maintaining an evidenced record of similar contracts, holding the plant the tenders ask for, and retaining the named key personnel.",
        ],
      },
    ],
    points: {
      heading: "What a public tender bid typically requires",
      items: [
        "Valid construction licence of the required class",
        "Company registration, VAT and current tax clearance certificate",
        "Audited financial statements for recent fiscal years",
        "Evidence of average annual construction turnover above a stated threshold",
        "Completion certificates for similar contracts of stated value",
        "Owned or committed plant schedule matching the tender requirement",
        "CVs and commitments of named key personnel",
        "Bid security in the required form and amount",
        "Bank credit line or evidence of working capital",
      ],
    },
    faqs: [
      {
        q: "How are government construction contracts awarded in Nepal?",
        a: "Under the Public Procurement Act, 2063, public entities advertise contracts through the Government of Nepal e-GP system. Bids are first checked for responsiveness — bid security, required forms, signatures and unconditional acceptance of contract conditions. Responsive bids are then assessed against the tender's published qualification criteria covering turnover, similar experience, plant and key personnel. Only qualified bids are compared on price, and the contract is awarded to the lowest evaluated substantially responsive bid.",
      },
      {
        q: "What are contractor classes A, B, C and D in Nepal?",
        a: "The Department of Urban Development and Building Construction classifies licensed construction companies into four classes by financial capacity, plant holding and technical staff. The class determines the maximum value of contract a company may bid for, with Class A the highest and therefore required for major highway, bridge and hydropower contracts, and Class D limited to small local works.",
      },
      {
        q: "What is e-GP in Nepal?",
        a: "e-GP is the Government of Nepal's electronic government procurement system, through which public entities advertise tenders and bidders submit bids electronically. It is administered by the Public Procurement Monitoring Office and is the standard route for public infrastructure procurement, replacing physical bid submission for most contracts.",
      },
      {
        q: "Why are bids rejected in Nepali public tenders?",
        a: "The most common reasons are administrative rather than commercial: missing or incorrectly formatted bid security, unsigned or incomplete forms, expired tax clearance, conditional acceptance of the contract conditions, or failure to meet a published qualification criterion such as minimum turnover, similar-works experience, plant availability or key personnel. Because these are checked before price, a low bid that fails any of them is eliminated without its price being considered.",
      },
    ],
    keywords: [
      "government construction contractor nepal",
      "public procurement nepal construction",
      "e-gp nepal tender",
      "nepal government infrastructure tender",
      "public procurement act nepal",
    ],
    related: ["class-a-contractor-nepal", "infrastructure-company-nepal", "road-construction-company-nepal", "donor-funded-infrastructure-nepal"],
  },
  {
    slug: "class-a-contractor-nepal",
    category: "procurement",
    h1: "Class A Contractor in Nepal",
    metaTitle: "Class A Contractor in Nepal — What It Means",
    description:
      "What a Class A construction licence means in Nepal, how contractors are classified, what each class can bid for, and what the licence does and does not prove.",
    answer:
      "A Class A contractor in Nepal holds the highest category of construction licence issued by the Department of Urban Development and Building Construction. The classification system runs from Class A down to Class D and grades contractors by financial capacity, plant holding and technical staff, with the class determining the maximum contract value a company may bid for. Class A is the requirement for major highway, bridge, hydropower and large building contracts.",
    sections: [
      {
        heading: "What the classes mean",
        body: [
          "Nepali construction licensing grades contractors into four classes. Class D covers small local works, Class C and Class B cover progressively larger contracts, and Class A carries the highest — and in practice unrestricted — bidding ceiling. Classification is based on audited financial capacity, the plant and equipment the company owns, and the qualified technical staff it employs.",
          "The licence must be renewed, and renewal depends on the company continuing to meet the criteria for its class. A contractor whose turnover, plant or technical establishment has fallen away can lose the class, so a current Class A licence is meaningful evidence of present capacity rather than a permanent title.",
        ],
      },
      {
        heading: "What Class A proves — and what it does not",
        body: [
          "A Class A licence proves that a company has the financial capacity, plant and technical staff to be trusted with large contracts. It is a necessary condition for bidding major infrastructure, and a client can rely on it as a floor.",
          "It does not prove delivery performance. The licence says nothing about whether the company completes on programme, how it handles variation and claim, whether its safety record is defensible, or whether its work survives the first monsoon after handover. Those are answered by the project record, by completion certificates from named clients, and by asking a previous employer directly. A client who stops at the licence class has verified capacity but not competence.",
        ],
      },
    ],
    points: {
      heading: "What determines a contractor's class",
      items: [
        "Audited annual turnover and financial capacity",
        "Owned plant and equipment holding",
        "Number and qualification of employed engineers and technical staff",
        "Record of completed contracts",
        "Continued compliance at each licence renewal",
      ],
    },
    faqs: [
      {
        q: "What is a Class A contractor in Nepal?",
        a: "A Class A contractor holds the highest grade of construction licence issued by Nepal's Department of Urban Development and Building Construction. Contractors are classified A to D by audited financial capacity, owned plant and qualified technical staff, and the class sets the maximum contract value a company may bid for. Class A carries the highest ceiling and is required for major highway, bridge, hydropower and large building contracts.",
      },
      {
        q: "How does a company become a Class A contractor in Nepal?",
        a: "By applying to the Department of Urban Development and Building Construction and demonstrating that it meets the Class A criteria for audited financial capacity, owned plant and equipment, and employed qualified technical staff, supported by a record of completed contracts. The licence is renewable, and renewal requires the company to continue meeting those criteria — a contractor whose capacity has declined can be reclassified downward.",
      },
      {
        q: "Does a Class A licence guarantee good workmanship?",
        a: "No. The licence class evidences financial capacity, plant holding and technical staffing — it is a measure of capacity, not of delivery performance. It says nothing about whether a contractor completes on programme, manages safety well, or builds work that survives. Those questions are answered by the project record, completion certificates from named clients, and direct reference checks with previous employers.",
      },
    ],
    keywords: [
      "class a contractor nepal",
      "construction licence nepal",
      "contractor classification nepal",
      "dudbc contractor licence",
      "nepal construction company class",
    ],
    related: ["government-construction-contractor-nepal", "infrastructure-company-nepal", "road-construction-company-nepal", "construction-prequalification-nepal"],
  },
  {
    slug: "infrastructure-company-nepal",
    category: "sector",
    h1: "Infrastructure Company in Nepal",
    metaTitle: "Infrastructure Company in Nepal",
    description:
      "What an infrastructure company in Nepal does across roads, bridges, hydropower, water and public buildings — and the constraints that shape all of it.",
    answer:
      "An infrastructure company in Nepal designs and builds the physical assets that public services run on: roads and highways, bridges and river crossings, hydropower civil works, water supply and irrigation systems, and public buildings. The sector is dominated by public and donor-funded procurement, constrained by a seven to eight month dry-season working window, and shaped throughout by steep, seismically active terrain and intense monsoon rainfall.",
    sections: [
      {
        heading: "The five sectors that make up Nepali infrastructure",
        body: [
          "Roads are the largest single category by contract volume, spanning national highways under the Department of Roads, provincial corridors, and the rural road networks that municipal governments have expanded rapidly since federalisation. Bridges are procured separately and are the binding constraint on road network continuity.",
          "Hydropower is the country's largest capital programme, and its civil works — headworks, tunnels, powerhouses — form a substantial construction sector in their own right. Water supply and irrigation cover drinking water schemes, treatment works, distribution networks and agricultural canal systems. Public buildings cover schools, health facilities and government offices, together with the substantial seismic retrofitting programme that followed the 2015 earthquake.",
        ],
      },
      {
        heading: "The three constraints that shape every project",
        body: [
          "Terrain comes first. Most of Nepal is steep and geologically young. Earthworks, slope stability and drainage dominate engineering effort on almost every project outside the Terai, and the failure modes are slope failures rather than structural ones.",
          "The monsoon comes second. Intense rainfall from roughly June to September halts earthworks, makes haul roads impassable and puts rivers beyond the reach of in-river construction. The effective construction season is seven to eight months, and any programme that assumes twelve is fiction.",
          "Seismicity comes third. Nepal sits on an active convergent boundary, and the 2015 Gorkha earthquake made the consequences concrete. Seismic design is a governing requirement for structures and buildings, and a large retrofitting programme continues on public buildings that predate the current National Building Code.",
        ],
      },
      {
        heading: "How the sector is funded",
        body: [
          "Infrastructure in Nepal is funded from three main sources: the government's own capital budget at federal, provincial and local level; development partner lending and grants, principally from the Asian Development Bank, the World Bank and bilateral partners; and private investment, which is concentrated almost entirely in hydropower. Each funding source brings its own procurement rules and contract conditions, and a contractor working across all three has to be fluent in all three.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does an infrastructure company in Nepal build?",
        a: "Roads and highways, bridges and river crossings, hydropower civil works including headworks and tunnels, water supply and irrigation systems, and public buildings such as schools, health facilities and government offices. Most of this work is procured publicly by federal, provincial or local government, or by development partners such as the Asian Development Bank and World Bank, with private investment concentrated in hydropower.",
      },
      {
        q: "What are the main challenges of building infrastructure in Nepal?",
        a: "Three constraints dominate. Terrain: most of the country is steep and geologically young, so earthworks, slope stability and drainage govern engineering effort and slope failure is the common failure mode. Monsoon: intense rainfall from roughly June to September halts earthworks and in-river work, limiting the effective construction season to seven or eight months. Seismicity: Nepal sits on an active convergent plate boundary, making seismic design a governing requirement and driving a continuing retrofit programme on pre-code public buildings.",
      },
      {
        q: "Who funds infrastructure projects in Nepal?",
        a: "Three main sources. The government's own capital budget, allocated at federal, provincial and local level. Development partners, principally the Asian Development Bank, the World Bank and bilateral donors, through lending and grants. And private investment, which is concentrated almost entirely in hydropower generation. Each source brings distinct procurement rules and contract conditions.",
      },
    ],
    keywords: [
      "infrastructure company nepal",
      "construction company nepal",
      "civil engineering company nepal",
      "nepal infrastructure development",
      "infrastructure contractor kathmandu",
    ],
    related: ["road-construction-company-nepal", "bridge-construction-company-nepal", "hydropower-civil-contractor-nepal", "government-construction-contractor-nepal"],
  },
  {
    slug: "tunnel-construction-nepal",
    category: "capability",
    sector: "hydropower-civil-works",
    h1: "Tunnel Construction in Nepal",
    metaTitle: "Tunnel Construction in Nepal",
    description:
      "How tunnels are built in Nepal — drill-and-blast method, rock classes and support, water ingress and squeezing ground, and why TBMs are rarely used.",
    answer:
      "Tunnel construction in Nepal is almost entirely drill-and-blast, used mainly for hydropower headrace tunnels and increasingly for road tunnels. Excavation advances by drilling a blast pattern at the face, charging and firing it, mucking out and installing support appropriate to the rock class encountered. Support ranges from rock bolts and shotcrete in competent ground to steel ribs with forepoling in sheared or water-bearing zones.",
    sections: [
      {
        heading: "Why drill-and-blast rather than a tunnel boring machine",
        body: [
          "Tunnel boring machines are extremely efficient over long drives in predictable ground, but they carry very high mobilisation cost and are inflexible when geology changes. Nepali hydropower headraces are typically three to eight kilometres — long enough to matter, but rarely long enough to amortise a TBM — and they pass through young, highly variable Himalayan geology in which a machine can become trapped by squeezing ground or a major shear zone.",
          "Drill-and-blast is slower per metre but adapts. The support class can change at the face as the ground changes, the excavation profile can be adjusted, and multiple headings can be opened from adits or from the surge shaft to run in parallel and recover programme.",
        ],
      },
      {
        heading: "Rock class and support",
        body: [
          "Support is selected against the rock mass actually exposed, typically classified using systems such as RMR or Q. In good rock, systematic rock bolting with a shotcrete layer is sufficient. As the rock mass quality drops, support progresses through heavier bolting patterns and fibre-reinforced shotcrete to steel rib support with lagging, and in the worst ground to forepoling or spiling ahead of the face with a full concrete lining behind.",
          "The critical practice is probe drilling ahead of the face. A probe hole gives warning of water-bearing or sheared ground before the face reaches it, which is the difference between installing pre-support in a controlled way and dealing with a collapse. Tender geology is a sample, not a map, and treating it as a map is how tunnel programmes fail.",
        ],
      },
      {
        heading: "Water and squeezing ground",
        body: [
          "Water ingress is the most common serious problem in Himalayan tunnels. High-pressure inflow through a fractured zone can stop a drive completely and requires grouting ahead of the face to control. Squeezing ground — where weak rock under high overburden deforms into the excavated profile over hours or days — is the other, and it requires either yielding support that accommodates the deformation or excavation of a larger profile to allow for it.",
        ],
      },
    ],
    points: {
      heading: "The drill-and-blast cycle",
      items: [
        "Probe drilling ahead of face to identify water or weak ground",
        "Drilling the blast pattern with a hydraulic jumbo",
        "Charging and firing",
        "Ventilation and clearing of fumes",
        "Mucking out with low-profile loaders",
        "Scaling of loose rock from crown and walls",
        "Support installation — bolts, shotcrete, ribs as the rock class requires",
        "Survey and set-out of the next round",
      ],
    },
    faqs: [
      {
        q: "How are tunnels built in Nepal?",
        a: "Almost entirely by drill-and-blast. A blast pattern is drilled at the face with a hydraulic jumbo, charged and fired; the tunnel is ventilated and mucked out with low-profile loaders; loose rock is scaled from crown and walls; and support is installed according to the rock class encountered — rock bolts and shotcrete in competent ground, steel ribs with lagging in poorer ground, and forepoling with concrete lining in sheared or water-bearing zones.",
      },
      {
        q: "Why are tunnel boring machines rarely used in Nepal?",
        a: "TBMs have very high mobilisation cost and suit long drives through predictable ground. Nepali hydropower headraces are typically three to eight kilometres, which is rarely long enough to amortise a machine, and they pass through young, highly variable Himalayan geology where squeezing ground or a major shear zone can trap a TBM. Drill-and-blast is slower per metre but allows support and profile to be changed at the face as ground conditions change, and allows multiple headings to run in parallel.",
      },
      {
        q: "What is squeezing ground in tunnelling?",
        a: "Squeezing ground is weak rock under high overburden stress that deforms plastically into the excavated tunnel profile over hours or days after excavation. It is managed either with yielding support designed to accommodate the deformation, or by excavating a larger profile than required so that the final dimensions remain after convergence. It is a significant hazard in Himalayan tunnelling because of the combination of weak, sheared rock and deep cover.",
      },
    ],
    keywords: [
      "tunnel construction nepal",
      "drill and blast tunnelling nepal",
      "headrace tunnel nepal",
      "tunnel contractor nepal",
      "rock support tunnel nepal",
    ],
    related: ["hydropower-civil-contractor-nepal", "infrastructure-company-nepal", "road-construction-company-nepal", "bridge-construction-company-nepal"],
  },
  {
    slug: "rural-road-construction-nepal",
    category: "sector",
    sector: "roads-highways",
    h1: "Rural Road Construction in Nepal",
    metaTitle: "Rural Road Construction in Nepal",
    description:
      "Rural roads in Nepal — who builds them since federalisation, why cross-drainage matters more than surfacing, and what makes a track all-weather.",
    answer:
      "Rural road construction in Nepal is the building and upgrading of local and agricultural roads connecting settlements to the wider network, procured principally by the 753 municipal and rural municipal governments since federalisation. The defining engineering question is not surfacing but cross-drainage: a rural road becomes all-weather when its stream crossings have structures, not when it is paved.",
    sections: [
      {
        heading: "Who builds rural roads now",
        body: [
          "Federalisation moved responsibility for local roads to municipal and rural municipal governments, which now procure the great majority of rural road work in Nepal, often with technical support from the Department of Local Infrastructure and from provincial directorates. The result has been a very large expansion of the rural road network — and, in places, a large expansion of poorly engineered earth tracks cut without drainage design, which then destabilise the slopes they cross.",
          "The distinction between a road that was constructed and a track that was bulldozed is the central quality issue in the sector. A track cut by an excavator without drainage, spoil management or slope treatment will shed material onto the land below and fail within a few monsoons, and it is more expensive to correct afterwards than to have built properly.",
        ],
      },
      {
        heading: "Why cross-drainage decides everything",
        body: [
          "The practical measure of a rural road is how many months a year it is passable. In most cases the constraint is not the running surface but the stream crossings. A road with a good surface and no culverts is cut into disconnected fragments the moment the monsoon starts; a road with a rough surface and proper causeways and culverts stays connected all year.",
          "This has a direct programming consequence. Sequencing cross-drainage structures ahead of surfacing means connectivity improves from the first construction season rather than only at handover — which matters enormously to the communities the road serves, and which is the opposite of the usual instinct to lay the visible surfacing first.",
        ],
      },
      {
        heading: "What upgrading to all-weather standard involves",
        body: [
          "Upgrading a fair-weather track to all-weather standard typically means: improving the formation width and gradient, building side drains and catch drains, constructing causeways and box culverts at every stream crossing, adding retaining and breast walls where the formation is unstable, applying gravel or bituminous surfacing appropriate to traffic, and treating the cut slopes with bioengineering. Surfacing is the last and often the smallest part of that list.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is responsible for rural roads in Nepal?",
        a: "Since federalisation, Nepal's 753 municipal and rural municipal governments are responsible for local, rural and agricultural roads, and procure most rural road construction. They are supported technically by the Department of Local Infrastructure and by provincial infrastructure directorates. Strategic and national highways remain with the federal Department of Roads.",
      },
      {
        q: "What makes a rural road all-weather?",
        a: "Cross-drainage, more than surfacing. A road becomes all-weather when every stream crossing has a causeway or culvert, side and catch drains carry water off the formation, and unstable sections are retained and slope-treated. A well-surfaced road without structures at its stream crossings is still cut into fragments during the monsoon, while a gravel road with proper cross-drainage stays connected year-round.",
      },
      {
        q: "Why do bulldozed rural tracks in Nepal cause landslides?",
        a: "Because cutting a track without drainage design, spoil management or slope treatment removes support from the hillside and concentrates water onto unprotected slopes. Spoil pushed over the edge loads the slope below, and undrained cut faces saturate during the monsoon. The result is slope failure that damages land well beyond the road corridor, and correcting it afterwards costs considerably more than engineering the road properly at the outset.",
      },
    ],
    keywords: [
      "rural road construction nepal",
      "agricultural road nepal",
      "local road construction nepal",
      "all weather road nepal",
      "rural municipality road contractor",
    ],
    related: ["road-construction-company-nepal", "government-construction-contractor-nepal", "infrastructure-company-nepal", "bridge-construction-company-nepal"],
  },
  {
    slug: "construction-prequalification-nepal",
    category: "procurement",
    h1: "Construction Prequalification in Nepal",
    metaTitle: "Construction Prequalification in Nepal",
    description:
      "What prequalification means in Nepali public procurement, what a PQ dossier must evidence, and the most common reasons contractors fail it.",
    answer:
      "Prequalification in Nepali public procurement is the process of assessing whether a contractor has the financial capacity, experience, plant and personnel to deliver a contract, carried out either as a separate stage before bidding on large contracts or as post-qualification of the lowest bidder on smaller ones. A contractor that fails any published prequalification criterion is eliminated regardless of its price.",
    sections: [
      {
        heading: "What prequalification is assessing",
        body: [
          "Prequalification asks one question: if we award this contract to this company, can it actually deliver it? The criteria are the client's attempt to answer that from documents. In practice they cluster into five areas — financial capacity, comparable experience, plant, personnel, and legal standing.",
          "Financial capacity is usually tested by average annual construction turnover over the last several fiscal years, by liquid assets or an available credit line sized against the contract's expected monthly outflow, and by audited accounts. Experience is tested by completion certificates for a stated number of similar contracts above a stated value, where 'similar' is defined in the tender and is often narrower than bidders assume.",
        ],
      },
      {
        heading: "Plant and personnel",
        body: [
          "Plant requirements list specific items — a batch mix plant of stated capacity, a stated number of excavators above a stated class — and require evidence of ownership or a committed lease. This is one of the few claims a client can physically verify, and clients do verify it.",
          "Personnel requirements name roles: project manager, senior highway engineer, bridge engineer, quantity surveyor, HSE officer. Each carries a required qualification and a required number of years of relevant experience, and requires a signed CV and commitment from the named individual. Committing personnel who are already fully committed elsewhere is both common and a legitimate ground for rejection.",
        ],
      },
      {
        heading: "Why contractors fail",
        body: [
          "The most common failures are documentary rather than substantive. An expired tax clearance certificate. A completion certificate that does not state the contract value, so the experience cannot be credited. Audited accounts that have not been filed for the most recent fiscal year. A plant ownership claim with no supporting registration document. A key personnel CV with no signed commitment attached.",
          "The practical consequence is that prequalification is a records discipline as much as a capacity question. A company with genuine capability that keeps poor records will lose to a weaker company that keeps good ones, because the evaluation committee can only credit what is evidenced in the submission.",
        ],
      },
    ],
    points: {
      heading: "A prequalification dossier normally evidences",
      items: [
        "Company registration, current construction licence and licence class",
        "VAT registration and current tax clearance certificate",
        "Audited financial statements for the required fiscal years",
        "Average annual construction turnover computation",
        "Liquid assets or bank credit line confirmation",
        "Completion certificates for similar contracts, stating value and scope",
        "Ongoing contract commitments and remaining capacity",
        "Owned plant schedule with registration and ownership evidence",
        "Key personnel CVs with qualifications, experience and signed commitments",
        "Litigation history and any record of contract termination",
        "Quality, safety and environmental management system certification",
      ],
    },
    faqs: [
      {
        q: "What is prequalification in construction procurement?",
        a: "Prequalification is the assessment of whether a contractor has the financial capacity, comparable experience, plant, personnel and legal standing to deliver a contract. It is carried out either as a separate stage before bidding on large contracts, or as post-qualification of the lowest bidder on smaller ones. Failing any published criterion eliminates a bidder regardless of its price.",
      },
      {
        q: "What documents are required for prequalification in Nepal?",
        a: "Typically: company registration and current construction licence, VAT registration and tax clearance certificate, audited financial statements for the required fiscal years, evidence of average annual construction turnover, liquid assets or a bank credit line, completion certificates for similar contracts stating value and scope, a schedule of ongoing commitments, an owned plant schedule with ownership evidence, key personnel CVs with signed commitments, litigation history, and management system certifications.",
      },
      {
        q: "Why do contractors fail prequalification?",
        a: "Most failures are documentary rather than substantive: an expired tax clearance certificate, a completion certificate that omits the contract value so the experience cannot be credited, unfiled audited accounts for the most recent fiscal year, plant ownership claimed without registration evidence, or a key personnel CV submitted without a signed commitment. An evaluation committee can only credit what the submission evidences, so a capable company with poor records loses to a weaker one with good records.",
      },
    ],
    keywords: [
      "construction prequalification nepal",
      "prequalification documents nepal",
      "contractor qualification criteria nepal",
      "pq dossier construction",
      "nepal tender qualification",
    ],
    related: ["government-construction-contractor-nepal", "class-a-contractor-nepal", "donor-funded-infrastructure-nepal", "infrastructure-company-nepal"],
  },
  {
    slug: "donor-funded-infrastructure-nepal",
    category: "procurement",
    h1: "Donor-Funded Infrastructure in Nepal",
    metaTitle: "Donor-Funded Infrastructure in Nepal",
    description:
      "How ADB and World Bank funded infrastructure is procured and delivered in Nepal, what FIDIC contracts change, and why records decide outcomes.",
    answer:
      "Donor-funded infrastructure in Nepal is public infrastructure financed by development partners — principally the Asian Development Bank and the World Bank, together with bilateral partners — and implemented through a Nepali government department as employer. Procurement follows the funder's guidelines rather than the Public Procurement Act where the two differ, and contracts are normally administered under FIDIC conditions with an independent engineer.",
    sections: [
      {
        heading: "How it differs from domestically funded work",
        body: [
          "The engineering is the same. What changes is the contractual and administrative environment. Procurement follows the funder's guidelines, which generally means international competitive bidding above certain thresholds, standard bidding documents issued by the funder, and a no-objection process in which the funder reviews and clears key procurement decisions before they take effect.",
          "Contract administration is normally under FIDIC conditions — most often the Red Book for employer-designed works or the Pink Book variant harmonised for multilateral development bank use. That introduces an independent engineer with defined powers, formal notice provisions with time bars, and a structured dispute process. It also introduces environmental and social safeguard requirements that are conditions of the loan and therefore conditions of the contract.",
        ],
      },
      {
        heading: "Why records decide donor-funded contracts",
        body: [
          "FIDIC contracts run on notices and records. A contractor's entitlement to extension of time or additional payment usually depends on having given notice within a stated period of becoming aware of the event, and on being able to evidence the effect with contemporaneous records. Miss the notice period and a genuine entitlement can be time-barred; keep poor records and it cannot be quantified.",
          "This is why most disputes on donor-funded contracts are records disputes rather than engineering disputes. The parties often agree about what happened on site and disagree only about what can be proved. A contractor that maintains daily records, progress photographs, labour and plant returns and a live critical-path programme from the first day is in a fundamentally different position from one that starts assembling them when a claim arises.",
        ],
      },
      {
        heading: "Safeguards are contract requirements, not paperwork",
        body: [
          "Environmental and social safeguard obligations — resettlement, environmental management plans, labour standards, grievance mechanisms — are loan conditions passed down into the contract. Non-compliance can suspend disbursement, which stops payment on the contract regardless of construction progress. Treating safeguards as an administrative afterthought is therefore a commercial risk, not only a reputational one.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is donor-funded infrastructure procured in Nepal?",
        a: "Through the implementing government department as employer, but under the funder's procurement guidelines rather than the Public Procurement Act where the two differ. This generally means international competitive bidding above stated thresholds, the funder's standard bidding documents, and a no-objection process in which the Asian Development Bank or World Bank reviews and clears key procurement decisions before they take effect.",
      },
      {
        q: "What is a FIDIC contract and why does it matter?",
        a: "FIDIC contracts are standard forms of construction contract published by the International Federation of Consulting Engineers, widely used on donor-funded infrastructure. The Red Book covers employer-designed works and the Pink Book is the variant harmonised for multilateral development bank use. They matter because they introduce an independent engineer with defined powers, formal notice provisions with time bars on claims, structured dispute resolution, and detailed record-keeping obligations that determine whether entitlements can be established.",
      },
      {
        q: "Why are contemporaneous records so important on FIDIC contracts?",
        a: "Because entitlement to extension of time or additional payment normally depends on giving notice within a stated period and evidencing the effect with records made at the time. A late notice can time-bar a genuine entitlement, and an unevidenced effect cannot be quantified. Most disputes on donor-funded contracts turn on what can be proved rather than on what happened, so daily records, progress photographs, labour and plant returns and a live critical-path programme are maintained from day one rather than assembled when a claim arises.",
      },
    ],
    keywords: [
      "donor funded infrastructure nepal",
      "adb project nepal construction",
      "world bank infrastructure nepal",
      "fidic contract nepal",
      "international competitive bidding nepal",
    ],
    related: ["government-construction-contractor-nepal", "construction-prequalification-nepal", "infrastructure-company-nepal", "road-construction-company-nepal"],
  },
];

export function landingBySlug(slug: string) {
  return landingPages.find((p) => p.slug === slug);
}

export const landingCategoryLabel: Record<LandingCategory, string> = {
  sector: "Sector",
  location: "Location",
  procurement: "Procurement",
  capability: "Capability",
};
