import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Himalaya Cannabis",
    title: "Lab & Services",
    description: "THC/CBD testing, seed supply, seed-to-sale tracking, and consultancy for Nepal's cannabis sector.",
  });
}
