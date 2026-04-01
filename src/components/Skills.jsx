import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiUsers, FiZap, FiMessageSquare, FiTrendingUp, FiRepeat, FiStar } from 'react-icons/fi'

const stacks = [
  {
    title: 'Backend',
    items: ['Python', 'Odoo v18+', 'FastAPI', 'Laravel / PHP', 'PostgreSQL', 'XML-RPC / REST'],
  },
  {
    title: 'Frontend',
    items: ['React', 'OWL (Odoo Web Library)', 'Tailwind CSS', 'JavaScript', 'HTML / CSS', 'Framer Motion'],
  },
  {
    title: 'Herramientas',
    items: ['Git / GitHub', 'Antigravity', 'VS Code', 'Postman', 'SCRUM', 'NotebookLM'],
  },
]

const softSkills = [
  { label: 'Resolucion de problemas',  icon: FiZap,          desc: 'Diagnostico rapido y soluciones efectivas' },
  { label: 'Trabajo en equipo',        icon: FiUsers,         desc: 'Colaboracion activa con clientes y equipos' },
  { label: 'Comunicacion efectiva',    icon: FiMessageSquare, desc: 'Clara tanto tecnica como funcional' },
  { label: 'Aprendizaje continuo',     icon: FiTrendingUp,    desc: 'Siempre explorando nuevas tecnologias' },
  { label: 'Pensamiento analitico',    icon: FiStar,          desc: 'Descomposicion logica de problemas complejos' },
  { label: 'Adaptabilidad',            icon: FiRepeat,        desc: 'Versatil en entornos y metodologias' },
]

const marqueeItems = ['Odoo', 'Python', 'React', 'PostgreSQL', 'FastAPI', 'Tailwind', 'Laravel', 'PHP', 'JavaScript', 'OWL', 'Git', 'MySQL']

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="relative py-28 border-t border-edge overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-edge bg-surface/60 px-4 py-2 rounded-full mb-14"
        >
          <FiCode size={13} className="text-violet" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-silver uppercase">04 - Stack Tecnico</span>
        </motion.div>

        {/* Marquee */}
        <div className="marquee-outer mb-3 select-none" aria-hidden="true">
          <div className="marquee-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 shrink-0">
                <span
                  className="font-display font-bold text-3xl"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(107,170,142,0.4)' }}
                >
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet/30 shrink-0" />
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-outer mb-14 select-none" aria-hidden="true">
          <div className="marquee-inner-rev">
            {[...marqueeItems, ...marqueeItems].reverse().map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 shrink-0">
                <span
                  className="font-display font-bold text-3xl"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(250,243,224,0.12)' }}
                >
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream/20 shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Stacks grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="dw-card dw-card-grid rounded-xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(107,170,142,0.16) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
              <div className="relative z-10">
                <h3 className="font-display font-semibold text-white text-base mb-5">{stack.title}</h3>
                <ul className="space-y-3">
                  {stack.items.map((item) => (
                    <li key={item} className="skill-item flex items-center gap-2.5">
                      <span className="skill-dot w-1.5 h-1.5 rounded-full shrink-0" />
                      <span className="font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-7">
            <p className="font-body text-[11px] text-silver tracking-[0.14em] uppercase">Habilidades blandas</p>
            <div className="h-px flex-1 bg-edge ml-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {softSkills.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.07 }}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-edge bg-surface/40 hover:border-violet/40 hover:bg-violet/5 transition-all group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center shrink-0 group-hover:bg-violet/20 transition-colors">
                    <Icon size={14} className="text-violet" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-white group-hover:text-violet transition-colors">{s.label}</p>
                    <p className="font-body text-[11px] text-silver leading-snug mt-0.5">{s.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

