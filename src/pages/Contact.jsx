import ContactHero from '../components/contact/ContactHero.jsx'
import ContactInfoCards from '../components/contact/ContactInfoCards.jsx'
import ContactMap from '../components/contact/ContactMap.jsx'
import ContactVisitBanner from '../components/contact/ContactVisitBanner.jsx'
import ContactWhatsAppCta from '../components/contact/ContactWhatsAppCta.jsx'
import useRevealSections from '../hooks/useRevealSections.js'

function Contact() {
  useRevealSections()

  return (
    <div className="space-y-10 pb-12 font-sans sm:space-y-12 lg:space-y-14 lg:pb-16">
      <ContactHero />

      <div className="mx-auto flex max-w-3xl flex-col space-y-10 sm:space-y-12">
        <ContactInfoCards />
        <ContactWhatsAppCta />
        <ContactMap />
        <ContactVisitBanner />
      </div>
    </div>
  )
}

export default Contact
