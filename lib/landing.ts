export type LandingCategory =
  | "seed-oil" | "cannabinoid" | "seed-food" | "fibre"
  | "essential-oil" | "finished" | "land" | "service";

export type LandingPage = {
  slug: string;
  h1: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  lede: string;
  status: "in-development" | "planned" | "available";
  statusNote: string;
  sections: { h: string; ps: string[] }[];
  offer: { title: string; items: string[] };
  faq: { q: string; a: string }[];
  inquirySubject: string;
  category: LandingCategory;
  related: string[];
  howTo?: { name: string; text: string }[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "hemp-seed-oil-nepal",
    h1: "Hemp seed oil from Nepal",
    metaTitle: "Hemp Seed Oil Nepal — Cold-Pressed, Wholesale & Export",
    description:
      "Cold-pressed Himalayan hemp seed oil from Nepal — food-grade, lab-tested, for wholesale and export. Produced under licence by Himalaya Cannabis.",
    keywords: [
      "hemp seed oil Nepal",
      "hemp oil Nepal",
      "cold pressed hemp oil",
      "hemp oil wholesale",
      "hemp oil exporter Nepal",
      "bhango oil",
      "cannabis sativa seed oil supplier",
    ],
    lede: "Cold-pressed from Himalayan bhango seed, our hemp seed oil line is built for food, cosmetic, and wellness buyers — lab-tested, traceable, and carrying provenance no lowland crop can match.",
    status: "in-development",
    statusNote:
      "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    sections: [
      {
        h: "Why Himalayan hemp seed oil",
        ps: [
          "Hemp seed oil is pressed from the seed, not the flower — it is a food product, rich in omega-3 and omega-6 fatty acids, with no intoxicating compounds. Nepal's hill-grown seed, from a plant native to the Himalaya, gives the oil a provenance story that commodity producers cannot copy.",
          "Our oil is cold-pressed to preserve its nutritional profile, and every batch is chemically tested at a certified laboratory — the same compliance backbone that runs through everything we make.",
        ],
      },
      {
        h: "Who this is for",
        ps: [
          "Food brands and retailers seeking a distinctive culinary oil; cosmetic formulators using hemp oil as a carrier and active base — listed on ingredient labels by its INCI name, Cannabis Sativa Seed Oil; and importers building Himalayan or ayurvedic product lines. We supply wholesale domestically and for export, subject to prevailing law.",
        ],
      },
    ],
    offer: {
      title: "What we supply",
      items: [
        "Cold-pressed, food-grade hemp seed oil",
        "Cosmetic-grade oil for formulators",
        "Bulk and private-label packaging",
        "Certificates of analysis with every batch",
        "Export documentation and logistics support",
      ],
    },
    faq: [
      {
        q: "Does hemp seed oil contain THC or CBD?",
        a: "No meaningful amounts of either. Hemp seed oil is pressed from seeds, which contain virtually no cannabinoids. It is a food and cosmetic ingredient, not an extract.",
      },
      {
        q: "Can you export hemp seed oil from Nepal?",
        a: "Our founding objectives expressly cover export of hemp products, subject to the licences and documentation required by prevailing law. Contact us with your destination market and we will confirm requirements.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "We are taking wholesale commitments now, ahead of licensed production. Tell us your volumes and format and we will structure supply accordingly.",
      },
      {
        q: "What's the INCI name for hemp seed oil?",
        a: "Cannabis Sativa Seed Oil — the exact string cosmetic formulators use on ingredient labels and in sourcing searches. It's the same product as hemp seed oil, named for regulatory labelling purposes. See our hemp seed oil vs CBD oil guide if you're unsure which ingredient you actually need.",
      },
    ],
    inquirySubject: "[Hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    related: ["hemp-seeds-nepal", "hemp-fabric-nepal", "cbd-oil-nepal"],
  },
  {
    slug: "hemp-fabric-nepal",
    h1: "Hemp fabric & textiles from Nepal",
    metaTitle: "Hemp Fabric Nepal — Himalayan Textiles, Wholesale & Export",
    description:
      "Himalayan hemp fabric, yarn, and fibre from Nepal — heritage hand-weaving meets lab-tested, licensed cultivation. Wholesale and export inquiries welcome.",
    keywords: [
      "hemp fabric Nepal",
      "hemp textiles Nepal",
      "Himalayan hemp fabric",
      "hemp yarn wholesale",
      "hemp fibre Nepal",
      "natural fabric Nepal export",
    ],
    lede: "Nepal has woven hemp for centuries — the far-western hills never stopped. We are bringing that heritage to scale: fibre, yarn, and cloth from licensed Himalayan cultivation, for brands that want a textile with a true story.",
    status: "in-development",
    statusNote:
      "In development. Fibre cultivation proceeds under licence; we are building weaver partnerships and taking wholesale interest now.",
    sections: [
      {
        h: "A living textile tradition",
        ps: [
          "Hand-woven hemp cloth is a living craft in Nepal's far-western districts — coarse, extraordinarily durable, and softening with every wash. Hemp bast fibre is among the strongest natural fibres, breathable and naturally resistant, which is why demand from sustainable fashion and homeware brands keeps growing worldwide.",
          "We pair licensed cultivation with local processing and weaving partnerships, so the value — spinning, weaving, finishing — stays in the hills that grow the crop.",
        ],
      },
      {
        h: "Supply for brands and importers",
        ps: [
          "We serve apparel and homeware brands seeking traceable natural fabric, importers of Himalayan handicraft textiles, and manufacturers blending hemp with cotton, wool, or allo. Wholesale and export supply is subject to prevailing law, with full traceability from field to fabric.",
        ],
      },
    ],
    offer: {
      title: "What we supply",
      items: [
        "Raw hemp fibre and processed bast",
        "Hemp yarn — handspun and mill-spun",
        "Woven hemp cloth, natural and dyed",
        "Hemp-blend fabrics (cotton, allo, wool)",
        "Bags, accessories, and finished goods on order",
      ],
    },
    faq: [
      {
        q: "Is Nepali hemp fabric handmade?",
        a: "Both. Heritage hand-woven cloth comes from our weaver partnerships in the hills; consistent mill-spun yarn and fabric serve larger orders. Tell us your volumes and we will match the supply chain.",
      },
      {
        q: "Is hemp fabric legal to export from Nepal?",
        a: "Hemp fibre and fabric are industrial products from cannabis below the legal THC threshold, produced under licence. Our objectives expressly cover export, subject to prevailing law and documentation.",
      },
    ],
    inquirySubject: "[Hemp fabric] Wholesale inquiry",
    category: "fibre",
    related: ["hemp-clothing-manufacturer-nepal", "hemp-seed-oil-nepal", "hemp-exporter-nepal"],
  },
  {
    slug: "hemp-seeds-nepal",
    h1: "Hemp seeds (bhango) from Nepal",
    metaTitle: "Hemp Seeds Nepal — Bhango, Food-Grade & Cultivation Seed",
    description:
      "Himalayan hemp seed (bhango) from Nepal: food-grade seed for kitchens and brands, and cultivation seed genetics for licensed growers.",
    keywords: [
      "hemp seeds Nepal",
      "bhango",
      "भाङ्गो",
      "buy hemp seeds Nepal",
      "hemp seed supplier",
      "cannabis seeds Nepal licensed",
    ],
    lede: "Bhango has fed Himalayan kitchens for generations — a complete protein the hills already know. We supply food-grade seed to kitchens and brands, and research-backed cultivation seed to licensed growers.",
    status: "in-development",
    statusNote:
      "Food-grade seed line in development. Cultivation seed is supplied only to licensed growers, as required by prevailing law.",
    sections: [
      {
        h: "Food-grade bhango",
        ps: [
          "Roasted and ground into achar, pressed for oil, or milled into flour — hemp seed is a complete protein rich in omega fatty acids, and it needs no introduction in Nepal. We clean, test, and package it to modern food-safety standards, under our own brand and for private label.",
        ],
      },
      {
        h: "Cultivation seed for licensed growers",
        ps: [
          "Seed determines everything in hemp: THC compliance, fibre yield, oil content, altitude fit. Our seed programme develops cultivars suited to Nepal's hills — and supplies them exclusively to growers holding the licences required by prevailing law, with agronomic support included.",
          "We do not sell cultivation seed to unlicensed buyers. If you are pursuing a licence, talk to us early — seed selection belongs in your application planning.",
        ],
      },
    ],
    offer: {
      title: "What we supply",
      items: [
        "Whole and roasted food-grade hemp seed",
        "Hemp seed flour and protein-rich milled products",
        "Private-label packaging for food brands",
        "Certified cultivation seed — licensed growers only",
        "Agronomy and compliance support with every seed lot",
      ],
    },
    faq: [
      {
        q: "Can I buy cannabis seeds in Nepal?",
        a: "Food-grade hemp seed (bhango) is a traditional food. Cultivation seed is different: growing cannabis, including hemp, requires a licence under prevailing law, and we supply cultivation seed only to licensed growers.",
      },
      {
        q: "Is bhango the same as hemp seed?",
        a: "Yes — bhango (भाङ्गो) is the Nepali name for hemp seed, traditionally roasted and ground into achar in hill kitchens. It contains no intoxicating compounds.",
      },
    ],
    inquirySubject: "[Hemp seeds] Supply inquiry",
    category: "seed-food",
    related: ["hemp-seed-oil-nepal", "cannabis-license-consulting-nepal", "hemp-farmland-nepal"],
  },
  {
    slug: "cbd-oil-nepal",
    h1: "CBD oil in Nepal",
    metaTitle: "CBD Oil Nepal — Licensed Himalayan CBD, Coming Under Licence",
    description:
      "CBD oil in Nepal: what's legal, what's coming, and how Himalaya Cannabis is building a licensed, lab-tested Himalayan CBD line. Register wholesale interest.",
    keywords: [
      "CBD oil Nepal",
      "buy CBD Nepal",
      "CBD Nepal legal",
      "Himalayan CBD",
      "CBD wholesale Nepal",
    ],
    lede: "There is no legal open market for CBD in Nepal today — and anyone selling it otherwise is outside the law. Here is what is actually coming: a licensed, lab-tested Himalayan CBD line, built the compliant way.",
    status: "planned",
    statusNote:
      "Planned. CBD production and sale begin only under the licences required by prevailing law. Wholesale interest is being registered now.",
    sections: [
      {
        h: "The honest state of CBD in Nepal",
        ps: [
          "CBD (cannabidiol) is a non-intoxicating cannabis compound used worldwide in tinctures, topicals, and cosmetics. In Nepal, CBD falls under the cannabis licensing framework: production and sale become lawful only through the medical and industrial pathway, with certified laboratory testing. We will not sell CBD before that — and we would treat any current 'CBD shop' claims in Nepal with caution.",
        ],
      },
      {
        h: "What we are building",
        ps: [
          "A Himalayan CBD line — extracts, tinctures, and topicals — grown at altitude under licence, tested batch-by-batch at a certified laboratory, and paired with Nepal's ayurvedic formulation tradition. Wholesale buyers and retail partners can register interest now; early partners get first allocation when licensed production begins.",
        ],
      },
    ],
    offer: {
      title: "Planned line",
      items: [
        "Full- and broad-spectrum CBD extracts",
        "Tinctures and sublingual oils",
        "Topicals, balms, and cosmetic bases",
        "Ayurvedic-CBD formulations",
        "Every batch with a certificate of analysis",
      ],
    },
    faq: [
      {
        q: "Is CBD legal in Nepal?",
        a: "CBD falls under Nepal's cannabis licensing framework. There is no legal open market today; lawful production and sale come through the medical and industrial licensing pathway with certified lab testing.",
      },
      {
        q: "When will your CBD products launch?",
        a: "When — and only when — the required licences are issued. Register your interest and we will keep you informed; early wholesale partners get first allocation.",
      },
      {
        q: "Does CBD get you high?",
        a: "No. CBD is non-intoxicating. The intoxicating compound is THC, which industrial hemp contains only below 0.3%.",
      },
    ],
    inquirySubject: "[CBD] Wholesale interest",
    category: "cannabinoid",
    related: ["hemp-seed-oil-nepal", "thc-testing-lab-nepal", "cannabis-license-consulting-nepal"],
  },
  {
    slug: "hemp-clothing-manufacturer-nepal",
    h1: "Hemp clothing manufacturing in Nepal",
    metaTitle: "Hemp Clothing Manufacturer Nepal — Private Label",
    description:
      "Partner with Nepal's licensed hemp supply chain for hemp clothing and accessories — private label, heritage hand-woven fabric, and export-ready production.",
    keywords: [
      "hemp clothing Nepal",
      "hemp clothing manufacturer",
      "hemp bags Nepal",
      "private label hemp clothing",
      "sustainable clothing manufacturer Nepal",
    ],
    lede: "Brands come to Nepal for hemp clothing because the story is real here: native fibre, living craft, Himalayan provenance. We are building the licensed supply chain behind it — from field to finished garment.",
    status: "in-development",
    statusNote:
      "In development. Garment partnerships are being formed now on existing craft supply; scaled fibre follows licensed cultivation.",
    sections: [
      {
        h: "From field to garment, in one country",
        ps: [
          "Most 'hemp' garments travel through three countries before stitching. Nepal can do it in one: licensed cultivation in the hills, fibre processing and weaving through local partnerships, and Kathmandu's established garment and handicraft workshops for finishing. Shorter chain, full traceability, better story.",
        ],
      },
      {
        h: "How brands work with us",
        ps: [
          "We serve sustainable fashion brands seeking private-label hemp lines, importers of hemp bags and accessories, and designers sourcing authentic Himalayan hand-woven fabric. Start with fabric supply or go full private-label production — both subject to prevailing law, both fully traceable.",
        ],
      },
    ],
    offer: {
      title: "What we offer",
      items: [
        "Private-label hemp apparel production",
        "Hemp bags, caps, and accessories",
        "Hand-woven heritage fabric for designers",
        "Hemp-blend fabric development",
        "Export documentation and consolidated shipping",
      ],
    },
    faq: [
      {
        q: "Do you make custom hemp clothing designs?",
        a: "Yes — private-label and custom production through our garment partnerships, from your tech packs or developed together. Minimums depend on the item; ask us.",
      },
      {
        q: "Is Nepali hemp clothing actually made from Nepali hemp?",
        a: "Historically, much of it wasn't — imported fabric was common. Our purpose is to change that with licensed local cultivation, so the label and the field finally match. Current production uses traceable craft supply while cultivation scales.",
      },
    ],
    inquirySubject: "[Hemp clothing] Manufacturing inquiry",
    category: "fibre",
    related: ["hemp-fabric-nepal", "hemp-exporter-nepal", "hemp-seed-oil-nepal"],
  },
  {
    slug: "thc-testing-lab-nepal",
    h1: "THC & CBD testing laboratory for Nepal",
    metaTitle: "THC Testing Lab Nepal — Cannabis & Hemp Testing Laboratory",
    description:
      "A certified THC/CBD testing laboratory for Nepal's cannabis sector — potency, quality, and compliance testing for licensed growers, processors, and regulators.",
    keywords: [
      "THC testing Nepal",
      "cannabis testing lab Nepal",
      "CBD testing laboratory",
      "hemp testing Nepal",
      "cannabis lab Nepal",
    ],
    lede: "A legal cannabis industry runs on lab reports: the certificate of analysis is what separates licensed hemp from a prohibited crop. Nepal needs that infrastructure — we are building it.",
    status: "planned",
    statusNote:
      "Planned. The laboratory is established as prescribed by prevailing law, in collaboration with the relevant authority.",
    sections: [
      {
        h: "Why testing is the keystone",
        ps: [
          "Every licensed activity in cannabis — cultivation, processing, sale, export — depends on verified THC content. Under Nepal's framework, products require mandatory chemical testing at a certified laboratory before they move. Without accessible domestic testing, the whole licensed sector bottlenecks.",
          "Our founding objectives include establishing exactly this: a certified laboratory for THC/CBD content and quality testing, serving our own production and the wider sector, in collaboration with the relevant authority.",
        ],
      },
      {
        h: "Services for the sector",
        ps: [
          "Licensed growers verifying crop compliance; processors releasing batches; exporters needing certificates of analysis accepted abroad; and regulators needing reliable domestic capacity. If you are entering Nepal's licensed cannabis sector, register your testing needs with us now — capacity planning starts with demand.",
        ],
      },
    ],
    offer: {
      title: "Planned services",
      items: [
        "THC/CBD potency testing",
        "Batch certificates of analysis",
        "Quality and contaminant screening",
        "Pre-harvest compliance sampling for licensed growers",
        "Export documentation support",
      ],
    },
    faq: [
      {
        q: "Where can I test hemp for THC in Nepal?",
        a: "Domestic certified testing capacity for cannabis is exactly the gap our planned laboratory addresses, as prescribed by prevailing law and in collaboration with the relevant authority. Register your needs with us and we will keep you informed as the lab comes online.",
      },
      {
        q: "What THC level must hemp test under?",
        a: "Below 0.3% THC for industrial purposes under Nepal's framework, verified by certified laboratory testing.",
      },
    ],
    inquirySubject: "[Testing lab] Service inquiry",
    category: "service",
    related: ["agri-food-testing-lab-nepal", "cannabis-license-consulting-nepal", "hemp-seeds-nepal"],
  },
  {
    slug: "cannabis-license-consulting-nepal",
    h1: "Cannabis licence & compliance consulting in Nepal",
    metaTitle: "Cannabis License Nepal — Licensing & Compliance Consulting",
    description:
      "Entering Nepal's licensed cannabis sector? Licensing guidance, compliance systems, and training from Himalaya Cannabis.",
    keywords: [
      "cannabis license Nepal",
      "hemp license Nepal",
      "cannabis cultivation license",
      "how to get hemp license Nepal",
      "cannabis consulting Nepal",
    ],
    lede: "The question we hear most: 'How do I get a licence?' The honest answer: through a framework that is still being finished — and by preparing now. We help farmers, cooperatives, and companies get ready.",
    status: "available",
    statusNote:
      "Consulting and training are available now. Licences themselves are issued by government authorities, not by us — we prepare you for the process.",
    sections: [
      {
        h: "What licensing involves",
        ps: [
          "Nepal's medical and industrial cannabis framework — federal bills and provincial frameworks such as Gandaki's — is built on licences from the relevant authority, THC limits verified by certified testing, and traceable operations. Applications favour operators who can demonstrate land access, compliant seed, testing plans, and record-keeping before they apply.",
          "We cannot issue licences and no consultant can. What we do is make you the applicant the framework is designed to approve.",
        ],
      },
      {
        h: "How we help",
        ps: [
          "As Nepal's cannabis-sector resource centre — a role written into our founding objectives — we provide readiness assessment, compliance system design, seed-to-sale tracking software, packaging and equipment guidance, and training for farmers and enterprises. Early preparation is the single biggest advantage in a new licensing regime.",
        ],
      },
    ],
    offer: {
      title: "Consulting services",
      items: [
        "Licence-readiness assessment and application preparation",
        "Compliance system and record-keeping design",
        "Seed-to-sale tracking software",
        "Farmer and staff training programmes",
        "Land, seed, and testing coordination",
      ],
    },
    faq: [
      {
        q: "How do I get a cannabis licence in Nepal?",
        a: "Licences are issued by government authorities under the medical and industrial framework as it comes into force. Preparation — land access, compliant seed, testing plans, records — is what you control now, and it is what applications are judged on. We help you build exactly that.",
      },
      {
        q: "Can foreigners get a cannabis licence in Nepal?",
        a: "Licensing operates within Nepal's company and foreign-investment law. Foreign participation typically routes through investment in a Nepali company, subject to approvals. Take Nepali legal advice for your structure; we can work alongside your counsel.",
      },
    ],
    inquirySubject: "[Consulting] Licence readiness inquiry",
    category: "service",
    related: ["thc-testing-lab-nepal", "hemp-seeds-nepal", "hemp-farmland-nepal"],
    howTo: [
      {
        name: "Form or use a registered company",
        text: "Provincial frameworks such as Gandaki's licence registered companies only, not individuals or households — and require no drug-related conviction in the preceding ten years.",
      },
      {
        name: "Secure consolidated, controllable land",
        text: "Applications favour a small number of consolidated, secured blocks over many small dispersed plots — perimeter and security cost scale with the number of boundaries, not just total area.",
      },
      {
        name: "Build the required security infrastructure",
        text: "A perimeter wall or fencing and CCTV must be built and pass inspection before a licence is granted — this is capital spent ahead of approval, not after.",
      },
      {
        name: "Source THC-compliant, traceable seed",
        text: "Cultivation seed must keep THC below the legal threshold (0.3% for industrial use in Gandaki's framework), with provenance you can document.",
      },
      {
        name: "Arrange certified laboratory testing",
        text: "Prevailing law requires chemical testing at a certified laboratory before harvest, processing, or sale. Line this up before you apply, not after.",
      },
      {
        name: "Apply once your district is designated, and pass inspection",
        text: "Licensing authorities approve specific districts by gazette notice — not every district is eligible yet. Apply once yours is designated, complete the site inspection, and expect a fixed licence term (five years under Gandaki's framework) with renewal conditions.",
      },
    ],
  },
  {
    slug: "hemp-exporter-nepal",
    h1: "Hemp exporter from Nepal",
    metaTitle: "Hemp Exporter Nepal — Himalayan Hemp Products for Import",
    description:
      "Import Himalayan hemp from Nepal: fabric, seed foods, oil, and craft goods from a licensed, lab-tested supply chain. Export documentation handled.",
    keywords: [
      "hemp exporter Nepal",
      "import hemp from Nepal",
      "Nepal hemp products export",
      "Himalayan hemp supplier",
      "hemp importer",
    ],
    lede: "For importers, Nepal offers what commodity origins cannot: Himalayan provenance, craft heritage, and a compliance-first supply chain being built from the ground up. One partner, export-ready.",
    status: "in-development",
    statusNote:
      "In development. Export operations follow licensed production; import partnerships are being formed now.",
    sections: [
      {
        h: "What importers get from Nepal",
        ps: [
          "'Himalayan' carries premium positioning in every category we serve — the same provenance that sells Nepali tea and pashmina. Our founding objectives expressly cover selling and distributing hemp products in overseas markets, and we build every product line with export documentation, certificates of analysis, and traceability from day one.",
        ],
      },
      {
        h: "Working with us as an importer",
        ps: [
          "Start with the category you buy — fabric, seed foods, oil, or finished goods — and your destination market. We confirm the regulatory requirements both sides, structure supply, and grow allocation with early partners as licensed production scales. Serious importers who engage now shape what we build.",
        ],
      },
    ],
    offer: {
      title: "Export categories",
      items: [
        "Hemp fabric, yarn, and fibre",
        "Food-grade hemp seed and oil",
        "Hemp bags, accessories, and garments",
        "Cosmetic bases and (under licence) CBD lines",
        "Consolidated shipping and export documentation",
      ],
    },
    faq: [
      {
        q: "Can hemp products be legally exported from Nepal?",
        a: "Industrial hemp products from licensed production, within legal THC limits and with proper documentation, are export goods under our founding objectives, subject to prevailing law in Nepal and the destination market. We verify both ends before committing supply.",
      },
      {
        q: "Which markets do you serve?",
        a: "We structure each partnership around the destination market's rules — requirements for hemp products differ widely. Tell us your market and category and we will confirm feasibility.",
      },
    ],
    inquirySubject: "[Export] Import partnership inquiry",
    category: "service",
    related: ["hemp-fabric-nepal", "hemp-seed-oil-nepal", "hemp-clothing-manufacturer-nepal"],
  },
  {
    slug: "hemp-farmland-nepal",
    h1: "Hemp farmland in Nepal",
    metaTitle: "Hemp Farmland Nepal — Land for Licensed Hemp Farming",
    description:
      "Hemp farmland in Nepal: what land suits licensed hemp farming, how leasing and partnerships work, and how landowners and investors take part.",
    keywords: [
      "hemp farmland Nepal",
      "hemp farming land",
      "land for hemp cultivation",
      "hemp farm Nepal",
      "start hemp farm Nepal",
    ],
    lede: "Thinking about hemp farming in Nepal? The land question comes first. What suits the crop, what the law requires, and how landowners and investors actually take part.",
    status: "available",
    statusNote:
      "Land partnerships are active now. Cultivation itself begins under the licences required by prevailing law.",
    sections: [
      {
        h: "What land suits hemp in Nepal",
        ps: [
          "Mid-hill terraced land with year-round water and workable road access — the land Nepal has in abundance and struggles to keep productive. Altitude shapes the crop: fibre, seed, and extract cultivars each have their band. South-facing terraces help. Clear title and no tenancy disputes are non-negotiable.",
        ],
      },
      {
        h: "How to take part",
        ps: [
          "Landowners can lease, contract-farm, or sell — our land programme runs all three with registered agreements and full due diligence. Aspiring growers should pair land planning with licence readiness from the start. Investors can back the land bank behind licensed cultivation.",
          "See our full land programme for partnership models, criteria, and answers to the questions we hear most.",
        ],
      },
    ],
    offer: {
      title: "Land programme",
      items: [
        "Multi-year registered leases with fair terms",
        "Contract farming with seed, training, and a committed buyer",
        "Outright purchase of select facility parcels",
        "Due diligence at the Land Revenue Office on every parcel",
        "Licence-contingent structures that de-risk early commitment",
      ],
    },
    faq: [
      {
        q: "Can I start a hemp farm in Nepal?",
        a: "Yes — through the licensing pathway. Cultivating hemp requires a licence under prevailing law. Prepare land access, compliant seed, and testing plans now; that preparation is what applications are judged on.",
      },
      {
        q: "How much does hill land cost in Nepal?",
        a: "It varies enormously by district, road access, and water. This is exactly why we favour leasing over buying for cultivation — and why every parcel we touch gets full due diligence before terms are agreed.",
      },
    ],
    inquirySubject: "[Farmland] Land inquiry",
    category: "land",
    related: ["cannabis-license-consulting-nepal", "hemp-seeds-nepal", "thc-testing-lab-nepal"],
  },
  {
    slug: "hemp-farmland-gandaki",
    h1: "Hemp farmland in Gandaki Province",
    metaTitle: "Hemp Farmland Gandaki — Licensed Cultivation, Nepal",
    description:
      "Gandaki Province leads Nepal's medical and industrial cannabis framework. Hemp farmland, leases, and cultivation partnerships in Gandaki's mid-hill districts.",
    keywords: [
      "hemp farmland Gandaki",
      "Gandaki cannabis framework",
      "hemp farming Gandaki Province",
      "land lease Gandaki",
      "cannabis Gandaki Nepal",
    ],
    lede: "Gandaki is where Nepal's cannabis framework moved first — the province named in our own founding documents. That makes its mid-hill districts the natural starting line for licensed hemp cultivation.",
    status: "available",
    statusNote:
      "Land partnerships in Gandaki are our first priority. Cultivation begins under the licences required by the provincial and federal frameworks.",
    sections: [
      {
        h: "Why Gandaki first",
        ps: [
          "Gandaki Province developed a medical and industrial cannabis framework ahead of the rest of the country — the same framework referenced in Himalaya Cannabis's Memorandum of Association. Operating where the regulatory groundwork is furthest along shortens the path from land to licensed harvest.",
          "The province's geography helps too: mid-hill districts such as Lamjung, Gorkha, Tanahun, Baglung, and Myagdi combine terraced agricultural land, road corridors, and altitude bands suited to fibre and seed cultivars alike.",
        ],
      },
      {
        h: "For Gandaki landowners",
        ps: [
          "If you hold terraced hill land in Gandaki with water and road access, you are in our first-priority zone. We lease, contract-farm, and purchase select parcels — registered agreements, full due diligence at the Land Revenue Office, and licence-contingent terms that protect both sides.",
        ],
      },
    ],
    offer: {
      title: "Gandaki programme",
      items: [
        "First-priority leases in mid-hill districts",
        "Contract farming with seed, training, and a committed buyer",
        "Early coordination with local governments",
        "Licence-contingent structures for early partners",
        "Facility-site scouting for processing and testing",
      ],
    },
    faq: [
      {
        q: "Why is Gandaki Province important for cannabis in Nepal?",
        a: "Gandaki developed a provincial medical and industrial cannabis framework ahead of other provinces, making it the most advanced regulatory environment for licensed hemp cultivation in Nepal.",
      },
      {
        q: "Which Gandaki districts suit hemp farming?",
        a: "Mid-hill districts with terraced land, water, and road access — Lamjung, Gorkha, Tanahun, Baglung, and Myagdi among them. Altitude determines whether fibre, seed, or extract cultivars fit best.",
      },
    ],
    inquirySubject: "[Farmland Gandaki] Land inquiry",
    category: "land",
    related: ["hemp-farmland-nepal", "hemp-farmland-karnali", "cannabis-license-consulting-nepal"],
  },
  {
    slug: "hemp-farmland-karnali",
    h1: "Hemp farmland in Karnali Province",
    metaTitle: "Hemp Farmland Karnali — High-Altitude Hemp, Nepal",
    description:
      "Karnali's high-altitude valleys grow some of Nepal's strongest wild cannabis. Hemp farmland, leases, and cultivation partnerships in Karnali Province.",
    keywords: [
      "hemp farmland Karnali",
      "hemp farming Karnali",
      "Jumla organic farming",
      "high altitude hemp",
      "cannabis Karnali Nepal",
    ],
    lede: "Karnali is Nepal's high country — remote, organic by default, and home to some of the strongest wild cannabis growth in the Himalaya. For high-value hemp, altitude is an asset, not an obstacle.",
    status: "available",
    statusNote:
      "Karnali partnerships are being scouted now. Cultivation begins under the licences required by prevailing law.",
    sections: [
      {
        h: "The high-altitude advantage",
        ps: [
          "Karnali's valleys — Jumla, Kalikot, Dailekh, Surkhet's hills — sit at altitudes where the plant has grown wild for centuries. High-altitude, low-input cultivation is a premium story in global wellness and extract markets, and Karnali's established organic reputation (Jumla is synonymous with organic farming in Nepal) strengthens it further.",
          "Remoteness cuts both ways: land and labour are available, but road access and processing distance must be planned honestly. Our model pairs Karnali cultivation with consolidation points on the road corridors.",
        ],
      },
      {
        h: "For Karnali landowners and communities",
        ps: [
          "We work through communities as much as individual owners in Karnali — cooperative leases and contract-farming groups fit the province's landholding patterns. If your village holds suitable land, one conversation with us can bring seed, training, and a committed buyer to the whole group.",
        ],
      },
    ],
    offer: {
      title: "Karnali programme",
      items: [
        "Cooperative and community leases",
        "High-altitude cultivar selection",
        "Organic-practice cultivation protocols",
        "Consolidation and transport planning",
        "Training programmes for farming groups",
      ],
    },
    faq: [
      {
        q: "Is Karnali suitable for hemp farming?",
        a: "Yes — its high-altitude valleys have grown cannabis wild for centuries, and low-input, organic-by-default conditions suit premium hemp. Logistics need honest planning, which is why we build consolidation points into every Karnali partnership.",
      },
      {
        q: "Do you work with farming cooperatives?",
        a: "Preferentially, in Karnali. Cooperative leases and contract-farming groups match how land and labour are organised in the province — and they spread the benefit across the community.",
      },
    ],
    inquirySubject: "[Farmland Karnali] Land inquiry",
    category: "land",
    related: ["hemp-farmland-nepal", "hemp-farmland-gandaki", "hemp-seeds-nepal"],
  },
  {
    slug: "hemp-farmland-sudurpashchim",
    h1: "Hemp farmland in Sudurpashchim",
    metaTitle: "Hemp Farmland Sudurpashchim — Nepal's Hemp Weaving Heartland",
    description:
      "Bajhang, Bajura, Darchula, Achham — Sudurpashchim is Nepal's living hemp-weaving heartland. Farmland, leases, and fibre partnerships in the far west.",
    keywords: [
      "hemp farmland Sudurpashchim",
      "hemp weaving Nepal",
      "Bajhang hemp cloth",
      "hemp fibre far west Nepal",
      "allo hemp Nepal",
    ],
    lede: "Nepal's far west never stopped weaving hemp. Bajhang, Bajura, Darchula, Achham — this is where the craft survived prohibition. For fibre cultivation, there is no better-prepared region in the country.",
    status: "available",
    statusNote:
      "Fibre-focused partnerships in Sudurpashchim are being formed now. Cultivation begins under the licences required by prevailing law.",
    sections: [
      {
        h: "The weaving heartland",
        ps: [
          "Hand-woven hemp cloth is a living tradition in Sudurpashchim's hill districts — skills passed through generations that most countries lost a century ago. That means fibre cultivation here feeds directly into local spinning and weaving, keeping processing value in the district instead of exporting raw material.",
          "Our textile line is built on exactly this chain: licensed fibre cultivation, local processing and weaving partnerships, and finished fabric that carries a heritage story global brands pay premiums for.",
        ],
      },
      {
        h: "For far-western landowners and weavers",
        ps: [
          "We want both sides of the chain: terraced land for fibre cultivation, and weaving households and groups for processing partnerships. If you farm, weave, or both, the far west is our fibre priority — and early partners shape the programme.",
        ],
      },
    ],
    offer: {
      title: "Sudurpashchim programme",
      items: [
        "Fibre-cultivar leases and contract farming",
        "Weaver partnerships with committed offtake",
        "Fibre processing equipment and training",
        "Heritage-craft branding for woven goods",
        "Blended-fibre development (hemp, allo, wool)",
      ],
    },
    faq: [
      {
        q: "Where is hemp cloth still woven in Nepal?",
        a: "The far-western hill districts — Bajhang, Bajura, Darchula, and Achham among them — maintain living hand-weaving traditions for hemp cloth, which is why Sudurpashchim anchors our fibre and textile programme.",
      },
      {
        q: "Do you buy hand-woven hemp cloth?",
        a: "We form weaver partnerships with committed offtake — steady purchase agreements rather than one-off buying — so weaving households can plan production. Contact us to join the programme.",
      },
    ],
    inquirySubject: "[Farmland Sudurpashchim] Land inquiry",
    category: "land",
    related: ["hemp-fabric-nepal", "hemp-farmland-nepal", "hemp-clothing-manufacturer-nepal"],
  },
  {
    slug: "allo-fibre-nepal",
    h1: "Allo (Himalayan nettle) fibre processing in Nepal",
    metaTitle: "Allo Fibre Nepal — Himalayan Nettle Fibre Processing",
    description:
      "Allo (Himalayan nettle), banana, and jute fibre processing from Nepal — legal, uncontrolled, available now. Yarn and processed bast for wholesale and export.",
    keywords: [
      "allo fibre Nepal",
      "Himalayan nettle fibre",
      "allo processing Nepal",
      "natural fibre Nepal",
      "banana fibre Nepal",
      "jute fibre Nepal",
      "sustainable fibre Nepal",
    ],
    lede: "Long before any cannabis licence, Nepal's hills were already growing fibre worth processing — allo (Himalayan nettle), banana stem, and jute. We are building the decortication, cottonising, and spinning capacity to turn household fibre into wholesale-grade yarn, starting now, with no cannabis licence required.",
    status: "in-development",
    statusNote:
      "In development. Allo, banana, and jute are uncontrolled natural fibres — this line requires no cannabis cultivation licence and proceeds independently of licensed hemp cultivation.",
    sections: [
      {
        h: "Why start here",
        ps: [
          "Allo has been hand-processed in Nepal's hills for generations — a wild-harvested nettle fibre already established as a Nepali export product. Banana stem and jute round out a multi-bast processing line: one plant, several legal fibre streams, no licensing gate.",
          "The same decortication, cottonising, and spinning equipment that will eventually process licensed hemp fibre runs these crops today — so the facility earns from day one instead of waiting on a cultivation licence that does not yet exist for anyone.",
        ],
      },
      {
        h: "Who this is for",
        ps: [
          "Household growers and gatherers with existing allo, banana fibre, or jute supply looking for a committed buyer and fair aggregation terms; textile and homeware brands wanting a traceable, sustainably grown natural fibre with a genuine Himalayan story; and exporters of natural fibre products.",
        ],
      },
    ],
    offer: {
      title: "What we're building",
      items: [
        "Fibre aggregation from household and community suppliers",
        "Decortication, cottonising, and spinning capacity",
        "Allo, banana, and jute yarn and processed bast fibre",
        "Committed offtake agreements for suppliers",
        "Export documentation and consolidated shipping",
      ],
    },
    faq: [
      {
        q: "Is allo fibre related to cannabis or hemp?",
        a: "No. Allo is Himalayan nettle (Girardinia diversifolia) — a completely different, uncontrolled plant, already a legal Nepali export product. We process it on the same equipment line we are building for licensed hemp fibre, but allo itself needs no cannabis licence.",
      },
      {
        q: "Do you buy allo, banana fibre, or jute directly from growers?",
        a: "Yes — we are forming aggregation and offtake agreements with household and community suppliers now, ahead of full plant capacity. Contact us with your volumes and location.",
      },
    ],
    inquirySubject: "[Allo & Fibre] Supply or wholesale inquiry",
    category: "fibre",
    related: ["hemp-fabric-nepal", "hemp-farmland-sudurpashchim", "hemp-exporter-nepal"],
  },
  {
    slug: "agri-food-testing-lab-nepal",
    h1: "Agri-food testing laboratory in Nepal",
    metaTitle: "Agri-Food Testing Lab Nepal — Pesticide & Aflatoxin Testing",
    description:
      "A certified agri-food testing laboratory for Nepal's coffee, tea, honey, and spice exporters — pesticide residue, aflatoxin, and heavy metal testing.",
    keywords: [
      "agri food testing lab Nepal",
      "pesticide residue testing Nepal",
      "aflatoxin testing Nepal",
      "coffee testing lab Nepal",
      "tea testing Nepal",
      "spice export testing Nepal",
      "heavy metal testing Nepal",
    ],
    lede: "Nepal's coffee, tea, honey, and spice exporters face the same problem the cannabis sector will: no accredited domestic lab for pesticide residue, aflatoxin, or heavy metal testing. We are building one laboratory that serves both — a real customer base today, independent of any cannabis licence.",
    status: "planned",
    statusNote:
      "Planned. Accreditation for food-safety testing runs independently of cannabis licensing, and the lab is designed to serve Nepal's existing agro-export sector from day one.",
    sections: [
      {
        h: "A gap that isn't about cannabis",
        ps: [
          "Coffee, tea, honey, and spice exporters routinely need pesticide residue, aflatoxin, and heavy metal certificates to clear destination markets — and today, that testing has to go abroad, adding cost and delay to every shipment. Nepal has no accredited domestic lab for it.",
          "We are building a general agri-food testing laboratory to close that gap — the same facility that will eventually run mandatory THC/CBD compliance testing for licensed cannabis runs pesticide, aflatoxin, and heavy-metal panels for the export crops Nepal already grows and sells.",
        ],
      },
      {
        h: "Who this serves",
        ps: [
          "Coffee, tea, honey, and spice exporters needing certificates accepted in destination markets; cooperatives and processors managing quality control; and, once cannabis licensing is operative, licensed growers and processors needing THC/CBD compliance testing under the same roof.",
        ],
      },
    ],
    offer: {
      title: "Planned services",
      items: [
        "Pesticide residue screening",
        "Aflatoxin and mycotoxin testing",
        "Heavy metal contaminant testing",
        "Certificates of analysis accepted by destination markets",
        "THC/CBD compliance testing, once cannabis licensing is operative",
      ],
    },
    faq: [
      {
        q: "Is this the same as your cannabis testing lab?",
        a: "It's the same planned facility, built to serve a broader purpose. Accreditation for food-safety testing (pesticide residue, aflatoxin, heavy metals) does not depend on cannabis licensing status, so this line can open first and earn from Nepal's existing coffee, tea, honey, and spice exporters.",
      },
      {
        q: "How long until the lab is operating?",
        a: "Accreditation for this kind of testing typically takes 12–24 months. Register your testing needs now — capacity planning starts with demand, and early partners help shape what we prioritise first.",
      },
    ],
    inquirySubject: "[Agri-food testing] Service inquiry",
    category: "service",
    related: ["thc-testing-lab-nepal", "hemp-exporter-nepal", "cannabis-license-consulting-nepal"],
  },
  {
    "slug": "cold-pressed-virgin-hemp-seed-oil-nepal",
    "h1": "Cold-pressed virgin hemp seed oil",
    "metaTitle": "Cold-Pressed Virgin Hemp Seed Oil — Bulk Supplier, Nepal",
    "description": "Cold-pressed virgin hemp seed oil from Nepal — a single mechanical pressing, no heat or chemicals, for buyers who want the least-processed form of the oil.",
    "keywords": [
      "cold pressed hemp seed oil bulk",
      "virgin hemp seed oil",
      "unrefined hemp oil Nepal",
      "cold pressed hemp oil supplier"
    ],
    "lede": "The least-processed form of hemp seed oil: pressed once, mechanically, with no heat or solvents — for buyers who want the oil's full natural nutrient profile, color, and flavour intact.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Why cold-pressed virgin",
        "ps": [
          "A single mechanical pressing at low temperature avoids the heat degradation that refining introduces, preserving the oil's natural green color, nutty flavour, and full fatty-acid and micronutrient profile.",
          "This is the form most food brands and nutrition-focused buyers want — nothing removed, nothing added. Cosmetic buyers who want an unrefined 'whole ingredient' story on their label also start here."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Single cold mechanical pressing, no solvents",
        "Full natural color, aroma, and nutrient profile retained",
        "Suited to food, nutrition, and 'clean label' cosmetic use",
        "Certificates of analysis with every batch"
      ]
    },
    "faq": [
      {
        "q": "What does 'cold-pressed' actually mean?",
        "a": "The seed is pressed mechanically at low temperature, with no heat treatment or chemical solvents used to extract the oil — the gentlest extraction method, which is why it preserves the most nutrients."
      },
      {
        "q": "Is cold-pressed virgin oil the same as refined oil?",
        "a": "No — refined (RBD) oil goes through additional processing to neutralize color and scent. Virgin oil keeps its natural character. See our refined hemp seed oil page if you need the neutral form."
      }
    ],
    "inquirySubject": "[Cold-pressed virgin hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "refined-hemp-seed-oil-nepal",
      "unrefined-crude-hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "refined-hemp-seed-oil-nepal",
    "h1": "Refined (RBD) hemp seed oil",
    "metaTitle": "Refined Hemp Seed Oil (RBD) — Cosmetic-Grade Bulk Supply",
    "description": "Refined (RBD) hemp seed oil from Nepal — neutral color and scent for formulators who don't want the raw oil's natural character in their finished product.",
    "keywords": [
      "refined hemp seed oil",
      "RBD hemp oil",
      "hemp oil cosmetic grade",
      "deodorized hemp seed oil"
    ],
    "lede": "Cold-pressed hemp seed oil carries a distinct green color and grassy scent — appreciated by some buyers, unwanted by others. Refining removes both, for formulators who need a neutral base.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Why refine it",
        "ps": [
          "Refining, bleaching, and deodorizing (the RBD process) strips the oil's natural pigment and aroma while keeping its fatty-acid profile largely intact — the standard choice for cosmetic formulators building a product where the base oil shouldn't compete with added fragrance or active ingredients.",
          "This is the form most private-label skincare and haircare brands specify, since it blends invisibly into a finished formulation rather than announcing itself."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Refined, bleached, deodorized (RBD) processing",
        "Neutral color and scent",
        "Consistent, formulation-ready base oil",
        "Bulk and private-label packaging"
      ]
    },
    "faq": [
      {
        "q": "Does refining remove the oil's nutrients?",
        "a": "Refining reduces some of the oil's natural color compounds and volatile aromatics, but the core fatty-acid profile — the reason formulators use hemp seed oil at all — remains largely intact."
      },
      {
        "q": "Who typically buys refined hemp seed oil?",
        "a": "Cosmetic and personal-care formulators building products where a neutral base is required, so added fragrance, actives, or color aren't affected by the carrier oil."
      }
    ],
    "inquirySubject": "[Refined (RBD) hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "cold-pressed-virgin-hemp-seed-oil-nepal",
      "cannabis-sativa-seed-oil-nepal"
    ]
  },
  {
    "slug": "organic-hemp-seed-oil-nepal",
    "h1": "Organic hemp seed oil",
    "metaTitle": "Organic Hemp Seed Oil — Wholesale from Nepal",
    "description": "Organic hemp seed oil from Nepal, grown without synthetic pesticides or fertilizers — for clean-label food and cosmetic brands.",
    "keywords": [
      "organic hemp seed oil",
      "organic hemp oil wholesale",
      "organic hemp oil Nepal",
      "clean label hemp oil"
    ],
    "lede": "Nepal's Himalayan and hill farming has never depended heavily on synthetic inputs — a natural starting point for an organic hemp seed oil line, built for clean-label buyers who need the certificate to prove it.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "What organic means for hemp seed oil",
        "ps": [
          "Organic hemp seed oil is grown without synthetic pesticides, herbicides, or fertilizers, and processed without synthetic additives — the standard clean-label food and cosmetic buyers increasingly require before they'll list an ingredient.",
          "Pursuing organic certification is part of our roadmap alongside licensed cultivation; we register serious wholesale interest now so certified supply has committed buyers from day one."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Grown without synthetic pesticides or fertilizers",
        "Aligned with clean-label food and cosmetic standards",
        "Certification pursued alongside licensed cultivation",
        "Early wholesale partners get first allocation"
      ]
    },
    "faq": [
      {
        "q": "Is your hemp seed oil certified organic today?",
        "a": "Not yet — organic certification is part of our roadmap, pursued alongside licensed cultivation. We're registering wholesale interest now so certified supply launches with committed buyers."
      },
      {
        "q": "What makes Himalayan hemp naturally suited to organic farming?",
        "a": "Nepal's hill and Himalayan agriculture has traditionally used minimal synthetic inputs, which is a practical head start toward organic certification compared to input-intensive commodity farming regions."
      }
    ],
    "inquirySubject": "[Organic hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "cold-pressed-virgin-hemp-seed-oil-nepal",
      "hemp-farmland-gandaki"
    ]
  },
  {
    "slug": "winterized-hemp-seed-oil-nepal",
    "h1": "Winterized hemp seed oil",
    "metaTitle": "Winterized Hemp Seed Oil — Clear Grade for Serums & Softgels",
    "description": "Winterized hemp seed oil from Nepal — cold-filtered to remove waxes, staying clear at refrigerator temperature. Built for serums and softgels.",
    "keywords": [
      "winterized hemp seed oil",
      "clear hemp oil",
      "hemp oil for serums",
      "hemp oil softgel"
    ],
    "lede": "Unfiltered hemp seed oil clouds up in the cold — waxes that are naturally present in the seed solidify. Winterizing removes them, keeping the oil clear through cold storage and transport.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Why winterizing matters",
        "ps": [
          "Winterizing is a cold-filtration step that removes the natural waxes present in pressed hemp seed oil, so the finished oil stays visually clear even when refrigerated or shipped through cold climates — essential for facial serums, softgel capsules, and any transparent packaging where cloudiness reads as a defect.",
          "Buyers formulating premium skincare or supplement softgels typically specify winterized oil for exactly this reason — clarity is part of the product's perceived quality."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Cold-filtered to remove natural waxes",
        "Stays clear through cold storage and transport",
        "Suited to serums, softgels, and clear packaging",
        "Consistent batch-to-batch clarity"
      ]
    },
    "faq": [
      {
        "q": "What happens if hemp seed oil isn't winterized?",
        "a": "Unfiltered oil can turn cloudy or develop visible sediment in cold storage, as natural waxes solidify. This doesn't affect safety, but it looks wrong in clear packaging or serums."
      },
      {
        "q": "Does winterizing change the oil's nutritional profile?",
        "a": "Winterizing removes waxes, not the core fatty acids — the oil's nutritional and functional profile is essentially unchanged; only its cold-clarity improves."
      }
    ],
    "inquirySubject": "[Winterized hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "hemp-carrier-oil-nepal",
      "cannabis-sativa-seed-oil-nepal"
    ]
  },
  {
    "slug": "unrefined-crude-hemp-seed-oil-nepal",
    "h1": "Unrefined crude hemp seed oil",
    "metaTitle": "Unrefined Crude Hemp Seed Oil — Bulk Drums",
    "description": "Unrefined crude hemp seed oil from Nepal, supplied in bulk drums — the minimally processed base form for buyers who run their own downstream refining.",
    "keywords": [
      "unrefined hemp seed oil bulk",
      "crude hemp oil drums",
      "bulk hemp oil supplier Nepal"
    ],
    "lede": "Some buyers don't want a finished, formulation-ready oil — they want the crude base, in volume, to refine or blend on their own lines. This is that product.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Built for downstream processors",
        "ps": [
          "Crude hemp seed oil is the straightforward pressed output before any refining, winterizing, or deodorizing — supplied in bulk drums to processors, blenders, and manufacturers who prefer to run their own downstream steps rather than buy a finished oil.",
          "It's typically the lowest-cost entry point into our hemp seed oil line, suited to buyers with existing refining capacity of their own."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Minimally processed, unrefined base oil",
        "Supplied in bulk drums",
        "Suited to buyers with their own refining capacity",
        "Certificates of analysis with every batch"
      ]
    },
    "faq": [
      {
        "q": "Is crude oil food-safe as-is?",
        "a": "Crude oil is intended as a processing input, not a finished consumer product — buyers typically refine, filter, or blend it further before final use. Ask us about our food-grade and cosmetic-grade finished lines if you need a ready-to-use oil."
      },
      {
        "q": "What packaging do you supply crude oil in?",
        "a": "Bulk drums as standard, with container-load volumes available for larger orders. Tell us your required format."
      }
    ],
    "inquirySubject": "[Unrefined crude hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "refined-hemp-seed-oil-nepal",
      "bulk-wholesale-hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "dehulled-kernel-pressed-hemp-seed-oil-nepal",
    "h1": "Dehulled kernel-pressed hemp seed oil",
    "metaTitle": "Kernel-Pressed Hemp Seed Oil — Light Grade, Nepal",
    "description": "Dehulled, kernel-pressed hemp seed oil from Nepal — pressed from hulled seed for a lighter color and milder flavour, favoured in premium food applications.",
    "keywords": [
      "dehulled hemp seed oil",
      "hemp kernel oil",
      "light hemp seed oil",
      "hemp hearts oil"
    ],
    "lede": "Pressing from the hulled kernel rather than the whole seed changes the oil's character — lighter in color, milder in flavour, and closer to a neutral culinary oil.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "A milder, lighter alternative",
        "ps": [
          "Removing the hull before pressing yields an oil with a noticeably lighter color and milder, less grassy flavour than whole-seed pressed oil — closer in character to other premium culinary seed oils, which makes it easier to use in delicate recipes without the oil's flavour dominating.",
          "Premium food brands and chefs building finishing oils or dressings tend to prefer this grade for exactly that reason."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Pressed from dehulled (hulled) hemp kernel",
        "Lighter color, milder flavour than whole-seed oil",
        "Suited to premium culinary and finishing-oil use",
        "Small-batch and bulk formats available"
      ]
    },
    "faq": [
      {
        "q": "How is kernel-pressed oil different from regular hemp seed oil?",
        "a": "It's pressed from the seed after the hull is removed, which produces a lighter-colored, milder-tasting oil compared to pressing the whole seed with the hull still on."
      },
      {
        "q": "Is this the same as hulled hemp hearts?",
        "a": "Related but different — hemp hearts are the hulled seed sold whole for eating; this is the oil pressed from that same hulled kernel. See our hulled hemp hearts page for the whole-food product."
      }
    ],
    "inquirySubject": "[Dehulled kernel-pressed hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "hulled-hemp-hearts-nepal",
      "hemp-culinary-oil-nepal"
    ]
  },
  {
    "slug": "co2-extracted-hemp-seed-oil-nepal",
    "h1": "CO2-extracted hemp seed oil",
    "metaTitle": "CO2-Extracted Hemp Seed Oil — Premium Grade, Nepal",
    "description": "CO2-extracted hemp seed oil from Nepal — a solvent-free alternative to mechanical pressing, for buyers who specifically request this extraction method.",
    "keywords": [
      "co2 extracted hemp seed oil",
      "supercritical co2 hemp oil",
      "solvent free hemp oil"
    ],
    "lede": "Some premium and pharmaceutical-adjacent buyers specify CO2 extraction over mechanical pressing — a solvent-free method with its own distinct profile and buyer base.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "A different extraction method, not just a different grade",
        "ps": [
          "Supercritical CO2 extraction uses pressurized carbon dioxide instead of mechanical pressing to draw oil from the seed — a solvent-free method that some formulators and manufacturers specifically request for its purity profile and consistency, distinct from the cold-pressing methods behind most of our other hemp seed oil grades.",
          "This is a longer-lead-time, more specialised line than our pressed oils — tell us your volume and timeline and we'll confirm whether it fits our production roadmap."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Supercritical CO2 extraction, solvent-free",
        "Distinct purity and consistency profile from pressed oils",
        "Suited to premium and specialist formulation buyers",
        "Longer lead time than pressed oil grades"
      ]
    },
    "faq": [
      {
        "q": "Is CO2-extracted oil better than cold-pressed?",
        "a": "Neither is strictly 'better' — they're different methods with different profiles. Cold-pressing is simpler and suits most food and cosmetic buyers; CO2 extraction suits buyers who specifically require a solvent-free, highly consistent process."
      },
      {
        "q": "Is this the same process used for CBD extraction?",
        "a": "The CO2 extraction principle is similar to what's used for cannabinoid extracts, but this page is specifically about hemp seed oil (from the seed) — see our cannabinoid oils section for flower-derived CO2 extracts."
      }
    ],
    "inquirySubject": "[CO2-extracted hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "pharmaceutical-grade-hemp-seed-oil-nepal",
      "cbd-crude-extract-nepal"
    ]
  },
  {
    "slug": "food-grade-hemp-seed-oil-nepal",
    "h1": "Food-grade hemp seed oil",
    "metaTitle": "Food-Grade Hemp Seed Oil — Certified Bulk Supply, Nepal",
    "description": "Food-grade hemp seed oil from Nepal, documented to food-safety standards for culinary and nutritional use — for food brands and manufacturers.",
    "keywords": [
      "food grade hemp seed oil supplier",
      "hemp cooking oil bulk",
      "hemp oil food safety documentation"
    ],
    "lede": "Food-grade isn't a flavour or a pressing method — it's a documentation standard. This is the tier built for buyers who need to show a food-safety paper trail, not just a good-tasting oil.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "What food-grade documentation covers",
        "ps": [
          "Food-grade hemp seed oil is produced and handled to the documentation and safety standards required for culinary and nutritional products — batch testing, traceability records, and certificates of analysis that food brands, commercial kitchens, and supplement manufacturers need to satisfy their own compliance requirements.",
          "This tier underlies our culinary oil, protein, and flour lines, and is available in bulk for food manufacturers building their own finished products."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Documentation to food-safety standards",
        "Batch testing and traceability records",
        "Certificates of analysis with every shipment",
        "Bulk supply for food manufacturers"
      ]
    },
    "faq": [
      {
        "q": "What's the difference between food-grade and cosmetic-grade hemp seed oil?",
        "a": "The oil itself can be similar — the difference is the documentation and handling standard each is produced and tested to. Food-grade meets food-safety requirements; cosmetic-grade meets cosmetic-formulation and labelling requirements."
      },
      {
        "q": "Can I get a certificate of analysis with each order?",
        "a": "Yes — every batch carries a certificate of analysis, which is part of what makes an oil food-grade in the first place."
      }
    ],
    "inquirySubject": "[Food-grade hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "hemp-culinary-oil-nepal",
      "hulled-hemp-hearts-nepal"
    ]
  },
  {
    "slug": "pharmaceutical-grade-hemp-seed-oil-nepal",
    "h1": "Pharmaceutical-grade hemp seed oil",
    "metaTitle": "Pharma-Grade Hemp Seed Oil — Nepal, Roadmap Documentation",
    "description": "Pharmaceutical-grade hemp seed oil from Nepal — the highest documentation and purity tier, on our development roadmap for pharma-adjacent buyers.",
    "keywords": [
      "pharmaceutical grade hemp seed oil",
      "pharma grade hemp oil",
      "hemp oil GMP documentation"
    ],
    "lede": "Pharmaceutical-grade is the most demanding documentation tier in the industry — full traceability, rigorous purity testing, and manufacturing practices aligned with pharmaceutical sourcing expectations. It's on our roadmap, not yet certified.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "An honest note on where this stands",
        "ps": [
          "Pharmaceutical-grade hemp seed oil requires the highest tier of purity testing, batch documentation, and manufacturing practice — typically expected to align with Good Manufacturing Practice (GMP) standards before a pharmaceutical buyer will qualify a supplier.",
          "We don't hold that certification today. It's a longer-term roadmap goal built on top of our core licensed production, not a current offering — we're sharing this honestly rather than overstating where we are. If your sourcing timeline is 12 months or more out, register your requirements and we'll keep you informed as this line develops."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Highest documentation and purity tier, in development",
        "Built toward GMP-aligned manufacturing practice",
        "Not currently certified — honest roadmap status",
        "Early registration for long-lead-time buyers"
      ]
    },
    "faq": [
      {
        "q": "Do you currently hold GMP certification?",
        "a": "No. This page describes a roadmap goal, not a current certification. We'd rather tell you that plainly than have you find out later. If your timeline allows, register your interest and we'll update you as this develops."
      },
      {
        "q": "What tier should I buy today?",
        "a": "Our food-grade and cosmetic-grade hemp seed oil lines are further along our development roadmap. Tell us your actual purity and documentation requirements and we'll recommend the right fit."
      }
    ],
    "inquirySubject": "[Pharmaceutical-grade hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "food-grade-hemp-seed-oil-nepal",
      "cannabis-sativa-seed-oil-nepal"
    ]
  },
  {
    "slug": "hemp-carrier-oil-nepal",
    "h1": "Hemp carrier oil",
    "metaTitle": "Hemp Carrier Oil — Bulk for Skincare Formulation, Nepal",
    "description": "Hemp seed oil as a cosmetic carrier oil from Nepal — a base for diluting essential oils and serums, with a favourable fatty-acid profile for skin.",
    "keywords": [
      "hemp carrier oil bulk",
      "hemp oil for essential oils",
      "carrier oil supplier Nepal"
    ],
    "lede": "A carrier oil's job is to dilute and deliver — hemp seed oil does that while adding its own fatty-acid benefits, which is why formulators reach for it over more inert options.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Why formulators choose hemp as a carrier",
        "ps": [
          "As a carrier oil, hemp seed oil dilutes concentrated essential oils and actives to safe application strength while contributing its own omega-3 and omega-6 fatty-acid profile to the finished blend — unlike fully inert carriers, it's doing double duty.",
          "It's a standard base for massage oils, facial serums, and aromatherapy blends, and pairs well with our winterized grade where visual clarity matters."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Favourable omega-3/omega-6 fatty-acid profile",
        "Suited to massage oils, serums, and aromatherapy blends",
        "Winterized option available for clear formulations",
        "Bulk and private-label packaging"
      ]
    },
    "faq": [
      {
        "q": "Is hemp seed oil a good carrier oil?",
        "a": "Yes — its fatty-acid profile is well suited to skin, it has a light texture, and it absorbs reasonably well, which is why it's a common choice for massage oils, serums, and essential-oil dilution."
      },
      {
        "q": "Should I use winterized or standard hemp oil as a carrier?",
        "a": "Winterized, if your product needs to stay visually clear in cold storage or transport — otherwise our standard cold-pressed grade works well for most carrier applications."
      }
    ],
    "inquirySubject": "[Hemp carrier oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "winterized-hemp-seed-oil-nepal",
      "cannabis-sativa-seed-oil-nepal"
    ]
  },
  {
    "slug": "high-gla-hemp-seed-oil-nepal",
    "h1": "High-GLA hemp seed oil",
    "metaTitle": "High-GLA Hemp Seed Oil — Gamma-Linolenic Acid Grade, Nepal",
    "description": "High-GLA hemp seed oil from Nepal — one of few plant seed oils containing meaningful gamma-linolenic acid, valued in nutraceutical and skincare formulation.",
    "keywords": [
      "high GLA hemp seed oil",
      "gamma linolenic acid hemp oil",
      "GLA oil supplier"
    ],
    "lede": "Most plant seed oils don't contain gamma-linolenic acid (GLA) at all. Hemp seed oil is a genuine exception — a real point of nutritional distinction, not a marketing label.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "A real point of difference",
        "ps": [
          "Hemp seed oil is one of a small number of plant oils that naturally contains gamma-linolenic acid (GLA), an omega-6 fatty acid associated with skin-barrier and anti-inflammatory research interest — most common seed oils (sunflower, soy, canola) don't contain meaningful amounts of it at all.",
          "That makes hemp seed oil a specific ingredient choice for nutraceutical and skincare formulators building around GLA content, rather than a general-purpose oil substitution."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Naturally occurring gamma-linolenic acid (GLA)",
        "A genuine point of difference from most seed oils",
        "Relevant to nutraceutical and skincare formulation",
        "Certificates of analysis with every batch"
      ]
    },
    "faq": [
      {
        "q": "What is GLA and why does it matter?",
        "a": "Gamma-linolenic acid is an omega-6 fatty acid found in very few plant oils. Hemp seed oil is one of the more notable natural sources, which is why nutraceutical and skincare formulators specifically seek it out."
      },
      {
        "q": "Do all hemp seed oil grades contain GLA?",
        "a": "GLA is naturally present in hemp seed oil generally; this page exists for buyers specifically sourcing around that property. Ask us for current batch composition data for your formulation."
      }
    ],
    "inquirySubject": "[High-GLA hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "cold-pressed-virgin-hemp-seed-oil-nepal",
      "cannabis-sativa-seed-oil-nepal"
    ]
  },
  {
    "slug": "wild-harvested-himalayan-hemp-seed-oil-nepal",
    "h1": "Wild-harvested Himalayan hemp seed oil",
    "metaTitle": "Wild-Harvested Himalayan Hemp Seed Oil — Origin Story, Nepal",
    "description": "Hemp seed oil from wild-growing Himalayan hemp in Nepal's hills — a provenance story built for heritage and premium-positioned brands.",
    "keywords": [
      "himalayan hemp seed oil",
      "wild hemp oil Nepal",
      "himalayan hemp origin"
    ],
    "lede": "Cannabis has grown wild across Nepal's hills for centuries. For brands that want provenance as much as they want an ingredient, that's the story this page tells.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "A provenance story commodity oil can't tell",
        "ps": [
          "Cannabis is native to the Himalayan foothills and has grown wild across Nepal's mid-hill and mountain regions for generations, long before industrial hemp existed as a modern commodity category — a genuine origin story rather than a marketing invention.",
          "For brands building a premium or heritage positioning — the same instinct that sells Nepali tea, pashmina, and honey on origin — this is the line to source from and the story to put on the label."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Genuine Himalayan wild-growing heritage",
        "Premium and heritage brand positioning",
        "Traceable to licensed cultivation origin once online",
        "Suited to storytelling-led product lines"
      ]
    },
    "faq": [
      {
        "q": "Is this literally wild-harvested, or cultivated?",
        "a": "Our production line is licensed, cultivated hemp — 'wild-harvested Himalayan' describes the plant's genuine regional heritage and origin story, not an unregulated foraging supply chain. We're clear about that distinction with every buyer."
      },
      {
        "q": "Why does provenance matter for a commodity like hemp oil?",
        "a": "Buyers building premium or heritage-branded products pay for a credible origin story as much as the ingredient itself — Himalayan provenance carries the same weight for hemp that it does for tea or pashmina."
      }
    ],
    "inquirySubject": "[Wild-harvested Himalayan hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "hemp-farmland-gandaki",
      "organic-hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "bulk-wholesale-hemp-seed-oil-nepal",
    "h1": "Bulk wholesale hemp seed oil",
    "metaTitle": "Bulk Hemp Seed Oil — Wholesale Pricing & MOQ, Nepal",
    "description": "Bulk wholesale hemp seed oil from Nepal by the drum, tote, or container — for buyers sourcing volume rather than a specific grade.",
    "keywords": [
      "bulk hemp seed oil wholesale",
      "hemp oil MOQ",
      "hemp oil drum wholesale",
      "hemp oil container load"
    ],
    "lede": "Some buyers know their volume before they know their grade. This page is the entry point for exactly that conversation.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Volume-first sourcing",
        "ps": [
          "For buyers whose first question is volume and price rather than grade or processing method, this is the entry point — tell us your required format (drum, IBC tote, or container load) and target volume, and we'll match you to the right grade and confirm indicative terms.",
          "Every wholesale conversation starts as a registered commitment ahead of licensed production, not a live transaction — see our samples page if you want product in hand before committing to volume."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Drum, IBC tote, and container-load formats",
        "Volume-based wholesale terms",
        "Matched to the grade that fits your application",
        "Export documentation support"
      ]
    },
    "faq": [
      {
        "q": "What's your minimum order quantity?",
        "a": "We're taking wholesale commitments now, ahead of licensed production, so MOQ is discussed per buyer rather than fixed. Tell us your volume and format and we'll confirm what's realistic."
      },
      {
        "q": "Can I get pricing now?",
        "a": "Not firm pricing — we're not yet in licensed production. We can discuss indicative terms and register your commitment for priority allocation once production begins."
      }
    ],
    "inquirySubject": "[Bulk wholesale hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "unrefined-crude-hemp-seed-oil-nepal",
      "private-label-hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "private-label-hemp-seed-oil-nepal",
    "h1": "Private label hemp seed oil",
    "metaTitle": "Private Label Hemp Seed Oil — White Label, Nepal",
    "description": "Private label hemp seed oil manufacturing from Nepal — your brand, our licensed Himalayan supply chain, for retailers building their own product line.",
    "keywords": [
      "hemp seed oil private label",
      "white label hemp oil",
      "hemp oil contract manufacturing"
    ],
    "lede": "You don't have to build a hemp supply chain to sell a hemp oil product — this is the white-label route, from our licensed cultivation to your label.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Your brand, our supply chain",
        "ps": [
          "Private label supply means you specify the grade, packaging format, and label, and we handle sourcing, testing, and fulfilment from our own licensed Himalayan production — the same route established beauty and food brands use to launch an ingredient line without building the supply chain themselves.",
          "This works alongside any of our hemp seed oil grades — cold-pressed, refined, organic, or carrier-oil — matched to your product's positioning."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Your label, our licensed supply chain",
        "Any hemp seed oil grade, matched to your product",
        "Small-batch to bulk production runs",
        "Full traceability and certificates of analysis"
      ]
    },
    "faq": [
      {
        "q": "What's the minimum order for private label?",
        "a": "It depends on the grade and packaging format — tell us your product concept and target volume and we'll confirm what's realistic as our production comes online."
      },
      {
        "q": "Can you help with formulation, not just raw oil supply?",
        "a": "We supply the ingredient and can advise on grade selection for your application; for full finished-product formulation (blends, actives, packaging design) we'd point you to a formulation partner and supply the hemp oil component."
      }
    ],
    "inquirySubject": "[Private label hemp seed oil] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "bulk-wholesale-hemp-seed-oil-nepal",
      "hemp-seed-oil-samples-nepal"
    ]
  },
  {
    "slug": "hemp-seed-oil-samples-nepal",
    "h1": "Hemp seed oil sample request",
    "metaTitle": "Request a Hemp Seed Oil Sample + COA, Nepal",
    "description": "Request a hemp seed oil sample and certificate of analysis from Nepal before committing to a wholesale or private-label order.",
    "keywords": [
      "hemp seed oil sample request",
      "hemp oil sample COA",
      "hemp oil trial order"
    ],
    "lede": "Before a bulk commitment, most serious buyers want product in hand. This is the low-friction way to get there.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Try before you commit",
        "ps": [
          "A sample request is the lowest-friction way to evaluate our hemp seed oil before a wholesale or private-label commitment — tell us which grade you're interested in (cold-pressed, refined, organic, or carrier oil) and we'll confirm sample availability and a certificate of analysis alongside it.",
          "As we're still ahead of full licensed production, sample availability depends on where our development timeline stands when you ask — register your interest now and we'll prioritise serious evaluators as supply comes online."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Small-quantity samples by grade",
        "Certificate of analysis included",
        "No minimum order for a sample request",
        "Priority allocation for serious evaluators"
      ]
    },
    "faq": [
      {
        "q": "Is a sample request free?",
        "a": "Terms depend on quantity and shipping destination — tell us what you need evaluated and we'll confirm."
      },
      {
        "q": "How long until I receive a sample?",
        "a": "It depends on where our production timeline stands when you ask, since we're not yet in full licensed production. Register your interest and we'll follow up with realistic timing."
      }
    ],
    "inquirySubject": "[Hemp seed oil sample request] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "private-label-hemp-seed-oil-nepal",
      "bulk-wholesale-hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "cannabis-sativa-seed-oil-nepal",
    "h1": "Cannabis Sativa Seed Oil (INCI)",
    "metaTitle": "Cannabis Sativa Seed Oil (INCI) — Bulk Supplier, Nepal",
    "description": "Cannabis Sativa Seed Oil — the exact INCI ingredient name cosmetic formulators search for and put on their labels. Verified Himalayan supply from Nepal.",
    "keywords": [
      "cannabis sativa seed oil supplier",
      "cannabis sativa seed oil INCI",
      "cannabis sativa seed oil wholesale"
    ],
    "lede": "Cannabis Sativa Seed Oil is the International Nomenclature of Cosmetic Ingredients (INCI) name for hemp seed oil — the exact string that appears on cosmetic ingredient labels and the exact term formulators and regulatory teams search for when sourcing.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Same ingredient, the name that matters for cosmetics",
        "ps": [
          "\"Hemp seed oil\" and \"Cannabis Sativa Seed Oil\" are the same ingredient — the INCI name is simply the standardized labelling term cosmetic regulations require on ingredient lists, and it's what formulators, regulatory affairs teams, and procurement systems search for by default.",
          "If you found this page searching the INCI name specifically, you're almost certainly sourcing for a cosmetic formulation — our cosmetic-grade and carrier-oil pages describe the specific processing options available for that use case."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Verified as Cannabis Sativa Seed Oil (INCI)",
        "Cosmetic-grade and carrier-oil processing options",
        "Certificates of analysis for regulatory files",
        "Bulk and private-label supply"
      ]
    },
    "faq": [
      {
        "q": "Is Cannabis Sativa Seed Oil legal to use in cosmetics?",
        "a": "Hemp seed oil (INCI: Cannabis Sativa Seed Oil) is a widely used cosmetic ingredient globally, since it's pressed from seed and contains no meaningful cannabinoid content. Confirm your specific destination market's cosmetic ingredient rules as part of your own regulatory process."
      },
      {
        "q": "Why does the INCI name matter if it's the same oil?",
        "a": "Regulatory and procurement systems search and file ingredients by their INCI name specifically — using the correct name is what makes an ingredient findable and compliant on a cosmetic label."
      }
    ],
    "inquirySubject": "[Cannabis Sativa Seed Oil (INCI)] Wholesale inquiry",
    category: "seed-oil",
    "related": [
      "hemp-seed-oil-nepal",
      "refined-hemp-seed-oil-nepal",
      "hemp-carrier-oil-nepal"
    ]
  },
  {
    "slug": "full-spectrum-hemp-extract-nepal",
    "h1": "Full-spectrum hemp extract",
    "metaTitle": "Full Spectrum Hemp Extract Supplier — Planned, Nepal",
    "description": "Full-spectrum hemp extract, retaining the plant's complete cannabinoid and terpene profile — planned for Himalaya Cannabis's licensed CBD line.",
    "keywords": [
      "full spectrum hemp extract supplier",
      "full spectrum cbd Nepal"
    ],
    "lede": "Full-spectrum extract keeps everything the plant produces — the whole cannabinoid and terpene profile, not just isolated CBD.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "What full-spectrum means",
        "ps": [
          "Full-spectrum extract retains the plant's complete range of naturally occurring cannabinoids and terpenes, rather than isolating a single compound — buyers choose it when they want the entourage effect associated with the whole-plant profile, within the legal THC ceiling.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Complete cannabinoid and terpene profile",
        "Within the legal THC ceiling",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is full-spectrum extract legal in Nepal?",
        "a": "It falls under the same medical and industrial cannabis licensing framework as our other CBD lines — lawful production and sale require the licences prevailing law requires, which we do not yet hold."
      },
      {
        "q": "How is this different from an isolate?",
        "a": "Full-spectrum keeps the whole cannabinoid and terpene profile; an isolate is a single purified compound. See our CBD isolate page for that alternative."
      }
    ],
    "inquirySubject": "[Full-spectrum hemp extract] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-oil-nepal",
      "broad-spectrum-cbd-distillate-nepal",
      "cbd-isolate-nepal"
    ]
  },
  {
    "slug": "broad-spectrum-cbd-distillate-nepal",
    "h1": "Broad-spectrum CBD distillate",
    "metaTitle": "Broad Spectrum CBD Distillate — Planned, Nepal",
    "description": "Broad-spectrum CBD distillate — the full cannabinoid profile minus detectable THC — planned for Himalaya Cannabis's licensed CBD line.",
    "keywords": [
      "broad spectrum cbd distillate",
      "thc free cbd distillate Nepal"
    ],
    "lede": "Broad-spectrum sits between full-spectrum and isolate: most of the plant's cannabinoid profile, with THC removed.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "The middle ground",
        "ps": [
          "Broad-spectrum distillate retains most of the plant's cannabinoid and terpene profile while THC is processed out to non-detectable levels — the choice for buyers who want a fuller profile than an isolate but need to avoid THC entirely for their market or product category.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Broad cannabinoid profile, THC removed",
        "Suited to THC-sensitive markets and products",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Does broad-spectrum contain any THC?",
        "a": "It's processed to remove THC to non-detectable levels, which is why buyers in THC-sensitive markets or product categories choose it over full-spectrum extract."
      },
      {
        "q": "Is this the same as an isolate?",
        "a": "No — isolate is a single purified cannabinoid; broad-spectrum retains a fuller cannabinoid and terpene profile minus THC."
      }
    ],
    "inquirySubject": "[Broad-spectrum CBD distillate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "full-spectrum-hemp-extract-nepal",
      "cbd-isolate-nepal",
      "thc-free-cbd-distillate-nepal"
    ]
  },
  {
    "slug": "cbd-crude-extract-nepal",
    "h1": "CBD crude extract",
    "metaTitle": "CBD Crude Extract Bulk — Planned, Nepal",
    "description": "CBD crude extract in bulk — the unrefined extraction output, for processors running their own downstream purification.",
    "keywords": [
      "cbd crude extract bulk",
      "crude hemp extract Nepal"
    ],
    "lede": "Crude extract is the first-stage output of cannabinoid extraction, before winterizing or distillation — a processing input, not a finished product.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A processing input, not a finished good",
        "ps": [
          "Crude extract is the raw output of the initial cannabinoid extraction step, before winterizing removes plant waxes or distillation further refines and concentrates it — buyers with their own downstream processing capacity source at this stage rather than buying finished distillate or isolate.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Unrefined, first-stage extraction output",
        "Supplied in bulk for downstream processors",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Who buys crude extract instead of finished distillate?",
        "a": "Processors and manufacturers with their own winterizing and refining capacity, who want to run those steps themselves rather than buy an already-finished product."
      },
      {
        "q": "What's the next processing step after crude extract?",
        "a": "Typically winterizing (removing waxes) followed by distillation — see our winterized CBD crude page for that intermediate stage."
      }
    ],
    "inquirySubject": "[CBD crude extract] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "winterized-cbd-crude-nepal",
      "cbd-distillate-nepal",
      "full-spectrum-hemp-extract-nepal"
    ]
  },
  {
    "slug": "winterized-cbd-crude-nepal",
    "h1": "Winterized CBD crude",
    "metaTitle": "Winterized CBD Crude — Planned, Nepal",
    "description": "Winterized CBD crude — plant waxes removed from crude extract, the intermediate step before distillation.",
    "keywords": [
      "winterized cbd crude",
      "winterized hemp extract Nepal"
    ],
    "lede": "Winterizing removes the plant waxes that come through in crude extraction — a clean-up step, not a full refinement.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A clean-up step before distillation",
        "ps": [
          "Winterizing filters natural plant waxes and lipids out of crude cannabinoid extract, improving purity and stability without the full processing distillation requires — a step some processors specifically want as an intermediate purchase point between crude and finished distillate.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Plant waxes removed from crude extract",
        "Intermediate purity between crude and distillate",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is winterized crude the same as distillate?",
        "a": "No — distillation is a further refinement step beyond winterizing. Winterized crude has waxes removed but hasn't been through distillation. See our CBD distillate page for the further-refined product."
      },
      {
        "q": "Why buy winterized crude instead of raw crude?",
        "a": "It's a cleaner, more stable intermediate for processors who want to skip running their own winterizing step but still handle final distillation or formulation themselves."
      }
    ],
    "inquirySubject": "[Winterized CBD crude] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-crude-extract-nepal",
      "cbd-distillate-nepal",
      "crystal-resistant-cbd-distillate-nepal"
    ]
  },
  {
    "slug": "cbd-distillate-nepal",
    "h1": "CBD distillate",
    "metaTitle": "CBD Distillate Bulk Supplier — Planned, Nepal",
    "description": "CBD distillate in bulk — a further-refined, concentrated cannabinoid extract, planned for Himalaya Cannabis's licensed CBD line.",
    "keywords": [
      "cbd distillate bulk supplier",
      "cbd distillate wholesale Nepal"
    ],
    "lede": "Distillate is what most finished CBD products are actually formulated from — concentrated, refined, and consistent batch to batch.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "The standard formulation input",
        "ps": [
          "Distillation concentrates and further purifies cannabinoid extract beyond winterizing, producing a viscous, high-potency oil that's the standard input for tinctures, topicals, and most finished CBD product formulation — the form most buyers further down our cannabinoid oils line will actually be sourcing.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Concentrated, high-potency cannabinoid extract",
        "Standard input for tinctures and topicals",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What products is CBD distillate used to make?",
        "a": "Tinctures, topicals, capsules, vape formulations, and most other finished CBD products — it's the standard concentrated input formulators build from."
      },
      {
        "q": "How concentrated is distillate compared to crude extract?",
        "a": "Distillation significantly increases cannabinoid concentration and purity compared to crude or winterized extract — exact potency depends on the specific run and is confirmed by certificate of analysis."
      }
    ],
    "inquirySubject": "[CBD distillate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "winterized-cbd-crude-nepal",
      "crystal-resistant-cbd-distillate-nepal",
      "cbd-in-mct-oil-nepal"
    ]
  },
  {
    "slug": "crystal-resistant-cbd-distillate-nepal",
    "h1": "Crystal-resistant CBD distillate",
    "metaTitle": "Crystal Resistant Distillate (CRD) — Planned, Nepal",
    "description": "Crystal-resistant CBD distillate (CRD) — formulated to stay in liquid form without crystallizing at high concentration, for vape and tincture buyers.",
    "keywords": [
      "crystal resistant distillate CRD",
      "cbd distillate no crystallization"
    ],
    "lede": "Standard distillate can crystallize at high concentration or low temperature — an issue for some formats. Crystal-resistant distillate is engineered against exactly that.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Why crystallization is a real formulation problem",
        "ps": [
          "At high cannabinoid concentrations, standard distillate can crystallize — CBD forming visible solid crystals rather than staying in liquid form, which is a defect in vape cartridges and some tinctures. Crystal-resistant distillate (CRD) is processed specifically to stay liquid and stable at concentration.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Engineered to resist crystallization at high concentration",
        "Suited to vape cartridges and clear tinctures",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Why does CBD distillate crystallize?",
        "a": "At high purity and concentration, CBD's natural tendency is to form crystals rather than stay in liquid form — a known formulation issue that crystal-resistant processing specifically addresses."
      },
      {
        "q": "Do I need CRD for a tincture, or just for vape products?",
        "a": "It depends on your formulation's concentration and storage conditions — tell us your product format and target concentration and we can advise which grade fits."
      }
    ],
    "inquirySubject": "[Crystal-resistant CBD distillate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-distillate-nepal",
      "cbd-isolate-nepal",
      "thc-free-cbd-distillate-nepal"
    ]
  },
  {
    "slug": "thc-free-cbd-distillate-nepal",
    "h1": "THC-free CBD distillate",
    "metaTitle": "THC Free CBD Distillate — Planned, Nepal",
    "description": "THC-free CBD distillate — cannabinoid profile with THC removed to non-detectable levels, for buyers in THC-zero-tolerance markets.",
    "keywords": [
      "thc free cbd distillate",
      "zero thc cbd oil Nepal"
    ],
    "lede": "Some markets and buyers won't accept any detectable THC at all, not just below-threshold levels. This is the distillate built for that requirement.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "For zero-tolerance markets",
        "ps": [
          "THC-free distillate is processed to remove THC to non-detectable levels — a stricter standard than simply staying under a legal percentage threshold, built for buyers whose destination market, employer drug-testing policies, or brand positioning require zero detectable THC rather than merely compliant THC.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "THC removed to non-detectable levels",
        "Suited to zero-tolerance markets and buyers",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is 'non-detectable' the same as 'zero'?",
        "a": "Non-detectable means THC falls below what standard lab testing can measure — the practical standard the industry uses when a buyer requires 'THC-free' rather than merely 'below the legal threshold.'"
      },
      {
        "q": "Which buyers typically need THC-free specifically?",
        "a": "Buyers in markets with zero-tolerance THC rules, and brands or employers with strict internal drug-testing policies that any detectable THC would conflict with."
      }
    ],
    "inquirySubject": "[THC-free CBD distillate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "broad-spectrum-cbd-distillate-nepal",
      "cbd-isolate-nepal",
      "crystal-resistant-cbd-distillate-nepal"
    ]
  },
  {
    "slug": "cbd-isolate-nepal",
    "h1": "CBD isolate",
    "metaTitle": "CBD Isolate Bulk (kg) — Planned, Nepal",
    "description": "CBD isolate in bulk kilogram quantities — pure, single-compound cannabidiol with no other cannabinoids, terpenes, or plant compounds.",
    "keywords": [
      "cbd isolate bulk kg",
      "pure cbd isolate Nepal",
      "cbd isolate powder wholesale"
    ],
    "lede": "Isolate is CBD and nothing else — the purest, simplest form, and the easiest to formulate around precisely.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "The purest form",
        "ps": [
          "CBD isolate is cannabidiol purified to remove all other cannabinoids, terpenes, and plant compounds — typically a crystalline powder at very high purity, chosen by formulators who want to dose CBD precisely without any other plant compound influencing the finished product's profile or regulatory classification.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Purified single-compound CBD, no other cannabinoids",
        "Typically supplied as crystalline powder",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Why choose isolate over full or broad-spectrum extract?",
        "a": "Precision and simplicity — isolate lets a formulator dose CBD exactly without accounting for any other cannabinoid or terpene in the mix, and it contains zero THC by definition."
      },
      {
        "q": "What purity level does CBD isolate reach?",
        "a": "Isolate is typically very high purity by definition — exact specification is confirmed by certificate of analysis once our licensed production is online."
      }
    ],
    "inquirySubject": "[CBD isolate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbg-isolate-nepal",
      "cbn-isolate-nepal",
      "water-soluble-cbd-nepal"
    ]
  },
  {
    "slug": "cbg-isolate-nepal",
    "h1": "CBG isolate",
    "metaTitle": "CBG Isolate Wholesale — Planned, Nepal",
    "description": "CBG isolate — purified cannabigerol, a minor cannabinoid of growing formulation interest, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "cbg isolate wholesale",
      "cannabigerol isolate Nepal"
    ],
    "lede": "CBG is often called the 'mother cannabinoid' — the compound other cannabinoids derive from during the plant's growth — and it's drawing its own dedicated buyer interest.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A minor cannabinoid with growing interest",
        "ps": [
          "Cannabigerol (CBG) is one of the minor cannabinoids the cannabis plant produces in smaller quantities than THC or CBD, and it's the precursor compound other cannabinoids form from as the plant matures — a distinct research and formulation profile that's drawn its own dedicated buyer base, separate from mainstream CBD.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Purified single-compound CBG",
        "Distinct profile from CBD and THC",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What is CBG?",
        "a": "Cannabigerol, a minor cannabinoid the plant produces in smaller amounts and which acts as a biochemical precursor to other cannabinoids during growth."
      },
      {
        "q": "Is CBG the same as CBD?",
        "a": "No — they're distinct cannabinoids with different profiles. CBG is produced in much smaller quantities by the plant, which generally makes it a higher-cost, more specialised ingredient than CBD."
      }
    ],
    "inquirySubject": "[CBG isolate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-isolate-nepal",
      "cbga-extract-nepal",
      "minor-cannabinoids-nepal"
    ]
  },
  {
    "slug": "cbn-isolate-nepal",
    "h1": "CBN isolate",
    "metaTitle": "CBN Isolate Supplier — Planned, Nepal",
    "description": "CBN isolate — purified cannabinol, formed as cannabis ages, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "cbn isolate supplier",
      "cannabinol isolate Nepal"
    ],
    "lede": "CBN forms as THC degrades over time — a distinct compound with its own dedicated formulation interest, separate from fresh-plant cannabinoids.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A cannabinoid formed by aging",
        "ps": [
          "Cannabinol (CBN) forms as THC oxidizes and degrades over time, rather than being a primary compound the fresh plant produces in quantity — a distinctive origin among cannabinoids, and one that's drawn dedicated formulation interest of its own.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Purified single-compound CBN",
        "Distinct formation pathway from other cannabinoids",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What is CBN and how is it different from CBD?",
        "a": "CBN (cannabinol) forms primarily as THC degrades with age, while CBD is a primary compound the fresh plant produces directly — different origin, different profile."
      },
      {
        "q": "Is CBN psychoactive?",
        "a": "We're not making pharmacological or effects claims on this page — talk to your own regulatory and formulation advisors about how CBN is classified and marketed in your destination market."
      }
    ],
    "inquirySubject": "[CBN isolate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-isolate-nepal",
      "cbg-isolate-nepal",
      "cbc-isolate-nepal"
    ]
  },
  {
    "slug": "cbc-isolate-nepal",
    "h1": "CBC isolate",
    "metaTitle": "CBC Isolate Bulk — Planned, Nepal",
    "description": "CBC isolate — purified cannabichromene, a lesser-known minor cannabinoid, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "cbc isolate bulk",
      "cannabichromene isolate Nepal"
    ],
    "lede": "CBC is one of the plant's original four major cannabinoid precursors — but far less studied and sourced commercially than THC or CBD.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "One of the plant's original cannabinoids",
        "ps": [
          "Cannabichromene (CBC) is among the cannabis plant's original major cannabinoids, alongside THC and CBD, though it has received far less commercial and research attention — buyers formulating minor-cannabinoid blends or researching its specific profile are the primary audience for this line.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Purified single-compound CBC",
        "One of the plant's original major cannabinoids",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What is CBC?",
        "a": "Cannabichromene, one of the cannabis plant's original major cannabinoids alongside THC and CBD, though far less commercially developed."
      },
      {
        "q": "Who typically sources CBC isolate?",
        "a": "Formulators building minor-cannabinoid or multi-cannabinoid blends, and researchers specifically studying CBC's individual profile."
      }
    ],
    "inquirySubject": "[CBC isolate] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbn-isolate-nepal",
      "cbg-isolate-nepal",
      "minor-cannabinoids-nepal"
    ]
  },
  {
    "slug": "cbda-raw-hemp-extract-nepal",
    "h1": "CBDA raw hemp extract",
    "metaTitle": "CBDA Raw Hemp Extract — Planned, Nepal",
    "description": "CBDA raw hemp extract — the acidic precursor to CBD, present in the unheated plant, for buyers sourcing the raw cannabinoid form.",
    "keywords": [
      "cbda raw hemp extract",
      "cannabidiolic acid extract Nepal"
    ],
    "lede": "Before heat converts it to CBD, the plant produces CBDA — the acidic precursor form some buyers want specifically, unconverted.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "The acidic precursor form",
        "ps": [
          "Cannabidiolic acid (CBDA) is the raw, acidic compound the living plant produces, which converts to CBD through heating (decarboxylation) — some formulators and researchers specifically want the raw, unconverted CBDA form rather than heat-processed CBD, for its own distinct profile.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Raw, unconverted acidic cannabinoid form",
        "Distinct from heat-processed CBD",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What's the difference between CBDA and CBD?",
        "a": "CBDA is the raw acidic form the plant naturally produces; heating (decarboxylation) converts it to CBD. Buyers who want the unconverted form specifically source CBDA rather than CBD."
      },
      {
        "q": "Why would a buyer want CBDA instead of CBD?",
        "a": "Some formulators and researchers are specifically interested in the raw, unheated cannabinoid profile rather than the heat-converted form — the two compounds behave differently."
      }
    ],
    "inquirySubject": "[CBDA raw hemp extract] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbga-extract-nepal",
      "full-spectrum-hemp-extract-nepal",
      "minor-cannabinoids-nepal"
    ]
  },
  {
    "slug": "cbga-extract-nepal",
    "h1": "CBGA extract",
    "metaTitle": "CBGA Extract Supplier — Planned, Nepal",
    "description": "CBGA extract — cannabigerolic acid, the raw precursor compound the plant converts into other cannabinoids, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "cbga extract supplier",
      "cannabigerolic acid extract Nepal"
    ],
    "lede": "CBGA is the single compound the plant converts into THCA, CBDA, and CBCA as it grows — the true starting point of the plant's cannabinoid chemistry.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "The plant's starting compound",
        "ps": [
          "Cannabigerolic acid (CBGA) is the precursor compound from which the plant's enzymes produce THCA, CBDA, and CBCA as it matures — sourcing CBGA directly, before that conversion happens, serves a narrow but specific research and formulation audience.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Raw precursor to THCA, CBDA, and CBCA",
        "A narrow, specialist sourcing category",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What is CBGA used for?",
        "a": "Primarily research and specialised formulation work studying the plant's earliest cannabinoid-synthesis stage, before it converts into THCA, CBDA, or CBCA."
      },
      {
        "q": "Is CBGA the same as CBG?",
        "a": "No — CBGA is the acidic precursor; CBG is the decarboxylated (heat-converted) form. See our CBG isolate page for that converted product."
      }
    ],
    "inquirySubject": "[CBGA extract] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbda-raw-hemp-extract-nepal",
      "cbg-isolate-nepal",
      "thcv-extract-nepal"
    ]
  },
  {
    "slug": "thcv-extract-nepal",
    "h1": "THCV extract",
    "metaTitle": "THCV Extract — Planned, Nepal",
    "description": "THCV extract — tetrahydrocannabivarin, a minor cannabinoid with a distinct profile from THC, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "thcv extract Nepal",
      "tetrahydrocannabivarin supplier"
    ],
    "lede": "THCV shares part of its name with THC but behaves differently — a distinct minor cannabinoid with its own dedicated research and formulation interest.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A distinct minor cannabinoid",
        "ps": [
          "Tetrahydrocannabivarin (THCV) is chemically related to THC but produced by the plant in much smaller quantities and associated with a different profile — it's drawn dedicated research and formulation interest as a distinct ingredient in its own right, separate from mainstream THC or CBD sourcing.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Purified minor cannabinoid, distinct from THC",
        "Produced by the plant in small quantities",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is THCV the same as THC?",
        "a": "No — while chemically related, THCV is a distinct compound with a different profile, and the plant produces it in much smaller quantities."
      },
      {
        "q": "Why is THCV harder to source than CBD?",
        "a": "Because the plant naturally produces far less of it, extraction and isolation at commercial volume is more specialised and lower-yield than mainstream CBD extraction."
      }
    ],
    "inquirySubject": "[THCV extract] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbga-extract-nepal",
      "minor-cannabinoids-nepal",
      "cbc-isolate-nepal"
    ]
  },
  {
    "slug": "water-soluble-cbd-nepal",
    "h1": "Water-soluble CBD",
    "metaTitle": "Water Soluble CBD Bulk — Planned, Nepal",
    "description": "Water-soluble CBD — cannabinoid processed for solubility in water-based products, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "water soluble cbd bulk",
      "water soluble cannabinoid Nepal"
    ],
    "lede": "CBD is naturally oil-soluble, not water-soluble — a real formulation obstacle for beverage and water-based product buyers, which this line specifically addresses.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Solving a real formulation problem",
        "ps": [
          "Cannabinoids are naturally fat-soluble, which makes them difficult to blend evenly into water-based products like beverages, water-based topicals, or effervescent formats — water-soluble CBD is specifically processed (typically nano-emulsified or encapsulated) to disperse evenly in water, opening formulation categories oil-based CBD can't reach.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Disperses evenly in water-based formulations",
        "Opens beverage and water-based product categories",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Why can't I just add regular CBD oil to a beverage?",
        "a": "Oil-based CBD doesn't mix evenly into water — it separates. Water-soluble CBD is processed specifically to disperse and stay stable in water-based formulations like drinks."
      },
      {
        "q": "Is this the same as nano-emulsified CBD?",
        "a": "Nano-emulsification is one common method used to make CBD water-soluble — see our nano-emulsified CBD page for that specific format."
      }
    ],
    "inquirySubject": "[Water-soluble CBD] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "nano-emulsified-cbd-nepal",
      "cbd-isolate-nepal",
      "cbd-in-mct-oil-nepal"
    ]
  },
  {
    "slug": "nano-emulsified-cbd-nepal",
    "h1": "Nano-emulsified CBD",
    "metaTitle": "Nano Emulsified CBD Powder — Planned, Nepal",
    "description": "Nano-emulsified CBD — cannabinoid particles reduced to nanoscale for faster absorption and water dispersibility. Planned for our cannabinoid line.",
    "keywords": [
      "nano emulsified cbd powder",
      "nano cbd Nepal"
    ],
    "lede": "Reducing CBD to nanoscale particles changes how it behaves — better water dispersion, and formulators report faster onset in some applications.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "What nano-emulsification changes",
        "ps": [
          "Nano-emulsification breaks cannabinoid oil down into extremely small particles suspended in a stable emulsion, which improves water dispersibility and is associated with faster bioavailability in some product formats compared to standard oil-based CBD — a more technically involved process than simple water-soluble processing, chosen by buyers building premium beverage or fast-acting product lines.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Nanoscale particle size for water dispersion",
        "Associated with faster bioavailability in some formats",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is nano-emulsified CBD the same as water-soluble CBD?",
        "a": "Related — nano-emulsification is one specific, more technically involved method of achieving water solubility. See our water-soluble CBD page for the broader category."
      },
      {
        "q": "What products typically use nano-emulsified CBD?",
        "a": "Premium beverages, fast-acting tinctures, and other formats where faster onset or fine water dispersion is a specific selling point."
      }
    ],
    "inquirySubject": "[Nano-emulsified CBD] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "water-soluble-cbd-nepal",
      "cbd-in-mct-oil-nepal",
      "cbd-isolate-nepal"
    ]
  },
  {
    "slug": "cbd-in-mct-oil-nepal",
    "h1": "CBD in MCT oil",
    "metaTitle": "CBD in MCT Oil Bulk — Planned, Nepal",
    "description": "CBD pre-blended in MCT (coconut-derived) carrier oil — a ready-to-bottle tincture base, planned for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "cbd in mct oil bulk",
      "cbd mct tincture Nepal"
    ],
    "lede": "Most CBD tinctures on shelf are CBD blended into MCT oil, not sold neat — this is that pre-blended, ready-to-bottle format.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A ready-to-bottle tincture base",
        "ps": [
          "MCT (medium-chain triglyceride) oil, typically derived from coconut, is the most common carrier for CBD tinctures on the market — pre-blending CBD distillate or isolate into MCT oil at a specified concentration gives brands a ready-to-bottle base rather than requiring them to source and blend the two components separately.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Pre-blended CBD in MCT carrier oil",
        "Ready-to-bottle tincture base",
        "Custom concentration by request",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Why MCT oil specifically, and not another carrier?",
        "a": "MCT oil is neutral in flavour, stable, and well tolerated, which is why it's become the default carrier for most CBD tinctures on the market."
      },
      {
        "q": "Can you blend to a specific concentration?",
        "a": "Yes — tell us your target CBD concentration and bottle format and we'll confirm what's feasible once licensed production is online."
      }
    ],
    "inquirySubject": "[CBD in MCT oil] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-in-hemp-seed-oil-tincture-nepal",
      "cbd-distillate-nepal",
      "cbd-isolate-nepal"
    ]
  },
  {
    "slug": "cbd-in-hemp-seed-oil-tincture-nepal",
    "h1": "CBD in hemp seed oil tincture",
    "metaTitle": "CBD Hemp Seed Oil Tincture Bulk — Planned, Nepal",
    "description": "CBD pre-blended in hemp seed oil — an all-hemp tincture base pairing our own seed oil and cannabinoid lines, planned for Himalaya Cannabis.",
    "keywords": [
      "cbd hemp seed oil tincture bulk",
      "all hemp cbd tincture Nepal"
    ],
    "lede": "Instead of MCT oil, this pairs CBD with our own hemp seed oil as the carrier — an all-hemp product story from a single supply chain.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "An all-hemp tincture, one supply chain",
        "ps": [
          "Rather than blending CBD into a coconut-derived MCT carrier, this pre-blends it into our own hemp seed oil — giving brands an 'all-hemp' story on the label, sourced from a single Himalayan supply chain rather than two separate ingredient origins.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Pre-blended CBD in our own hemp seed oil",
        "All-hemp product story, single supply chain",
        "Custom concentration by request",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Why choose this over a CBD-in-MCT tincture?",
        "a": "Brand story mainly — an all-hemp product sourced from a single supply chain, versus a hemp cannabinoid blended into a coconut-derived carrier. Functionally both work well as tincture bases."
      },
      {
        "q": "Can I choose the hemp seed oil grade used as the base?",
        "a": "Yes — tell us if you want a cold-pressed, refined, or organic hemp seed oil base and we'll confirm what's feasible."
      }
    ],
    "inquirySubject": "[CBD in hemp seed oil tincture] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbd-in-mct-oil-nepal",
      "cbd-oil-nepal",
      "hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "minor-cannabinoids-nepal",
    "h1": "Minor cannabinoids",
    "metaTitle": "Minor Cannabinoids Supplier — Planned, Nepal",
    "description": "Minor cannabinoids beyond THC and CBD — CBG, CBN, CBC, CBDA, CBGA, and THCV — planned as a category for Himalaya Cannabis's cannabinoid line.",
    "keywords": [
      "minor cannabinoids supplier",
      "rare cannabinoids Nepal"
    ],
    "lede": "Beyond THC and CBD, the plant produces a long list of minor cannabinoids — this page is the hub for buyers exploring that wider category.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Beyond THC and CBD",
        "ps": [
          "The cannabis plant produces dozens of cannabinoids beyond the two most commercially developed — THC and CBD. CBG, CBN, CBC, CBDA, CBGA, and THCV are among the minor cannabinoids drawing their own dedicated research and formulation interest, each with a distinct profile and origin in the plant's chemistry.",
          "See our individual cannabinoid pages for detail on each, or register general interest here if you're exploring the category broadly rather than one specific compound.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "A hub for CBG, CBN, CBC, CBDA, CBGA, and THCV",
        "Individual cannabinoid pages available for each",
        "Certificate of analysis per batch, once licensed",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Which minor cannabinoid should I source?",
        "a": "It depends entirely on your research or formulation goal — each has a distinct profile. Tell us what you're building and we can point you to the right individual page."
      },
      {
        "q": "Are minor cannabinoids harder to source than CBD?",
        "a": "Generally yes — the plant produces them in smaller quantities than CBD, which typically makes extraction and isolation more specialised and lower-yield."
      }
    ],
    "inquirySubject": "[Minor cannabinoids] Wholesale interest",
    category: "cannabinoid",
    "related": [
      "cbg-isolate-nepal",
      "cbn-isolate-nepal",
      "cbc-isolate-nepal"
    ]
  },
  {
    "slug": "hemp-essential-oil-nepal",
    "h1": "Hemp flower essential oil",
    "metaTitle": "Hemp Essential Oil Supplier — Planned, Nepal",
    "description": "Hemp flower essential oil, steam-distilled from the plant's aromatic compounds — a distinct product from both hemp seed oil and CBD extract.",
    "keywords": [
      "hemp essential oil supplier",
      "hemp flower essential oil Nepal"
    ],
    "lede": "Essential oil is neither seed oil nor CBD extract — it's steam-distilled from the flower to capture aroma, not cannabinoids.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A third, distinct hemp product",
        "ps": [
          "Hemp essential oil is steam-distilled from the flower to capture its aromatic terpene compounds, in the same process used for lavender or peppermint essential oil — chemically and functionally distinct from both pressed hemp seed oil (a food/cosmetic oil) and CBD extract (a cannabinoid concentrate). This is a genuinely separate product, not another name for either.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Steam-distilled from hemp flower",
        "Captures aromatic terpene compounds",
        "Distinct from hemp seed oil and CBD extract",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is hemp essential oil the same as CBD oil?",
        "a": "No — essential oil is steam-distilled for aroma compounds (terpenes) and generally contains negligible cannabinoids. CBD oil is extracted specifically for its cannabinoid content. They serve different purposes entirely."
      },
      {
        "q": "What is hemp essential oil used for?",
        "a": "Aromatherapy and fragrance applications, primarily, valued for its terpene profile rather than any cannabinoid content."
      }
    ],
    "inquirySubject": "[Hemp flower essential oil] Wholesale interest",
    category: "essential-oil",
    "related": [
      "hemp-terpene-blend-nepal",
      "hemp-hydrosol-nepal",
      "cbd-oil-nepal"
    ]
  },
  {
    "slug": "hemp-terpene-blend-nepal",
    "h1": "Hemp terpene blend",
    "metaTitle": "Hemp Terpene Blend Bulk — Planned, Nepal",
    "description": "Hemp terpene blends — the aromatic compounds responsible for cannabis's characteristic scent, supplied for flavour and fragrance formulation.",
    "keywords": [
      "hemp terpene blend bulk",
      "cannabis terpenes Nepal"
    ],
    "lede": "Terpenes are what give hemp and cannabis their characteristic aroma — and they're increasingly sourced on their own, independent of any cannabinoid product.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "The aroma, sourced separately",
        "ps": [
          "Terpenes are the aromatic compounds responsible for cannabis's characteristic scent profile, and they're increasingly sourced as standalone ingredients for flavour and fragrance formulation, independent of any cannabinoid product — a blend can be matched to a specific strain-like aroma profile for buyers building that positioning.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Blended terpene profiles for flavour and fragrance",
        "Independent of any cannabinoid content",
        "Custom profile matching by request",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Do terpene blends contain THC or CBD?",
        "a": "No — terpenes are aromatic compounds, chemically distinct from cannabinoids. A terpene blend can be entirely cannabinoid-free."
      },
      {
        "q": "Can you match a specific aroma profile?",
        "a": "Tell us the profile you're targeting and we'll confirm what's feasible as our terpene line develops."
      }
    ],
    "inquirySubject": "[Hemp terpene blend] Wholesale interest",
    category: "essential-oil",
    "related": [
      "hemp-essential-oil-nepal",
      "cannabis-terpene-isolates-nepal",
      "hemp-hydrosol-nepal"
    ]
  },
  {
    "slug": "cannabis-terpene-isolates-nepal",
    "h1": "Cannabis terpene isolates",
    "metaTitle": "Cannabis Terpene Isolate — Planned, Nepal",
    "description": "Individual cannabis terpene isolates — myrcene, limonene, pinene, and others — for buyers formulating a precise, single-compound aroma profile.",
    "keywords": [
      "cannabis terpene isolate",
      "myrcene limonene pinene Nepal"
    ],
    "lede": "Beyond blended terpene profiles, some buyers want a single terpene compound, isolated and precise.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Single-compound precision",
        "ps": [
          "Where a terpene blend gives a general aroma profile, an isolate is a single purified terpene compound — myrcene, limonene, or pinene among the more commercially recognised examples — for formulators who need to dose one specific aromatic compound precisely rather than work with a pre-set blend.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Single purified terpene compounds",
        "Precise dosing for exact formulation needs",
        "Available terpenes confirmed as our line develops",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What terpenes will you offer as isolates?",
        "a": "Availability depends on our extraction line as it comes online — tell us the specific terpene you need and we'll confirm feasibility."
      },
      {
        "q": "How is a terpene isolate different from a blend?",
        "a": "A blend combines multiple terpenes into a pre-set aroma profile; an isolate is a single purified compound for precise, custom formulation."
      }
    ],
    "inquirySubject": "[Cannabis terpene isolates] Wholesale interest",
    category: "essential-oil",
    "related": [
      "hemp-terpene-blend-nepal",
      "hemp-essential-oil-nepal",
      "minor-cannabinoids-nepal"
    ]
  },
  {
    "slug": "hemp-hydrosol-nepal",
    "h1": "Hemp hydrosol",
    "metaTitle": "Hemp Hydrosol Wholesale — Planned, Nepal",
    "description": "Hemp hydrosol — the aromatic water byproduct of steam-distilling hemp essential oil, for gentle toners, mists, and skincare formulation.",
    "keywords": [
      "hemp hydrosol wholesale",
      "hemp flower water Nepal"
    ],
    "lede": "Hydrosol is what's left in the still after essential oil is separated out — a gentler, water-based aromatic product with its own dedicated buyer base.",
    "status": "planned",
    "statusNote": "Planned. Production and sale begin only under the licences required by prevailing law. This is a capability and pipeline page, not a current offer — wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A byproduct with its own market",
        "ps": [
          "When hemp flower is steam-distilled to produce essential oil, the aromatic water that remains in the still — the hydrosol — is collected separately as its own product, valued in skincare for its gentler concentration compared to essential oil, well suited to toners, facial mists, and sensitive-skin formulations.",
          "Pending licensing under Nepal's medical and industrial cannabis framework. Not currently available for supply."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Aromatic water byproduct of essential oil distillation",
        "Gentler concentration than essential oil",
        "Suited to toners and facial mists",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is hydrosol the same as essential oil?",
        "a": "No — hydrosol is the water-based byproduct collected during essential oil distillation, much lower in concentration and gentler on skin than the essential oil itself."
      },
      {
        "q": "What's hydrosol typically used for?",
        "a": "Facial toners, mists, and skincare formulations where a gentle, water-based aromatic product is preferred over concentrated essential oil."
      }
    ],
    "inquirySubject": "[Hemp hydrosol] Wholesale interest",
    category: "essential-oil",
    "related": [
      "hemp-essential-oil-nepal",
      "hemp-terpene-blend-nepal",
      "hemp-carrier-oil-nepal"
    ]
  },
  {
    "slug": "whole-hemp-seed-bulk-nepal",
    "h1": "Whole hemp seed, bulk",
    "metaTitle": "Whole Hemp Seed Bulk Supplier — Nepal",
    "description": "Whole, unhulled hemp seed from Nepal in bulk — for buyers processing their own seed, whether for food, planting stock, or bird and animal feed.",
    "keywords": [
      "whole hemp seed bulk supplier",
      "unhulled hemp seed Nepal"
    ],
    "lede": "Whole seed, hull and all, is the rawest form we supply — for buyers who want to hull, press, or mill it themselves.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "The rawest form",
        "ps": [
          "Whole hemp seed — hull intact — is supplied in bulk to buyers who run their own downstream processing: dehulling for hemp hearts, pressing for oil, or milling for flour, as well as buyers sourcing for planting stock or bird and animal feed.",
          "It's typically our lowest-cost entry point into the hemp seed line for buyers with existing processing capacity of their own."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Whole, unhulled hemp seed",
        "Bulk supply for downstream processing",
        "Suited to food, feed, and planting-stock buyers",
        "Certificates of analysis available"
      ]
    },
    "faq": [
      {
        "q": "Is whole hemp seed the same as hemp hearts?",
        "a": "No — hemp hearts are the hulled (dehulled) kernel, ready to eat. Whole seed still has its hull intact. See our hulled hemp hearts page for the ready-to-eat form."
      },
      {
        "q": "Can I buy whole seed for planting?",
        "a": "Cultivation seed for licensed growers is a separate line with its own compliance requirements — see our hemp seeds page for that distinction."
      }
    ],
    "inquirySubject": "[Whole hemp seed, bulk] Wholesale inquiry",
    category: "seed-food",
    "related": [
      "hemp-seeds-nepal",
      "hulled-hemp-hearts-nepal",
      "hemp-press-cake-nepal"
    ]
  },
  {
    "slug": "hulled-hemp-hearts-nepal",
    "h1": "Hulled hemp hearts",
    "metaTitle": "Hulled Hemp Seeds (Hemp Hearts) Bulk — Nepal",
    "description": "Hulled hemp hearts from Nepal in bulk — the ready-to-eat, dehulled seed popular in health-food retail and nutrition brands.",
    "keywords": [
      "hulled hemp seeds bulk",
      "hemp hearts supplier Nepal"
    ],
    "lede": "Dehulled and ready to eat straight from the bag — hemp hearts are the retail-familiar form of hemp seed, sold loose over salads, yogurt, and smoothies.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "The retail-familiar form",
        "ps": [
          "Hemp hearts are hemp seed with the hull removed, leaving the soft, nutty-tasting kernel ready to eat as-is — the form most familiar to health-food retail shoppers, typically sold loose as a topping for salads, yoghurt, and smoothie bowls.",
          "We supply in bulk to food brands and retailers packaging their own private-label hemp hearts product."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Dehulled, ready-to-eat hemp kernel",
        "Bulk supply for private-label packaging",
        "Suited to health-food retail positioning",
        "Certificates of analysis available"
      ]
    },
    "faq": [
      {
        "q": "Do hemp hearts need to be cooked?",
        "a": "No — they're ready to eat as-is, typically sprinkled over food rather than cooked."
      },
      {
        "q": "What's the difference between hemp hearts and hemp seed oil?",
        "a": "Hemp hearts are the whole dehulled seed, eaten as a food topping. Hemp seed oil is pressed from the seed. Different products, same starting seed."
      }
    ],
    "inquirySubject": "[Hulled hemp hearts] Wholesale inquiry",
    category: "seed-food",
    "related": [
      "whole-hemp-seed-bulk-nepal",
      "hemp-protein-powder-nepal",
      "dehulled-kernel-pressed-hemp-seed-oil-nepal"
    ]
  },
  {
    "slug": "hemp-protein-powder-nepal",
    "h1": "Hemp protein powder",
    "metaTitle": "Hemp Protein Powder Bulk Supplier — Nepal",
    "description": "Hemp protein powder from Nepal, milled from press cake in bulk — for supplement and nutrition brands building a plant-protein line.",
    "keywords": [
      "hemp protein powder bulk supplier",
      "hemp protein Nepal wholesale"
    ],
    "lede": "Protein powder is what's left of the seed's nutrition after oil pressing — milled fine, and increasingly in demand from plant-protein brands.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "A byproduct that's become its own product",
        "ps": [
          "After hemp seed oil is pressed out, the remaining press cake — still rich in protein and fibre — is milled into protein powder, a complete plant protein that's become a standalone product category as demand for alternative proteins has grown.",
          "We supply in bulk to supplement manufacturers and nutrition brands building their own finished protein products."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Milled from hemp seed press cake",
        "Complete plant protein profile",
        "Bulk supply for supplement brands",
        "Certificates of analysis available"
      ]
    },
    "faq": [
      {
        "q": "Is hemp protein a complete protein?",
        "a": "Yes — hemp protein contains all essential amino acids, which is part of why it's positioned alongside other complete plant proteins in the supplement market."
      },
      {
        "q": "What's the difference between protein powder and flour?",
        "a": "Both are milled from press cake — protein powder is typically processed to concentrate protein content further, while flour retains more of the cake's natural composition. Tell us your target protein percentage and we'll confirm what fits."
      }
    ],
    "inquirySubject": "[Hemp protein powder] Wholesale inquiry",
    category: "seed-food",
    "related": [
      "hemp-press-cake-nepal",
      "hemp-flour-nepal",
      "hulled-hemp-hearts-nepal"
    ]
  },
  {
    "slug": "hemp-press-cake-nepal",
    "h1": "Hemp seed press cake",
    "metaTitle": "Hemp Seed Cake (Animal Feed) — Nepal",
    "description": "Hemp seed press cake from Nepal, the byproduct of oil pressing — supplied in bulk for animal feed and further milling.",
    "keywords": [
      "hemp seed cake animal feed",
      "hemp press cake bulk Nepal"
    ],
    "lede": "Pressing oil from hemp seed leaves a solid cake behind — still nutrient-dense, and a real product in its own right rather than waste.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "Not a waste product",
        "ps": [
          "Press cake is the solid residue left after hemp seed oil is pressed out — still dense in protein and fibre, which makes it a genuine feed-grade product for livestock and poultry, and the raw material for our protein powder and flour lines rather than a byproduct to dispose of.",
          "We supply it in bulk, either as feed-grade cake directly or as the input for buyers running their own milling."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Byproduct of hemp seed oil pressing",
        "Protein- and fibre-dense feed-grade product",
        "Raw material for protein powder and flour",
        "Bulk supply available"
      ]
    },
    "faq": [
      {
        "q": "Is press cake safe as animal feed?",
        "a": "Hemp seed cake is used as a feed ingredient in several markets; confirm your destination market's specific feed regulations as part of your own sourcing process."
      },
      {
        "q": "Can I buy cake to mill into protein powder myself?",
        "a": "Yes — we supply press cake directly to buyers with their own milling capacity, as well as our own finished protein powder and flour."
      }
    ],
    "inquirySubject": "[Hemp seed press cake] Wholesale inquiry",
    category: "seed-food",
    "related": [
      "hemp-protein-powder-nepal",
      "hemp-flour-nepal",
      "whole-hemp-seed-bulk-nepal"
    ]
  },
  {
    "slug": "hemp-flour-nepal",
    "h1": "Hemp flour",
    "metaTitle": "Hemp Flour Bulk Supplier — Nepal",
    "description": "Hemp flour from Nepal, milled from press cake in bulk — for bakeries and food manufacturers adding a plant-based, high-fibre flour to their line.",
    "keywords": [
      "hemp flour bulk",
      "hemp seed flour Nepal wholesale"
    ],
    "lede": "Milled finer than protein powder and used differently — hemp flour is a baking ingredient, not a supplement.",
    "status": "in-development",
    "statusNote": "In development. Production begins under the licences required by prevailing law; wholesale commitments are being taken now.",
    "sections": [
      {
        "h": "A baking ingredient, not a supplement",
        "ps": [
          "Hemp flour is press cake milled to a fine, baking-ready texture — typically blended with other flours rather than used alone, valued for its fibre content and mild nutty flavour in bread, crackers, and baked goods.",
          "We supply in bulk to bakeries and food manufacturers building hemp flour into an existing product line."
        ]
      }
    ],
    "offer": {
      "title": "What we supply",
      "items": [
        "Milled from hemp seed press cake",
        "High-fibre, plant-based baking ingredient",
        "Bulk supply for bakeries and food manufacturers",
        "Certificates of analysis available"
      ]
    },
    "faq": [
      {
        "q": "Can hemp flour replace regular flour entirely?",
        "a": "Typically no — it's low in gluten-forming proteins, so most recipes blend it with wheat or other flours rather than substituting it entirely. Ask us for typical blend ratios used in commercial baking."
      },
      {
        "q": "How is hemp flour different from protein powder?",
        "a": "Both come from the same press cake — flour retains more of the cake's natural fibre and composition for baking use, while protein powder is typically processed to concentrate protein content further."
      }
    ],
    "inquirySubject": "[Hemp flour] Wholesale inquiry",
    category: "seed-food",
    "related": [
      "hemp-press-cake-nepal",
      "hemp-protein-powder-nepal",
      "hemp-culinary-oil-nepal"
    ]
  },
  {
    "slug": "hemp-face-oil-nepal",
    "h1": "Hemp face oil",
    "metaTitle": "Hemp Seed Oil for Face — Skincare, Nepal",
    "description": "Hemp seed oil face care from Nepal, built on our own cold-pressed and cosmetic-grade oil lines — for skincare brands and retailers.",
    "keywords": [
      "hemp seed oil for face",
      "hemp face oil Nepal"
    ],
    "lede": "A finished facial oil built directly on our own cosmetic-grade hemp seed oil — the ingredient we supply in bulk, formulated into a retail product.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Built on our own ingredient supply",
        "ps": [
          "Our planned hemp face oil line uses our own cold-pressed and cosmetic-grade hemp seed oil as its base — the same fatty-acid profile our B2B ingredient buyers formulate with, packaged as a finished retail product for brands and retailers who'd rather stock a ready-made item than formulate their own."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Formulated on our own hemp seed oil base",
        "Retail and private-label packaging options",
        "Suited to skincare retailers and gift lines",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Can I private-label this as my own brand?",
        "a": "Yes — see our private label hemp seed oil page for the ingredient-supply route, or register interest here for a finished retail product under our own brand."
      },
      {
        "q": "What makes this different from buying the raw oil?",
        "a": "This is a finished, ready-to-sell retail product rather than a bulk ingredient — suited to retailers and gift buyers rather than formulators."
      }
    ],
    "inquirySubject": "[Hemp face oil] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "cannabis-sativa-seed-oil-nepal",
      "hemp-body-butter-nepal",
      "hemp-gift-sets-nepal"
    ]
  },
  {
    "slug": "hemp-balm-nepal",
    "h1": "Hemp balm",
    "metaTitle": "Hemp Balm — Natural Skincare, Nepal",
    "description": "Hemp seed oil balm from Nepal — a natural, multi-use skincare balm built on our own hemp oil, planned for retail and wholesale.",
    "keywords": [
      "hemp balm natural",
      "hemp seed oil balm Nepal"
    ],
    "lede": "A simple, multi-use balm format — hemp seed oil as the active base, minimal ingredient list, built for retail shelf appeal.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Simple, multi-use, hemp-based",
        "ps": [
          "Balms are a straightforward, minimal-ingredient format — hemp seed oil blended with natural waxes and butters into a solid, multi-use product for hands, elbows, and dry skin generally, positioned on simplicity and Himalayan provenance rather than a long ingredient list."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Hemp seed oil-based, minimal ingredient list",
        "Multi-use solid balm format",
        "Retail and private-label packaging options",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What's the difference between the balm and body butter?",
        "a": "Balm is typically firmer and more concentrated, packaged in a tin for spot application; body butter is softer and formulated for broader all-over use. See our hemp body butter page for that format."
      },
      {
        "q": "Is this fragranced?",
        "a": "Formulation details are still being finalised — tell us your preference (unscented vs. naturally scented) and we'll factor it into development."
      }
    ],
    "inquirySubject": "[Hemp balm] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-face-oil-nepal",
      "hemp-lip-balm-nepal",
      "hemp-body-butter-nepal"
    ]
  },
  {
    "slug": "hemp-hair-oil-nepal",
    "h1": "Hemp hair oil",
    "metaTitle": "Hemp Oil for Hair Growth — Nepal",
    "description": "Hemp seed oil hair care from Nepal — a nourishing scalp and hair oil built on our own cold-pressed hemp oil line.",
    "keywords": [
      "hemp oil for hair growth",
      "hemp hair oil Nepal"
    ],
    "lede": "Hair oils are one of the most established uses for hemp seed oil globally — this is our own formulated version, built on our ingredient supply.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A well-established use case",
        "ps": [
          "Hemp seed oil's fatty-acid profile is a long-established choice for hair and scalp care globally — our planned hair oil line formulates it, alone or blended with complementary carrier oils, into a finished retail product for brands and retailers rather than a bulk ingredient."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Formulated on our own hemp seed oil base",
        "A long-established, well-understood use case",
        "Retail and private-label packaging options",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Does hemp oil actually help hair growth?",
        "a": "We're not making specific efficacy claims on this page — hemp seed oil's fatty-acid profile is a widely used ingredient in hair-care formulation generally. Consult your own product claims and regulatory process for marketing language."
      },
      {
        "q": "Can this be private-labelled?",
        "a": "Yes — tell us your target formulation and packaging and we'll confirm what's feasible."
      }
    ],
    "inquirySubject": "[Hemp hair oil] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-beard-oil-nepal",
      "hemp-massage-oil-nepal",
      "hemp-carrier-oil-nepal"
    ]
  },
  {
    "slug": "hemp-soap-nepal",
    "h1": "Hemp soap",
    "metaTitle": "Hemp Soap Handmade — Nepal",
    "description": "Hemp seed oil soap from Nepal, built on our own oil line — a natural, handmade-positioned bar soap for retail and wholesale.",
    "keywords": [
      "hemp soap handmade",
      "hemp seed oil soap Nepal"
    ],
    "lede": "Soap-making is one of the classic uses for hemp seed oil — this is our own finished bar, built for retailers wanting a natural, Himalayan-provenance product.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A classic use, a Himalayan story",
        "ps": [
          "Hemp seed oil saponifies well and is a long-established ingredient in natural soap-making — our planned bar soap line pairs it with Himalayan provenance and a handmade positioning for retailers building a natural personal-care shelf."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Hemp seed oil-based bar soap",
        "Natural, handmade-positioned formulation",
        "Retail and wholesale packaging options",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is this soap fully natural?",
        "a": "Formulation details are still in development — tell us your ingredient-list preferences and we'll factor them in."
      },
      {
        "q": "Can I order in bulk for a retail shelf?",
        "a": "Yes — register your interest with your target volume and we'll follow up as production timing firms up."
      }
    ],
    "inquirySubject": "[Hemp soap] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-body-butter-nepal",
      "hemp-face-oil-nepal",
      "hemp-gift-sets-nepal"
    ]
  },
  {
    "slug": "hemp-massage-oil-nepal",
    "h1": "Hemp massage oil",
    "metaTitle": "Hemp Massage Oil — Nepal",
    "description": "Hemp seed oil massage oil from Nepal, built on our own carrier-oil line — for spas, therapists, and wellness retailers.",
    "keywords": [
      "hemp massage oil Nepal",
      "hemp oil massage therapy"
    ],
    "lede": "A natural fit — hemp seed oil is already a common massage carrier oil, this is our own finished, ready-to-use version.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Built on an already-proven carrier oil",
        "ps": [
          "Hemp seed oil's light texture and fatty-acid profile already make it a common choice as a massage carrier oil — our planned massage oil line formulates it as a ready-to-use finished product for spas, therapists, and wellness retailers, potentially paired with our own terpene or essential oil lines for aromatherapy blends."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Built on our own hemp carrier-oil line",
        "Suited to spas, therapists, and wellness retail",
        "Aromatherapy blend options as our terpene line develops",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Can this include added essential oils or terpenes?",
        "a": "Potentially, as our essential oil and terpene lines develop — tell us what blend you're interested in."
      },
      {
        "q": "Do you sell this in bulk to spas directly?",
        "a": "Yes — wholesale and bulk formats are part of this line's plan alongside retail bottles."
      }
    ],
    "inquirySubject": "[Hemp massage oil] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-hair-oil-nepal",
      "hemp-carrier-oil-nepal",
      "hemp-essential-oil-nepal"
    ]
  },
  {
    "slug": "hemp-lip-balm-nepal",
    "h1": "Hemp lip balm",
    "metaTitle": "Hemp Lip Balm — Nepal",
    "description": "Hemp seed oil lip balm from Nepal, built on our own oil line — a natural lip-care product for retail and private label.",
    "keywords": [
      "hemp lip balm Nepal",
      "hemp seed oil lip care"
    ],
    "lede": "A small, high-repeat-purchase format — hemp seed oil lip balm, built on the same ingredient supply as our larger skincare lines.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A natural entry point for retailers",
        "ps": [
          "Lip balm is a low-cost, high-repeat-purchase format that's often the easiest first product for a retailer to test a new ingredient story with — our planned hemp lip balm uses the same base oil as our larger skincare lines, in a compact, gift-friendly format."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Hemp seed oil-based, compact format",
        "Low-cost entry point for retail testing",
        "Private-label and gift-set packaging options",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Is this a good product to test hemp skincare with customers?",
        "a": "It's often the easiest, lowest-commitment format for retailers to introduce a new ingredient story — small size, low price point, high repeat purchase."
      },
      {
        "q": "Can this go into a gift set?",
        "a": "Yes — see our gift sets page, which is designed to bundle products like this one."
      }
    ],
    "inquirySubject": "[Hemp lip balm] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-balm-nepal",
      "hemp-gift-sets-nepal",
      "hemp-body-butter-nepal"
    ]
  },
  {
    "slug": "hemp-body-butter-nepal",
    "h1": "Hemp body butter",
    "metaTitle": "Hemp Body Butter — Nepal",
    "description": "Hemp seed oil body butter from Nepal, built on our own oil line — a richer, all-over skincare format for retail and private label.",
    "keywords": [
      "hemp body butter Nepal",
      "hemp seed oil body butter"
    ],
    "lede": "A softer, richer format than balm — built for all-over use, on the same hemp seed oil base as the rest of our skincare line.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A richer, all-over format",
        "ps": [
          "Body butter is a softer, more spreadable format than balm, formulated for broader all-over application — built on the same hemp seed oil base as our other skincare products, positioned for retailers wanting a richer, higher-margin item alongside lighter formats like face oil or lip balm."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Hemp seed oil-based, rich all-over formula",
        "Higher-margin positioning alongside lighter formats",
        "Retail and private-label packaging options",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "How is this different from the hemp balm?",
        "a": "Body butter is softer and formulated for broader, all-over application; balm is firmer and typically used for spot treatment. Both share the same hemp seed oil base."
      },
      {
        "q": "Can I order a sample before committing to a wholesale order?",
        "a": "Tell us your interest and target volume and we'll follow up as our finished-goods timeline firms up."
      }
    ],
    "inquirySubject": "[Hemp body butter] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-balm-nepal",
      "hemp-face-oil-nepal",
      "hemp-soap-nepal"
    ]
  },
  {
    "slug": "hemp-beard-oil-nepal",
    "h1": "Hemp beard oil",
    "metaTitle": "Hemp Beard Oil — Nepal",
    "description": "Hemp seed oil beard oil from Nepal, built on our own carrier-oil line — for men's grooming retailers and private label.",
    "keywords": [
      "hemp beard oil Nepal",
      "hemp oil beard care"
    ],
    "lede": "A men's-grooming-specific format built on the same fatty-acid profile that makes hemp seed oil work well as a general carrier oil.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "A dedicated men's-grooming format",
        "ps": [
          "Beard oil is a specific, well-established men's-grooming category built on the same carrier-oil qualities — absorption, non-greasy finish, fatty-acid content — that make hemp seed oil suit skincare generally, positioned for retailers building or expanding a men's grooming shelf."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Hemp seed oil-based carrier for beard care",
        "Suited to men's grooming retail",
        "Private-label packaging options",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "What makes hemp oil suited to beard care specifically?",
        "a": "The same qualities that make it a good general carrier oil — light texture, good absorption, and a favourable fatty-acid profile — apply directly to beard and skin-underneath care."
      },
      {
        "q": "Can this include added fragrance?",
        "a": "Formulation details are still in development — tell us your fragrance preference and we'll factor it into development."
      }
    ],
    "inquirySubject": "[Hemp beard oil] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-hair-oil-nepal",
      "hemp-massage-oil-nepal",
      "hemp-carrier-oil-nepal"
    ]
  },
  {
    "slug": "hemp-culinary-oil-nepal",
    "h1": "Hemp culinary oil",
    "metaTitle": "Hemp Seed Oil for Cooking — Retail, Nepal",
    "description": "Hemp seed oil for cooking from Nepal, retail-bottled from our own food-grade line — a finishing and culinary oil for consumers and specialty retailers.",
    "keywords": [
      "hemp seed oil for cooking",
      "hemp culinary oil retail Nepal"
    ],
    "lede": "A retail-bottled version of our food-grade bulk oil — for consumers and specialty food retailers, not bulk food manufacturers.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Retail, not bulk",
        "ps": [
          "Where our food-grade hemp seed oil page serves food manufacturers sourcing in bulk, this is the retail-bottled version — a finishing and culinary oil for consumers and specialty food retailers, drawing on the same nutty flavour and omega-rich profile Himalayan kitchens have used bhango for generations."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Retail-bottled from our food-grade oil line",
        "Suited to finishing dishes, dressings, and drizzling",
        "Specialty food retail and gift positioning",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "How is this different from the bulk food-grade oil page?",
        "a": "Same underlying oil quality, different packaging and buyer — this page is the retail-bottled, consumer-facing product; the food-grade page serves food manufacturers buying in bulk."
      },
      {
        "q": "Is hemp seed oil good for high-heat cooking?",
        "a": "It's generally best used as a finishing or dressing oil rather than for high-heat frying, similar to other polyunsaturated-rich oils — we can advise on best use as the product develops."
      }
    ],
    "inquirySubject": "[Hemp culinary oil] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "food-grade-hemp-seed-oil-nepal",
      "hemp-gift-sets-nepal",
      "hulled-hemp-hearts-nepal"
    ]
  },
  {
    "slug": "hemp-gift-sets-nepal",
    "h1": "Himalayan hemp gift sets",
    "metaTitle": "Himalayan Skincare Gift Set — Nepal",
    "description": "Himalayan hemp skincare gift sets from Nepal — bundled retail products built on our own hemp seed oil line, for retailers and seasonal gifting.",
    "keywords": [
      "himalayan skincare gift set",
      "hemp gift set Nepal"
    ],
    "lede": "A bundled retail format — several of our finished hemp products packaged together for seasonal and gift-buyer positioning.",
    "status": "planned",
    "statusNote": "Planned. Finished-goods production follows licensed cultivation upstream; retail and wholesale interest is being registered now.",
    "sections": [
      {
        "h": "Bundled for gifting, not just individual sale",
        "ps": [
          "Gift sets bundle several of our finished hemp products — face oil, balm, lip balm, soap — into a single packaged item, positioned for seasonal gifting and retailers who want a higher-ticket, story-led product alongside individual items.",
          "The Himalayan provenance story that runs through our whole line does real work here — gift buyers respond to origin stories more than ingredient lists."
        ]
      }
    ],
    "offer": {
      "title": "Planned line",
      "items": [
        "Bundled selection of our finished hemp products",
        "Seasonal and gift-retail positioning",
        "Custom bundle configurations by request",
        "Wholesale interest registered now"
      ]
    },
    "faq": [
      {
        "q": "Can I choose which products go into a set?",
        "a": "Tell us your target price point and retail context and we'll advise on a bundle configuration as our finished-goods line develops."
      },
      {
        "q": "Is this available now?",
        "a": "Not yet — like the rest of our finished-goods line, this follows our licensed cultivation timeline. Register interest and we'll keep you informed."
      }
    ],
    "inquirySubject": "[Himalayan hemp gift sets] Retail/wholesale inquiry",
    category: "finished",
    "related": [
      "hemp-face-oil-nepal",
      "hemp-balm-nepal",
      "hemp-lip-balm-nepal"
    ]
  }
];
