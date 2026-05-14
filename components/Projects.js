'use client'

const projects = [
  {
    route: '/projects/medicare-system',
    title: 'Medicare System',
    status: 'Ongoing',
    statusColor: '#A8FF3E',
    statusBg: 'rgba(168,255,62,0.12)',
    statusBorder: 'rgba(168,255,62,0.24)',
    stack: ['Flask', 'SQLAlchemy', 'React.js', 'PostgreSQL', 'LLM'],
    color: '#00E5FF',
    tint: 'rgba(0,229,255,0.12)',
    border: 'rgba(0,229,255,0.24)',
    desc: 'Scalable full-stack healthcare management platform with role-based dashboards for patients, doctors, and administrators. Features JWT auth, RESTful APIs, vitals tracking, and multilingual AI health summaries via LLM APIs.',
    github: null,
  },
  {
    route: '/projects/ai-marketing-api',
    title: 'AI Marketing API',
    status: 'Completed',
    statusColor: '#00E5FF',
    statusBg: 'rgba(0,229,255,0.12)',
    statusBorder: 'rgba(0,229,255,0.24)',
    stack: ['FastAPI', 'HuggingFace', 'FAISS', 'Docker', 'JWT'],
    color: '#FF4D5A',
    tint: 'rgba(255,77,90,0.12)',
    border: 'rgba(255,77,90,0.24)',
    desc: 'JWT-secured multi-agent content generation system leveraging HuggingFace LLMs with FAISS/Chroma vector search for personalized user segmentation. Containerized with Docker for scalable cloud deployment.',
    github: null,
  },
  {
    route: '/projects/bank-management-system',
    title: 'Bank Management System',
    status: 'Completed',
    statusColor: '#00E5FF',
    statusBg: 'rgba(0,229,255,0.12)',
    statusBorder: 'rgba(0,229,255,0.24)',
    stack: ['Java', 'Swing', 'MySQL', 'JDBC', 'AWT'],
    color: '#FFB547',
    tint: 'rgba(255,181,71,0.12)',
    border: 'rgba(255,181,71,0.24)',
    desc: 'Desktop-based banking application with deposit, withdrawal, PIN change, balance inquiry, and mini-statement modules. Integrated MySQL via JDBC with a structured relational schema using OOP principles.',
    github: 'https://github.com/Sparshhjoshi',
  },
  {
    route: '/projects/blender-cube-grid',
    title: 'Blender Addon – Cube Grid',
    status: 'Completed',
    statusColor: '#00E5FF',
    statusBg: 'rgba(0,229,255,0.12)',
    statusBorder: 'rgba(0,229,255,0.24)',
    stack: ['Python', 'bpy', 'Blender API'],
    color: '#C084FC',
    tint: 'rgba(192,132,252,0.12)',
    border: 'rgba(192,132,252,0.24)',
    desc: 'Custom Blender addon with a 3D Viewport UI panel for procedural cube grid generation, collection-based object management, selective deletion, and mesh merging with clean UI-logic separation.',
    github: null,
  },
  {
    route: '/projects/kiddle-browser',
    title: 'Kiddle – Child Safe Browser',
    status: 'Completed',
    statusColor: '#00E5FF',
    statusBg: 'rgba(0,229,255,0.12)',
    statusBorder: 'rgba(0,229,255,0.24)',
    stack: ['Flask', 'HTML', 'CSS', 'JavaScript'],
    color: '#A8FF3E',
    tint: 'rgba(168,255,62,0.12)',
    border: 'rgba(168,255,62,0.24)',
    desc: 'Web-based child-safe browser with filtered search mechanisms, controlled routing, and server-side content filtering to restrict unsafe content while keeping the interface approachable.',
    github: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-8 md:py-10">
      <div className="app-shell relative z-10">
        <div className="site-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span className="panel-dot bg-[var(--coral)]" />
              <span className="panel-dot bg-[var(--amber)]" />
              <span className="panel-dot bg-[var(--lime)]" />
            </div>
            <span className="panel-address">/work</span>
            <span className="panel-status">Selected Builds</span>
          </div>

          <div className="section-body">
            <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Selected Work</span>
                <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-6xl">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-400">
                  A mix of frontend products, API systems, and real-world builds shaped like software instead of generic student cards.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Full Stack', 'APIs', 'UI', 'AI Integrations'].map((item) => (
                  <span key={item} className="route-pill">{item}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="reveal project-card glass-card group relative overflow-hidden rounded-2xl border border-white/8 p-7"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-0 right-0 top-0 h-0.5 opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: project.color, borderColor: project.border, background: project.tint }}>
                        {project.route}
                      </div>
                      <h3 className="font-display text-xl font-semibold leading-tight text-white">{project.title}</h3>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-white/30 hover:text-white"
                      >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="mb-5 inline-flex rounded-full border px-2.5 py-1 text-xs uppercase tracking-[0.18em]" style={{ color: project.statusColor, background: project.statusBg, borderColor: project.statusBorder }}>
                    {project.status}
                  </div>

                  <p className="mb-6 font-body text-sm leading-relaxed text-gray-400">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md px-2.5 py-1 font-body text-xs" style={{ color: project.color, background: project.tint, border: `1px solid ${project.border}` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
