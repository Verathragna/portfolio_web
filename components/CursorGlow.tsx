"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;

    const handlePointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      root.style.setProperty("--cursor-x", `${x}%`);
      root.style.setProperty("--cursor-y", `${y}%`);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return <div className="cursor-glow" />;
}
