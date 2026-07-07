"use client";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { itemVariants, StaggerGroup } from "./Reveal";
import { iconByTitle } from "./icons";
import { motion } from "motion/react";

const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "TanStack Query",
  "Kafka",
  "WebSockets",
  "Playwright",
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="glow left-[40%] top-[20%] h-[300px] w-[300px] bg-[var(--color-accent)]/10" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="A polyglot toolkit, production-tested."
          description="The stack I reach for to take features from idea to deploy — chosen and used on live fintech products."
        />

        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconByTitle[group.title];
            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className="card-hover group rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/40">
                    {Icon ? <Icon width={20} height={20} /> : null}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold">
                      {group.title}
                    </h3>
                    <p className="text-xs text-[var(--color-faint)]">{group.hint}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[var(--color-line)] bg-[var(--color-panel-2)] px-2.5 py-1 text-[13px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>

      {/* marquee */}
      <div className="marquee-pause relative mt-14 flex overflow-hidden mask-fade-y [--mask:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:var(--mask)] [mask-image:var(--mask)]">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-faint)] sm:text-3xl"
            >
              {item}
              <span className="text-[var(--color-accent)]/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
