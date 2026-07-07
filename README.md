# Manjunath Itagi — Portfolio

A modern, animated personal portfolio for **Manjunath Itagi**, Full Stack Developer.
Built with the same stack used on the job — Next.js, React, TypeScript and Tailwind.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- **Dark, fintech-inspired design** with an emerald/cyan accent system and animated glow + grid backdrops
- **Framer Motion** scroll reveals, staggered grids, and a skills marquee
- **Bento-grid About** section, vertical **experience timeline**, and featured **work** cards
- Real content sourced from the résumé — experience, skills, education, projects
- Downloadable résumé (`/Manjunath_Itagi_FullStack_Resume.pdf`)
- Fully **responsive**, accessible, SEO-ready (Open Graph + Twitter metadata), `prefers-reduced-motion` aware
- **Zero UI dependencies** beyond Next + Motion — icons are hand-built inline SVGs

## 🧱 Tech Stack

| Layer      | Tools                                             |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 15 (App Router), React 19                 |
| Language   | TypeScript                                        |
| Styling    | Tailwind CSS v4                                    |
| Animation  | Motion (Framer Motion)                            |
| Fonts      | Space Grotesk · Inter · JetBrains Mono (next/font)|

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## 📁 Structure

```
app/
  layout.tsx        # fonts, metadata, root layout
  page.tsx          # section composition
  globals.css       # design tokens + utilities (Tailwind v4)
components/
  Navbar.tsx  Hero.tsx  About.tsx  Skills.tsx
  Experience.tsx  Projects.tsx  Contact.tsx  Footer.tsx
  Reveal.tsx  SectionHeading.tsx  icons.tsx
lib/
  data.ts           # ← single source of content (edit here)
public/
  manjunath.jpeg    # profile photo
  Manjunath_Itagi_FullStack_Resume.pdf
```

## ✏️ Editing content

All text — profile, skills, experience, projects, education — lives in
[`lib/data.ts`](lib/data.ts). Update that one file to change what the site shows.

## ☁️ Deploy

The easiest path is **[Vercel](https://vercel.com)** (makers of Next.js):

1. Push this folder to a GitHub repo.
2. Import the repo on Vercel — it auto-detects Next.js.
3. Deploy. No config needed.

---

Built with Next.js, Tailwind CSS & Framer Motion in Bengaluru.
