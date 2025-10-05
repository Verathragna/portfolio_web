"use client";

import React from "react";
import { demos } from "@/content/demos";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const BaseArticle = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => <article ref={ref} {...props} />
);
BaseArticle.displayName = "DemoArticle";

const MotionArticle = motion(BaseArticle);

const mediaVariants = {
  rest: { rotate: 0, y: 0, scale: 1 },
  hover: {
    rotate: -0.5,
    y: -6,
    scale: 1.01,
    transition: { type: "spring", stiffness: 210, damping: 20 },
  },
};

export default function DemoReel() {
  return (
    <section id="project-media" className="section-shell section-shell--pattern">
      <div className="section-header">
        <span className="section-header__eyebrow">COURSE AND RESEARCH HIGHLIGHTS</span>
        <h2 className="section-header__title">Show, don't tell: walkthroughs in motion</h2>
        <p className="section-header__lead">
          A quick highlight reel from the lab, classroom, and late-night hack sessions. Hit play to see how I experiment, gather feedback, and iterate my way to clearer solutions.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto pb-4 md:overflow-visible">
        <div className="flex gap-6 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {demos.map((demo, index) => {
            const summaryId = `demo-summary-${index}`;

            return (
              <Reveal key={demo.title} delay={index * 160} direction="up" className="min-w-[280px] flex-1 md:min-w-0">
                <MotionArticle
                  className="project-card group flex h-full flex-col justify-between gap-4 rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 shadow-[0_40px_100px_-70px_rgba(59,130,246,0.6)]"
                  variants={mediaVariants}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/80">
                    <video
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      src={demo.videoSrc}
                      poster={demo.posterImage}
                      controls
                      preload="metadata"
                      playsInline
                      aria-describedby={summaryId}
                    >
                      Sorry, your browser does not support embedded videos.
                    </video>
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">
                      {demo.title}
                    </h3>
                    <p id={summaryId} className="text-sm text-slate-400/90 leading-relaxed">
                      {demo.summary}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 border-t border-slate-800/60 pt-3">
                    Use the media controls to explore each walkthrough.
                  </p>
                </MotionArticle>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
