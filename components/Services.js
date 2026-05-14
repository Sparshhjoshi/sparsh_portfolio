'use client'

const services = [
  {
    route: '/services/frontend',
    title: 'Frontend Development',
    color: '#00E5FF',
    tint: 'rgba(0,229,255,0.12)',
    border: 'rgba(0,229,255,0.24)',
    desc: 'Building responsive websites and product pages with React, Next.js, Tailwind CSS, and structured component systems.',
  },
  {
    route: '/services/interface',
    title: 'UI Systems',
    color: '#A8FF3E',
    tint: 'rgba(168,255,62,0.12)',
    border: 'rgba(168,255,62,0.24)',
    desc: 'Designing clean, consistent, and developer-friendly interfaces that feel modern without losing clarity or usability.',
  },
  {
    route: '/services/backend',
    title: 'Backend & APIs',
    color: '#FF4D5A',
    tint: 'rgba(255,77,90,0.12)',
    border: 'rgba(255,77,90,0.24)',
    desc: 'Implementing authentication, REST APIs, database integrations, and backend workflows that support polished frontend experiences.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 py-8 md:py-10">
      <div className="app-shell">
        <div className="site-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span className="panel-dot bg-[var(--coral)]" />
              <span className="panel-dot bg-[var(--amber)]" />
              <span className="panel-dot bg-[var(--lime)]" />
            </div>
            <span className="panel-address">/services</span>
            <span className="panel-status">What I Build</span>
          </div>

          <div className="section-body">
            <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Core Focus</span>
                <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-6xl">
                  Website <span className="gradient-text">Development</span>
                </h2>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-400">
                  The capabilities I want hiring teams to see first: frontend execution, interface quality, and backend awareness.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Responsive UI', 'Component Systems', 'API Integration'].map((item) => (
                  <span key={item} className="route-pill">{item}</span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="reveal project-card glass-card rounded-[1.75rem] border p-8"
                  style={{ transitionDelay: `${index * 80}ms`, borderColor: service.border }}
                >
                  <div className="mb-5 inline-flex rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: service.color, borderColor: service.border, background: service.tint }}>
                    {service.route}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
