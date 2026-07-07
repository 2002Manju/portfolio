"use client";

import { experiences } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Briefcase } from "./icons";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've built things that matter."
        description="From a frontend internship to full-stack ownership on a live brokerage platform."
      />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/50 via-[var(--color-line)] to-transparent md:left-[23px]" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05}>
              <div className="relative pl-12 md:pl-16">
                {/* node */}
                <span
                  className={`absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl border ${
                    exp.current
                      ? "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "border-[var(--color-line)] bg-[var(--color-panel-2)] text-[var(--color-muted)]"
                  } md:h-12 md:w-12`}
                >
                  <Briefcase width={20} height={20} />
                </span>

                <article className="card-hover rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-[15px] text-[var(--color-accent)]">
                        {exp.company}
                        <span className="text-[var(--color-faint)]"> · {exp.meta}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                      <span className="whitespace-nowrap rounded-full border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]">
                        {exp.period}
                      </span>
                      {exp.current ? (
                        <span className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                          Current
                        </span>
                      ) : (
                        <span className="text-xs text-[var(--color-faint)]">{exp.location}</span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-[var(--color-panel-2)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
