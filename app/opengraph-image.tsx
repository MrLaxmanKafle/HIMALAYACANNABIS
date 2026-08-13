import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Himalayan hemp, grown right",
    title: "Himalaya Cannabis Pvt. Ltd.",
    description:
      "Licensed medical and industrial hemp from the Himalayan and hilly regions of Nepal.",
  });
}
