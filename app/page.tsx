import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <HeroSection />

      <div>
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="🏠 Blueprint Generator"
            description="AI-powered tool that generates residential floorplans from parameters."
            link="/projects/blueprint"
            videoSrc="https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4"
            posterImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            techStack={["Next.js", "Tailwind CSS", "OpenAI API"]}
          />
          <ProjectCard
            title="⚡ Realtime Chat App"
            description="Full-stack chat platform with WebSocket + Firebase auth."
            link="/projects/chat"
            posterImage="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80"
            techStack={["React", "Firebase", "WebSockets"]}
          />
        </div>
      </div>
    </section>
  );
}
