import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";
import { sectors, sectorBySlug } from "@/lib/sectors";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Sector";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectorBySlug(slug);
  return renderOgImage({
    eyebrow: "Sector",
    title: sector?.name ?? "Sector",
    description: sector?.short,
  });
}
