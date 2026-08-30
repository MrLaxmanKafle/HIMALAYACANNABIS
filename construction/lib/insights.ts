/**
 * Long-form technical articles.
 *
 * This is the site's primary answer-engine asset. Landing pages capture search
 * intent; these exist to be *cited*. An LLM summarising "how does monsoon
 * affect construction scheduling in Nepal" will reach for a source that
 * explains the mechanism, states figures plainly, and does not require the
 * reader to already agree that the author should win the contract.
 *
 * So the house rule for this section: write the piece a competitor would
 * grudgingly link to. Sell nothing above the fold.
 */

export type Article = {
  slug: string;
  title: string;
  /** <title> if it should differ from the H1. */
  metaTitle?: string;
  description: string;
  /** ISO date. Real dates only — answer engines weight recency. */
  date: string;
  updated?: string;
  /** Reading time in minutes, stated rather than computed so it stays honest. */
  readingMinutes: number;
  topic: string;
  /** The lead — self-contained, quotable, answers the title's question. */
  standfirst: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  /** Key takeaways, written as standalone factual statements. */
  takeaways: string[];
  faqs?: { q: string; a: string }[];
  keywords: string[];
};

export const articles: Article[] = [
  {
    slug: "monsoon-construction-scheduling-nepal",
    title: "Why the Monsoon Sets the Programme for Every Project in Nepal",
    description:
      "Nepal's construction season is seven to eight months. Here is how the monsoon actually constrains earthworks, in-river work and tunnelling — and how to programme around it.",
    date: "2026-03-18",
    readingMinutes: 9,
    topic: "Programme & delivery",
    standfirst:
      "Nepal's effective construction season runs roughly from October to May. Monsoon rainfall from June to September halts earthworks, makes haul roads impassable, and raises rivers beyond the point where in-river structures can be built. Any programme that assumes twelve productive months a year is not a programme — it is a bid document. Building the schedule backwards from the first rains is the single highest-leverage decision on a Nepali infrastructure project.",
    sections: [
      {
        heading: "What actually stops during the monsoon",
        body: [
          "The monsoon does not stop construction uniformly. Understanding which activities stop, which slow, and which continue is what turns a seasonal constraint into a workable programme.",
          "Earthworks stop, or nearly so. Compaction requires moisture control, and material at well above optimum moisture content cannot be compacted to specification. Cut faces are unstable when saturated. Haul roads on unsurfaced formation become impassable to loaded tippers within days of sustained rain, and the equipment damage from trying is significant.",
          "In-river work stops entirely. This is the hardest constraint on the list. Well sinking, pier construction, cofferdam dewatering, river training and scour protection all require a river at low flow. Himalayan rivers rise by more than an order of magnitude and carry boulder and debris load, so this is a safety limit as much as a productivity one.",
          "Bituminous surfacing stops. Laying asphalt onto a wet base produces a pavement that will fail at the interface, and the specification generally prohibits it outright.",
          "Tunnelling continues. This is the important exception. An underground heading is largely indifferent to surface weather, subject to portal access and to groundwater inflow, which typically increases during and after the monsoon. On hydropower schemes this is why tunnel drives are the activity that should be running when everything else has stopped.",
          "Structural concrete above water continues, with protection. Girder casting in an off-river yard, powerhouse superstructure, building frames and retrofitting work all proceed through the wet months if the site is set up for it.",
        ],
      },
      {
        heading: "Programming backwards from the rains",
        body: [
          "The competent approach inverts the usual sequence. Rather than starting at mobilisation and running forward, you fix the monsoon onset date and work backwards to determine what must be complete before it.",
          "On a bridge, that means both river piers out of the water in the first dry season, without exception. A programme that leaves one pier for the second season has accepted a full year of float loss for the sake of a smoother first-year resource curve, which is almost never the right trade.",
          "On a road, it means cross-drainage structures and slope treatment ahead of surfacing. This feels wrong to a contractor whose progress is measured in surfaced kilometres, but a surfaced road with unprotected slopes above it can lose both in one event, and the community served gets connectivity earlier from a rough road with culverts than from a smooth road with fords.",
          "On a hydropower scheme, it means getting the tunnel portal established and the heading started before the first monsoon, so that the wet season is productive underground rather than idle.",
        ],
        list: [
          "Fix the monsoon onset date first, then schedule backwards from it",
          "In-river work is non-negotiable within the dry window — no exceptions",
          "Move weather-independent work (tunnelling, off-river casting, retrofitting) into the wet months deliberately",
          "Plan haul road surfacing as a productivity investment, not an overhead",
          "Programme bioengineering into the same season as the earthworks, so roots establish before the next monsoon",
        ],
      },
      {
        heading: "The resourcing consequence",
        body: [
          "A seven-month working season with a four-month near-stop has a consequence most tender programmes ignore: peak resourcing is far higher than the average implies. Delivering a twelve-month volume of earthworks in seven months requires roughly seventy percent more plant and crew at peak than an even distribution would.",
          "Contractors that price against the average and resource against the average lose the season, then attempt to recover in the following one, which compounds. The realistic alternative is either to accept a genuinely higher peak resourcing cost, or to design the programme so that a meaningful proportion of the work is monsoon-independent — which is a design and sequencing decision made early, not a recovery measure taken later.",
        ],
      },
      {
        heading: "Why this shows up as claims",
        body: [
          "Monsoon delay is a recurring source of dispute on Nepali contracts, and the dispute is rarely about whether it rained. It is about whether the rainfall was exceptional relative to the contract's baseline, and whether the contractor's programme had already lost the window before the rain arrived.",
          "The distinction matters, because a contractor who was three weeks late into the river when the rains came on schedule has a weather problem of its own making. Establishing which of the two happened requires records: daily rainfall at the site, not at the nearest station; the actual programme position when the window closed; and contemporaneous notice at the time rather than reconstruction afterwards.",
        ],
      },
    ],
    takeaways: [
      "Nepal's effective construction season is roughly October to May, seven to eight months.",
      "Earthworks, in-river work and bituminous surfacing stop during the monsoon; tunnelling and off-river structural work continue.",
      "Bridge programmes must complete all in-river substructure within a single dry season or lose a full year.",
      "Delivering a year's volume in seven months requires roughly seventy percent higher peak resourcing than an even distribution.",
      "Monsoon claims turn on site rainfall records and the programme position when the window closed, not on the fact of rainfall.",
    ],
    faqs: [
      {
        q: "How long is the construction season in Nepal?",
        a: "Roughly seven to eight months, from about October to May. The monsoon from June to September halts earthworks, bituminous surfacing and all in-river work, though tunnelling and off-river structural concrete can continue through the wet months.",
      },
      {
        q: "Can construction work continue during the monsoon in Nepal?",
        a: "Some can. Tunnelling continues largely unaffected by surface weather, subject to portal access and groundwater inflow. Off-river structural concrete — girder casting in a casting yard, powerhouse superstructure, building frames, seismic retrofitting — continues with weather protection. Earthworks, compaction, bituminous surfacing and all in-river foundation work effectively stop.",
      },
    ],
    keywords: ["monsoon construction nepal", "construction season nepal", "nepal project scheduling", "dry season working window nepal"],
  },
  {
    slug: "why-mountain-roads-fail-drainage",
    title: "Mountain Roads in Nepal Do Not Fail at the Pavement. They Fail Above It.",
    description:
      "The dominant failure mode on Nepali hill roads is slope failure driven by drainage designed to a cross-section rather than to a catchment. Here is the mechanism, and the fix.",
    date: "2026-05-06",
    readingMinutes: 8,
    topic: "Roads & geotechnics",
    standfirst:
      "Most hill road failures in Nepal are not pavement failures. They are slope failures above or below the carriageway, and the usual root cause is drainage designed to a standard cross-section rather than to the actual catchment discharging onto the slope. The pavement is then lost along with the slope, which is why repeated resurfacing contracts on the same corridor never hold: they are treating the symptom.",
    sections: [
      {
        heading: "The mechanism",
        body: [
          "A road cut into a hillside does two things to the hydrology it interrupts. It intercepts surface and subsurface flow that was previously distributed across the slope, and it concentrates that flow into the road's drainage system. If the drainage discharges that concentrated flow onto an untreated slope below, or if it cannot carry the catchment's actual peak and overtops onto the cut face above, the slope saturates.",
          "Saturation reduces effective stress in the slope material and raises pore water pressure. In the young, weathered, often colluvial material typical of Nepal's hills, that is frequently enough to take a marginal slope past failure. The cut face above the road slides onto it, or the fill below the road slides away from it — and in the second case the carriageway goes with it.",
          "The pavement itself was usually adequate. It simply had nothing left to sit on.",
        ],
      },
      {
        heading: "Why cross-section drainage design produces this",
        body: [
          "The standard approach designs the side drain from the road's typical cross-section: a drain of a given size on a given gradient, repeated along the alignment. That sizing implicitly assumes the drain only has to handle the water falling on the carriageway and the immediate cut face.",
          "In steep terrain that assumption fails wherever the alignment crosses a natural drainage line. At those points the road is receiving the discharge of a catchment that may extend hundreds of metres upslope, and a drain sized for carriageway runoff is overwhelmed by an order of magnitude. Water overtops, or the culvert at that point is undersized, and the concentrated discharge lands on the fill slope below.",
          "The correct approach maps the catchments the alignment crosses and sizes the cross-drainage and the discharge arrangements against those catchments, accepting that the required structures will be highly non-uniform along the road. Uniform drainage on non-uniform terrain is the design error.",
        ],
      },
      {
        heading: "Where the discharge goes",
        body: [
          "Sizing the culvert is only half the problem. A correctly sized culvert that discharges onto an untreated fill slope has moved the failure ten metres downhill, not prevented it.",
          "Outlet treatment — a lined channel or a cascade taking the discharge to a stable point, with energy dissipation at the outfall — is routinely value-engineered out of hill road contracts because it appears as an ancillary item with no obvious constituency. It is the item most likely to determine whether the road is still there in five years.",
        ],
        list: [
          "Map catchments crossed by the alignment; size cross-drainage against them, not against the cross-section",
          "Accept non-uniform structure spacing — uniform drainage on non-uniform terrain is the error",
          "Treat outlets: lined channels to a stable discharge point with energy dissipation",
          "Intercept upslope flow with catch drains above the cut, not only side drains beside it",
          "Design subsurface drainage where the cut exposes a water-bearing horizon",
        ],
      },
      {
        heading: "Bioengineering, and why timing decides whether it works",
        body: [
          "Vegetative slope protection — planting deep-rooting grasses, shrubs and small trees on treated slope faces — is genuinely effective in Nepali conditions and is far cheaper than the structural alternative. It also fails routinely, almost always for the same reason: it was planted at the wrong time.",
          "Root systems need a growing season to establish before they contribute to slope stability. Bioengineering planted in the same season the earthworks are completed faces its first monsoon with established roots. Bioengineering deferred to a follow-on contract, which is common because it is administratively tidier, faces its first monsoon as bare cuttings on an exposed face, and is washed off.",
          "The fix is procedural rather than technical: bioengineering has to be in the same contract and the same season as the earthworks that created the slope.",
        ],
      },
      {
        heading: "What this means when evaluating a contractor",
        body: [
          "Ask about a completed hill road and what happened to it in the two monsoons after handover. That single question tests drainage design, slope treatment and bioengineering timing at once, and it cannot be answered well by a contractor who treated all three as ancillary items.",
          "A contractor who argues about drainage at design review is not being difficult. Arguing about it later, when the road has gone, costs multiples of the original saving.",
        ],
      },
    ],
    takeaways: [
      "Most Nepali hill road failures are slope failures driven by drainage, not pavement failures.",
      "Drainage sized to a standard cross-section is overwhelmed wherever the alignment crosses a natural catchment.",
      "A correctly sized culvert discharging onto an untreated slope relocates the failure rather than preventing it.",
      "Bioengineering only works if planted in the same season as the earthworks; deferred planting is washed off.",
      "The most informative question about a hill road contractor is what happened to its last road two monsoons after handover.",
    ],
    faqs: [
      {
        q: "Why do roads in Nepal wash away every monsoon?",
        a: "Usually because of slope failure rather than pavement failure. A road cut into a hillside concentrates flow that was previously distributed across the slope. If drainage is sized to a standard cross-section rather than to the catchments the alignment actually crosses, it is overwhelmed at drainage lines and discharges concentrated flow onto untreated slopes. The slope saturates, pore pressure rises, and the slope fails — taking the carriageway with it.",
      },
      {
        q: "What is bioengineering in road construction?",
        a: "Bioengineering is the use of vegetation — deep-rooting grasses, shrubs and small trees — to stabilise cut and fill slopes. Root systems reinforce the soil and reduce surface erosion, at far lower cost than structural retaining works. It is effective in Nepali conditions but depends entirely on timing: planting must happen in the same season the earthworks are completed so roots establish before the following monsoon.",
      },
    ],
    keywords: ["road failure nepal", "landslide road nepal", "hill road drainage design", "bioengineering slope stabilisation nepal"],
  },
  {
    slug: "evaluating-infrastructure-contractor-nepal",
    title: "How to Evaluate an Infrastructure Contractor in Nepal",
    description:
      "Licence class and lowest price tell a client almost nothing about delivery. A practical set of questions that actually predict whether a contract finishes.",
    date: "2026-07-22",
    readingMinutes: 10,
    topic: "Procurement",
    standfirst:
      "Nepali public procurement qualifies bidders on financial capacity, comparable experience, plant and personnel, then awards to the lowest qualified price. That process reliably screens out companies that cannot deliver, and reliably fails to distinguish between the ones that can. The questions that actually predict delivery are not in the standard prequalification form, and most of them can be asked in a single meeting.",
    sections: [
      {
        heading: "What the standard criteria do and do not tell you",
        body: [
          "A current Class A licence tells you a company has audited financial capacity, owned plant and qualified technical staff sufficient for large contracts. That is a real signal and worth having. It is a floor, not a ranking.",
          "Turnover thresholds tell you the company has handled money at the required scale. Completion certificates tell you it has finished contracts of a stated value and scope. Both are backward-looking and neither tells you whether the company is currently over-committed, whether the team that delivered those contracts is still employed, or whether the completed works are still standing.",
          "The gap between 'qualified' and 'will deliver this contract well' is where the client's own judgement has to do the work.",
        ],
      },
      {
        heading: "Ask about current commitments, not just past ones",
        body: [
          "The most useful financial question is not turnover but committed capacity. A contractor with strong historical turnover that has just won three large contracts is a substantially worse risk than a smaller one with an empty order book, and the prequalification form is poorly designed to reveal this.",
          "Ask for the current contract portfolio with values, remaining scope and expected completion dates. Ask which key personnel are committed to which of them. In Nepal, where the pool of experienced project managers and senior engineers is genuinely limited, the same names appear on multiple bids, and the question of who will actually be on your site is a real one.",
        ],
        list: [
          "Current contracts with values, remaining scope and completion dates",
          "Which named key personnel are committed to which existing contract",
          "Peak resourcing across the portfolio in the coming dry season",
          "Plant utilisation across existing sites during your critical months",
        ],
      },
      {
        heading: "Ask what went wrong on the last project, and what changed",
        body: [
          "Every infrastructure project has a serious problem. A contractor who cannot describe one is either inexperienced or not being straight, and both are informative.",
          "The useful version of this question has two parts. First, what was the most significant problem on your last comparable contract? Second, what did you change afterwards so that it does not recur? The second part separates companies that solve problems from companies that survive them. A contractor who encountered a shear zone in a tunnel and changed its probe drilling standard afterwards is a different organisation from one that encountered it, dealt with it, and changed nothing.",
        ],
      },
      {
        heading: "Ask about plant ownership specifically",
        body: [
          "Equipment availability is one of the most common causes of delay on Nepali contracts. A contractor whose critical-path activities depend on hired plant has no control over its own programme when the hire market tightens — which it does, predictably, at the start of every dry season when every contractor in the country is trying to mobilise at once.",
          "Ask which plant on the schedule is owned and which is committed but not owned, and ask for registration evidence on the owned items. Then ask what the contingency is if a hired item is not available in October. A specific answer to that question is worth more than the schedule itself.",
        ],
      },
      {
        heading: "Ask to see the records, not the record",
        body: [
          "On donor-funded and FIDIC contracts, most disputes are about what can be proved rather than what happened. A contractor with disciplined contemporaneous records — daily returns, progress photographs, a live critical-path programme rather than a tender artefact, early warning notices issued when a threat emerges rather than claims filed after the effect — is both less likely to end up in dispute and more likely to be right when it does.",
          "This is inspectable. Ask to see the site records from a current project. The answer arrives in how long it takes them to produce it.",
        ],
      },
      {
        heading: "Ask what happened after handover",
        body: [
          "The single most informative question about a Nepali infrastructure contractor is what happened to its completed work in the two monsoons after handover. For a road, did the slopes hold. For a bridge, did the scour protection perform. For a water scheme, is it still running and does the operator have the records to run it.",
          "It is informative because it cannot be answered well retrospectively. A contractor that treated drainage, slope treatment and handover documentation as ancillary items has no good answer available to it, however the question is put.",
        ],
      },
      {
        heading: "On lowest price",
        body: [
          "Lowest evaluated price among qualified bidders is a defensible award rule and it is the law. It is worth being clear-eyed about what it optimises for, though: it selects the bidder with the most optimistic view of the risks, which is not the same as the bidder best able to manage them.",
          "The countermeasure available within the rules is qualification criteria that are specific enough to matter — plant requirements that name what the work actually needs, key personnel requirements with real experience thresholds, and similar-works definitions narrow enough to be meaningful. Criteria written generically produce a wide qualified field in which price is the only discriminator; criteria written precisely narrow the field to bidders who can genuinely do the work, and then lowest price among them is a good rule.",
        ],
      },
    ],
    takeaways: [
      "Licence class and turnover are a floor, not a ranking — they screen out incapable bidders without distinguishing capable ones.",
      "Current committed capacity predicts delivery better than historical turnover.",
      "Ask what went wrong on the last comparable project and what changed as a result; the second half is the informative one.",
      "Owned critical-path plant matters because the hire market tightens for everyone at the start of each dry season.",
      "The most revealing single question is what happened to the contractor's last completed work two monsoons after handover.",
      "Precise qualification criteria, not price weighting, are the effective lever within a lowest-price award rule.",
    ],
    faqs: [
      {
        q: "How should a client evaluate a construction contractor in Nepal?",
        a: "Treat licence class, turnover and completion certificates as a qualifying floor, then assess delivery capability separately: current committed contracts and which key personnel are tied to them; what went wrong on the last comparable project and what the contractor changed afterwards; how much critical-path plant is owned rather than hired; the quality of contemporaneous site records on a live project; and what happened to the contractor's completed works in the two monsoons after handover.",
      },
      {
        q: "Is the lowest bidder always awarded the contract in Nepal?",
        a: "Under the Public Procurement Act, the contract is awarded to the lowest evaluated substantially responsive bid from a qualified bidder — so price decides only among bids that have already passed responsiveness checks and the published qualification criteria. The effective lever for a client is therefore the precision of those qualification criteria: specific plant, personnel and similar-works requirements narrow the qualified field to bidders that can genuinely do the work.",
      },
    ],
    keywords: ["evaluate construction contractor nepal", "contractor selection nepal", "construction due diligence nepal", "infrastructure procurement nepal"],
  },
];

export function articleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
