import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/mecnocraft-logo.png'
import { LogoMarquee } from '../sections/LogoMarquee'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4'

const NAV = [
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export function Web3LandingPage() {
  return (
    <section className="relative min-h-dvh bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative">
        <nav className="flex items-center justify-between px-6 py-5 md:px-[120px]">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="flex shrink-0 items-center gap-3 text-white no-underline select-none"
              aria-label="Mecnocraft India home"
            >
              <img
                src={logo}
                alt=""
                className="h-20 w-auto"
                width={140}
                height={36}
                draggable={false}
              />
              <div className="hidden min-[420px]:block text-left">
                <div className="text-sm font-semibold leading-tight tracking-widest text-white uppercase">
                  MECNOCRAFT
                </div>
              </div>
            </Link>

            <div className="hidden items-center md:flex" style={{ gap: 30 }}>
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="inline-flex items-center text-[14px] font-medium text-white no-underline hover:opacity-90"
                  style={{ gap: 14 }}
                >
                  <span>{item.label}</span>
                  <ChevronDown />
                </Link>
              ))}
            </div>
          </div>

          <ActionPill variant="dark" to="/contact">
            Talk to us
          </ActionPill>
        </nav>

        <div className="flex min-h-[calc(100dvh-80px)] flex-col items-center px-6 pb-[102px] pt-[200px] md:pt-[280px]">
          <div className="flex w-full max-w-[680px] flex-col items-center text-center">
            <div className="flex flex-col items-center" style={{ gap: 40 }}>
              <Badge />

              <h1
                className="max-w-[613px] px-1 text-[36px] font-medium leading-[1.28] md:text-[56px]"
                style={{
                  background:
                    'linear-gradient(144.5deg, rgba(255,255,255,1) 28%, rgba(0,0,0,0) 115%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Build smarter products with IT, IoT &amp; AI that scale.
              </h1>

              <div className="w-full">
                <p className="mx-auto max-w-[680px] text-[15px] font-normal leading-relaxed text-white/70">
                  Mecnocraft India delivers reliable IT equipment, intelligent
                  IoT systems, AI computing platforms, and end‑to‑end services—
                  designed for real-world deployment across India.
                </p>
                <div className="h-6" />
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <ActionPill variant="light" to="/contact">
                  Request a proposal
                </ActionPill>
                <Link
                  to="/solutions"
                  className="text-[14px] font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Explore solutions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <LogoMarquee />
      </div>
    </section>
  )
}

function Badge() {
  return (
    <div
      className="inline-flex max-w-[min(100%,520px)] flex-wrap items-center justify-center border border-white/20 bg-white/10 px-4 py-2"
      style={{ borderRadius: 20, gap: 10 }}
    >
      <span className="h-1 w-1 shrink-0 rounded-full bg-white" />
      <span className="text-[13px] font-medium text-white/60">
        Working with the best
      </span>
      <span className="text-[13px] font-medium text-white">
        clients and partners
      </span>
    </div>
  )
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 5.25 7 8.75l3.5-3.5"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ActionPill({
  variant,
  to,
  children,
}: {
  variant: 'dark' | 'light'
  to: string
  children: ReactNode
}) {
  const inner =
    variant === 'dark'
      ? 'bg-black text-white'
      : 'bg-white text-black'

  return (
    <div
      className="relative rounded-full shrink-0"
      style={{ border: '0.6px solid rgba(255,255,255,1)' }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/35 to-transparent blur-md" />

      <Link
        to={to}
        className={`relative block rounded-full px-[29px] py-[11px] text-center text-[14px] font-medium no-underline ${inner}`}
      >
        {children}
      </Link>
    </div>
  )
}
