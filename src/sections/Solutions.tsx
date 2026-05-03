import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'

const categories = [
  {
    title: 'IoT Monitoring',
    icon: 'bolt' as const,
    items: ['Energy & utilities', 'Cold chain tracking', 'Smart facility dashboards'],
    glow: 'from-cyan-400/18 via-indigo-500/10 to-transparent',
  },
  {
    title: 'AI Vision',
    icon: 'spark' as const,
    items: ['Quality inspection', 'Safety compliance', 'Retail analytics'],
    glow: 'from-fuchsia-500/16 via-cyan-400/8 to-transparent',
  },
  {
    title: 'Compute & Edge',
    icon: 'chip' as const,
    items: ['GPU workstations', 'Edge inference boxes', 'Benchmarking & tuning'],
    glow: 'from-indigo-500/18 via-fuchsia-500/8 to-transparent',
  },
  {
    title: 'IT Rollouts',
    icon: 'cloud' as const,
    items: ['Network upgrades', 'Server deployments', 'AMC + lifecycle support'],
    glow: 'from-emerald-400/12 via-cyan-400/8 to-transparent',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-fuchsia-200/90">
              Solutions
            </div>
            <h2 className="mt-2 font-[Poppins] text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Clear categories. No long lists.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
              Pick a direction—then we tailor hardware, software, and deployment
              to your constraints.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100/90 transition hover:bg-white/7 sm:self-auto"
          >
            Start a project <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {categories.map((c, idx) => (
            <motion.a
              key={c.title}
              href="#contact"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/7"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/6 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/25 via-cyan-400/15 to-fuchsia-500/25 text-slate-50 ring-1 ring-white/10">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-tight text-slate-50">
                        {c.title}
                      </div>
                      <div className="mt-1 text-xs text-slate-200/65">
                        Deployment-ready packages
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-slate-100/80">
                    View
                    <span className="transition group-hover:translate-x-0.5">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-2">
                  {c.items.map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/75 transition group-hover:bg-white/7"
                    >
                      <span>{i}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400/50 transition group-hover:bg-cyan-300/90" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}

