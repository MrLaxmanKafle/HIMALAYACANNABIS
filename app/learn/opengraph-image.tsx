import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Learn",
    title: "Cannabis & Hemp in Nepal",
    description: "Plain-language guides to the law, the history, and the products.",
  });
}
