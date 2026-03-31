const pillars = [
  {
    title: 'Sabor que se siente en casa',
    body: 'Recetas con identidad antioqueña, servidas con el cuidado de quien cocina para los suyos.',
    accent: 'from-amber-100/90 to-stone-50',
  },
  {
    title: 'Calidad en cada detalle',
    body: 'Del fogón a la mesa: presentación, temperatura y consistencia que refuerzan confianza.',
    accent: 'from-red-50/95 to-stone-50',
  },
  {
    title: 'Variedad todos los días',
    body: 'Menú rotativo y platos fijos emblemáticos: equilibrio perfecto entre novedad y tradición.',
    accent: 'from-stone-100/90 to-amber-50/50',
  },
]

function AboutExperience() {
  return (
    <section className="reveal-section space-y-10" data-reveal>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-800/90">La experiencia</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Lo que vivís al venir
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {pillars.map((item) => (
          <article
            key={item.title}
            className={`relative overflow-hidden rounded-2xl border border-stone-200/80 bg-gradient-to-br ${item.accent} p-8 shadow-[0_4px_28px_-14px_rgba(28,25,23,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_44px_-18px_rgba(28,25,23,0.2)]`}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
            <h3 className="relative font-serif text-xl font-semibold leading-snug text-stone-950">{item.title}</h3>
            <p className="relative mt-4 text-sm leading-relaxed text-stone-700 sm:text-[15px]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutExperience
