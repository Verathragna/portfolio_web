export interface DemoMeta {
  title: string;
  summary: string;
  videoSrc: string;
  posterImage?: string;
  pdfHref?: string;
  ctaLabel?: string;
}

export const demos: DemoMeta[] = [
  {
    title: "Radio Interference Analyzer",
    summary:
      "As lead author on a Georgia Department of Transportation-funded IEEE proceedings paper, I built a MATLAB dashboard and Arduino-driven 360-degree antenna to hunt down RF noise, visualize results for faculty, and capture the operations lessons from our live V2X deployment.",
    videoSrc: "/videos/ACPR_Estimator_UIVid.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1526481280695-3c4693f06ab1?auto=format&fit=crop&w=1200&q=80",
    pdfHref: "/papers/SDR_U_NII_4_Interference_Estimator_and_Experiments_in_a_Real_World_V2X_Deployment.pdf",
    ctaLabel: "Read the full IEEE paper (PDF)",
  },
];
