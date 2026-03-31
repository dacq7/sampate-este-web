const bgImage =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85'

function AboutHero() {
  return (
    <section className="relative overflow-hidden rounded-b-[1.75rem] sm:rounded-b-[2rem]">
      <div className="relative min-h-[min(68vh,520px)] sm:min-h-[min(72vh,580px)]">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/92 via-stone-900/78 to-stone-900/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/25 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[min(68vh,520px)] max-w-6xl flex-col justify-end px-4 pb-12 pt-20 sm:min-h-[min(72vh,580px)] sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200/95 sm:text-xs">
            Bello, Antioquia
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sobre Nosotros
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-200/95 sm:text-xl">
            Tradición, sabor y calidad en cada plato
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
