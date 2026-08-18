import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Origin — our growing area";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Origin",
    title: "A valley we haven't named yet",
    description:
      "1,200–2,200 m in Gandaki Province, Nepal. What we can prove about this growing area, what we have not measured — and why the valley stays unnamed for now.",
  });
}
