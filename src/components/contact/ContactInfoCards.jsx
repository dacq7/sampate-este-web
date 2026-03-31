import {
  contactHours,
  contactLocation,
  contactPhoneDisplay,
  contactPhoneE164,
} from '../../data/contactData.js'

const items = [
  {
    key: 'location',
    title: 'Ubicación',
    value: contactLocation,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    key: 'phone',
    title: 'Teléfono / WhatsApp',
    value: contactPhoneDisplay,
    href: `tel:+${contactPhoneE164}`,
    sub: 'Toca para llamar o usa el botón de WhatsApp',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.608-1.288.608-.047 0-.094 0-.14-.002l-4.025-4.028a2.25 2.25 0 01-.08-3.225l1.17-1.17c.36-.36.522-.92.412-1.36L5.575 4.35A2.25 2.25 0 017.5 3.75H9c8.284 0 15 6.716 15 15v.75z"
        />
      </svg>
    ),
  },
  {
    key: 'hours',
    title: 'Horario',
    value: contactHours.days,
    sub: contactHours.time,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

function ContactInfoCards() {
  return (
    <section className="reveal-section grid gap-4 sm:grid-cols-3 sm:gap-5" data-reveal>
      {items.map((item) => (
        <article
          key={item.key}
          className="flex flex-col rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm shadow-stone-900/5 transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/15 hover:shadow-md"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-amber-50 text-red-900 ring-1 ring-red-900/10">
            {item.icon}
          </div>
          <h2 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{item.title}</h2>
          {item.href ? (
            <a
              href={item.href}
              className="mt-2 font-serif text-lg font-semibold text-stone-900 transition hover:text-red-900"
            >
              {item.value}
            </a>
          ) : (
            <p className="mt-2 font-serif text-lg font-semibold text-stone-900">{item.value}</p>
          )}
          {item.sub ? <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.sub}</p> : null}
        </article>
      ))}
    </section>
  )
}

export default ContactInfoCards
