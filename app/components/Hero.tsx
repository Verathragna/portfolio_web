'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Software Engineer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Building innovative solutions with modern technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 rounded-lg transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
