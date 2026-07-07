import { navLinks, profile } from "@/lib/data";
import { Linkedin, Mail } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-panel)]/40">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent)]">
                MI
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              Full Stack Developer building fintech products with Next.js, React, Django &amp;
              FastAPI. Based in {profile.location}.
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-2.5">
              <p className="text-xs uppercase tracking-widest text-[var(--color-faint)]">Navigate</p>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5">
              <p className="text-xs uppercase tracking-widest text-[var(--color-faint)]">Connect</p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                <Mail width={15} height={15} /> Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                <Linkedin width={15} height={15} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-faint)] sm:flex-row sm:items-center">
          <p>© {profile.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
          <p className="font-mono">Designed &amp; developed in Bengaluru 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
