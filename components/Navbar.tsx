"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, profile } from "@/lib/data";
import { Close, Download, Menu } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)]/80 py-3 backdrop-blur-xl"
            : "my-4 py-3"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent)]">
            MI
          </span>
          <span className="hidden font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight sm:block">
            Manjunath<span className="text-[var(--color-faint)]">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] px-4 py-2 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] sm:flex"
          >
            <Download width={16} height={16} />
            Résumé
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-panel-2)] text-[var(--color-fg)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-panel-2)] hover:text-[var(--color-fg)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              className="mt-1 flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-[15px] font-semibold text-[#04140d]"
            >
              <Download width={16} height={16} />
              Download résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
