import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-lg font-semibold tracking-wide text-stone-900">
          Sampate Este
        </NavLink>

        <ul className="flex flex-wrap items-center gap-2 text-sm font-medium sm:gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
