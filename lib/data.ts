// Central content for the portfolio — sourced from Manjunath Itagi's resume.

export const profile = {
  name: "Manjunath Itagi",
  firstName: "Manjunath",
  role: "Full Stack Developer",
  tagline: "I build production web apps end to end — from FastAPI handlers to pixel-tight React UIs.",
  location: "Bengaluru, India",
  email: "mdmanjuitagi@gmail.com",
  phone: "+91 8951096577",
  linkedin: "https://www.linkedin.com/in/manjunath-itagi",
  linkedinLabel: "in/manjunath-itagi",
  github: "https://github.com/2002Manju",
  githubLabel: "github.com/2002Manju",
  resume: "/Manjunath_Itagi_FullStack_Resume.pdf",
  avatar: "/manjunath.jpeg",
  available: true,
  summary:
    "Full Stack Developer at a stock-broking fintech, building internal CRM, compliance and HR/payroll web applications across a modern polyglot stack — Next.js and React (TypeScript) on the frontend, Django, Django REST Framework and FastAPI on the backend. Comfortable with PostgreSQL, Redis, REST APIs and real-time features, delivering production functionality end to end.",
};

// Small object rendered as a "code" card in the hero.
export const heroSnippet = {
  role: "Full Stack Developer",
  company: "ATS Share Brokers",
  stack: ["Next.js", "React", "TypeScript", "Django", "FastAPI"],
  databases: ["PostgreSQL", "Redis"],
  location: "Bengaluru, IN",
  status: "building fintech products",
};

export const stats = [
  { value: "8.46", label: "BCA CGPA", sub: "Karnataka University" },
  { value: "6+", label: "Production modules", sub: "shipped end to end" },
  { value: "3", label: "Backend frameworks", sub: "Django · DRF · FastAPI" },
  { value: "24/7", label: "Fintech uptime", sub: "brokerage platform" },
];

export type SkillGroup = {
  title: string;
  hint: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    hint: "Day-to-day toolbox",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C"],
  },
  {
    title: "Frontend",
    hint: "Interfaces & state",
    skills: [
      "React.js",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
  },
  {
    title: "Backend",
    hint: "APIs & services",
    skills: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Celery",
      "WebSockets / Socket.IO",
    ],
  },
  {
    title: "Databases & Messaging",
    hint: "Data at rest & in motion",
    skills: ["PostgreSQL", "MySQL", "Redis", "Kafka"],
  },
  {
    title: "Cloud & DevOps",
    hint: "Ship & operate",
    skills: ["AWS (EC2, S3)", "Docker", "Gunicorn", "Git & GitHub"],
  },
  {
    title: "Testing & Tools",
    hint: "Quality & workflow",
    skills: ["Vitest", "Playwright", "Pytest", "Postman", "Pandas", "WeasyPrint", "JWT"],
  },
];

