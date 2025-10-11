import {
  PROFILE_EMAIL,
  PROFILE_LINKEDIN,
  PROFILE_GITHUB_REPOS,
  PROFILE_NAME,
} from "@/content/profile";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative mt-24 px-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-950/70 px-6 py-10 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.85)] backdrop-blur-2xl md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 text-sm text-slate-400/90">
            <p className="font-medium text-slate-200/90">
              (c) {year} {PROFILE_NAME}. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p>
              Based in Griffin, Georgia and studied at Kennesaw State University. Actively looking for software engineering opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-300/90">
            <span className="uppercase tracking-[0.28em] text-slate-500">Stay in touch </span>
            <a
              href={`mailto:${PROFILE_EMAIL}`}
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              Email&nbsp;
            </a>
            <a
              href={PROFILE_LINKEDIN}
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn&nbsp;
            </a>
            <a
              href={PROFILE_GITHUB_REPOS}
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&nbsp;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
