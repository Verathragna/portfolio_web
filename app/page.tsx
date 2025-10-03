import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import DemoReel from "@/components/DemoReel";

export default function HomePage() {
  return (
    <section className="space-y-24">
      <HeroSection />

      <div id="projects" className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Selected work showcasing innovative solutions and technical expertise
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="Blueprint Generator"
            description="AI-powered tool that generates residential floorplans from custom parameters, streamlining the architectural design process."
            link="/projects/blueprint"
            videoSrc="https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4"
            posterImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            techStack={["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"]}
          />
          <ProjectCard
            title="Realtime Chat Platform"
            description="Full-stack chat application with real-time messaging, WebSocket connections, and secure authentication."
            link="/projects/chat"
            posterImage="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
            techStack={["React", "Firebase", "WebSockets", "Node.js"]}
          />
        </div>
      </div>

      <DemoReel />
    </section>
  );
}
