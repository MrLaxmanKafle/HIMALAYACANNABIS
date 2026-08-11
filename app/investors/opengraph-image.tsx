import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "For Investors",
    title: "Invest in Himalaya Cannabis",
    description: "A licensed-track Nepali medical and industrial hemp company. Private investment discussions.",
  });
}
