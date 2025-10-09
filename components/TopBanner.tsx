"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE_EMAIL } from "@/content/profile";

const BaseDiv = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <div ref={ref} {...props} />
);
BaseDiv.displayName = "TopBannerDiv";

const MotionDiv = motion(BaseDiv);

export default function TopBanner() {
  return (
    <MotionDiv
      className="top-banner"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="top-banner__glow" />
      <p className="top-banner__text">
        <span className="top-banner__badge">Currently building</span>
        Summer &amp; Fall 2025 software engineering interviews.
        <a className="top-banner__cta" href={`mailto:${PROFILE_EMAIL}`}>
          Schedule a chat
        </a>
      </p>
    </MotionDiv>
  );
}
