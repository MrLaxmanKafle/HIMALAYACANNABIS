import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";
import { landingPages, landingBySlug, landingCategoryLabel } from "@/lib/landing";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Guide";

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = landingBySlug(slug);
  return renderOgImage({
    eyebrow: page ? `Guide · ${landingCategoryLabel[page.category]}` : "Guide",
    title: page?.h1 ?? "Guide",
  });
}
