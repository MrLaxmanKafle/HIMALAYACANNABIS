import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Engineering that happens outdoors";

export default function Image() {
  return renderOgImage({
    eyebrow: "Careers",
    title: "Engineering that happens outdoors",
    description: "Site-based work across Nepal.",
  });
}
