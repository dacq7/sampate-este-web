import { valueProps } from '../../data/homeData.js'

function ValuePropsSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">Propuesta de valor</p>
        <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Por qué elegir Sampate Este
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((prop) => (
          <article
            key={prop.title}
            className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10"
          >
            <span className="text-4xl" aria-hidden="true">
              {prop.icon}
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900">{prop.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">{prop.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ValuePropsSection
