export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-mint">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-3xl font-bold tracking-normal text-white sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-lg leading-8 text-white/70">{description}</p> : null}
    </div>
  );
}
