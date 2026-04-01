import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiBriefcase, FiExternalLink } from 'react-icons/fi'

const experiences = [
  {
    id: 'e1',
    num: '01',
    role: 'Desarrollador Jr / Consultor Odoo Jr',
    company: 'M22 — Jardines del Pedregal, CDMX',
    period: 'Dic 2024 - Actualidad',
    bullets: [
      'Implementacion y configuracion de Odoo v18+ desde cero para clientes',
      'Desarrollo de modulos custom con Python y XML; extension de modulos nativos',
      'Optimizacion de flujos de negocio y automatizaciones operativas',
      'Desarrollo frontend con OWL (Odoo Web Library) e integracion de APIs REST',
      'Elaboracion de documentacion de flujos y manuales de usuario',
    ],
    tags: ['Odoo v18+', 'Python', 'OWL', 'XML', 'PostgreSQL', 'FastAPI', 'Git'],
    clients: [
      { name: 'GGI',              modules: ['CRM'] },
      { name: 'BORAX',            modules: ['CRM'] },
      { name: 'Llantymoto',       modules: ['Ventas', 'Compras', 'Inventario', 'Fabricacion', 'Empleados'] },
      { name: 'Highlanderstraders', modules: ['Ventas', 'Compras'] },
      { name: 'Movac',           modules: ['Sitio web completo'] },
    ],
  },
]

const education = [
  {
    degree: 'Ingenieria de Software',
    school: 'Universidad Tecnologica de Nezahualcoyotl',
    period: 'Ene 2023 - Actualidad',
    status: 'TSU Terminado | Ing. en curso',
  },
]

const certs = [
  { name: 'Database Programming with SQL', issuer: 'Oracle Academy',         year: 'Nov 2023', pdf: '/certs/clmsCertificateAlanis.pdf' },
  { name: 'Computer Hardware Basics',      issuer: 'Cisco Networking Academy', year: 'Oct 2023', pdf: '/certs/Computer_Hardware_Basics_Badge20231030-29-qaurec.pdf' },
]

function AccordionItem({ item, index, inView }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="exp-trigger"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 py-6 text-left group"
      >
        <span className="font-body font-mono text-xs text-edge select-none mt-1">{item.num}</span>
        <div className="flex-1 min-w-0">
          <p className={`font-display font-semibold text-xl transition-colors ${open ? 'text-violet' : 'text-white group-hover:text-violet'}`}>
            {item.role}
          </p>
          <p className="font-body text-sm text-silver mt-0.5">{item.company} &mdash; {item.period}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-silver text-xl leading-none mt-1"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-4 sm:pl-10 space-y-6">
              <ul className="space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="font-body text-sm text-silver flex gap-2">
                    <span className="text-violet shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="font-body text-[11px] px-3 py-1 rounded-full border border-edge text-silver hover:border-violet hover:text-violet transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {item.clients && (
                <div>
                  <p className="font-body text-[10px] text-silver tracking-[0.14em] uppercase mb-3">Clientes atendidos</p>
                  <div className="space-y-2">
                    {item.clients.map((c) => (
                      <div key={c.name} className="flex flex-col gap-1.5 py-2 border-b border-edge/60">
                        <span className="font-body text-xs font-medium text-white">{c.name}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {c.modules.map((m) => (
                            <span key={m} className="font-body text-[10px] px-2 py-0.5 rounded bg-violet/10 border border-violet/20 text-violet/80">{m}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="relative py-28 border-t border-edge overflow-x-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-edge bg-surface/60 px-4 py-2 rounded-full mb-14"
        >
          <FiBriefcase size={13} className="text-violet" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-silver uppercase">02 - Experiencia y Formacion</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          <div className="lg:col-span-3">
            {experiences.map((item, i) => (
              <AccordionItem key={item.id} item={item} index={i} inView={inView} />
            ))}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="font-body text-[11px] text-silver tracking-[0.14em] uppercase mb-5">Formacion</p>
              {education.map((e) => (
                <div key={e.degree} className="dw-card dw-card-grid rounded-xl p-5 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(107,170,142,0.18) 0%, transparent 70%)',
                      filter: 'blur(25px)',
                    }}
                  />
                  <div className="relative z-10">
                    <span className="font-body text-[10px] text-violet uppercase tracking-[0.14em]">{e.period}</span>
                    <h4 className="font-display font-semibold text-white mt-1 mb-0.5">{e.degree}</h4>
                    <p className="font-body text-sm text-silver">{e.school}</p>
                    <span className="inline-block mt-3 text-[10px] font-body px-2.5 py-1 rounded-full border border-violet/40 text-violet/80">{e.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="font-body text-[11px] text-silver tracking-[0.14em] uppercase mb-4">Certificaciones</p>
              {certs.map((c) => (
                <a
                  key={c.name}
                  href={c.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-3 border-b border-edge group hover:border-violet/30 transition-colors"
                >
                  <div>
                    <p className="font-body text-sm text-white group-hover:text-violet transition-colors">{c.name}</p>
                    <p className="font-body text-xs text-silver">{c.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0 ml-3">
                    <span className="font-body text-xs text-silver">{c.year}</span>
                    <div className="w-7 h-7 rounded-full border border-edge bg-surface flex items-center justify-center group-hover:border-violet/50 group-hover:bg-violet/10 transition-colors">
                      <FiExternalLink size={12} className="text-silver group-hover:text-violet transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

