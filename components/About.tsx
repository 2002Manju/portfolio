"use client";

import { education, languagesSpoken, profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Building, GraduationCap, Globe, MapPin, Sparkle, Terminal } from "./icons";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="A developer who ships across the whole stack."
        description="I turn product requirements into working software — designing the API, wiring the data layer, and building the interface that people actually use."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {/* Bio — wide */}
        <Reveal className="md:col-span-4">
          <article className="card-hover flex h-full flex-col justify-between rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel-2)] px-3 py-1 text-xs text-[var(--color-accent)]">
                <Sparkle width={14} height={14} /> The short version
              </div>
              <p className="text-lg leading-relaxed text-[var(--color-fg)]/90">
                I&apos;m a <span className="text-[var(--color-accent)]">Full Stack Developer</span> at
                ATS Share Brokers, building the internal product suite for a stock-broking business —
                a trading CRM, back-office &amp; compliance services, and an HR/payroll platform.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                My work spans Next.js &amp; React (TypeScript) frontends and Django, DRF &amp; FastAPI
                backends on PostgreSQL — from FATCA/KYC compliance flows and brokerage reporting to
                payroll automation with Celery, Redis and Docker on AWS.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Currently building */}
        <Reveal delay={0.05} className="md:col-span-2">
          <article className="card-hover flex h-full flex-col justify-between rounded-3xl border border-[var(--color-line)] bg-gradient-to-br from-[var(--color-panel)] to-[var(--color-panel-2)] p-7">
            <Terminal className="text-[var(--color-accent)]" width={26} height={26} />
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-[var(--color-faint)]">
                Currently building
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug">
                Compliance &amp; back-office tooling for a live brokerage platform.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Current role */}
        <Reveal delay={0.1} className="md:col-span-2">
          <article className="card-hover flex h-full flex-col rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
            <Building className="text-[var(--color-accent-2)]" width={26} height={26} />
            <p className="mt-6 text-xs uppercase tracking-widest text-[var(--color-faint)]">Now</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
              ATS Share Brokers
            </p>
            <p className="text-sm text-[var(--color-muted)]">Full Stack Developer · Bengaluru</p>
          </article>
        </Reveal>

        {/* Education */}
        <Reveal delay={0.15} className="md:col-span-2">
          <article className="card-hover flex h-full flex-col rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
            <GraduationCap className="text-[var(--color-accent)]" width={26} height={26} />
            <p className="mt-6 text-xs uppercase tracking-widest text-[var(--color-faint)]">
              Education
            </p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
              BCA · 8.46 CGPA
            </p>
            <p className="text-sm text-[var(--color-muted)]">Karnataka University, 2024</p>
          </article>
        </Reveal>

        {/* Location */}
        <Reveal delay={0.2} className="md:col-span-2">
          <article className="card-hover flex h-full flex-col rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
            <MapPin className="text-[var(--color-accent-3)]" width={26} height={26} />
            <p className="mt-6 text-xs uppercase tracking-widest text-[var(--color-faint)]">Based in</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
              Bengaluru, India
            </p>
            <p className="text-sm text-[var(--color-muted)]">Open to hybrid &amp; remote</p>
          </article>
        </Reveal>

        {/* Languages */}
        <Reveal delay={0.25} className="md:col-span-6">
          <article className="card-hover flex flex-col items-start justify-between gap-4 rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <Globe className="text-[var(--color-accent-2)]" width={26} height={26} />
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-faint)]">
                  Languages I speak
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
                  Communicating across teams &amp; clients
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {languagesSpoken.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-[var(--color-line)] bg-[var(--color-panel-2)] px-4 py-1.5 text-sm text-[var(--color-fg)]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>

      {/* education footnote row */}
      <Reveal delay={0.1}>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {education.map((e) => (
            <div
              key={e.degree}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)]/60 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--color-fg)]">{e.degree}</p>
                <span className="font-mono text-xs text-[var(--color-accent)]">{e.year}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">{e.school}</p>
              {e.meta ? (
                <p className="mt-1 text-xs font-medium text-[var(--color-accent-2)]">{e.meta}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
