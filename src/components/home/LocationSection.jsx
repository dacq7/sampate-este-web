function LocationSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">Ubicación</p>
        <h2 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Bello, Antioquia</h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md shadow-stone-900/10 transition duration-300 hover:shadow-lg">
        <iframe
          title="Mapa de Sampate Este en Bello Antioquia"
          src="https://www.google.com/maps?q=Bello%2C%20Antioquia&output=embed"
          className="h-72 w-full sm:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href="https://wa.me/573001112233?text=Hola%20Sampate%20Este%2C%20quiero%20informacion%20del%20menu"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition duration-300 hover:-translate-y-0.5 hover:from-green-500 hover:to-green-400 hover:shadow-xl hover:shadow-green-900/30"
      >
        WhatsApp
      </a>
    </section>
  )
}

export default LocationSection
