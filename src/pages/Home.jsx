import AboutPreviewSection from '../components/home/AboutPreviewSection.jsx'
import FeaturedMenuSection from '../components/home/FeaturedMenuSection.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import LocationSection from '../components/home/LocationSection.jsx'
import SignatureDishesSection from '../components/home/SignatureDishesSection.jsx'
import ValuePropsSection from '../components/home/ValuePropsSection.jsx'

function Home() {
  return (
    <div className="space-y-24 pb-12 sm:space-y-28 lg:space-y-32">
      <HeroSection />
      <ValuePropsSection />
      <FeaturedMenuSection />
      <SignatureDishesSection />
      <AboutPreviewSection />
      <LocationSection />
    </div>
  )
}

export default Home
