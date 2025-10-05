"use client";

import Link from "next/link";

const stats = [
  { value: "3.4", label: "Current GPA" },
  { value: "2025", label: "Expected grad" },
  { value: "4", label: "Team projects led" },
];

const focuses = [
  "Delightful web apps",
  "Hardware-software mashups",
  "User journey storytelling",
  "Calm, collaborative leadership",
];

const highlights = [
  "Shipped a MATLAB tool to detect radio frequency interference for faculty research.",
  "Led Camp Haven prototype work, translating user research into interactive flows.",
  "Managed a 20-person team at Your Pie, honing communication and leadership.",
];

const skillBadges = ["JS", "Java", "SQL", "Py"];

export default function HeroSection() {
  return (
    <section className="snap-section relative overflow-hidden rounded-[2.75rem] border border-slate-800/60 bg-slate-950/70 px-6 py-12 shadow-[0_40px_120px_-60px_rgba(6,182,212,0.7)] backdrop-blur-2xl md:py-20 lg:px-12">
      <div className="hero-ribbon">
        <span className="hero-ribbon__tag">Currently building</span>
        <span className="hero-ribbon__bullet">AI-assisted design assistant  Nova Labs</span>
        <span className="hero-ribbon__bullet">Open for Summer/Fall 2025 SWE roles</span>
        <a href="mailto:turner.walker79@gmail.com" className="hero-ribbon__link">Email</a>
        <a href="https://www.linkedin.com/in/william-walker-597765297" className="hero-ribbon__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="info-card hero-card text-center space-y-8">
            <span className="tag-pill mx-auto bg-slate-900/80 text-slate-200/80">
              SOFTWARE ENGINEERING STUDENT
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              <span className="block bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent">
                William Walker here
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                designing joyful, human software
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300/90">
              Griffin, Georgia raised and honing my craft at Kennesaw State University. I blend coursework, curiosity, and side builds to
              turn research-backed insights into polished, reliable tools. I am looking for a software engineering role where I can pair
              thoughtful UX with dependable systems and keep leveling up alongside a collaborative team.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#projects" className="btn-primary">
                See Recent Projects
              </Link>
              <a href="#contact" className="btn-secondary">
                Connect With Me
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex -space-x-3">
                {skillBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-800/50 bg-gradient-to-br from-slate-900 to-slate-950 text-sm font-semibold text-slate-300 shadow-[0_15px_35px_-25px_rgba(148,163,184,0.9)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400/90">
                Comfortable with Java, Python, SQL, and modern JavaScript tooling alongside hardware-focused coursework.
              </p>
            </div>

            <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card text-center">
                  <p className="text-3xl font-semibold text-slate-50">{stat.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="info-card info-card--accent hero-meta-card text-center space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400/90">
                Focus areas
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {focuses.map((item) => (
                  <span
                    key={item}
                    className="focus-pill"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/70 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.26em] text-cyan-300/90">
                  CURRENTLY FOCUSED
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-100">
                  Preparing for a software engineering position.
                </p>
                <p className="mt-2 text-sm text-slate-400/90">
                  Building full-stack prototypes, practicing responsive design systems, and reinforcing data-driven problem solving.
                </p>
              </div>
            </div>

            <div className="info-card text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400/80">
                Recent highlights
              </p>
              <ul className="space-y-3 text-sm text-slate-300/90">
                {highlights.map((item) => (
                  <li key={item} className="highlight-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



