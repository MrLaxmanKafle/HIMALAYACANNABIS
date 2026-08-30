import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Projects";

export default function Image() {
  return renderOgImage({
    eyebrow: "Project record",
    title: "Projects",
    description: "Quantities and outcomes, not adjectives.",
  });
}
