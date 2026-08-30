import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "What we can put on site";

export default function Image() {
  return renderOgImage({
    eyebrow: "Capabilities",
    title: "What we can put on site",
    description: "Plant, people and certified systems.",
  });
}
