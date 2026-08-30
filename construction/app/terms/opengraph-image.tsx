import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Terms";

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Terms",
    description: "Terms governing use of this site.",
  });
}
