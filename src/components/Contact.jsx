import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi'

const links = [
  { icon: FiMail,     label: 'alanisjonnhy@gmail.com',  href: 'mailto:alanisjonnhy@gmail.com' },
  { icon: FiPhone,    label: '+52 55 3413 2628',        href: 'tel:+525534132628' },
  { icon: FiLinkedin, label: 'linkedin.com/in/jonathan-alanis', href: 'https://www.linkedin.com/in/jonathan-alanis-6754323b2/' },
  { icon: FiGithub,   label: 'github.com/jonhyAL',     href: 'https://github.com/jonhyAL' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 border-t border-edge">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-edge bg-surface/60 px-4 py-2 rounded-full mb-14"
        >
          <FiMail size={13} className="text-violet" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-silver uppercase">05 - Contacto</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left */}
          <div>
            <div className="overflow-hidden mb-4">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white leading-none"
                style={{ fontSize: 'clamp(2rem, 6vw, 6.5rem)' }}
              >
                Trabajemos
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-none"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 6.5rem)',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                }}
              >
                juntos.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-silver text-base font-light mt-8 mb-10 max-w-md leading-relaxed"
            >
              Disponible para proyectos freelance, colaboraciones y oportunidades
              de tiempo completo. Hablemos sobre como puedo ayudarte.
            </motion.p>

            <div className="space-y-0">
              {links.map((l, i) => {
                const Icon = l.icon
                return (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                    className="flex items-center justify-between py-4 border-b border-edge group hover:border-violet/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={15} className="text-silver group-hover:text-violet transition-colors shrink-0" />
                      <span className="font-body text-sm text-silver group-hover:text-violet transition-colors">{l.label}</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-edge group-hover:text-violet transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center mx-auto">
                    <FiMail size={22} className="text-violet" />
                  </div>
                  <p className="font-display font-semibold text-white text-xl">Mensaje enviado</p>
                  <p className="font-body text-silver text-sm">Te respondere lo antes posible.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-body text-[11px] text-silver uppercase tracking-[0.1em]">Nombre</label>
                    <input required className="field-input w-full rounded-xl px-4 py-3.5 font-body text-sm" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-[11px] text-silver uppercase tracking-[0.1em]">Email</label>
                    <input required type="email" className="field-input w-full rounded-xl px-4 py-3.5 font-body text-sm" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body text-[11px] text-silver uppercase tracking-[0.1em]">Asunto</label>
                  <input required className="field-input w-full rounded-xl px-4 py-3.5 font-body text-sm" placeholder="En que puedo ayudarte?" />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-[11px] text-silver uppercase tracking-[0.1em]">Mensaje</label>
                  <textarea required rows={5} className="field-input w-full rounded-xl px-4 py-3.5 font-body text-sm resize-none" placeholder="Cuentame sobre tu proyecto..." />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-violet hover:bg-violet2 text-white px-6 py-3.5 rounded-full font-body text-sm font-medium transition-colors group w-full justify-center sm:w-auto"
                >
                  <span>Enviar mensaje</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <FiArrowUpRight size={13} />
                  </div>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}