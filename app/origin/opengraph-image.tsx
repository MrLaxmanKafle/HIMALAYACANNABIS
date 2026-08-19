import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Origin — Marsyangdi Valley, Lamjung";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Origin",
    title: "The Marsyangdi Valley",
    description:
      "1,200–2,200 m at 28° N, Lamjung. What we can prove about this growing area — and what we have not measured yet.",
  });
}
