import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";
import { landingPages } from "@/lib/landing";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis product catalogue";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Catalogue",
    title: `${landingPages.length} products, one supplier`,
    description:
      "Hemp seed oil grades, cannabinoid extracts, seed foods, fibre and finished goods — each with its real supply status.",
  });
}
