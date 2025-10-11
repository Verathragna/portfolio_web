"use client";



import Link from "next/link";
import HeaderAccent from "@/components/HeaderAccent";
import { PROFILE_EMAIL, PROFILE_LINKEDIN, PROFILE_NAME } from "@/content/profile";



const stats = [
  { value: "3.4", label: "GPA" },
  { value: "Dec 2025", label: "Expected grad" },
  { value: "4", label: "Team projects led" },
];



const focuses = [

  "Web apps",

  "Hardware-software mashups",

  "Responsive design",

  "Clean UI/UX",

];



const highlights = [
  "Shipped a MATLAB tool to detect radio frequency interference for faculty research.",
  "Built a web app that drafts house blueprints using AI generation off of user parameters.",
  "Developed a React app that nudges users to hydrate and stretch during long sessions.",
];



const skillBadges = [
  { label: "JS", ariaLabel: "JavaScript" },
  { label: "Java", ariaLabel: "Java" },
  { label: "SQL", ariaLabel: "Structured Query Language" },
  { label: "Python", ariaLabel: "Python" },
  { label: "HTML", ariaLabel: "HyperText Markup Language" },
  { label: "CSS", ariaLabel: "Cascading Style Sheets" },
  { label: "React", ariaLabel: "React" },
  { label: "Git", ariaLabel: "Git version control" },
  { label: "Figma", ariaLabel: "Figma" },
  { label: "MATLAB", ariaLabel: "MATLAB" },
];



export default function HeroSection() {
  return (
    <>
      <HeaderAccent />
      <section className="snap-section relative overflow-hidden rounded-[2.75rem] border border-slate-800/60 bg-slate-950/70 px-6 py-12 shadow-[0_40px_120px_-60px_rgba(6,182,212,0.7)] backdrop-blur-2xl md:py-20 lg:px-12">

        <div className="hero-ribbon">

        <span className="hero-ribbon__tag">Currently building</span>

        <span className="hero-ribbon__bullet">AI-assisted house blueprint generation</span>

        <span className="hero-ribbon__bullet">Open for SWE roles</span>

        <a href={`mailto:${PROFILE_EMAIL}`} className="hero-ribbon__link">Email</a>

        <a href={PROFILE_LINKEDIN} className="hero-ribbon__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>

      </div>

      <div className="relative mx-auto max-w-6xl space-y-10">

        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">

          <div className="info-card hero-card text-center space-y-8">

            <span className="tag-pill mx-auto bg-slate-900/80 text-slate-200/80">

              SOFTWARE ENGINEERING STUDENT

            </span>



            <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">

              <span className="block bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent">

                {PROFILE_NAME}:&nbsp;

              </span>

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent animate-gradient">

                designing joyful, human software

              </span>

            </h1>



            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300/90">

              Griffin, Georgia raised and studied at Kennesaw State University. I blend coursework, curiosity, and side builds to

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
                    key={badge.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-800/50 bg-gradient-to-br from-slate-900 to-slate-950 text-sm font-semibold text-slate-300 shadow-[0_15px_35px_-25px_rgba(148,163,184,0.9)]"
                    aria-label={badge.ariaLabel}
                  >
                    {badge.label}
                  </span>
                ))}

              </div>

              <p className="max-w-xs text-sm leading-relaxed text-slate-400/90">

                Comfortable with Java, Python, SQL, and modern JavaScript tooling alongside hardware-focused coursework.

              </p>

            </div>



            <div className="mx-auto grid w-full max-w-4xl gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/75 p-6 text-left shadow-[0_28px_75px_-45px_rgba(56,189,248,0.6)] transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-300/45 sm:text-center"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -right-4 h-24 w-24 rounded-full bg-cyan-400/25 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[70px]"
                  />
                  <div className="relative flex flex-col items-start gap-4 sm:items-center">
                    <p className="flex w-full items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-950/70 px-4 py-2 text-sm uppercase tracking-[0.22em] text-cyan-200/90 sm:justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                      <span className="font-semibold text-cyan-200/90">
                        {stat.label}
                      </span>
                      <span className="text-slate-50">: {stat.value}</span>
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-20 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent sm:w-24"
                    />
                  </div>
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
    </>
  );
}



