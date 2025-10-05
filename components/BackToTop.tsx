"use client";

import React from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const BaseButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => <button ref={ref} {...props} />
);
BaseButton.displayName = "BackToTopButton";

const MotionButton = motion(BaseButton);

const variants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function BackToTop() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setVisible(latest > 320);
    });
  }, [scrollY]);

  useEffect(() => {
    controls.start(visible ? "visible" : "hidden");
  }, [controls, visible]);

  return (
    <MotionButton
      type="button"
      aria-label="Back to top"
      className="back-to-top"
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="back-to-top__ring" />
      <span className="back-to-top__label">Top</span>
    </MotionButton>
  );
}
