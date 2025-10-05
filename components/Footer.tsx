const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative mt-24 px-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-950/70 px-6 py-10 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.85)] backdrop-blur-2xl md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 text-sm text-slate-400/90">
            <p className="font-medium text-slate-200/90">
              (c) {year} William Walker. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p>
              Based in Griffin, Georgia and studying at Kennesaw State University. Actively looking for software engineering opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-300/90">
            <span className="uppercase tracking-[0.28em] text-slate-500">Stay in touch</span>
            <a
              href="mailto:turner.walker79@gmail.com"
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/william-walker-597765297"
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="tel:16789726330"
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              678-972-6330
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
