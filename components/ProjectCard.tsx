"use client";

import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  posterImage?: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  videoSrc,
  posterImage,
  techStack,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col space-y-4 rounded-2xl border border-slate-800/50 bg-gradient-to-b from-slate-900/60 to-transparent backdrop-blur-sm p-6 card-smooth hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/15 hover:border-accent/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {(videoSrc || posterImage) && (
        <div className="relative overflow-hidden rounded-xl bg-slate-950/50 ring-1 ring-slate-800/50">
          {videoSrc ? (
            <video
              className="h-56 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              src={videoSrc}
              poster={posterImage}
              muted
              loop
              playsInline
              autoPlay={isHovered}
            />
          ) : (
            <img
              src={posterImage}
              alt={`${title} thumbnail`}
              className="h-56 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        </div>
      )}

      <div className="relative space-y-3 flex-1">
        <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>

        {techStack?.length ? (
          <ul className="flex flex-wrap gap-2 text-sm">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-slate-800/40 border border-slate-700/30 px-3 py-1 font-medium text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <a
        href={link}
        className="relative inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all group-hover:gap-3"
      >
        View Project
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}
