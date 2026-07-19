export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  date: string;
  lede: string;
  sections: { h: string; ps: string[] }[];
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
  },
];
