import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold">Hi, I’m Alex 👋</h1>
        <p className="text-xl mt-4">Software Engineer | Full-Stack Developer | Builder of Ideas</p>
        <a
          href="/projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          View My Work
        </a>
      </div>

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