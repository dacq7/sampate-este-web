import { Link } from 'react-router-dom'

const heroBackground =
  'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1920&q=80'

function HeroSection() {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] min-h-[calc(100vh-73px)] w-screen overflow-hidden">
      <img
        src={heroBackground}
        alt="Plato gourmet servido en Sampate Este"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/65" />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 text-white">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-100 backdrop-blur-sm">
            Bello, Antioquia
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Sampate Este
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-stone-100 sm:text-2xl">
            Sabor casero con nivel premium
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-700 to-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-red-500 hover:shadow-xl hover:shadow-red-900/45"
            >
              Ver menú
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
