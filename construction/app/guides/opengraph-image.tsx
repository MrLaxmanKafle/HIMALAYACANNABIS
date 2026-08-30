import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Guides";

export default function Image() {
  return renderOgImage({
    eyebrow: "Reference",
    title: "Guides",
    description: "Plain answers on infrastructure in Nepal.",
  });
}
