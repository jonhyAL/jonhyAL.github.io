import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiLayers, FiArrowUpRight, FiShield, FiRefreshCw, FiUploadCloud, FiBarChart2, FiFileText } from 'react-icons/fi'

const convivo = {
  name: 'Convivo',
  type: 'SaaS',
  client: 'Proyecto Personal',
  description:
    'Plataforma SaaS para la prevencion y atencion del bullying, acoso y abuso en el ambito escolar. Ofrece herramientas digitales para estudiantes, docentes e instituciones con enfasis en privacidad y acceso seguro.',
  tags: ['Laravel', 'PHP', 'React', 'Framer Motion', 'Tailwind CSS', 'MySQL', 'JavaScript'],
  features: [
    { icon: FiShield,     label: 'Reportes anonimos',               desc: 'Formulario cifrado de incidentes sin revelar identidad' },
    { icon: FiFileText,   label: 'Diario personal',                  desc: 'Espacio privado para registro emocional del alumno' },
    { icon: FiBarChart2,  label: 'Reporte semanal',                  desc: 'Dashboard con estadisticas de bienestar por semana' },
    { icon: FiLayers,     label: 'Cursos y protocolos',              desc: 'Modulos de aprendizaje sobre prevencion y autocuidado' },
    { icon: FiArrowUpRight, label: 'Control de citas',               desc: 'Agenda de consultas con especialistas del plantel' },
    { icon: FiShield,     label: 'Boton SOS',                        desc: 'Alerta de emergencia inmediata con notificacion al admin' },
  ],
  panel: 'Panel de administracion completo para la gestion de usuarios, reportes, citas, cursos y monitoreo de alertas por institucion.',
}

const odooProjects = [
  {
    id: 'ggi',
    icon: FiBarChart2,
    client: 'GGI',
    title: 'CRM Personalizado',
    description:
      'Modulo CRM a medida con automatizaciones avanzadas para la gestion del pipeline de ventas y control de actividades por etapa.',
    highlights: [
      'Reglas de automatizacion de actividades',
      'Validacion de campos por cambio de etapa',
      'Visibilidad condicional de campos',
    ],
    tags: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
  },
  {
    id: 'cafca-import',
    icon: FiUploadCloud,
    client: 'CAFCA',
    title: 'Importacion Masiva de Productos',
    description:
      'Herramienta de importacion/actualizacion masiva de productos que supera las limitaciones nativas de Odoo mediante plantillas Excel con campos tecnicos.',
    highlights: [
      'Generacion de plantilla Excel configurable',
      'Layout con campo tecnico y dato de importacion',
      'Sin restricciones del importador nativo',
    ],
    tags: ['Odoo', 'Python', 'Excel / xlrd', 'PostgreSQL'],
  },
  {
    id: 'cafca-sync',
    icon: FiRefreshCw,
    client: 'CAFCA',
    title: 'Sincronizacion Amazon FBA & MercadoLibre',
    description:
      'Integracion que mantiene el inventario de Odoo sincronizado en tiempo real con Amazon FBA y MercadoLibre para evitar quiebres o sobreventas.',
    highlights: [
      'Sincronizacion bidireccional de stock',
      'Mapeo automatico de SKUs entre plataformas',
      'Logs de sincronizacion y alertas de error',
    ],
    tags: ['Odoo', 'Python', 'Amazon SP-API', 'ML API', 'REST'],
  },
  {
    id: 'ercco',
    icon: FiFileText,
    client: 'Ercco / Llantymoto',
    title: 'Reportes Dinamicos y Automatizaciones',
    description:
      'Customizacion de reportes QWeb con diseno de marca, datos dinamicos y automatizaciones de flujo de trabajo para operaciones internas.',
    highlights: [
      'Plantillas QWeb con diseno personalizado',
      'Reportes con datos dinamicos y filtros',
      'Automatizaciones de procesos internos',
    ],
    tags: ['Odoo', 'Python', 'QWeb', 'XML', 'Bootstrap'],
  },
]

function OdooCard({ project, index, inView }) {
  const Icon = project.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.09 }}
      className="dw-card dw-card-grid rounded-xl p-6 relative overflow-hidden flex flex-col gap-4"
    >
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }}
      />
      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-3">
          <div className="w-9 h-9 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center shrink-0">
            <Icon size={16} className="text-violet" />
          </div>
          <span className="font-body text-[10px] px-2.5 py-1 rounded-full border border-edge text-silver tracking-[0.1em] uppercase">{project.client}</span>
        </div>
        <div>
          <h3 className="font-display font-semibold text-white text-base mb-1.5">{project.title}</h3>
          <p className="font-body text-sm text-silver leading-relaxed">{project.description}</p>
        </div>
        <ul className="space-y-1.5 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="font-body text-xs text-silver flex gap-2">
              <span className="text-violet shrink-0 mt-0.5">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-edge">
          {project.tags.map((t) => (
            <span key={t} className="font-body text-[10px] px-2.5 py-1 rounded-full border border-edge text-silver hover:border-violet/50 hover:text-violet transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="relative py-28 border-t border-edge">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-edge bg-surface/60 px-4 py-2 rounded-full mb-14"
        >
          <FiLayers size={13} className="text-violet" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-silver uppercase">03 - Proyectos</span>
        </motion.div>

        {/* Convivo — Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="dw-card dw-card-grid rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden"
        >
          <div
            className="absolute -top-20 -right-20 w-72 h-72 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 65%)', filter: 'blur(50px)' }}
          />
          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet/15 border border-violet/30 flex items-center justify-center">
                  <FiShield size={18} className="text-violet" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-white text-2xl">{convivo.name}</h3>
                    <span className="font-body text-[10px] px-2 py-0.5 rounded-full bg-violet/20 border border-violet/40 text-violet tracking-[0.08em] uppercase">{convivo.type}</span>
                  </div>
                  <p className="font-body text-xs text-silver mt-0.5">{convivo.client}</p>
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-silver leading-relaxed max-w-3xl mb-8">{convivo.description}</p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {convivo.features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.label} className="flex items-start gap-3 p-3.5 rounded-xl border border-edge bg-night/60 hover:border-violet/30 transition-colors">
                    <div className="w-7 h-7 rounded-md bg-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={13} className="text-violet" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium text-white">{f.label}</p>
                      <p className="font-body text-[11px] text-silver leading-snug mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Admin panel note */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-violet/20 bg-violet/5 mb-8">
              <FiLayers size={14} className="text-violet shrink-0 mt-0.5" />
              <p className="font-body text-xs text-silver"><span className="text-white font-medium">Panel de Admin:</span> {convivo.panel}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {convivo.tags.map((t) => (
                <span key={t} className="font-body text-xs px-3 py-1.5 rounded-full border border-edge text-silver hover:border-violet/50 hover:text-violet transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Odoo subsection label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-[11px] text-silver tracking-[0.14em] uppercase mb-5"
        >
          Desarrollo Odoo
        </motion.p>

        {/* Odoo projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {odooProjects.map((p, i) => (
            <OdooCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}