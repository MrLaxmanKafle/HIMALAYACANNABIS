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
  related: string[];
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
          "Food brands and retailers seeking a distinctive culinary oil; cosmetic formulators using hemp oil as a carrier and active base; and importers building Himalayan or ayurvedic product lines. We supply wholesale domestically and for export, subject to prevailing law.",
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
    ],
    inquirySubject: "[Hemp seed oil] Wholesale inquiry",
    related: ["hemp-seeds-nepal", "hemp-fabric-nepal", "cbd-oil-nepal"],
  },
  {
    slug: "hemp-fabric-nepal",
    h1: "Hemp fabric & textiles from Nepal",
    metaTitle: "Hemp Fabric Nepal — Himalayan Hemp Textiles, Wholesale & Export",
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
    related: ["hemp-seed-oil-nepal", "thc-testing-lab-nepal", "cannabis-license-consulting-nepal"],
  },
  {
    slug: "hemp-clothing-manufacturer-nepal",
    h1: "Hemp clothing manufacturing in Nepal",
    metaTitle: "Hemp Clothing Manufacturer Nepal — Private Label & Partnerships",
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
    related: ["cannabis-license-consulting-nepal", "hemp-seeds-nepal", "cbd-oil-nepal"],
  },
  {
    slug: "cannabis-license-consulting-nepal",
    h1: "Cannabis licence & compliance consulting in Nepal",
    metaTitle: "Cannabis License Nepal — Licensing & Compliance Consulting",
    description:
      "Entering Nepal's licensed cannabis sector? Licensing guidance, compliance systems, seed-to-sale tracking, and training from Himalaya Cannabis — the sector's resource centre.",
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
    related: ["thc-testing-lab-nepal", "hemp-seeds-nepal", "hemp-farmland-nepal"],
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
    related: ["cannabis-license-consulting-nepal", "hemp-seeds-nepal", "thc-testing-lab-nepal"],
  },
];
