"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-12 left-1/2 h-96 w-96 rounded-full bg-slate-500/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-8 px-6 animate-fade-in-up">
        <div className="inline-block">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Software Engineer
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
            Creating Digital
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Experiences
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Building innovative solutions through elegant code and thoughtful design
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            View Projects
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></span>
          </Link>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-slate-700 rounded-lg font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
