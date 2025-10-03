"use client";

import { demos } from "@/content/demos";

export default function DemoReel() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">Demo Reel</h2>
        <p className="max-w-2xl text-slate-600">
          A curated mix of interactive prototypes showcasing motion, realtime rendering, and
          storytelling moments. Each clip includes descriptive text to help everyone preview the
          experience.
        </p>
      </div>

      <div className="overflow-x-auto pb-4 md:overflow-visible">
        <div className="flex gap-6 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {demos.map((demo, index) => {
            const summaryId = `demo-summary-${index}`;

            return (
              <article
                key={demo.title}
                className="group flex min-w-[280px] flex-1 flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl md:min-w-0"
              >
                <div
                  className="animate-fade-in-up overflow-hidden rounded-xl bg-slate-900/5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <video
                    className="h-48 w-full object-cover"
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

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{demo.title}</h3>
                  <p id={summaryId} className="text-sm text-slate-600">
                    {demo.summary}
                  </p>
                </div>

                <p className="text-xs text-slate-500">
                  Tip: Use the player controls to enable captions or enter full-screen mode.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
