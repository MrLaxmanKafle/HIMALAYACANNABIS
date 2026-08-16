import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Nepal Cannabis Law Tracker";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Industry Tracker",
    title: "Nepal Cannabis Law: Current Status",
    description:
      "Federal law, the Gandaki act, licensing gates, and what remains unresolved.",
  });
}
