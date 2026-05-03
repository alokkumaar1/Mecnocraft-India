import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Icon } from './Icon'
import logo from '../assets/mecnocraft-logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [loc.pathname])

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={false}
      animate={{
        backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
      }}
      style={{
        background: scrolled
          ? 'linear-gradient(180deg, rgba(10,11,16,0.72), rgba(10,11,16,0.38))'
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <NavLink
            to="/"
            className="group inline-flex items-center gap-3 rounded-xl px-2 py-1.5"
            aria-label="Mecnocraft India"
          >
            <img
              src={logo}
              alt=""
              className="h-9 w-auto select-none"
              draggable={false}
            />
            <div className="hidden sm:block">
              <div className="font-semibold tracking-tight text-slate-100">
                Mecnocraft India
              </div>
              <div className="-mt-0.5 text-xs text-slate-300/70">
                Crafting Digital Solutions
              </div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm transition hover:text-slate-100 hover:bg-white/5 ${
                    isActive ? 'text-slate-50 bg-white/6' : 'text-slate-200/80'
                  }`
                }
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <NavLink
              to="/contact"
              className="hidden rounded-xl px-3 py-2 text-sm text-slate-200/80 transition hover:text-slate-100 hover:bg-white/5 sm:inline-flex"
            >
              Get a quote
            </NavLink>
            <NavLink
              to="/contact"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 px-3.5 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            >
              Talk to us <Icon name="arrow" className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </Container>
    </motion.header>
  )
}

