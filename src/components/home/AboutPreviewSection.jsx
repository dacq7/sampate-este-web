import { Link } from 'react-router-dom'

function AboutPreviewSection() {
  return (
    <section className="rounded-[2rem] bg-stone-900 px-7 py-14 text-stone-100 shadow-2xl shadow-stone-900/25 sm:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Sobre nosotros</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Cocina con identidad paisa y visión premium
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-300 sm:text-lg">
        En Sampate Este creemos que comer bien es una experiencia completa: sabor auténtico,
        atención cercana y un ambiente pensado para compartir. Tomamos lo mejor de lo casero y lo
        elevamos con presentación y detalle.
      </p>
      <Link
        to="/nosotros"
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-100 px-7 py-3.5 text-sm font-semibold text-stone-900 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-100/30"
      >
        Conócenos
      </Link>
    </section>
  )
}

export default AboutPreviewSection
