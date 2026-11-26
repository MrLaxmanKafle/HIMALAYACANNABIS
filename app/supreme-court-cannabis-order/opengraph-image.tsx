import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Nepal Supreme Court cannabis order, explained";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Explainer",
    title: "The Supreme Court's cannabis order",
    description:
      "What Nepal's court ordered, what it did not, and when the three-month deadline falls.",
  });
}
