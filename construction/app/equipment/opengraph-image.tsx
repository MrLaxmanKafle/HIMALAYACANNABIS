import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Plant & Equipment Fleet";

export default function Image() {
  return renderOgImage({
    eyebrow: "Capability",
    title: "Plant & Equipment Fleet",
    description: "Owned, registered and verifiable.",
  });
}
