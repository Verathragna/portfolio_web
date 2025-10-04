import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="relative bg-slate-950 min-h-screen">
      <div className="fixed inset-0 bg-slate-950 -z-10" />
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
