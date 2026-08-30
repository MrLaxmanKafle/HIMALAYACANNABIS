import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";
import { company } from "@/lib/company";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = company.name;

export default function Image() {
  return renderOgImage({
    eyebrow: "Civil & Infrastructure · Nepal",
    title: "Roads, bridges and public infrastructure",
    description: "Built to last in hard country.",
  });
}
