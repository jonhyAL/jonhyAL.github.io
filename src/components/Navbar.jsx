import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const links = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Sobre mi',    href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos',   href: '#projects' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Contacto',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-night/90 backdrop-blur-md border-b border-edge' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-1.5">
            <span className="font-display font-bold text-white text-lg tracking-tight">Jonathan</span>
            <span className="w-2 h-2 rounded-full bg-violet" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-xs font-medium tracking-[0.08em] text-silver hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2.5 border border-edge px-4 py-2 rounded-full hover:border-violet/40 transition-colors group"
          >
            <div className="slide-text-wrap font-body text-xs font-medium text-white">
              <span>Contactar</span>
              <span className="text-violet">Contactar</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-violet flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
              <FiArrowUpRight size={12} className="text-white" />
            </div>
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-night/98 backdrop-blur-xl flex flex-col items-center justify-center gap-9 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-4xl text-white hover:text-violet transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}