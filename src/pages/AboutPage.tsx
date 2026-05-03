import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { AboutPreview } from '../sections/AboutPreview'
import heroImg from '../assets/hero.png'

export function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-28 top-[-120px] h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute right-[-160px] top-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-400/14 blur-3xl" />
        </div>

        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="md:col-span-7"
            >
              <div className="text-sm font-semibold text-emerald-200/90">
                About
              </div>
              <h1 className="mt-2 font-[Poppins] text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                A delivery-first technology company
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
                Mecnocraft India provides IT, IoT, AI, and hardware solutions
                across India. Our focus is simple: production-grade execution,
                reliable support, and systems engineered for the real world.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: 'Approach', v: 'Build → Deploy → Support' },
                  { k: 'Coverage', v: 'Pan‑India' },
                  { k: 'Outcome', v: 'Stable systems post go‑live' },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs text-slate-200/60">{x.k}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-100">
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="md:col-span-5"
            >
              <div className="glass ring-glow relative overflow-hidden rounded-3xl p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                <img
                  src={heroImg}
                  alt=""
                  className="relative w-full rounded-2xl opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <AboutPreview />
    </main>
  )
}

