'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import useScrollReveal from '../components/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <div className="noise">
      <Navbar />
      <main className="relative z-10 pb-10">
        <Hero />
        <Services />
        <div id="about">
          <Experience />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
