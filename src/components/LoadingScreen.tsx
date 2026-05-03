import { motion } from 'framer-motion'
import logo from '../assets/mecnocraft-logo.png'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgb(var(--bg))]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="relative grid place-items-center"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        >
          <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-indigo-500/20 via-cyan-400/15 to-fuchsia-500/20 blur-2xl" />
          <div className="glass ring-glow relative rounded-2xl px-6 py-5">
            <img
              src={logo}
              alt="Mecnocraft India"
              className="h-12 w-auto select-none"
              draggable={false}
            />
          </div>
        </motion.div>

        <div className="flex items-center gap-3 text-sm text-slate-300/80">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/70 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
          </span>
          <span>Preparing a premium experience…</span>
        </div>
      </div>
    </motion.div>
  )
}

