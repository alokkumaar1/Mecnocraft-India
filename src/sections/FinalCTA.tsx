import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'

export function FinalCTA() {
  return (
    <section id="contact" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-white/2 p-7 sm:p-9">
          <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-slate-500/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="text-sm font-semibold text-slate-300/70">
                Talk to us
              </div>
              <h2 className="mt-2 font-[Poppins] text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Tell us what you need, and we’ll get back with a clear next step.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-200/70 sm:text-base">
                Send a few details about your project, and we’ll keep the reply
                simple, practical, and to the point.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <ContactPill
                  icon="phone"
                  label="Phone"
                  value="+91 89876 91015"
                />
                <ContactPill
                  icon="mail"
                  label="Email Address"
                  value="info@mecnocraftindia.in"
                />
                <ContactPill
                  icon="pin"
                  label="Service Area"
                  value="Pan-India"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-slate-100/85 transition hover:bg-white/6"
                  href="mailto:info@mecnocraftindia.in?subject=Project%20Inquiry%20—%20Mecnocraft%20India"
                >
                  Email us <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-slate-100/85 transition hover:bg-white/6"
                  href="#services"
                >
                  Review services <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-6">
              <motion.form
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="glass rounded-3xl p-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="text-sm font-semibold text-slate-100">
                  Send a query
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Field label="Name" placeholder="Your name" />
                  <Field label="Company" placeholder="Company / org" />
                  <Field
                    label="Email"
                    placeholder="you@company.com"
                    type="email"
                  />
                  <Field label="Phone" placeholder="+91…" />
                </div>
                <div className="mt-3">
                  <Field
                    label="Requirements"
                    placeholder="Tell us what you're building…"
                    textarea
                  />
                </div>

                <button
                  type="submit"
                  className="btn-glow mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-slate-100/85 transition hover:bg-white/6"
                >
                  Submit inquiry <Icon name="arrow" className="h-4 w-4" />
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ContactPill({
  icon,
  label,
  value,
}: {
  icon: Parameters<typeof Icon>[0]['name']
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-4 transition hover:bg-white/6">
      <div className="flex items-center gap-2 text-xs text-slate-300/65">
        <Icon name={icon} className="h-4 w-4 text-slate-300" />
        {label}
      </div>
      <div className="mt-1 break-all text-xs font-semibold leading-snug text-slate-100/95 sm:text-sm">
        {value}
      </div>
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = 'text',
  textarea = false,
}: {
  label: string
  placeholder: string
  type?: string
  textarea?: boolean
}) {
  const base =
    'mt-1 w-full rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-200/35 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10'

  return (
    <label className="block text-xs font-semibold text-slate-200/75">
      {label}
      {textarea ? (
        <textarea className={`${base} min-h-28 resize-none`} placeholder={placeholder} />
      ) : (
        <input className={base} placeholder={placeholder} type={type} />
      )}
    </label>
  )
}

