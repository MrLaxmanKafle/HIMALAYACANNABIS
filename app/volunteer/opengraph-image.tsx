import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis";
export const size = ogImageSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "Himalaya Cannabis",
    title: "Volunteer & Work-Exchange",
    description: "Work-exchange, hospitality apprenticeships, and programmes for universities and NGOs.",
  });
}
