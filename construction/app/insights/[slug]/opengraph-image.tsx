import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";
import { articles, articleBySlug } from "@/lib/insights";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Insight";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  return renderOgImage({
    eyebrow: article?.topic ?? "Insight",
    title: article?.title ?? "Insight",
  });
}
