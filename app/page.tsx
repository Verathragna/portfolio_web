import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
