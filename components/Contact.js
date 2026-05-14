'use client'

const contacts = [
  {
    label: 'Email',
    value: 'sparshj567@gmail.com',
    href: 'mailto:sparshj567@gmail.com',
    color: '#FF4D5A',
    tint: 'rgba(255,77,90,0.12)',
    border: 'rgba(255,77,90,0.24)',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sparsh-joshi',
    href: 'https://linkedin.com/in/sparsh-joshi',
    color: '#00E5FF',
    tint: 'rgba(0,229,255,0.12)',
    border: 'rgba(0,229,255,0.24)',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Sparshhjoshi',
    href: 'https://github.com/Sparshhjoshi',
    color: '#A8FF3E',
    tint: 'rgba(168,255,62,0.12)',
    border: 'rgba(168,255,62,0.24)',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91-8079024879',
    href: 'tel:+918079024879',
    color: '#FFB547',
    tint: 'rgba(255,181,71,0.12)',
    border: 'rgba(255,181,71,0.24)',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-8 md:py-10">
      <div className="app-shell relative z-10">
        <div className="site-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span className="panel-dot bg-[var(--coral)]" />
              <span className="panel-dot bg-[var(--amber)]" />
              <span className="panel-dot bg-[var(--lime)]" />
            </div>
            <span className="panel-address">/contact</span>
            <span className="panel-status">Open To Opportunities</span>
          </div>

          <div className="section-body">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="reveal-left code-card rounded-[1.75rem] p-8">
                <span className="eyebrow">Let&apos;s Connect</span>
                <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
                  Looking for a <span className="gradient-text">web development intern</span>?
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-gray-400">
                  I&apos;m open to internships, frontend work, and full-stack product roles where I can contribute to real interfaces,
                  component systems, and API-backed experiences.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    'Responsive layouts and polished UI implementation',
                    'Frontend connected to practical backend workflows',
                    'Clear communication and product-first execution',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--lime)] shadow-[0_0_12px_rgba(168,255,62,0.65)]" />
                      <span className="font-body text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/resume.pdf"
                  download="Sparsh_Joshi_Resume.pdf"
                  className="btn-primary mt-8 inline-flex items-center gap-3 rounded-xl px-8 py-4 font-display text-base font-bold tracking-wide"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download Resume
                </a>
              </div>

              <div>
                <div className="reveal mb-8">
                  <div className="text-xs uppercase tracking-[0.24em] text-[var(--cyan)]">Reach Out</div>
                  <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-gray-400">
                    The fastest routes to contact me for internships, project discussions, or collaboration.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contacts.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="reveal group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:border-white/20"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110" style={{ color: contact.color, background: contact.tint, border: `1px solid ${contact.border}` }}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="mb-0.5 font-body text-xs text-gray-500">{contact.label}</div>
                        <div className="font-body text-sm font-medium text-white transition-colors group-hover:text-[var(--cyan)]">
                          {contact.value}
                        </div>
                      </div>
                      <div className="ml-auto text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-[var(--cyan)]">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/5 pt-8 text-center">
        <p className="font-body text-xs text-gray-600">
          © 2025 Sparsh Joshi · Built with <span className="text-[var(--cyan)]">Next.js</span> · Designed for the web
        </p>
      </div>
    </section>
  )
}
