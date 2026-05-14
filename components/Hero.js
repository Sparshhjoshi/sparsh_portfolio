'use client'
import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'Full-Stack Builder', 'UI Systems Learner', 'Backend API Engineer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setRoleIndex((index) => (index + 1) % roles.length)
      setTyping(true)
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-28 sm:pt-32 md:pb-24">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none float" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[var(--coral)]/5 blur-3xl pointer-events-none float-delay" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lime)]/3 blur-3xl pointer-events-none float-delay2" />
      <div className="absolute inset-0 pointer-events-none dot-grid opacity-30" />

      <div className="app-shell relative z-10">
        <div className="site-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span className="panel-dot bg-[var(--coral)]" />
              <span className="panel-dot bg-[var(--amber)]" />
              <span className="panel-dot bg-[var(--lime)]" />
            </div>
            <span className="panel-address">https://sparsh.dev/home</span>
            <span className="panel-status">Web Dev Intern Ready</span>
          </div>

          <div className="section-body">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="text-left">
                <div className="anim-1 eyebrow">Available for Web Development Internships</div>

                <h1 className="anim-2 mt-8 font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl">
                  <span className="mb-4 block text-sm uppercase tracking-[0.34em] text-gray-500 md:text-base">
                    Sparsh Joshi / Portfolio
                  </span>
                  <span className="block">Building polished</span>
                  <span className="gradient-text block">web experiences</span>
                </h1>

                <div className="anim-3 mt-6 flex h-12 items-center">
                  <span className="font-body text-xl font-light text-gray-300 md:text-2xl">
                    {displayed}
                    <span className="typewriter-text"> </span>
                  </span>
                </div>

                <p className="anim-4 mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-400 md:text-lg">
                  Pre-final year CSE student at <span className="text-[var(--cyan)]">VIT Bhopal</span> focused on responsive interfaces,
                  production-ready frontend systems, and full-stack applications powered by <span className="text-[var(--lime)]">Next.js,
                  React, Flask, and FastAPI</span>.
                </p>

                <div className="anim-5 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a href="#projects" className="btn-primary rounded-xl px-8 py-4 font-display text-base font-bold tracking-wide">
                    View Projects
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Sparsh_Joshi_Resume.pdf"
                    className="btn-outline flex items-center gap-2 rounded-xl px-8 py-4 font-display text-base font-bold tracking-wide"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="rounded-xl border border-white/10 px-8 py-4 font-display text-base font-bold text-white/70 transition-all hover:border-white/30 hover:text-white"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="anim-5 mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
                  {[
                    { value: '5+', label: 'Shipped Projects' },
                    { value: '10+', label: 'Core Technologies' },
                    { value: '2027', label: 'Graduation Year' },
                  ].map((item) => (
                    <div key={item.label} className="metric-tile px-5 py-4">
                      <div className="font-display text-2xl font-bold text-[var(--cyan)]">{item.value}</div>
                      <div className="mt-1 font-body text-xs uppercase tracking-[0.16em] text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="anim-5">
                <div className="code-card rounded-[1.75rem] p-5 md:p-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="panel-dots">
                      <span className="panel-dot bg-[var(--coral)]" />
                      <span className="panel-dot bg-[var(--amber)]" />
                      <span className="panel-dot bg-[var(--lime)]" />
                    </div>
                    <span className="panel-address flex-1">app://portfolio-preview</span>
                    <span className="route-pill">Live UI</span>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-[190px_1fr]">
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="mb-3 text-xs uppercase tracking-[0.24em] text-gray-500">Routes</div>
                        <div className="space-y-2">
                          {['/services', '/projects', '/about', '/contact'].map((route) => (
                            <div key={route} className="route-pill">{route}</div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] p-4">
                        <div className="text-xs uppercase tracking-[0.24em] text-[var(--cyan)]">Current Build Focus</div>
                        <div className="mt-2 font-display text-2xl font-bold leading-tight text-white">
                          Responsive frontend systems with real backend integration
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {['Next.js', 'React', 'Tailwind', 'FastAPI', 'PostgreSQL'].map((item) => (
                            <span key={item} className="stack-pill">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { title: 'UI Systems', text: 'Clean layouts, typography, and mobile-first sections.' },
                        { title: 'Backend APIs', text: 'JWT auth, REST endpoints, and structured data flows.' },
                        { title: 'Deploy Ready', text: 'Practical builds shaped for real-world usage.' },
                      ].map((card) => (
                        <div key={card.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-gray-500">{card.title}</div>
                          <p className="mt-2 font-body text-sm leading-relaxed text-gray-300">{card.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-[#050b18]/80 p-4">
                      <div className="space-y-2">
                        <div className="code-row">
                          <span className="line-no">01</span>
                          <span>const developer = &#123; name: 'Sparsh', focus: 'web development' &#125;</span>
                        </div>
                        <div className="code-row">
                          <span className="line-no">02</span>
                          <span>const stack = ['Next.js', 'React', 'Flask', 'FastAPI', 'SQL']</span>
                        </div>
                        <div className="code-row">
                          <span className="line-no">03</span>
                          <span>const status = 'available for internships'</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-50 md:flex">
        <span className="font-body text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
