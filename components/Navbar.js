'use client'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="app-shell">
        <div className={`nav-shell transition-all duration-500 ${
          scrolled
            ? 'border-white/15 bg-[#081120]/92 shadow-[0_24px_80px_rgba(2,6,23,0.45)]'
            : 'border-white/10 bg-[#081120]/78'
        }`}>
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--cyan),#9dfcff)] text-sm font-display font-bold text-[#050B18] transition-all group-hover:-translate-y-0.5 group-hover:rotate-6">
              SJ
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-white">
                Sparsh<span className="text-[var(--cyan)]">.</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gray-500">
                Web Dev Portfolio
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-body text-sm font-medium uppercase tracking-[0.18em] text-gray-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[10px] uppercase tracking-[0.24em] text-gray-500">
              Open To Internships
            </span>
            <a
              href="/resume.pdf"
              download="Sparsh_Joshi_Resume.pdf"
              className="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Resume
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden">
            <div className={`mb-1.5 h-0.5 w-6 bg-white transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <div className={`mb-1.5 h-0.5 w-6 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? 'max-h-[28rem] pt-3' : 'max-h-0'}`}>
          <div className="site-panel">
            <div className="panel-bar">
              <div className="panel-dots">
                <span className="panel-dot bg-[var(--coral)]" />
                <span className="panel-dot bg-[var(--amber)]" />
                <span className="panel-dot bg-[var(--lime)]" />
              </div>
              <span className="panel-address">/navigation</span>
            </div>

            <div className="section-body flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 font-body text-sm uppercase tracking-[0.16em] text-gray-300 transition-all hover:border-white/15 hover:bg-white/[0.05] hover:text-[var(--cyan)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Sparsh_Joshi_Resume.pdf"
                className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center font-display text-sm font-bold"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
