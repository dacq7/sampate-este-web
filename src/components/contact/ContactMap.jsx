import { mapEmbedSrc } from '../../data/contactData.js'

function ContactMap() {
  return (
    <section className="reveal-section space-y-4" data-reveal>
      <h2 className="text-center font-serif text-xl font-semibold text-stone-950 sm:text-2xl">Cómo llegar</h2>
      <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md shadow-stone-900/8 ring-1 ring-stone-900/5">
        <iframe
          title="Mapa: Bello, Antioquia — Sampate Este"
          src={mapEmbedSrc}
          className="aspect-[4/3] w-full min-h-[220px] sm:aspect-[21/9] sm:min-h-[280px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default ContactMap
