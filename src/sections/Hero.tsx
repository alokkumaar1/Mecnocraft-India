import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'

export function Hero() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, 60])
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, -40])

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: y2 }}
          className="absolute -left-28 top-[-120px] h-[360px] w-[360px] rounded-full bg-indigo-500/25 blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute right-[-160px] top-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-400/18 blur-3xl"
        />
        <div className="absolute left-1/2 top-[120px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[90px]" />
      </div>

      <Container className="relative py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80"
            >
              <Icon name="spark" className="h-4 w-4 text-cyan-300" />
              Premium technology partner across India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-[Poppins] text-4xl font-semibold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
            >
              Build smarter products with{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
                IT, IoT & AI
              </span>{' '}
              that scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-200/75 sm:text-lg"
            >
              Mecnocraft India delivers reliable IT equipment, intelligent IoT
              systems, AI computing platforms, and end‑to‑end services—designed
              for real-world deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
              >
                Request a proposal <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100/90 transition hover:bg-white/7"
              >
                Explore solutions <Icon name="shield" className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="mt-7 flex flex-wrap gap-2 text-xs text-slate-200/70">
              {[
                'Nationwide delivery',
                'Deployment-ready builds',
                'Fast procurement',
                'Support & AMC',
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass ring-glow relative overflow-hidden rounded-3xl p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-100">
                    Capability snapshot
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200/70">
                    2026-ready stack
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <MiniCard
                    title="IT Equipment"
                    desc="Procurement + rollout"
                    icon="cloud"
                  />
                  <MiniCard
                    title="IoT Systems"
                    desc="Sensors → dashboards"
                    icon="bolt"
                  />
                  <MiniCard
                    title="AI Computing"
                    desc="Edge + GPU builds"
                    icon="chip"
                  />
                  <MiniCard
                    title="Services"
                    desc="Installations + support"
                    icon="box"
                  />
                </div>

                <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-200/70">
                        Delivery model
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-50">
                        Build → Deploy → Support
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200/70">
                      <span className="h-2 w-2 rounded-full bg-cyan-300/90" />
                      Active deployments
                    </div>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-fuchsia-300"
                      initial={{ x: '-40%' }}
                      animate={{ x: ['-40%', '10%', '-40%'] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function MiniCard({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: Parameters<typeof Icon>[0]['name']
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/7">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/25 via-cyan-400/15 to-fuchsia-500/25 text-slate-50 ring-1 ring-white/10">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <div className="text-sm font-semibold text-slate-100">{title}</div>
      </div>
      <div className="mt-2 text-xs leading-relaxed text-slate-200/70">{desc}</div>
    </div>
  )
}

