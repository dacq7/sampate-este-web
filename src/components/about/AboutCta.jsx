import { Link } from 'react-router-dom'

function AboutCta() {
  return (
    <section className="reveal-section" data-reveal>
      <div className="relative overflow-hidden rounded-[1.5rem] border border-stone-200/90 bg-gradient-to-br from-stone-900 via-stone-900 to-red-950/90 px-6 py-14 text-center shadow-[0_24px_60px_-20px_rgba(28,25,23,0.45)] sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

        <h2 className="relative font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Descubre nuestro menú de hoy
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-stone-300 sm:text-base">
          Consulta el día, la proteína y los platos que tenemos preparados para vos.
        </p>
        <Link
          to="/menu"
          className="relative mt-8 inline-flex items-center justify-center rounded-2xl bg-amber-100 px-8 py-3.5 text-sm font-semibold text-stone-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-50"
        >
          Ver Menú
        </Link>
      </div>
    </section>
  )
}

export default AboutCta
