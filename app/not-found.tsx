import Link from "next/link";
import Logo from "@/components/Logo";

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
