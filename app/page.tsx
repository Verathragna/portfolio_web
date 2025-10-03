import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <HeroSection />

      <div>
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="🏠 Blueprint Generator"
            description="AI-powered tool that generates residential floorplans from parameters."
            link="/projects/blueprint"
          />
          <ProjectCard
            title="⚡ Realtime Chat App"
            description="Full-stack chat platform with WebSocket + Firebase auth."
            link="/projects/chat"
          />
        </div>
      </div>
    </section>
  );
}
