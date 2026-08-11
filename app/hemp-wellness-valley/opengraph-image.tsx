import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Concept · Land acquisition in progress",
    title: "Himalaya Hemp Wellness Valley",
    description: "A planned 500-ropani flagship destination: ayurvedic spa, farm-to-table dining, eco-lodges.",
  });
}
