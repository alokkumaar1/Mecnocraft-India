import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import itImage from '../assets/it-equipment.jpg'
import iotImage from '../assets/iot image.jpeg'
import aiImage from '../assets/Aicomputing.jpeg'
import supportImage from '../assets/Servicesandsupport.jpeg'

const services = [
  {
    title: 'IT Equipment',
    icon: 'cloud' as const,
    desc: 'Servers, networking, laptops, peripherals, and procurement—delivered with rollout planning.',
    points: ['Fast sourcing', 'Nationwide delivery', 'Installation support'],
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    accentColor: 'text-blue-300',
    image: true,
    imageSrc: itImage,
  },
  {
    title: 'IoT Systems',
    icon: 'bolt' as const,
    desc: 'Sensors, gateways, and dashboards that move from prototype to production without drama.',
    points: ['Edge-ready', 'Secure telemetry', 'Remote monitoring'],
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    accentColor: 'text-purple-300',
    image: true,
    imageSrc: iotImage,
  },
  {
    title: 'AI Computing',
    icon: 'chip' as const,
    desc: 'GPU workstations and edge AI builds tuned for performance, thermals, and reliability.',
    points: ['Inference at the edge', 'GPU builds', 'Benchmarking'],
    gradient: 'from-orange-600 via-orange-500 to-red-500',
    accentColor: 'text-orange-300',
    image: true,
    imageSrc: aiImage,
  },
  {
    title: 'Services & Support',
    icon: 'shield' as const,
    desc: 'Deployments, AMC, upgrades, and on-site support—so your systems stay mission-ready.',
    points: ['SLA-based support', 'Audits & upgrades', 'Lifecycle management'],
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    accentColor: 'text-emerald-300',
    image: true,
    imageSrc: supportImage,
  },
]

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-cyan-200/90">
              What we do
            </div>
            <h2 className="mt-2 font-[Poppins] text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Premium building blocks for real deployments
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
              Clean delivery, strong documentation, and hardware that’s built to
              run—across India.
            </p>
          </div>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100/90 transition hover:bg-white/7 sm:self-auto"
          >
            View solutions <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* All Services - Full Width Split Layout */}
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/30 backdrop-blur-md hover:border-white/20 transition duration-500 flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Image Section */}
              <div 
                className="relative w-full md:w-1/2 min-h-80 overflow-hidden bg-cover bg-center"
              >
                {s.image && s.imageSrc && (
                  <img 
                    src={s.imageSrc}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/5" />
                
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="pointer-events-none absolute top-10 left-10 h-32 w-32 rounded-full bg-white/8 blur-3xl"
                />
                <motion.div
                  animate={{
                    x: [0, -30, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
                  className="pointer-events-none absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/8 blur-3xl"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.gradient} p-0.5 flex-shrink-0 shadow-lg`}
                    >
                      <div className="h-full w-full rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={s.icon} className="h-7 w-7 text-white" />
                      </div>
                    </motion.div>
                    <div className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                      Service {idx + 1}
                    </div>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition duration-500">
                    {s.title}
                  </h3>
                  
                  <p className="mt-4 text-base leading-relaxed text-white/75 group-hover:text-white/90 transition">
                    {s.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.points.map((p, pidx) => (
                      <motion.span
                        key={p}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + pidx * 0.05 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 group-hover:bg-white/15 group-hover:border-white/40 transition backdrop-blur-sm shadow-lg"
                      >
                        {p}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

              </div>

              <motion.div
                className="absolute inset-0 rounded-3xl border border-white/0 pointer-events-none"
                whileHover={{
                  boxShadow: '0 0 60px rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

