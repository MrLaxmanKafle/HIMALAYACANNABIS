import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "The Marsyangdi Valley Origin Standard";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Origin Standard v1.0",
    title: "The rules, published",
    description:
      "Nine clauses: defined area, soil qualification before planting, agrochemical prohibition, independent testing, public certificates.",
  });
}
