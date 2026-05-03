import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Services } from '../sections/Services'
import { LogoMarquee } from '../sections/LogoMarquee'
import { FinalCTA } from '../sections/FinalCTA'
import { Icon } from '../components/Icon'

const processSteps = [
  {
    num: '01',
    title: 'Consultation & Discovery',
    desc: 'We analyze your current infrastructure, bottlenecks, and core requirements before proposing any hardware.',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    num: '02',
    title: 'Architecture & Sourcing',
    desc: 'Design the ideal network or compute architecture and source premium components from trusted partners.',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    num: '03',
    title: 'Deployment & Integration',
    desc: 'Our engineers handle on-site installation, configuration, and seamless integration with minimal downtime.',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    num: '04',
    title: 'Maintenance & Support',
    desc: 'Continuous monitoring, SLA-based maintenance, and rapid troubleshooting to keep your operations running.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30'
  },
]

export function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-10 sm:py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -right-24 -top-10 h-72 w-72 rounded-full bg-cyan-400/14 blur-3xl" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 backdrop-blur-md">
              Enterprise IT Services
            </div>
            <h1 className="mt-6 font-[Poppins] text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight">
              Future-Proof Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:animate-pulse">Digital Infrastructure</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl font-light">
              We design, deploy, and maintain high-performance IT ecosystems. From enterprise hardware to advanced AI & IoT solutions, we build the secure foundation for your business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-10 max-w-3xl text-center"
          >
          </motion.div>
        </Container>
      </section>

      <LogoMarquee />

      {/* Main Services Detailed Section */}
      <Services />

      {/* New Section: Our Process / How We Work */}
      <section className="py-16 sm:py-24 relative overflow-hidden border-t border-white/5 bg-slate-950/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-[Poppins] text-3xl font-bold tracking-tight text-white mb-4">
              How We Work
            </h2>
            <p className="text-slate-400">
              A systematic approach to tech deployments that removes guesswork, ensures transparency, and guarantees performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 p-4 font-[Poppins] text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors`}>
                  {step.num}
                </div>
                
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${step.color} border ${step.borderColor} flex items-center justify-center mb-6`}>
                  <Icon name={idx === 0 ? 'spark' : idx === 1 ? 'box' : idx === 2 ? 'bolt' : 'shield'} className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* New Section: Contact / Final Call to Action */}
      <div className="pb-10">
        <FinalCTA />
      </div>
    </main>
  )
}

