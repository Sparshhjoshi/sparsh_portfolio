'use client'

const skillGroups = [
  {
    label: 'Languages',
    color: 'var(--cyan)',
    bg: 'rgba(0,229,255,0.08)',
    border: 'rgba(0,229,255,0.2)',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'AI / ML / DL',
    color: 'var(--lime)',
    bg: 'rgba(168,255,62,0.08)',
    border: 'rgba(168,255,62,0.2)',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'Transformers', 'CNN Models', 'Image Classification'],
  },
  {
    label: 'Web & Frameworks',
    color: 'var(--coral)',
    bg: 'rgba(255,77,90,0.08)',
    border: 'rgba(255,77,90,0.2)',
    skills: ['React.js', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'Vue.js', 'Express', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    label: 'Cloud & DevOps',
    color: 'var(--amber)',
    bg: 'rgba(255,181,71,0.08)',
    border: 'rgba(255,181,71,0.2)',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Render'],
  },
  {
    label: 'Databases',
    color: '#C084FC',
    bg: 'rgba(192,132,252,0.08)',
    border: 'rgba(192,132,252,0.2)',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    label: 'Tools',
    color: '#FB923C',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.2)',
    skills: ['Git', 'GitHub', 'Postman', 'FastAPI', 'Java Swing', 'SQLAlchemy', 'FAISS', 'HuggingFace'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-8 md:py-10">
      <div className="app-shell">
        <div className="site-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span className="panel-dot bg-[var(--coral)]" />
              <span className="panel-dot bg-[var(--amber)]" />
              <span className="panel-dot bg-[var(--lime)]" />
            </div>
            <span className="panel-address">/stack</span>
            <span className="panel-status">Frontend + Backend</span>
          </div>

          <div className="section-body">
            <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Stack Map</span>
                <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-6xl">
                  Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-400">
                  The toolset behind my web products, backend services, and AI-powered builds.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'].map((item) => (
                  <span key={item} className="route-pill">{item}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <div
                  key={group.label}
                  className="reveal project-card glass-card rounded-2xl border p-6"
                  style={{ transitionDelay: `${index * 80}ms`, borderColor: group.border }}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-display font-bold"
                      style={{ color: group.color, borderColor: group.border, background: group.bg }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Category</div>
                      <h3 className="font-display text-lg font-semibold" style={{ color: group.color }}>
                        {group.label}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge rounded-lg px-3 py-1.5 font-body text-xs font-medium"
                        style={{ background: group.bg, color: group.color, border: `1px solid ${group.border}` }}
                      >
                        {skill}
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
