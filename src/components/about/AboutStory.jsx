const storyImage =
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85'

function AboutStory() {
  return (
    <section className="reveal-section grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16" data-reveal>
      <div className="relative overflow-hidden rounded-[1.35rem] shadow-[0_20px_50px_-20px_rgba(28,25,23,0.35)] ring-1 ring-stone-900/10">
        <img
          src={storyImage}
          alt="Ambiente y servicio en Sampate Este"
          className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03] sm:aspect-[5/4]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
      </div>

      <div className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-800/90">Nuestra historia</p>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Cocina con raíz, servicio con nombre
        </h2>
        <div className="space-y-4 text-base leading-[1.8] text-stone-600 sm:text-lg">
          <p>
            <span className="font-medium text-stone-800">Sampate Este</span> nace en Bello con una idea clara: que la
            comida casera se sienta memorable. No se trata solo de llenar el plato, sino de cuidar el sabor, el aroma y
            el detalle en cada servicio.
          </p>
          <p>
            Trabajamos con ingredientes frescos y una preparación consciente, para elevar lo tradicional sin perder la
            cercanía. Nuestro menú rota cada día: así mantenemos variedad, sorpresa y motivos para volver.
          </p>
          <p>
            Aquí la calidad no es un eslogan: es el estándar con el que recibimos a quienes confían en nosotros para el
            almuerzo, la reunión familiar o ese día en que solo se antoja algo hecho con gusto.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
