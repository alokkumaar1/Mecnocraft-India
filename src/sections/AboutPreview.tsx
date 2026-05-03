import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import logo from '../assets/mecnocraft-logo.png'

export function AboutPreview() {
  return (
    <section id="about" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6"
          >
            <div className="text-sm font-semibold text-emerald-200/90">
              About Mecnocraft India
            </div>
            <h2 className="mt-2 font-[Poppins] text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Built for teams that ship.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
              We’re a technology company delivering IT, IoT, AI, and hardware
              solutions across India—with a delivery-first approach: right
              hardware, clean integration, and support that stays responsive
              after go‑live.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Feature
                icon="shield"
                title="Reliable delivery"
                desc="Procurement to deployment with clear handover."
              />
              <Feature
                icon="spark"
                title="Modern stack"
                desc="Secure, scalable builds aligned to best practices."
              />
              <Feature
                icon="bolt"
                title="Field-ready"
                desc="Designed for on-site realities and remote monitoring."
              />
              <Feature
                icon="chart"
                title="Measured outcomes"
                desc="Benchmarks, SOPs, and performance-driven choices."
              />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
              >
                Work with us <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100/90 transition hover:bg-white/7"
              >
                Our services <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="md:col-span-6"
          >
            <div className="glass ring-glow relative overflow-hidden rounded-3xl p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/14 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-indigo-500/14 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                      <img
                        src={logo}
                        alt=""
                        className="h-7 w-auto select-none"
                        draggable={false}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">
                        Delivery-first
                      </div>
                      <div className="text-xs text-slate-200/65">
                        From planning to support
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200/70">
                    Pan‑India
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: 'Discovery', v: 'Requirements → BOM → rollout plan' },
                    { k: 'Build', v: 'Procure → assemble → validate' },
                    { k: 'Deploy', v: 'Install → integrate → train' },
                    { k: 'Support', v: 'AMC → upgrades → on-site assistance' },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="text-sm font-semibold text-slate-100">
                        {row.k}
                      </div>
                      <div className="text-xs text-slate-200/65">{row.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/16 via-cyan-400/10 to-fuchsia-500/14 p-4">
                  <div className="text-sm font-semibold text-slate-50">
                    Need a clean proposal?
                  </div>
                  <div className="mt-1 text-xs text-slate-200/70">
                    Share your requirements—get a structured plan and timelines.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: Parameters<typeof Icon>[0]['name']
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/7">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/25 via-cyan-400/15 to-fuchsia-500/25 text-slate-50 ring-1 ring-white/10">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <div className="text-sm font-semibold text-slate-100">{title}</div>
      </div>
      <div className="mt-2 text-xs leading-relaxed text-slate-200/65">{desc}</div>
    </div>
  )
}

