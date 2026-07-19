export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  date: string;
  lede: string;
  keyPoints: string[];
  sections: { h: string; ps: string[] }[];
  faq: { q: string; a: string }[];
};

export const articles: Article[] = [
  {
    slug: "is-cannabis-legal-in-nepal",
    title: "Is Cannabis Legal in Nepal?",
    metaTitle: "Is Cannabis (Weed/Marijuana) Legal in Nepal? The Law Explained",
    description:
      "What Nepali law actually says about cannabis, weed, marijuana, and hemp — the Narcotic Drugs (Control) Act 2033, medical and industrial licensing, and what is and isn't permitted.",
    keywords: [
      "is cannabis legal in Nepal",
      "is weed legal in Nepal",
      "marijuana Nepal law",
      "गाँजा नेपाल कानून",
      "Nepal cannabis law",
      "hemp legal Nepal",
    ],
    date: "2026-07-19",
    lede:
      "The short answer: recreational cannabis is illegal in Nepal, while medical and industrial cannabis (hemp) can operate only under licence. Here is what the law actually says.",
        keyPoints: [
      "Recreational cannabis is illegal in Nepal under the Narcotic Drugs (Control) Act, 2033 (1976).",
      "Medical and industrial cannabis (hemp) can operate only under licence from the relevant authority.",
      "Industrial hemp is defined by THC content below 0.3%, verified by certified laboratory testing.",
      "There is no legal recreational market in Nepal — offers to sell recreational cannabis are unlawful.",
    ],
    sections: [
      {
        h: "The general prohibition",
        ps: [
          "Cannabis (गाँजा) has been controlled in Nepal since the Narcotic Drugs (Control) Act, 2033 (1976 A.D.). Under the Act, unlicensed cultivation, production, sale, purchase, and consumption of cannabis are criminal offences. This ended an earlier era in which government-licensed hashish shops operated openly in Kathmandu.",
          "Anyone offering to sell recreational cannabis in Nepal today is operating outside the law. Himalaya Cannabis does not engage in any recreational transaction — our Articles of Association expressly prohibit it.",
        ],
      },
      {
        h: "The medical and industrial pathway",
        ps: [
          "The same legal framework that prohibits recreational use contemplates licensed activity for legitimate purposes. In recent years, momentum has grown to formalise medical and industrial cannabis: bills have been tabled in Nepal's federal parliament, and provincial frameworks — notably in Gandaki Province — have been developed for medical and industrial cannabis.",
          "Under these frameworks, industrial cannabis (hemp) is defined by its THC content — below 0.3% for industrial purposes — and every regulated activity (cultivation, processing, storage, sale, distribution) requires a licence from the relevant authority, along with mandatory laboratory testing.",
        ],
      },
      {
        h: "What this means in practice",
        ps: [
          "For consumers: there is no legal recreational market in Nepal. Claims to the contrary should be treated as scams or illegal offers.",
          "For farmers and businesses: legal participation is possible only through the licensing pathway — which is exactly the pathway Himalaya Cannabis Pvt. Ltd. is built on. Our founding documents commit us to operating only after obtaining the licences required under prevailing law, with certified lab testing of every product.",
          "This article is general information, not legal advice. The Nepali-language statutes and regulations in force govern.",
        ],
      },
    ],
    faq: [
      {
        q: "Is weed legal in Nepal?",
        a: "No. Recreational cannabis (weed/marijuana/ganja) is illegal in Nepal under the Narcotic Drugs (Control) Act, 2033 (1976). Only licensed medical and industrial cannabis activity is contemplated by law.",
      },
      {
        q: "Can tourists buy cannabis in Nepal?",
        a: "No. There is no legal recreational market in Nepal for anyone, including tourists. Street offers are illegal and often scams.",
      },
      {
        q: "Is hemp legal in Nepal?",
        a: "Industrial hemp (cannabis below 0.3% THC) can be cultivated and processed only under licence from the relevant authority, with mandatory certified laboratory testing.",
      },
    ],
  },
  {
    slug: "hemp-vs-marijuana-difference",
    title: "Hemp vs Marijuana: What's the Difference?",
    metaTitle: "Hemp vs Marijuana vs Cannabis — The Difference, Explained Simply",
    description:
      "Hemp, marijuana, weed, cannabis, ganja — the same plant, very different meanings. THC thresholds, legal definitions, and why the difference decides what's legal in Nepal.",
    keywords: [
      "hemp vs marijuana",
      "hemp vs weed difference",
      "what is hemp",
      "THC 0.3% hemp",
      "cannabis vs hemp Nepal",
    ],
    date: "2026-07-19",
    lede:
      "Cannabis, hemp, marijuana, weed, and ganja all refer to the same plant species — Cannabis sativa. The difference that matters, legally and practically, is THC.",
        keyPoints: [
      "Hemp and marijuana are the same plant species (Cannabis sativa) — the legal difference is THC content.",
      "Hemp contains below 0.3% THC and cannot intoxicate; marijuana is grown for high THC.",
      "Hemp is an industrial crop: fibre for textiles, seed (bhango) for food, and CBD for wellness.",
      "In Nepal, a certified lab report is what legally separates industrial hemp from prohibited cannabis.",
    ],
    sections: [
      {
        h: "One plant, two categories",
        ps: [
          "THC (tetrahydrocannabinol) is the psychoactive compound in cannabis. 'Marijuana' or 'weed' refers to cannabis grown and used for its intoxicating THC content. 'Hemp' refers to cannabis with THC so low it cannot intoxicate — internationally, and in Nepal's industrial framework, the threshold is below 0.3% THC.",
          "Hemp is an agricultural and industrial crop: its stalk yields fibre for textiles, rope, and paper; its seed (भाङ्गो, bhango) is a protein- and omega-rich food eaten in Nepali hill kitchens for generations; its flowers can yield CBD, a non-intoxicating compound used in wellness products.",
        ],
      },
      {
        h: "Why the distinction decides legality",
        ps: [
          "Nepal's legal framework treats these categories completely differently. Recreational, high-THC cannabis remains prohibited under the Narcotic Drugs (Control) Act, 2033. Industrial hemp and medical cannabis can be cultivated and processed under licence, with mandatory laboratory testing to verify THC content.",
          "That is why certified testing sits at the centre of everything Himalaya Cannabis does: the lab report is what legally separates an industrial hemp crop from a prohibited one.",
        ],
      },
      {
        h: "Why it matters for Nepal",
        ps: [
          "The Himalaya is one of the plant's native homes — cannabis grows wild across Nepal's hills. A regulated hemp industry lets Nepal turn a plant it already has into fibre, food, wellness products, and export earnings, without touching the recreational market. That is the opportunity our company exists to build.",
        ],
      },
    ],
    faq: [
      {
        q: "Does hemp get you high?",
        a: "No. Hemp is defined by THC content below 0.3%, far too low to intoxicate. Its value is in fibre, seed, and non-intoxicating compounds like CBD.",
      },
      {
        q: "Is hemp the same as weed?",
        a: "Botanically the same species, legally opposite categories. Weed/marijuana is high-THC cannabis and is illegal in Nepal; hemp is low-THC industrial cannabis that can be grown under licence.",
      },
    ],
  },
  {
    slug: "hemp-in-nepal-history",
    title: "Hemp in Nepal: A Himalayan Heritage",
    metaTitle: "Hemp in Nepal — History, Bhango, and Himalayan Hemp Textiles",
    description:
      "From bhango chutney to hand-woven hemp cloth of the far-western hills, cannabis has been part of Himalayan life for centuries. The history of hemp in Nepal and its modern revival.",
    keywords: [
      "Nepal hemp",
      "Himalayan hemp",
      "bhango",
      "भाङ्गो",
      "hemp textiles Nepal",
      "hemp history Nepal",
    ],
    date: "2026-07-19",
    lede:
      "Long before 'hemp' became a global wellness keyword, Himalayan households were weaving it, eating it, and trading it. Nepal's relationship with this plant is measured in centuries.",
        keyPoints: [
      "Cannabis grows wild across Nepal's hills — the Himalaya is one of the plant's native homes.",
      "Hemp seed (bhango, भाङ्गो) has been a traditional protein-rich food in Nepali hill kitchens for generations.",
      "Hand-woven hemp cloth remains a living craft tradition in Nepal's far-western districts.",
      "Nepal prohibited cannabis in 1976; today's medical and industrial frameworks are reviving the heritage crop legally.",
    ],
    sections: [
      {
        h: "A plant of the hills",
        ps: [
          "Cannabis grows wild across Nepal's mid-hills and Himalayan valleys — it is, botanically, at home here. Hill communities have long twisted its bast fibre into rope and woven it into coarse, extraordinarily durable cloth. In Nepal's far-western districts, hand-woven hemp fabric remains a living craft tradition.",
          "In the kitchen, hemp seed — भाङ्गो (bhango) — is roasted and ground into achar (chutney) and eaten with dhido and rice. It is one of the most protein- and omega-rich foods in the traditional hill diet, eaten for generations without any association with intoxication.",
        ],
      },
      {
        h: "Prohibition and pause",
        ps: [
          "In the early 1970s, under international pressure, Nepal closed its licensed hashish shops, and the Narcotic Drugs (Control) Act, 2033 (1976) brought cannabis under criminal control. The recreational trade ended — but so, largely, did the legitimate agricultural use of a native crop, leaving hill farmers without one of their traditional materials.",
        ],
      },
      {
        h: "The revival",
        ps: [
          "Today, as countries worldwide separate industrial hemp from recreational cannabis, Nepal is moving to reclaim its heritage crop through medical and industrial licensing frameworks. Himalayan provenance — the same story that sells Nepali tea, pashmina, and handicrafts — gives Nepali hemp a premium position in global markets for textiles, seed foods, and wellness products.",
          "Himalaya Cannabis Pvt. Ltd. was founded on exactly this thesis: licensed cultivation in the hills, certified testing, and products that carry the Himalaya's name honestly.",
        ],
      },
    ],
    faq: [
      {
        q: "What is bhango?",
        a: "Bhango (भाङ्गो) is hemp seed — a traditional Nepali food, roasted and ground into achar (chutney). It is rich in complete protein and omega fatty acids and has no intoxicating effect.",
      },
      {
        q: "Does Nepal have a hemp textile tradition?",
        a: "Yes. Hill communities have woven hemp fibre into rope and durable cloth for centuries, and hand-woven hemp fabric remains a living craft in Nepal's far-western districts.",
      },
    ],
  },
  {
    slug: "medical-cannabis-nepal",
    title: "Medical Cannabis in Nepal: The Emerging Framework",
    metaTitle: "Medical Cannabis in Nepal — Licensing, Framework & Future",
    description:
      "How Nepal's medical cannabis framework is taking shape: provincial initiatives, licensing requirements, laboratory testing, and what a legal medical cannabis sector could mean.",
    keywords: [
      "medical cannabis Nepal",
      "medical marijuana Nepal",
      "cannabis licence Nepal",
      "Gandaki cannabis framework",
    ],
    date: "2026-07-19",
    lede:
      "Medical cannabis in Nepal is not a free-for-all — it is an emerging licensed framework. Here is how it is structured and where it is heading.",
        keyPoints: [
      "Medical cannabis in Nepal is an emerging licensed framework, not an open market.",
      "Bills have been tabled federally, and Gandaki Province has developed a medical and industrial cannabis framework.",
      "Every regulated activity requires a licence plus certified laboratory testing of products.",
      "Nepal's ayurvedic tradition gives it a distinctive position in plant-based medicine.",
    ],
    sections: [
      {
        h: "The framework taking shape",
        ps: [
          "Nepal's path to medical cannabis runs through licensing, not liberalisation. Bills tabled in the federal parliament and provincial frameworks — notably Gandaki Province's medical and industrial cannabis framework — contemplate licensed cultivation, processing, and distribution for medical purposes, under the oversight of the relevant authorities and within the Narcotic Drugs (Control) Act's structure.",
          "Two requirements anchor the framework: a licence before any regulated activity begins, and certified laboratory testing of products for THC/CBD content and quality.",
        ],
      },
      {
        h: "What medical cannabis could mean for Nepal",
        ps: [
          "Medically, cannabis-derived preparations are used internationally for conditions including chronic pain, epilepsy, and chemotherapy side-effects — always under medical supervision. Economically, a licensed medical sector would create skilled agricultural and laboratory employment in regions with few alternatives.",
          "Nepal also has a deep ayurvedic tradition in which cannabis preparations have a documented historical place, giving the country a distinctive position in plant-based medicine.",
        ],
      },
      {
        h: "Our position",
        ps: [
          "Himalaya Cannabis is building for this framework, not around it: our founding documents commit us to obtaining every required licence before operating, testing every product at a certified laboratory, and never engaging in recreational transactions. When the medical framework opens, compliance-first operators will be the ones positioned to serve it.",
          "This article is general information, not medical or legal advice.",
        ],
      },
    ],
    faq: [
      {
        q: "Is medical marijuana legal in Nepal?",
        a: "Medical cannabis in Nepal is possible only through an emerging licensing framework — provincial frameworks such as Gandaki's and bills tabled in parliament. It is not an open or recreational market.",
      },
      {
        q: "Who can grow medical cannabis in Nepal?",
        a: "Only operators holding the licences required under prevailing law, with certified laboratory testing of products. Unlicensed cultivation remains a criminal offence.",
      },
    ],
  },
  {
    slug: "cbd-in-nepal",
    title: "CBD in Nepal: What It Is and Where It Stands",
    metaTitle: "CBD in Nepal — What Is CBD, Is It Legal, and What's Next",
    description:
      "CBD (cannabidiol) explained: what it is, how it differs from THC, its wellness uses worldwide, and how Nepal's licensing framework treats CBD products.",
    keywords: [
      "CBD Nepal",
      "CBD oil Nepal",
      "what is CBD",
      "cannabidiol Nepal",
      "hemp oil Nepal",
    ],
    date: "2026-07-19",
    lede:
      "CBD is the cannabis compound that doesn't get you high — and it has built a global wellness industry. Here's what it is and how it fits Nepal's framework.",
        keyPoints: [
      "CBD (cannabidiol) is a non-intoxicating cannabis compound, typically extracted from industrial hemp.",
      "CBD is not the same as hemp seed oil — seed oil is a food product with no meaningful cannabinoids.",
      "In Nepal, CBD products require licensing under the medical and industrial cannabis framework.",
      "Himalayan provenance plus ayurvedic tradition position Nepali CBD as a distinctive export category.",
    ],
    sections: [
      {
        h: "What CBD is",
        ps: [
          "CBD (cannabidiol) is one of over a hundred cannabinoids in the cannabis plant. Unlike THC, it is non-intoxicating. Globally, CBD appears in tinctures, topicals, balms, and cosmetics, marketed for calm, recovery, and skin care. It is typically extracted from industrial hemp — cannabis below the 0.3% THC threshold.",
          "CBD is distinct from hemp seed oil: seed oil is a food product cold-pressed from bhango seeds and contains no meaningful cannabinoids, while CBD is extracted from the plant's flowers and leaves.",
        ],
      },
      {
        h: "CBD under Nepal's framework",
        ps: [
          "In Nepal, CBD products fall under the same principle as all cannabis derivatives: they require the licences prescribed by prevailing law, and certified laboratory testing to verify THC content. There is no free market for CBD in Nepal today — production and sale become possible through the medical and industrial licensing pathway as it comes into force.",
          "Himalaya Cannabis's planned CBD and wellness line will launch only under licence, with every batch lab-verified. That is stated plainly on our products page, and it will stay that way.",
        ],
      },
      {
        h: "The Himalayan angle",
        ps: [
          "High-altitude, low-input cultivation and Himalayan provenance are genuine differentiators in a crowded global CBD market. Combined with Nepal's ayurvedic tradition — where cannabis oils have a documented place — Nepali CBD can be a distinctive export category rather than a commodity.",
        ],
      },
    ],
    faq: [
      {
        q: "Is CBD legal in Nepal?",
        a: "CBD falls under Nepal's cannabis licensing framework: production and sale become possible only through the medical and industrial licensing pathway, with certified lab testing. There is no free CBD market in Nepal today.",
      },
      {
        q: "Does CBD get you high?",
        a: "No. CBD (cannabidiol) is non-intoxicating. The intoxicating compound in cannabis is THC, which industrial hemp contains only below 0.3%.",
      },
    ],
  },
  {
    slug: "hemp-products-guide",
    title: "What Can Hemp Make? A Guide to Hemp Products",
    metaTitle: "Hemp Products Guide — Textiles, Seed Oil, Bhango Foods, Cosmetics",
    description:
      "Fibre, yarn, fabric, hemp seed oil, bhango foods, CBD wellness, ayurvedic oils, and cosmetics — a practical guide to everything the hemp plant can make, from Nepal.",
    keywords: [
      "hemp products",
      "hemp seed oil Nepal",
      "hemp fabric Nepal",
      "hemp clothing Nepal",
      "bhango products",
    ],
    date: "2026-07-19",
    lede:
      "Few crops make cloth, food, medicine, and cosmetics at once. A guide to the hemp plant's product families — and which ones Nepal is best placed to win.",
        keyPoints: [
      "Hemp yields four product families at once: fibre textiles, seed foods, extracts, and cosmetics.",
      "Hemp bast fibre is among the strongest natural fibres — ideal for durable, breathable textiles.",
      "Hemp seed (bhango) is a complete protein rich in omega-3 and omega-6.",
      "Nepal's craft weaving tradition and Himalayan provenance are premium differentiators for export.",
    ],
    sections: [
      {
        h: "Fibre: textiles, rope, and paper",
        ps: [
          "Hemp bast fibre is among the strongest natural fibres. It makes durable, breathable textiles that soften with wear, plus rope, canvas, and specialty paper. Nepal's hand-weaving tradition gives Nepali hemp fabric a craft story mass-produced textiles can't copy — a natural premium export.",
        ],
      },
      {
        h: "Seed: bhango foods and oil",
        ps: [
          "Hemp seed (भाङ्गो) is a complete protein rich in omega-3 and omega-6. It is eaten whole and roasted, ground into flour, pressed into cold-pressed cooking and finishing oil, and blended into foods. In Nepal it needs no introduction — hill kitchens have used it for generations.",
        ],
      },
      {
        h: "Extracts: CBD and wellness",
        ps: [
          "From hemp flowers, CBD extraction supplies tinctures, topicals, and cosmetics — a licensed, lab-tested category worldwide. Paired with Nepal's ayurvedic formulation tradition, extracts become medicinal oils and therapeutic blends with a genuinely Nepali identity.",
        ],
      },
      {
        h: "Cosmetics and beyond",
        ps: [
          "Hemp seed oil's fatty-acid profile makes it a strong base for soaps, creams, and hair care. Further afield, hemp finds use in bio-composites, insulation ('hempcrete'), and animal feed — categories that grow as supply matures.",
          "Himalaya Cannabis is building five of these families — textiles, seed foods, CBD wellness, ayurvedic formulations, and cosmetics — on one licensed, lab-tested Himalayan supply chain. See our products page for current status.",
        ],
      },
    ],
    faq: [
      {
        q: "What products are made from hemp?",
        a: "Textiles, rope, and paper from the fibre; foods and cold-pressed oil from the seed (bhango); CBD wellness products from the flowers; and soaps and cosmetics from the seed oil.",
      },
      {
        q: "Is hemp seed oil the same as CBD oil?",
        a: "No. Hemp seed oil is a food oil pressed from seeds and contains no meaningful cannabinoids. CBD oil is an extract from the plant's flowers and leaves and falls under cannabis licensing rules.",
      },
    ],
  },
];
