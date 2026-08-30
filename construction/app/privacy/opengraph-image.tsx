import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Privacy";

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Privacy",
    description: "No tracking, no stored form data.",
  });
}
