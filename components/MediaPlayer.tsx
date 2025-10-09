"use client";

import React from "react";

type MediaPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  preload?: "auto" | "metadata" | "none";
  loop?: boolean;
  playsInline?: boolean;
  muted?: boolean;
  "aria-describedby"?: string;
};

const TARGET_WIDTH = 1150;
const TARGET_HEIGHT = Math.round(TARGET_WIDTH * 9 / 16);
const ASPECT_RATIO = "16 / 9";

export default function MediaPlayer({
  src,
  poster,
  className,
  size = "large",
  preload = "metadata",
  loop = false,
  playsInline = true,
  muted,
  "aria-describedby": ariaDescribedBy,
}: MediaPlayerProps) {
  const sizeClass =
    size === "small"
      ? "w-full sm:w-[18rem] self-center"
      : size === "medium"
        ? "w-full sm:w-[28rem] self-center"
        : "w-full max-w-[1150px] self-center";

  return (
    <div
      className={[
        "relative rounded-2xl border border-slate-800/60 bg-slate-950/80 p-1",
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="w-full rounded-xl bg-black"
        style={{
          width: "100%",
          maxWidth: `${TARGET_WIDTH}px`,
          aspectRatio: ASPECT_RATIO,
        }}
      >
        <video
          src={src}
          poster={poster}
          preload={preload}
          loop={loop}
          playsInline={playsInline}
          muted={muted}
          controls
          width={TARGET_WIDTH}
          height={TARGET_HEIGHT}
          tabIndex={0}
          aria-describedby={ariaDescribedBy}
          className="h-full w-full rounded-xl object-contain"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
    </div>
  );
}
