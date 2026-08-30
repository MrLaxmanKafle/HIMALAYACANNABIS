import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Frequently asked questions";

export default function Image() {
  return renderOgImage({
    eyebrow: "Reference",
    title: "Frequently asked questions",
    description: "The company, and construction in Nepal.",
  });
}
