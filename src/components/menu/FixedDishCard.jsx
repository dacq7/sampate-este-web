function FixedDishCard({ dish }) {
  const src = dish.image

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-amber-900/10 bg-gradient-to-b from-white to-stone-100/90 shadow-[0_2px_24px_-6px_rgba(69,26,3,0.12)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-800/20 hover:shadow-[0_22px_44px_-14px_rgba(69,26,3,0.2)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
        <img
          src={src}
          alt={dish.name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-950/5" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-800/90">Siempre</p>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-stone-900 sm:text-2xl">
          {dish.name}
        </h3>
        {dish.description ? (
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-[15px]">{dish.description}</p>
        ) : null}
      </div>
    </article>
  )
}

export default FixedDishCard
