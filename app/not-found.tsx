import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center">
      <Logo className="size-16" />
      <h1 className="mt-8 text-5xl font-bold text-himalaya-900">404</h1>
      <p className="mt-4 text-lg text-himalaya-800/70">
        This trail doesn&apos;t lead anywhere. The page you&apos;re looking for
        doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-himalaya-600 px-6 py-3 font-medium text-white shadow hover:bg-himalaya-700"
      >
        Back to base camp
      </Link>
    </section>
  );
}
