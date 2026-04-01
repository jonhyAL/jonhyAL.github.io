import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-28 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-edge bg-surface/60 backdrop-blur-sm px-4 py-2 rounded-full mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-silver uppercase">
            Disponible &middot; Desarrollador Jr & Consultor Odoo
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3.8rem, 12vw, 13rem)' }}
          >
            Jonathan
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[0.88]"
            style={{
              fontSize: 'clamp(3.8rem, 12vw, 13rem)',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.18)',
            }}
          >
            Gael.
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-edge mb-10 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="font-body text-base text-silver font-light max-w-sm leading-[1.8]">
            Desarrollador Jr & Consultor Odoo en{' '}
            <span className="text-white font-medium">M22</span> — construyendo
            soluciones a medida con Python, React y OWL desde CDMX.
          </p>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#experience"
              className="inline-flex items-center gap-3 border border-edge px-5 py-3 rounded-full hover:border-violet/40 hover:bg-violet/5 transition-all group"
            >
              <div className="slide-text-wrap font-body text-xs font-medium text-white tracking-[0.06em]">
                <span>Ver trabajo</span>
                <span className="text-violet">Ver trabajo</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                <FiArrowUpRight size={13} className="text-night" />
              </div>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-violet px-5 py-3 rounded-full hover:bg-violet2 transition-colors group"
            >
              <div className="slide-text-wrap font-body text-xs font-medium text-white tracking-[0.06em]">
                <span>Contactar</span>
                <span>Contactar</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                <FiArrowUpRight size={13} className="text-white" />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="hidden md:flex items-center gap-3 mt-20"
        >
          <div className="w-8 h-px bg-edge" />
          <span className="font-body text-[10px] tracking-[0.28em] uppercase text-silver/50">Scroll para explorar</span>
        </motion.div>
      </div>
    </section>
  )
}