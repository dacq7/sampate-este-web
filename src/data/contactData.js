/** Datos de contacto Sampate Este — ajustar teléfono real en producción */
export const contactLocation = 'Bello, Antioquia'

export const contactPhoneDisplay = '+57 300 000 0000'

/** Solo dígitos para wa.me y tel: (57 + 10 dígitos) */
export const contactPhoneE164 = '573000000000'

export const contactHours = {
  days: 'Lunes a sábado',
  time: '11:00 AM - 4:00 PM',
}

export const whatsAppPrefillMessage =
  'Hola, quiero información sobre el menú de hoy en Sampate Este'

export function getWhatsAppHref() {
  const text = encodeURIComponent(whatsAppPrefillMessage)
  return `https://wa.me/${contactPhoneE164}?text=${text}`
}

/** Mapa embebido — Bello, Antioquia */
export const mapEmbedSrc =
  'https://www.google.com/maps?q=Bello%2C%20Antioquia&output=embed'
