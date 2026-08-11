import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Himalaya Cannabis",
    title: "About Himalaya Cannabis",
    description: "A Nepali company bringing the Himalaya's oldest crop into the legal, lab-tested economy.",
  });
}
