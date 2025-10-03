import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-20 text-center text-white shadow-xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/3 h-64 w-64 rounded-full bg-blue-500/40 blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-purple-500/40 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-12 right-10 h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative mx-auto max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">Welcome</p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Hi, I’m Alex 👋
        </h1>
        <p className="text-xl text-white/80">
          Software Engineer | Full-Stack Developer | Builder of Ideas
        </p>
        <Link
          href="/projects"
          className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-800"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
