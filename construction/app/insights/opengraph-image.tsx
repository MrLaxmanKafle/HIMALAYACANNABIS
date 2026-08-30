import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Technical writing on building in Nepal";

export default function Image() {
  return renderOgImage({
    eyebrow: "Insights",
    title: "Technical writing on building in Nepal",
    description: "Monsoon, drainage, tunnelling, procurement.",
  });
}
