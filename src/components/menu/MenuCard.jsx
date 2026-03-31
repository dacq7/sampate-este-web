function MenuCard({ dish }) {
  const src = dish.image

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_2px_20px_-4px_rgba(28,25,23,0.12)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-stone-300/90 hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.18)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <img
          src={src}
          alt={dish.name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-900/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/40 to-transparent opacity-80" />
      </div>
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 h-px w-10 bg-gradient-to-r from-red-800/80 to-amber-700/50 transition-all duration-500 group-hover:w-14" />
        <h3 className="font-serif text-lg font-semibold leading-snug tracking-tight text-stone-900 sm:text-xl">
          {dish.name}
        </h3>
        {dish.description ? (
          <p className="mt-2 text-sm font-medium italic leading-relaxed text-amber-900/90 sm:text-[15px]">
            {dish.description}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export default MenuCard
