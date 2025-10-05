"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="mx-auto w-full max-w-6xl px-4">
      <div
        className={`flex items-center justify-between gap-6 rounded-full border px-6 py-3 transition-all duration-300 backdrop-blur-2xl ${
          scrolled
            ? "border-slate-800/70 bg-slate-950/80 shadow-[0_30px_80px_-40px_rgba(6,182,212,0.6)]"
            : "border-slate-800/40 bg-slate-950/60"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus-ring">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_-25px_rgba(6,182,212,0.9)]">
            WW
          </span>
          <span className="hidden text-left text-xs font-semibold uppercase tracking-[0.4em] text-slate-400/90 sm:block">
            William Walker
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 transition-colors duration-200 focus:outline-none focus-ring"
            >
              <span className="absolute inset-0 rounded-full bg-slate-100/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="relative z-10 text-slate-300 group-hover:text-accent group-focus-visible:text-accent">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:turner.walker79@gmail.com"
            className="hidden rounded-full border border-slate-700/60 px-5 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-accent/60 hover:text-accent md:inline-flex"
          >
            Email Me
          </a>

          <a href="https://www.linkedin.com/in/william-walker-597765297" className="btn-primary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}


