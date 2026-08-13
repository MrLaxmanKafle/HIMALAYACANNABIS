import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: { absolute: "हिमालय क्यानाबिस — नेपालको इजाजत-केन्द्रित भाङ कम्पनी" },
  description:
    "हिमालय क्यानाबिस प्रा.लि. — नेपालमा मेडिकल तथा औद्योगिक भाङ (गाँजा) को इजाजतप्राप्त खेती, प्रशोधन र उत्पादन। भाङ्गो, कपडा, तेल, वेलनेस उत्पादन। मनोरञ्जनात्मक कारोबार गरिँदैन।",
  keywords: [
    "गाँजा नेपाल",
    "भाङ खेती नेपाल",
    "भाङ्गो",
    "गाँजा कानून नेपाल",
    "गाँजा खेती लाइसेन्स",
    "औद्योगिक भाङ",
    "हिमालय क्यानाबिस",
  ],
  openGraph: {
    title: "हिमालय क्यानाबिस — नेपालको इजाजत-केन्द्रित भाङ कम्पनी",
    description:
      "हिमालय क्यानाबिस प्रा.लि. — नेपालमा मेडिकल तथा औद्योगिक भाङ (गाँजा) को इजाजतप्राप्त खेती, प्रशोधन र उत्पादन। भाङ्गो, कपडा, तेल, वेलनेस उत्पादन। मनोरञ्जनात्मक कारोबार गरिँदैन।",
    url: "https://himalayacannabis.com/ne",
    type: "website",
    locale: "ne_NP",
    images: [
      {
        url: "https://himalayacannabis.com/ne/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Himalaya Cannabis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "हिमालय क्यानाबिस — नेपालको इजाजत-केन्द्रित भाङ कम्पनी",
    description:
      "नेपालमा मेडिकल तथा औद्योगिक भाङको इजाजतप्राप्त खेती, प्रशोधन र उत्पादन। मनोरञ्जनात्मक कारोबार गरिँदैन।",
    images: ["https://himalayacannabis.com/ne/opengraph-image.png"],
  },
  alternates: { canonical: "/ne", languages: { en: "/", ne: "/ne" } },
};

const faqs = [
  {
    q: "नेपालमा गाँजा कानूनी छ?",
    a: "मनोरञ्जनात्मक (नशाका लागि) गाँजा नेपालमा गैरकानूनी छ — लागुऔषध (नियन्त्रण) ऐन, २०३३ ले खेती, बिक्री र सेवनलाई निषेध गर्छ। मेडिकल तथा औद्योगिक भाङ भने सम्बन्धित निकायको इजाजतपत्र लिएर मात्र सञ्चालन गर्न सकिने व्यवस्था बन्दै छ — संघीय संसदमा विधेयक र गण्डकी प्रदेशको कार्यविधि यसैका उदाहरण हुन्।",
  },
  {
    q: "भाङ्गो के हो? के यो कानूनी छ?",
    a: "भाङ्गो भाङको बीउ हो — पहाडी भान्सामा पुस्तौंदेखि अचारका रूपमा खाइँदै आएको पौष्टिक खाद्य पदार्थ। यसमा नशा लाग्ने तत्व हुँदैन। हामी भाङ्गोलाई आधुनिक खाद्य-सुरक्षा मापदण्डमा प्याकेजिङ गरी बजारमा ल्याउँदैछौं।",
  },
  {
    q: "औद्योगिक भाङ भनेको के हो?",
    a: "THC (नशा लाग्ने तत्व) ०.३ प्रतिशतभन्दा कम भएको भाङलाई औद्योगिक भाङ भनिन्छ। यसबाट कपडा, डोरी, तेल, सौन्दर्य सामग्री र वेलनेस उत्पादन बन्छ। प्रत्येक उत्पादन प्रमाणित प्रयोगशालाबाट परीक्षण गरिन्छ।",
  },
  {
    q: "भाङ खेतीका लागि लाइसेन्स कसरी पाइन्छ?",
    a: "इजाजतपत्र सरकारी निकायले मात्र दिन्छ — कानूनी ढाँचा कार्यान्वयनमा आएपछि। अहिले गर्न सकिने तयारी हो: जग्गाको व्यवस्था, उपयुक्त बीउ, परीक्षण योजना र अभिलेख प्रणाली। हामी किसान तथा उद्यमीलाई यही तयारीमा सहयोग र तालिम दिन्छौं।",
  },
  {
    q: "मसँग पहाडी जग्गा छ — के गर्न सकिन्छ?",
    a: "हामी जग्गा भाडा (लिज), करार खेती वा खरिद — तीनवटै मोडेलमा काम गर्छौं। जिल्ला, क्षेत्रफल (रोपनी/बिघा), सडक पहुँच र तपाईंको चाहना खुलाएर सम्पर्क गर्नुहोस्। हरेक गम्भीर प्रस्तावको जवाफ दिन्छौं।",
  },
  {
    q: "के तपाईंहरू मनोरञ्जनात्मक गाँजा बेच्नुहुन्छ?",
    a: "गर्दैनौं। हाम्रो कम्पनीको नियमावली (प्रबन्धपत्र/नियमावली) मै मनोरञ्जनात्मक प्रयोजनको कारोबार निषेध गरिएको छ। इजाजतपत्र बिना कुनै नियमन-योग्य गतिविधि गर्दैनौं।",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ne",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function NepaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line-2" lang="ne">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-20">
          <p className="text-sm tracking-[0.2em] text-ink-2">
            {company.nameNepali}
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-tight">
            हिमाली भाङ, <span className="text-marigold">विधिसम्मत ढंगले।</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            हामी नेपालका हिमाली तथा पहाडी क्षेत्रमा इजाजतपत्र लिएर मेडिकल तथा
            औद्योगिक भाङको खेती, प्रशोधन र उत्पादन गर्छौं — कपडा, भाङ्गो, तेल,
            वेलनेस र आयुर्वेदिक उत्पादनसम्म। प्रत्येक उत्पादन प्रमाणित
            प्रयोगशालाबाट परीक्षण गरिन्छ। मनोरञ्जनात्मक कारोबार गरिँदैन।
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" lang="ne">
        <h2 className="text-2xl font-bold">हामी के गर्छौं</h2>
        <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {[
            [
              "भाङको कपडा र रेशा",
              "हिमाली भाङबाट धागो, कपडा र झोला — सुदूरपश्चिमको हातेबुनाइ परम्परालाई आधुनिक बजारसम्म।",
            ],
            [
              "भाङ्गो र खाद्य उत्पादन",
              "पहाडी भान्साको पौष्टिक बीउ — सफा, परीक्षण गरिएको, आधुनिक प्याकेजिङमा।",
            ],
            [
              "तेल, वेलनेस र आयुर्वेदिक",
              "चिसो प्रविधिबाट पेलिएको भाङ्गोको तेल; इजाजत प्राप्त भएपछि CBD तथा आयुर्वेदिक उत्पादन।",
            ],
            [
              "किसान साझेदारी र तालिम",
              "बीउ, तालिम, अनुपालन सहयोग र निश्चित बजार — पहाडका किसानसँग मिलेर।",
            ],
          ].map(([h, p]) => (
            <div key={h} className="border-t border-line pt-4">
              <h3 className="font-bold">{h}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line-2 bg-ground-2" lang="ne">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-2xl font-bold">बारम्बार सोधिने प्रश्न</h2>
          <dl className="mt-6 divide-y divide-line">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" lang="ne">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">सम्पर्क गर्नुहोस्</h2>
            <p className="mt-2 max-w-xl text-ink-2">
              थोक आपूर्ति, जग्गा, लगानी वा साझेदारी — जुनसुकै विषयमा इमेल
              गर्नुहोस्। हरेक गम्भीर सन्देशको जवाफ दिन्छौं।
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${company.email}`}
              className="rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
            >
              {company.email}
            </a>
            <Link
              href="/"
              className="rounded-full border border-line px-7 py-3 font-medium transition-colors hover:border-ink"
            >
              English site →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
