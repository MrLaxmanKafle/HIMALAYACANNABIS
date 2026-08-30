import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Quality, Safety & Environment";

export default function Image() {
  return renderOgImage({
    eyebrow: "Capability",
    title: "Quality, Safety & Environment",
    description: "ISO systems and records that hold up.",
  });
}
