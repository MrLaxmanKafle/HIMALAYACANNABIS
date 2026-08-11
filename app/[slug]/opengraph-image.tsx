import { landingPages } from "@/lib/landing";
import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

const statusLabel = {
  "in-development": "In development",
  planned: "Planned — licence-gated",
  available: "Available now",
} as const;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  return renderOgImage({
    eyebrow: page ? statusLabel[page.status] : "Himalaya Cannabis",
    title: page ? page.h1 : "Himalaya Cannabis",
    description: page?.lede,
  });
}
