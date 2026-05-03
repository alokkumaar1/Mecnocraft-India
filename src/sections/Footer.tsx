import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import logo from '../assets/mecnocraft-logo.png'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/3 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Mecnocraft India"
                className="h-10 w-auto select-none"
                draggable={false}
              />
              <div>
                <div className="font-semibold text-slate-100">
                  Mecnocraft India
                </div>
                <div className="text-xs text-slate-200/60">
                  IT • IoT • AI • Hardware solutions across India
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-200/65">
              Premium procurement, deployment-ready builds, and support that
              keeps your systems stable after launch.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Pan‑India delivery
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                AMC + support
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Deployment-ready
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-6 sm:grid-cols-3">
              <Col title="Navigation">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/solutions">Solutions</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </Col>
              <Col title="Contact">
                <FooterRow icon="phone" label="+91 89876 91015" />
                <FooterRow icon="mail" label="info@mecnocraftindia.in" />
                <FooterRow icon="mail" label="mecnocraft2023@gmail.com" />
                <FooterRow icon="pin" label="India (Pan‑India coverage)" />
              </Col>
              <Col title="Social">
                <FooterLink href="#" muted>
                  LinkedIn
                </FooterLink>
                <FooterLink href="#" muted>
                  X (Twitter)
                </FooterLink>
                <FooterLink href="#" muted>
                  YouTube
                </FooterLink>
              </Col>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-200/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Mecnocraft India. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-100" href="#">
              Privacy
            </a>
            <a className="hover:text-slate-100" href="#">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="mt-3 grid gap-2">{children}</div>
    </div>
  )
}

function FooterLink({
  href,
  children,
  muted = false,
}: {
  href: string
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <a
      href={href}
      className={`text-sm transition hover:text-slate-100 ${
        muted ? 'text-slate-200/60' : 'text-slate-200/70'
      }`}
    >
      {children}
    </a>
  )
}

function FooterRow({ icon, label }: { icon: Parameters<typeof Icon>[0]['name']; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-200/65">
      <Icon name={icon} className="h-4 w-4 text-cyan-300" />
      <span>{label}</span>
    </div>
  )
}

