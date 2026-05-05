import { motion } from 'framer-motion'
import { Container } from '../components/Container'

import samsung from '../assets/clients/samsung.png'
import acer from '../assets/clients/acer.png'
import panasonic from '../assets/clients/panasonic.png'
import uniline from '../assets/clients/uniline.png'
import npav from '../assets/clients/npav.png'
import realtime from '../assets/clients/realtime.png'
import drdo from '../assets/clients/drdo.png'
import cdac from '../assets/clients/cdac.png'
import bel from '../assets/clients/bel.png'
import iitMandi from '../assets/clients/iit-mandi.png'
import iitDharwad from '../assets/clients/iit-dharwad.png'
import cpplus from '../assets/clients/cpplus.png'
import coretp from '../assets/clients/coretp.png'
import inp from '../assets/clients/inp.png'
import hp from '../assets/clients/Hplogo.jpeg'

const logos = [
  { name: 'Samsung', src: samsung },
  { name: 'Acer', src: acer },
  { name: 'HP', src: hp },
  { name: 'Panasonic', src: panasonic },
  { name: 'Uniline', src: uniline },
  { name: 'NPAV Cyber Security', src: npav },
  { name: 'Realtime Biometrics', src: realtime },
  { name: 'DRDO', src: drdo },
  { name: 'C-DAC', src: cdac },
  { name: 'Bharat Electronics', src: bel },
  { name: 'IIT Mandi', src: iitMandi },
  { name: 'IIT Dharwad', src: iitDharwad },
  { name: 'CP Plus', src: cpplus },
  { name: 'CoreTP', src: coretp },
  { name: 'INP', src: inp },
]

export function LogoMarquee() {
  const strip = [...logos, ...logos]

  return (
    <section aria-label="Partners and clients" className="py-8 sm:py-10 md:py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Hover over logos to see them come to life
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          <motion.div
            className="marquee flex w-[200%] items-center gap-2 sm:gap-3 py-6 sm:py-8"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {strip.map((l, idx) => (
              <LogoTile key={`${l.name}-${idx}`} name={l.name} src={l.src} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative mx-0.5 sm:mx-1 flex h-14 sm:h-16 w-36 sm:w-44 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 px-3 sm:px-4 shadow-lg hover:border-white/30 transition duration-300 cursor-pointer"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.5), transparent)',
        }}
        whileHover={{ opacity: 0.3 }}
      />

      <motion.img
        src={src}
        alt={name}
        className="h-auto max-h-8 sm:max-h-10 w-auto max-w-full object-contain select-none relative z-10"
        style={{
          filter: 'grayscale(100%)',
        }}
        whileHover={{
          filter: 'grayscale(0%)',
        }}
        transition={{ duration: 0.3 }}
        draggable={false}
        loading="lazy"
      />

      {/* Hover tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-white/90 text-black text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none"
        whileHover={{ opacity: 1, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.div>
    </motion.div>
  )
}

