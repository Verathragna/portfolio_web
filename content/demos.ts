export interface DemoMeta {
  title: string;
  summary: string;
  videoSrc: string;
  posterImage?: string;
}

export const demos: DemoMeta[] = [
  {
    title: "Generative City Builder",
    summary:
      "Procedurally assembles urban layouts in real time with adjustable density and terrain inputs.",
    videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1529429617124-aee3817f2c02?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Product Customizer",
    summary:
      "AR-enhanced configurator that lets shoppers preview material swaps instantly across devices.",
    videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Namaste.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Voice-Driven Analytics",
    summary:
      "Conversational assistant that narrates dashboards, highlights anomalies, and exports narrated clips.",
    videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Bowl.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
];
