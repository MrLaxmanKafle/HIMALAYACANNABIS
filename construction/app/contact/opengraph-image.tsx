import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Tell us what you are building";

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Tell us what you are building",
    description: "Tenders, prequalification and enquiries.",
  });
}
