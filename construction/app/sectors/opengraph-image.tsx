import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Sectors";

export default function Image() {
  return renderOgImage({
    eyebrow: "What we build",
    title: "Sectors",
    description: "Roads, bridges, hydropower, water and buildings.",
  });
}
