import { useMemo, useState } from 'react'
import DaySelector from '../components/menu/DaySelector.jsx'
import FixedDishCard from '../components/menu/FixedDishCard.jsx'
import MenuCard from '../components/menu/MenuCard.jsx'
import dailyMenu, { fixedDishes, getCurrentMenuDayId } from '../data/menuData.js'

function Menu() {
  const currentDayId = useMemo(() => getCurrentMenuDayId(), [])
  const [selectedDayId, setSelectedDayId] = useState(currentDayId)

  const selectedMenu = dailyMenu.find((day) => day.id === selectedDayId) ?? dailyMenu[0]
  const currentMenu = dailyMenu.find((day) => day.id === currentDayId) ?? dailyMenu[0]

  return (
    <section className="space-y-16 pb-16 font-sans sm:space-y-20 lg:space-y-24">
      <header className="space-y-6 border-b border-stone-200/80 pb-12 sm:space-y-8 sm:pb-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-800/90 sm:text-xs">
          Sampate Este · Bello
        </p>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
          Nuestro Menú
        </h1>
        <p className="max-w-2xl text-base leading-[1.75] text-stone-600 sm:text-lg sm:leading-relaxed">
          El menú cambia cada día de la semana según la proteína y los platos programados. Consulta el
          día de hoy o navega por los demás para planear tu visita.
        </p>
        <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 rounded-2xl border border-red-200/80 bg-gradient-to-r from-red-50 to-amber-50/80 px-5 py-3.5 text-sm font-medium text-red-950 shadow-sm ring-1 ring-red-100/60 sm:text-[15px]">
          <span className="font-semibold">Hoy es {currentMenu.day}</span>
          <span className="text-red-800/50" aria-hidden>
            —
          </span>
          <span>{currentMenu.special}</span>
        </div>
      </header>

      <section className="space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
            Selecciona el día
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-stone-500 sm:text-base">
            Toca un día para ver el menú rotativo. El día actual aparece con insignia «Hoy».
          </p>
        </div>
        <DaySelector
          days={dailyMenu}
          selectedDayId={selectedDayId}
          onSelect={setSelectedDayId}
          currentDayId={currentDayId}
        />
      </section>

      <section className="space-y-8 sm:space-y-10">
        <div key={selectedMenu.id} className="menu-day-enter space-y-8 sm:space-y-10">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-stone-200/90 bg-gradient-to-br from-white via-stone-50/80 to-amber-50/30 p-7 shadow-[0_4px_40px_-12px_rgba(28,25,23,0.12)] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-red-900/5 blur-3xl" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-red-800/90">
              Menú del día
            </p>
            <h2 className="relative mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl lg:text-[2.35rem]">
              {selectedMenu.day} — {selectedMenu.special}
            </h2>
            <p className="relative mt-3 text-base text-stone-600 sm:text-lg">
              Proteína protagonista:{' '}
              <span className="font-medium text-stone-800">{selectedMenu.protein}</span>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8">
            {selectedMenu.items.map((dish) => (
              <MenuCard key={`${selectedMenu.id}-${dish.name}`} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8 border-t border-stone-200/80 pt-14 sm:space-y-10 sm:pt-16">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-900/80">
            Carta fija
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            Disponibles todos los días
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
            Clásicos de la casa que no cambian: siempre listos para quien busca lo más tradicional.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          {fixedDishes.map((dish) => (
            <FixedDishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Menu
