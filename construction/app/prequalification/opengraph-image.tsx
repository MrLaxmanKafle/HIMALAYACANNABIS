import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Prequalification & Credentials";

export default function Image() {
  return renderOgImage({
    eyebrow: "Credentials",
    title: "Prequalification & Credentials",
    description: "Everything an evaluation committee needs.",
  });
}
