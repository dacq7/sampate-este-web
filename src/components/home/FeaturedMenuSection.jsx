import menuData from '../../data/menuData.js'
import { fallbackFeaturedItems } from '../../data/homeData.js'

const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

function FeaturedMenuSection() {
  const todayName = dayNames[new Date().getDay()]
  const todayMenu = menuData.find((entry) => entry.day === todayName)
  const featuredItems = [...(todayMenu?.items ?? []), ...fallbackFeaturedItems].slice(0, 4)

  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">Menú destacado</p>
        <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Recomendados de hoy {todayMenu ? `· ${todayMenu.day}` : ''}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredItems.map((item) => (
          <article
            key={`${todayName}-${item.name}`}
            className="rounded-3xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-6 shadow-sm shadow-stone-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700">Del día</p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-stone-900">{item.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              Preparado al momento con sello Sampate Este.
            </p>
            {'price' in item ? (
              <p className="mt-5 text-lg font-bold text-stone-900">{item.price}</p>
            ) : (
              <p className="mt-5 text-sm font-medium text-stone-700">Recomendado del chef</p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedMenuSection
