import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUser, FiArrowUpRight } from 'react-icons/fi'

const stats = [
  { val: '2+',   lbl: 'Anos de experiencia' },
  { val: 'Odoo', lbl: 'Especializacion principal' },
  { val: 'inf',  lbl: 'Proyectos resueltos' },
]

const info = [
  { label: 'Ubicacion', value: 'Nezahualcoyotl, Mex. 57820' },
  { label: 'Empresa',   value: 'M22 — Jardines del Pedregal' },
  { label: 'Rol',       value: 'Desarrollador Jr / Consultor Odoo Jr' },
  { label: 'Idiomas',   value: 'Espanol (nativo), Ingles (basico)' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-edge bg-surface/60 px-4 py-2 rounded-full mb-14"
        >
          <FiUser size={13} className="text-violet" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-silver uppercase">01 - Sobre mi</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          <div className="lg:col-span-3 space-y-10">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}
              >
                Quien es<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.22)' }}>
                  Jonathan?
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base text-silver font-light leading-[1.85] max-w-lg"
            >
              Soy un desarrollador de software apasionado por el analisis y la
              resolucion de problemas. Me especializo en{' '}
              <span className="text-white font-medium">Odoo</span> — modulos custom,
              consultoria de implementacion y automatizacion de procesos. Tambien
              trabajo con <span className="text-white font-medium">React, Python y FastAPI</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-edge"
            >
              {stats.map((s) => (
                <div key={s.lbl} className="space-y-1">
                  <p className="font-display font-bold text-violet" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                    {s.val === 'inf' ? String.fromCharCode(8734) : s.val}
                  </p>
                  <p className="font-body text-[11px] text-silver uppercase tracking-[0.1em] leading-tight">{s.lbl}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="#contact"
              className="inline-flex items-center gap-3 border border-edge px-5 py-3 rounded-full hover:border-violet/40 hover:bg-violet/5 transition-all group"
            >
              <div className="slide-text-wrap font-body text-xs font-medium text-white tracking-[0.06em]">
                <span>Hablemos</span>
                <span className="text-violet">Hablemos</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                <FiArrowUpRight size={13} className="text-night" />
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="dw-card dw-card-grid rounded-2xl p-7 h-full relative">
              <div
                className="absolute top-0 right-0 w-52 h-52 pointer-events-none rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(107,170,142,0.2) 0%, transparent 70%)',
                  filter: 'blur(35px)',
                }}
              />
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-white text-lg mb-6">Datos personales</h3>
                {info.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 py-3.5 border-b border-edge">
                    <span className="font-body text-xs text-silver tracking-[0.08em] uppercase shrink-0">{item.label}</span>
                    <span className="font-body text-sm text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

