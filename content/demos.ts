export interface DemoMeta {
  title: string;
  summary: string;
  videoSrc: string;
  posterImage?: string;
}

export const demos: DemoMeta[] = [
  {
    title: "Radio Interference Analyzer",
    summary:
      "MATLAB application that flags radio frequency interference and visualizes signal strength to support faculty research.",
    videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1526481280695-3c4693f06ab1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ACME Beverage Ordering System",
    summary:
      "Course project where our four-person team built a Java and Visual Basic prototype that lets distributors place inventory orders.",
    videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Namaste.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Camp Haven Enrollment Portal",
    summary:
      "User-centered Marvel prototype enabling students to register for classes with clear flows, requirements, and stakeholder dashboards.",
    videoSrc: "https://storage.googleapis.com/coverr-main/mp4/Bowl.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];
