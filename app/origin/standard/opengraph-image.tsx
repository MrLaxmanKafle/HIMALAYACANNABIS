import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "The Origin Standard";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Origin Standard v1.0",
    title: "The rules, published",
    description:
      "Ten clauses: defined area, when we disclose it, soil qualification before planting, agrochemical prohibition, independent testing, public certificates.",
  });
}
