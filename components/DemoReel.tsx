"use client";

import React from "react";
import { demos } from "@/content/demos";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import MediaPlayer from "@/components/MediaPlayer";

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
    <section id="published-author" className="section-shell section-shell--pattern">
      <div className="section-header">
        <span className="section-header__eyebrow">PUBLISHED AUTHOR</span>
        <h2 className="section-header__title">Published author</h2>
        <p className="section-header__lead">
          A closer look at the research storytelling I have pushed into publication, pairing technical rigor with narratives that make the results accessible and actionable.
        </p>
      </div>

      <div className="mt-14">
        <div className="mx-auto flex w-full max-w-[1150px] flex-col items-center gap-6 px-2">
          {demos.map((demo, index) => {
            const summaryId = `demo-summary-${index}`;

            return (
              <Reveal key={demo.title} delay={index * 160} direction="up" className="w-full">
                <MotionArticle
                  className="project-card group flex h-full flex-col justify-between gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/70 p-5 shadow-[0_28px_70px_-45px_rgba(59,130,246,0.55)] overflow-visible"
                  variants={mediaVariants}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <MediaPlayer
                    src={demo.videoSrc}
                    poster={demo.posterImage}
                    preload="metadata"
                    playsInline
                    aria-describedby={summaryId}
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">
                      {demo.title}
                    </h3>
                    <p id={summaryId} className="text-sm text-slate-400/90 leading-relaxed">
                      {demo.summary}
                    </p>
                    {demo.pdfHref && (
                      <a
                        href={demo.pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                      >
                        {demo.ctaLabel ?? "Read the full paper (PDF)"}
                        <span aria-hidden="true">-&gt;</span>
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 border-t border-slate-800/60 pt-3">
                    {demo.pdfHref ? "Use the media player for a quick overview, then open the PDF for the full publication." : "Use the media controls to explore each excerpt."}
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
