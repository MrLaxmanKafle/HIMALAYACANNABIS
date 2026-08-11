import { articles } from "@/lib/articles";
import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";

export const dynamic = "force-static";
export const alt = "Himalaya Cannabis — Learn";
export const size = ogImageSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  return renderOgImage({
    eyebrow: "Learn — Cannabis & Hemp in Nepal",
    title: article ? article.title : "Himalaya Cannabis",
    description: article?.lede,
  });
}
