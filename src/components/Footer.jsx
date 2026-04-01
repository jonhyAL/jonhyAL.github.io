import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const navLinks = [
  { label: 'Inicio',       href: '#hero' },
  { label: 'Sobre mi',    href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos',   href: '#projects' },
  { label: 'Stack',       href: '#skills' },
  { label: 'Contacto',    href: '#contact' },
]

const socials = [
  { icon: FiGithub,   href: 'https://github.com/jonhyAL',          label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jonathan-alanis-6754323b2/', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:alanisjonnhy@gmail.com',        label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-white text-lg">Jonathan</span>
              <span className="w-2 h-2 rounded-full bg-violet" />
            </div>
            <p className="font-body text-sm text-silver font-light leading-relaxed max-w-xs">
              Desarrollador de software especializado en Odoo y soluciones web
              modernas. Disponible para proyectos y colaboraciones.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-[11px] text-silver uppercase tracking-[0.14em] mb-5">Navegacion</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-silver hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="font-body text-[11px] text-silver uppercase tracking-[0.14em] mb-5">Redes</p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-edge flex items-center justify-center text-silver hover:border-violet hover:text-violet transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-edge pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-silver/50">
            &copy; {new Date().getFullYear()} Jonathan Gael Alanis Lopez. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-silver/50">
            Hecho con React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}