export type Experience = {
  role: string;
  company: string;
  meta: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "ATS Share Brokers Pvt Ltd",
    meta: "Aditya Trading Solutions",
    location: "Bengaluru",
    period: "Mar 2026 — Present",
    current: true,
    points: [
      "Full-stack developer on the company's internal product suite — a trading CRM, back-office / compliance services and an HR & payroll platform — across Next.js and React (TypeScript) frontends and Django, DRF and FastAPI backends on PostgreSQL.",
      "Built FATCA / KYC compliance features end to end — Next.js UI, FastAPI handlers and a scheduled Django sync job — to capture and reconcile client tax-compliance data.",
      "Developed brokerage charges-calculation and trading-activity reports (clients-traded and first-time-trader metrics), fixing calculation bugs and adding new-client counts.",
      "Delivered support-desk (ticket priority) and \"Pocket\" client-dashboard features, and automated WhatsApp KYC-count messaging via scheduled CRON jobs.",
      "Contributed to the HR & Payroll platform: automated payslip generation (WeasyPrint / React-PDF), Form 16 tax certificates, a punch-based attendance engine, and leave management with Celery-driven approvals and email notifications.",
      "Worked with AWS S3, Redis, Celery and JWT-secured REST APIs; deployed containerized services with Docker and Gunicorn on AWS EC2.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Django", "DRF", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "AWS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Ultimez Technology",
    meta: "EduPath — Learning Management System",
    location: "Hubli",
    period: "Apr 2024 — Sep 2024",
    points: [
      "Completed a 6-month frontend internship building EduPath, an online Learning Management System, using React, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Developed interactive course viewers, typography and color-model learning modules (RGB, HEX, HSL), and student portal interfaces.",
      "Collaborated with senior developers on UI/UX accessibility standards (WCAG) and actively took part in peer code reviews and agile sprints.",
    ],
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
];

export type Project = {
  name: string;
  category: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  accent: string; // tailwind gradient stops
  featured?: boolean;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "AI Job Hunt Agent",
    category: "AI · Full Stack · Agentic System",
    blurb:
      "An autonomous AI-driven job discovery, resume intelligence, and semantic candidate matching platform built with FastAPI, Next.js, and Supabase pgvector.",
    highlights: [
      "Vector similarity semantic matching via Supabase pgvector",
      "Pluggable AI layer with Gemini, Groq, OpenRouter & local Ollama failover",
      "Deterministic 7-factor scoring engine with automated Telegram alerts",
    ],
    tech: ["FastAPI", "Next.js", "Python", "PostgreSQL", "pgvector", "TypeScript", "Tailwind CSS"],
    accent: "from-emerald-400/25 to-teal-400/10",
    featured: true,
  },
  {
    name: "Trading CRM & Back-Office Suite",
    category: "Fintech · Internal Product",
    blurb:
      "The company's core internal platform for a stock-broking business — a trading CRM, back-office services and a client-facing \"Pocket\" dashboard, built across a Next.js frontend and Django/DRF/FastAPI backends.",
    highlights: [
      "Support-desk with ticket-priority routing and SLA tracking",
      "\"Pocket\" client dashboard features & trading account tools",
      "JWT-secured REST APIs on PostgreSQL + Redis caching",
    ],
    tech: ["Next.js", "TypeScript", "Django", "FastAPI", "PostgreSQL", "Redis"],
    accent: "from-cyan-400/20 to-blue-400/10",
    featured: true,
  },
  {
    name: "EduPath LMS",
    category: "EdTech · Frontend Platform",
    blurb:
      "An interactive web-based Learning Management System with rich course tracks, interactive CSS color playgrounds (RGB, HEX, HSL), student portal, and responsive UI.",
    highlights: [
      "Interactive coding modules and real-time color model playgrounds",
      "Comprehensive curriculum browser covering HTML5, CSS3 & web design",
      "Fully responsive and accessible layout deployed live on Vercel",
    ],
    tech: ["React", "JavaScript", "Bootstrap", "HTML5", "CSS3", "Vercel"],
    accent: "from-amber-400/20 to-orange-400/10",
    github: "https://github.com/2002Manju/Edupath",
    live: "https://edupath-tan.vercel.app",
    featured: true,
  },
  {
    name: "Developer Portfolio",
    category: "Web · Modern Architecture",
    blurb:
      "Personal portfolio built with Next.js 15 App Router, React 19, Motion (Framer Motion), and Tailwind CSS v4, featuring a dark fintech aesthetic and smooth scroll reveals.",
    highlights: [
      "Bento-grid design, custom SVG icon system, and glow ambient backdrops",
      "Zero heavyweight UI libraries — optimized for performance and Core Web Vitals",
      "Fully responsive, dark-mode first, and prefers-reduced-motion compatible",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Motion"],
    accent: "from-violet-400/20 to-purple-400/10",
    github: "https://github.com/2002Manju/portfolio",
    live: "https://portfolio-six-alpha-42.vercel.app",
    featured: true,
  },
  {
    name: "FATCA / KYC Compliance Module",
    category: "Regulatory · Compliance",
    blurb:
      "End-to-end tax-compliance tooling to capture and reconcile client FATCA/KYC data — a Next.js UI backed by FastAPI handlers and a scheduled Django sync job.",
    highlights: [
      "Full-stack: UI, API handlers & scheduled background sync jobs",
      "Scheduled reconciliation of client tax-compliance data",
      "Automated WhatsApp KYC-count reporting via Django CRON",
    ],
    tech: ["Next.js", "FastAPI", "Django", "CRON", "PostgreSQL"],
    accent: "from-cyan-400/20 to-teal-400/10",
  },
  {
    name: "HR & Payroll Platform",
    category: "Enterprise · Automation",
    blurb:
      "A Django + React/MUI platform automating the full HR lifecycle — payroll, statutory documents, attendance and leave — with Celery-driven approvals and notifications.",
    highlights: [
      "Automated payslip & Form 16 generation (WeasyPrint / React-PDF)",
      "Punch-based biometric attendance engine with holiday calendar",
      "Leave management with Celery-driven multi-level approvals + email",
    ],
    tech: ["Django", "React", "Material UI", "Celery", "WeasyPrint"],
    accent: "from-teal-400/20 to-emerald-400/10",
  },
  {
    name: "Reports & Analytics Engine",
    category: "Data · Reporting",
    blurb:
      "Trading-activity and brokerage reporting across a React frontend and FastAPI report handlers — surfacing clients-traded, first-time-trader and new-client metrics.",
    highlights: [
      "Brokerage charges-calculation engine and calculation bug fixes",
      "First-time-trader & clients-traded metrics aggregation",
      "Interactive Recharts visualizations and Pandas analytical processing",
    ],
    tech: ["React", "FastAPI", "Recharts", "Pandas", "PostgreSQL"],
    accent: "from-blue-400/20 to-indigo-400/10",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  meta?: string;
  year: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Karnataka University — JSS SMI UG & PG Studies, Dharwad",
    meta: "CGPA: 8.46",
    year: "2024",
  },
  {
    degree: "Pre-University Course (PUC)",
    school: "Govt. PU College, Hebsur",
    year: "2021",
  },
  {
    degree: "SSLC (Class X)",
    school: "St. John Samaritan School, Hubli",
    year: "2018",
  },
];

export const languagesSpoken = ["English", "Kannada", "Hindi"];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];
