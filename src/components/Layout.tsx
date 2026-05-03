import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Footer } from '../sections/Footer'
import { LoadingScreen } from './LoadingScreen'

/** Full-screen landing: no global chrome so it matches the Web3 hero only. */
const LANDING_PATHS = new Set(['/', '/web3'])

export function Layout() {
  const { pathname } = useLocation()
  const isLanding = LANDING_PATHS.has(pathname)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 700)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="min-h-dvh bg-black">
      {!isLanding && (
        <>
          <motion.div
            aria-hidden
            className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500"
            style={{ scaleX: progress }}
          />

          <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>

          <div className="pointer-events-none fixed inset-0 -z-10 grid-fade opacity-70" />
          <Navbar />
        </>
      )}

      <Outlet />

      {!isLanding && <Footer />}
    </div>
  )
}

