import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { useCountUp } from '../lib/useCountUp'

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' })

  const clients = useCountUp({ to: 120, durationMs: 1300, active: inView })
  const years = useCountUp({ to: 8, durationMs: 1100, active: inView })
  const retention = useCountUp({ to: 96, durationMs: 1400, active: inView })

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <Container>
        <div
          ref={ref}
          className="glass ring-glow relative overflow-hidden rounded-3xl p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-cyan-400/14 blur-3xl" />

          <div className="relative grid items-start gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-sm font-semibold text-indigo-200/90">
                Proof, not claims
              </div>
              <h2 className="mt-2 font-[Poppins] text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Trust built through execution
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/70 sm:text-base">
                We focus on clean delivery, tight timelines, and long-term
                support—so deployments stay stable after go-live.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Icon name="chart" className="h-5 w-5 text-cyan-300" /> What
                  teams like
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/70">
                  “Fast procurement, clear communication, and deployments that
                  just work. The post‑deployment support is genuinely solid.”
                </p>
                <div className="mt-3 text-xs text-slate-200/60">
                  — Operations Lead, India
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard
                  value={`${clients}+`}
                  label="Clients served"
                  hint="IT + IoT + AI"
                />
                <StatCard
                  value={`${years}+`}
                  label="Years experience"
                  hint="Delivery-led"
                />
                <StatCard
                  value={`${retention}%`}
                  label="Retention rate"
                  hint="Support + AMC"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Pill title="Nationwide" desc="Pan‑India delivery & field support" />
                <Pill title="Secure" desc="Hardware + telemetry aligned to best practices" />
                <Pill title="Scalable" desc="From pilot → rollout across sites" />
                <Pill title="Documented" desc="Runbooks, handover, and SOPs" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function StatCard({
  value,
  label,
  hint,
}: {
  value: string
  label: string
  hint: string
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/7">
      <div className="text-3xl font-semibold tracking-tight text-slate-50">
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-100/90">{label}</div>
      <div className="mt-1 text-xs text-slate-200/60">{hint}</div>
    </div>
  )
}

function Pill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/7">
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="mt-1 text-xs leading-relaxed text-slate-200/65">{desc}</div>
    </div>
  )
}

