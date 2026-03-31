import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'TikTok' },
]

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Sampate Este</h3>
          <p className="text-sm text-stone-400">Sabor casero con nivel premium.</p>
          <p className="text-sm text-stone-400">Bello, Antioquia</p>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-300">Navegación</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-stone-400 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-300">Redes</h3>
          <ul className="space-y-2">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="text-sm text-stone-400 transition hover:text-white">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-300">Contacto</h3>
          <a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            WhatsApp
          </a>
        </section>
      </div>
    </footer>
  )
}

export default Footer
