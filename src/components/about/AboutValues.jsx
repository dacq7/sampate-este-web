const values = [
  {
    title: 'Menú rotativo diario',
    text: 'Cada día una propuesta distinta para que siempre haya algo nuevo que probar, sin perder la esencia casera.',
    icon: '📅',
  },
  {
    title: 'Ingredientes frescos',
    text: 'Seleccionamos con criterio para que el sabor sea limpio, honesto y consistente en cada visita.',
    icon: '🥬',
  },
  {
    title: 'Preparación artesanal',
    text: 'Técnicas cuidadas y tiempo en la cocina: lo que se nota en el primer bocado y en el último.',
    icon: '👨‍🍳',
  },
  {
    title: 'Atención cercana',
    text: 'Te recibimos como en casa: con respeto, calidez y ganas de que te vayas satisfecho.',
    icon: '🤝',
  },
]

function AboutValues() {
  return (
    <section className="reveal-section space-y-10" data-reveal>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-800/90">Por qué elegirnos</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Lo que nos define
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {values.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-stone-200/90 bg-white p-7 shadow-[0_4px_30px_-12px_rgba(28,25,23,0.1)] transition duration-500 hover:-translate-y-1 hover:border-amber-900/15 hover:shadow-[0_18px_40px_-16px_rgba(28,25,23,0.18)]"
          >
            <span className="text-3xl transition duration-300 group-hover:scale-110" aria-hidden>
              {item.icon}
            </span>
            <h3 className="mt-5 font-serif text-lg font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-[15px]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutValues
