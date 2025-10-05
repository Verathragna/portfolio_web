"use client";

import React from "react";
import { motion } from "framer-motion";

const BaseDiv = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <div ref={ref} {...props} />
);
BaseDiv.displayName = "HeaderAccentDiv";

const MotionDiv = motion(BaseDiv);

export default function HeaderAccent() {
  return (
    <MotionDiv
      className="header-accent"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.2, 0.9, 0.3, 1] }}
    >
      <div className="header-accent__pill">
        <span className="header-accent__dot" />
        Griffin, GA - Eastern Time (UTC-5)
      </div>
      <div className="header-accent__pill">
        <span className="header-accent__dot header-accent__dot--alt" />
        Available for hybrid / remote collaboration
      </div>
      <a
        className="header-accent__pill header-accent__link"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </MotionDiv>
  );
}
