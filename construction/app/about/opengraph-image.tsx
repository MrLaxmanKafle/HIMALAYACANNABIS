import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Building where the terrain decides";

export default function Image() {
  return renderOgImage({
    eyebrow: "About us",
    title: "Building where the terrain decides",
    description: "Registration, licences and how we work.",
  });
}
