'use client'

const experiences = [
  {
    org: 'Vitronix Club',
    role: 'Social Media Lead',
    period: 'Dec 2024 – Present',
    color: 'var(--coral)',
    desc: 'Led social media strategy and content creation, driving measurable growth in online engagement through coordinated campaigns and consistent brand communication.',
  },
  {
    org: 'NSS RD Bhopal',
    role: 'Social Media Team Drafter',
    period: 'Sept 2025 – Present',
    color: 'var(--lime)',
    desc: 'Drafted and curated digital content for social media platforms, supporting awareness drives and community engagement initiatives.',
  },
  {
    org: 'NSS VIT Bhopal',
    role: 'Volunteer – Digital Communication & Social Media',
    period: 'May 2024 – Present',
    color: 'var(--cyan)',
    desc: 'Contributed to structured social media initiatives and digital outreach campaigns promoting NSS activities across the university community.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-8 md:py-10">
      <div className="app-shell">
        <div className="site-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span className="panel-dot bg-[var(--coral)]" />
              <span className="panel-dot bg-[var(--amber)]" />
              <span className="panel-dot bg-[var(--lime)]" />
            </div>
            <span className="panel-address">/about</span>
            <span className="panel-status">Developer Context</span>
          </div>

          <div className="section-body">
            <div className="mb-12">
              <span className="eyebrow reveal">Profile</span>
              <h2 className="reveal mt-5 font-display text-4xl font-bold text-white md:text-6xl">
                About <span className="gradient-text">& Experience</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
              <div id="about">
                <div className="reveal-left code-card rounded-[1.75rem] p-8">
                  <div className="text-xs uppercase tracking-[0.24em] text-[var(--cyan)]">Developer Snapshot</div>
                  <p className="mt-4 font-body text-base leading-relaxed text-gray-300">
                    I&apos;m a pre-final year <span className="text-[var(--cyan)] font-medium">Computer Science</span> student at
                    <span className="text-[var(--cyan)] font-medium"> VIT Bhopal</span> building practical web interfaces and backend-backed products.
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-gray-400">
                    My work centers on frontend polish, full-stack architecture, API workflows, and product-minded implementation. I care about
                    responsive UX, clarity, and software that feels ready for real users.
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="code-row">
                      <span className="line-no">01</span>
                      <span>focus = ['frontend systems', 'backend APIs', 'product delivery']</span>
                    </div>
                    <div className="code-row">
                      <span className="line-no">02</span>
                      <span>education = 'B.Tech CSE, VIT Bhopal'</span>
                    </div>
                    <div className="code-row">
                      <span className="line-no">03</span>
                      <span>goal = 'web development internship'</span>
                    </div>
                  </div>
                </div>

                <div className="reveal-left mt-6 grid grid-cols-2 gap-4" style={{ transitionDelay: '100ms' }}>
                  <div className="metric-tile p-4">
                    <div className="mb-1 text-xs uppercase tracking-[0.18em] text-gray-500">University</div>
                    <div className="font-body text-sm font-medium text-white">VIT Bhopal</div>
                  </div>
                  <div className="metric-tile p-4">
                    <div className="mb-1 text-xs uppercase tracking-[0.18em] text-gray-500">Degree</div>
                    <div className="font-body text-sm font-medium text-white">B.Tech CSE</div>
                  </div>
                  <div className="metric-tile p-4">
                    <div className="mb-1 text-xs uppercase tracking-[0.18em] text-gray-500">Batch</div>
                    <div className="font-body text-sm font-medium text-[var(--cyan)]">2023 – 2027</div>
                  </div>
                  <div className="metric-tile p-4">
                    <div className="mb-1 text-xs uppercase tracking-[0.18em] text-gray-500">Focus</div>
                    <div className="font-body text-sm font-medium text-[var(--lime)]">Web + Full Stack</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="reveal-right mb-6">
                  <div className="text-xs uppercase tracking-[0.24em] text-[var(--amber)]">Leadership & Community</div>
                  <h3 className="mt-3 font-display text-3xl font-bold text-white">Experience beyond code</h3>
                </div>

                <div className="flex flex-col gap-5">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.org}
                      className="reveal-right timeline-item"
                      style={{ transitionDelay: `${index * 120}ms`, '--tw-border-opacity': 1 }}
                    >
                      <div className="ml-2 rounded-xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:border-white/15">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-base font-semibold text-white">{exp.org}</h3>
                            <p className="mt-0.5 font-body text-sm" style={{ color: exp.color }}>{exp.role}</p>
                          </div>
                          <span className="rounded-md bg-white/5 px-2 py-1 font-body text-xs text-gray-500">
                            {exp.period}
                          </span>
                        </div>
                        <p className="font-body text-sm leading-relaxed text-gray-400">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
