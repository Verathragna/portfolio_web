"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  posterImage?: string;
  techStack?: string[];
}

const BaseArticle = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => <article ref={ref} {...props} />
);
BaseArticle.displayName = "ProjectArticle";

const MotionArticle = motion(BaseArticle);

const cardVariants = {
  rest: { rotate: 0, y: 0, scale: 1 },
  hover: {
    rotate: 0.6,
    y: -6,
    scale: 1.01,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
  tap: { scale: 0.98 },
};

export default function ProjectCard({
  title,
  description,
  link,
  videoSrc,
  posterImage,
  techStack,
}: ProjectCardProps) {
  return (
    <MotionArticle
      className="project-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 text-center shadow-[0_45px_120px_-60px_rgba(6,182,212,0.55)]"
      variants={cardVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {(videoSrc || posterImage) && (
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/70 shadow-[0_30px_70px_-50px_rgba(56,189,248,0.65)]">
          {videoSrc ? (
            <div
              className="w-full rounded-[1rem] border border-slate-800/60 bg-black"
              style={{ aspectRatio: "16 / 9" }}
            >
              <video
                className="h-full w-full rounded-[1rem] object-contain"
                src={videoSrc}
                poster={posterImage}
                preload="metadata"
                playsInline
                controls
                width={1150}
                height={Math.round((1150 * 9) / 16)}
              />
            </div>
          ) : (
            <img
              src={posterImage}
              alt={`${title} thumbnail`}
              loading="lazy"
              decoding="async"
              className="h-56 w-full rounded-[1rem] object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative mt-6 flex flex-1 flex-col gap-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-slate-50 transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          <p className="text-slate-400/90 leading-relaxed">{description}</p>
        </div>

        {techStack?.length ? (
          <ul className="flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400/80">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-700/50 bg-slate-900/70 px-3 py-1"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="pt-4">
          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.96 }}>
            <Link href={link} className="project-link">
              View project
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </MotionArticle>
  );
}
