'use client'

import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team chat, and progress tracking features.",
    tech: ["Next.js", "TypeScript", "Supabase", "WebSockets"],
    link: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool that generates high-quality text based on user prompts and preferences.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Real-time social media monitoring and analytics platform with sentiment analysis and trend prediction.",
    tech: ["Vue.js", "MongoDB", "Express", "D3.js"],
    link: "#"
  },
  {
    id: 5,
    title: "IoT Dashboard",
    description: "Cloud-based dashboard for monitoring and controlling IoT devices with data visualization and alerts.",
    tech: ["Angular", "AWS IoT", "DynamoDB", "MQTT"],
    link: "#"
  },
  {
    id: 6,
    title: "Code Review Tool",
    description: "Automated code review system with AI-powered suggestions, security scanning, and team collaboration features.",
    tech: ["Go", "Docker", "Redis", "GraphQL"],
    link: "#"
  }
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full border border-slate-700 group-hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
                  >
                    View Project
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        hoveredId === project.id ? 'translate-x-1' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
