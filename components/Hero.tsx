"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroSnippet, profile, stats } from "@/lib/data";
import { ArrowRight, Download, MapPin, Linkedin, Mail, Github } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-y opacity-70" />
      <div className="glow left-[-8%] top-[-6%] h-[380px] w-[380px] bg-[var(--color-accent)]/25" />
      <div className="glow right-[-6%] top-[10%] h-[320px] w-[320px] bg-[var(--color-accent-2)]/20" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)]/70 px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Open to full-stack & frontend opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.firstName}.
            <br />
            <span className="text-gradient">I ship full-stack products.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {profile.role} at a stock-broking fintech — building CRM, compliance and HR/payroll
            platforms across{" "}
            <span className="text-[var(--color-fg)]">Next.js &amp; React (TypeScript)</span> and{" "}
            <span className="text-[var(--color-fg)]">Django, DRF &amp; FastAPI</span>, end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[#04140d] transition-transform hover:scale-[1.02]"
            >
              View my work
              <ArrowRight
                width={17}
                height={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)]/60 px-5 py-3 text-sm font-medium text-[var(--color-fg)] backdrop-blur transition-colors hover:border-[var(--color-accent)]/40"
            >
              <Download width={17} height={17} />
              Download résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin width={16} height={16} className="text-[var(--color-accent)]" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-fg)]"
            >
              <Mail width={16} height={16} className="text-[var(--color-accent)]" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-fg)]"
            >
              <Linkedin width={16} height={16} className="text-[var(--color-accent)]" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-fg)]"
            >
              <Github width={16} height={16} className="text-[var(--color-accent)]" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: portrait + code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="relative">
            {/* portrait */}
            <div className="relative overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[var(--color-panel-2)] ring-accent">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={640}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--color-ink)]/70 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-sm font-semibold">
                    {profile.name}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{profile.role}</p>
                </div>
                <span className="rounded-full bg-[var(--color-accent)]/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
                  Available
                </span>
              </div>
            </div>

            {/* floating code chip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-6 -top-6 hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)]/90 p-3 font-mono text-[11px] shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex gap-1.5 pb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <pre className="leading-relaxed text-[var(--color-muted)]">
                <span className="text-[var(--color-accent-3)]">const</span>{" "}
                <span className="text-[var(--color-fg)]">dev</span> = {"{"}
                {"\n"} role: <span className="text-[var(--color-accent)]">&quot;{heroSnippet.role}&quot;</span>,
                {"\n"} stack: [<span className="text-[var(--color-accent)]">&quot;Next.js&quot;</span>,{" "}
                <span className="text-[var(--color-accent)]">&quot;FastAPI&quot;</span>],
                {"\n"}
                {"}"}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* stat strip */}
      <div className="relative mx-auto mt-16 max-w-6xl px-5 sm:mt-20 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--color-panel)] px-5 py-6">
              <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-fg)] sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-[var(--color-fg)]">{s.label}</div>
              <div className="text-xs text-[var(--color-faint)]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
