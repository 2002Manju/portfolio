"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { itemVariants, StaggerGroup } from "./Reveal";
import { ArrowUpRight, Github, Globe } from "./icons";
import { motion } from "motion/react";

export function Projects() {
  return (
    <section id="work" className="relative overflow-hidden py-24 sm:py-28">
      <div className="glow right-[-5%] top-[10%] h-[320px] w-[320px] bg-[var(--color-accent-2)]/12" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Selected work"
          title="Products I've shipped, end to end."
          description="Real modules from a live stock-broking platform and beyond — spanning compliance, reporting, automation and client-facing UI."
        />

        <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const isFeature = project.featured && i === 0;
            return (
              <motion.article
                key={project.name}
                variants={itemVariants}
                className={`card-hover group relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7 ${
                  isFeature ? "md:col-span-2" : ""
                }`}
              >
                {/* accent wash */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
                        {project.category}
                      </span>
                      <h3
                        className={`mt-2 font-[family-name:var(--font-display)] font-semibold tracking-tight ${
                          isFeature ? "text-2xl sm:text-3xl" : "text-xl"
                        }`}
                      >
                        {project.name}
                      </h3>
                    </div>
                    {project.live || project.github ? (
                      <a
                        href={project.live || project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name}`}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] text-[var(--color-muted)] transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                      >
                        <ArrowUpRight width={18} height={18} />
                      </a>
                    ) : (
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] text-[var(--color-muted)] transition-all duration-300 group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)]">
                        <ArrowUpRight width={18} height={18} />
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-4 leading-relaxed text-[var(--color-muted)] ${
                      isFeature ? "max-w-2xl text-[15px]" : "text-sm"
                    }`}
                  >
                    {project.blurb}
                  </p>

                  <ul
                    className={`mt-5 grid gap-2 ${
                      isFeature ? "sm:grid-cols-3" : "grid-cols-1"
                    }`}
                  >
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-[13px] text-[var(--color-fg)]/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--color-line)] bg-[var(--color-panel-2)]/70 px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[var(--color-line)] pt-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--color-fg)] transition-all hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
                        >
                          <Globe width={14} height={14} className="text-[var(--color-accent)]" />
                          Live Demo
                          <ArrowUpRight width={13} height={13} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)]"
                        >
                          <Github width={14} height={14} />
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </StaggerGroup>

        <p className="mt-8 text-center text-sm text-[var(--color-faint)]">
          Most of this work lives inside private, internal fintech systems — happy to walk through it
          in a conversation.
        </p>
      </div>
    </section>
  );
}
