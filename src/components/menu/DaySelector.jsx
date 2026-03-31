function DaySelector({ days, selectedDayId, onSelect, currentDayId }) {
  return (
    <div className="relative rounded-[1.35rem] border border-stone-200/90 bg-gradient-to-b from-white to-stone-50/95 p-2 shadow-[0_8px_32px_-8px_rgba(28,25,23,0.1)] backdrop-blur-sm sm:p-2.5">
      <div
        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2.5 [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Días del menú"
      >
        {days.map((day) => {
          const isSelected = day.id === selectedDayId
          const isCurrent = day.id === currentDayId

          return (
            <button
              key={day.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelect(day.id)}
              className={`relative min-w-[5.5rem] flex-shrink-0 overflow-hidden rounded-xl px-4 py-3 text-center transition-all duration-500 ease-out sm:min-w-[6.25rem] sm:px-5 sm:py-3.5 ${
                isSelected
                  ? 'bg-stone-900 text-white shadow-[0_12px_28px_-6px_rgba(28,25,23,0.45)] ring-2 ring-stone-900/20 ring-offset-2 ring-offset-stone-50'
                  : 'bg-white/80 text-stone-600 shadow-sm ring-1 ring-stone-200/80 hover:bg-white hover:text-stone-900 hover:ring-stone-300 hover:shadow-md'
              }`}
            >
              {isSelected && (
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-90"
                  aria-hidden="true"
                />
              )}
              <span className="relative block text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs">
                {day.day.slice(0, 3)}
              </span>
              <span className="relative mt-0.5 block text-[10px] font-medium uppercase tracking-wider text-stone-400 sm:text-[11px]">
                {day.protein}
              </span>
              {isCurrent && (
                <span
                  className={`relative mt-2 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${
                    isSelected
                      ? 'bg-amber-400/25 text-amber-100'
                      : 'bg-amber-100 text-amber-900 ring-1 ring-amber-200/80'
                  }`}
                >
                  Hoy
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DaySelector
