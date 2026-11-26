import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Nepal Cannabis News";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "News",
    title: "Nepal Cannabis News",
    description:
      "Dated, sourced developments: the Supreme Court order, the Gandaki act, and what has happened since.",
  });
}
