"use client";

import { demos } from "@/content/demos";

export default function DemoReel() {
  return (
    <section className="space-y-10 py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Demo Reel
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
          A curated collection of interactive prototypes showcasing creative solutions,
          real-time functionality, and engaging user experiences
        </p>
      </div>

      <div className="overflow-x-auto pb-4 md:overflow-visible">
        <div className="flex gap-6 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {demos.map((demo, index) => {
            const summaryId = `demo-summary-${index}`;

            return (
              <article
                key={demo.title}
                className="group flex min-w-[280px] flex-1 flex-col justify-between gap-4 rounded-2xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 md:min-w-0"
              >
                <div
                  className="animate-fade-in-up overflow-hidden rounded-xl bg-slate-950/50 ring-1 ring-slate-800/50"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <video
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={demo.videoSrc}
                    poster={demo.posterImage}
                    controls
                    preload="metadata"
                    playsInline
                    aria-describedby={summaryId}
                  >
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {demo.title}
                  </h3>
                  <p id={summaryId} className="text-sm text-slate-400 leading-relaxed">
                    {demo.summary}
                  </p>
                </div>

                <p className="text-xs text-slate-500 border-t border-slate-800/50 pt-3">
                  Use player controls for captions or full-screen mode
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
