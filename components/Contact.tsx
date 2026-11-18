"use client";

import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "./icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    Icon: Github,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Bengaluru",
    Icon: MapPin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-panel)] p-8 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
          <div className="glow left-1/2 top-[-40%] h-[300px] w-[300px] -translate-x-1/2 bg-[var(--color-accent)]/20" />

          <div className="relative">
            <div className="max-w-2xl">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
                05 — Contact
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">worth shipping.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                I&apos;m open to full-stack and frontend roles, freelance builds, and interesting
                product conversations. Drop me a line — I usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[#04140d] transition-transform hover:scale-[1.02]"
                >
                  <Mail width={17} height={17} />
                  Say hello
                  <ArrowUpRight
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] px-5 py-3 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/40"
                >
                  <Download width={17} height={17} />
                  Résumé
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="card-hover group flex items-center gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel-2)]/60 px-5 py-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-accent)]">
                    <Icon width={19} height={19} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-[var(--color-faint)]">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-[var(--color-fg)]">{value}</p>
                  </div>
                  <ArrowUpRight
                    width={16}
                    height={16}
                    className="ml-auto text-[var(--color-faint)] transition-colors group-hover:text-[var(--color-accent)]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
