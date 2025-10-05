"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
};

const MotionDiv = motion(
  React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => <div ref={ref} {...props} />
  )
);
MotionDiv.displayName = "RevealMotionDiv";

const distance = 45;

function buildVariants(direction: RevealDirection) {
  switch (direction) {
    case "left":
      return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
    case "down":
      return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
    case "scale":
      return { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } };
    default:
      return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
  }
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  direction = "up",
}: RevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls]);

  const variants = buildVariants(direction);

  return (
    <MotionDiv
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay: delay / 1000, ease: [0.18, 0.91, 0.3, 1] }}
    >
      {children}
    </MotionDiv>
  );
}
