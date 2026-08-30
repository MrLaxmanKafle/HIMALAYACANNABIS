import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Suppliers & Subcontractors";

export default function Image() {
  return renderOgImage({
    eyebrow: "Supply chain",
    title: "Suppliers & Subcontractors",
    description: "Categories, requirements and payment terms.",
  });
}
