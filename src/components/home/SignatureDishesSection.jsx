import { signatureDishes } from '../../data/homeData.js'

function SignatureDishesSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">Platos fijos</p>
        <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Favoritos que siempre vuelven
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {signatureDishes.map((dish) => (
          <article
            key={dish.name}
            className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/10"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-stone-900">{dish.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">{dish.description}</p>
            <p className="mt-5 text-lg font-bold text-red-800">{dish.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SignatureDishesSection
