import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { FinalCTA } from '../sections/FinalCTA'

export function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/16 blur-3xl" />
          <div className="absolute -right-28 -top-10 h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="text-sm font-semibold text-slate-100/90">
              Contact
            </div>
            <h1 className="mt-2 font-[Poppins] text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Tell us what you’re building
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
              Share requirements, locations, and timelines. We’ll respond with a
              clear plan and next steps.
            </p>
          </motion.div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  )
}

