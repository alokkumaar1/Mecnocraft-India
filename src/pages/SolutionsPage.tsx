import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Solutions } from '../sections/Solutions'
import { Stats } from '../sections/Stats'

export function SolutionsPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/18 blur-3xl" />
          <div className="absolute -right-24 -top-10 h-72 w-72 rounded-full bg-indigo-500/16 blur-3xl" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="text-sm font-semibold text-fuchsia-200/90">
              Solutions
            </div>
            <h1 className="mt-2 font-[Poppins] text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Category-led packages that scale
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
              Choose a capability area—then we design the right combination of
              hardware, software, deployment, and support.
            </p>
          </motion.div>
        </Container>
      </section>

      <Solutions />
      <Stats />
    </main>
  )
}

