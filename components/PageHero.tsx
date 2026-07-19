export default function PageHero({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-line-2">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-20">
        <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-[-0.015em]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{lede}</p>
        )}
      </div>
    </section>
  );
}
