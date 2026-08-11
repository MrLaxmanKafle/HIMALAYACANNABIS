import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Bulk & Wholesale RFQ",
    title: "Request a Quote",
    description: "Hemp seed oil, fibre, cannabinoid, and finished-goods sourcing from Nepal.",
  });
}
