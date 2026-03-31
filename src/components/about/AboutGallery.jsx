import { aboutGalleryImages } from '../../data/aboutGallery.js'

function AboutGallery() {
  return (
    <section className="reveal-section space-y-10" data-reveal>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-800/90">Galería</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Un vistazo a nuestra mesa
        </h2>
        <p className="mt-3 text-sm text-stone-600 sm:text-base">
          Texturas, colores y el ambiente que nos gusta compartir contigo.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
        {aboutGalleryImages.map((img) => (
          <figure
            key={img.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 shadow-md ring-1 ring-stone-900/5 sm:aspect-[3/2] lg:aspect-[4/3]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/10 opacity-90 transition duration-500 group-hover:from-stone-950/70" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-3 text-center text-[11px] font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 sm:text-xs">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default AboutGallery
