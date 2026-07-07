import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-3 text-sm font-mono text-[var(--color-accent)]">
          <span className="tabular-nums">{index}</span>
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
          <span className="uppercase tracking-[0.2em] text-[var(--color-muted)]">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
