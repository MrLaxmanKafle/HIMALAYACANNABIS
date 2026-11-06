import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

/**
 * Without this the 404 inherits the root layout's metadata, which means every
 * missing URL served this page declared the homepage's title AND a canonical
 * pointing at the homepage — telling Google a not-found page *is* the homepage.
 * noindex stops the soft-404 being indexed; the empty canonical override keeps
 * it from claiming to be another page.
 */
export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist or has moved.",
  robots: { index: false, follow: true },
  alternates: {},
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center">
      <Logo className="size-16" />
      <h1 className="mt-8 text-6xl font-extrabold tracking-[-0.02em]">404</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">
        This trail doesn&apos;t lead anywhere. The page you&apos;re looking for
        doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-marigold px-7 py-3 font-semibold text-ground transition-colors hover:bg-ink"
      >
        Back to base camp
      </Link>
    </section>
  );
}
