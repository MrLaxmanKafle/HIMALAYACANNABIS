import { renderOgImage, ogImageSize, ogContentType } from "@/lib/og-image";
import { projects, projectBySlug } from "@/lib/projects";

export const dynamic = "force-static";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Project";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return renderOgImage({
    eyebrow: project?.status === "ongoing" ? "Project · Ongoing" : "Project · Completed",
    title: project?.name ?? "Project",
    description: project ? `${project.client} · ${project.province}` : undefined,
  });
}
