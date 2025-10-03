"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
  <section className="relative overflow-hidden py-24 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-12 left-1/2 h-96 w-96 rounded-full bg-slate-500/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

  <div className="relative mx-auto max-w-3xl space-y-6 px-6 animate-fade-in-up">
        <div className="inline-block">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Software Engineer
          </span>
        </div>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
            Creating Digital
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Experiences
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Building innovative solutions through elegant code and thoughtful design
        </p>

        <div className="flex gap-4 justify-center pt-6">
          <Link
            href="#projects"
            className="relative inline-flex items-center gap-3 px-7 py-3 bg-accent rounded-full font-semibold text-slate-900 shadow-lg shadow-accent/25 hover:scale-105 transition-transform duration-250"
          >
            View Projects
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-slate-700 rounded-full font-medium text-slate-300 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
