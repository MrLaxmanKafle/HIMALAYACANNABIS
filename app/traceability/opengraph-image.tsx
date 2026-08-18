import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Traceability — every lot publicly documented";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Traceability",
    title: "Every lot, on the record",
    description:
      "Plot, grower, cultivar, dates, processing, independent lab, and a full certificate of analysis at a permanent public URL.",
  });
}
