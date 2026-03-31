import AboutCta from '../components/about/AboutCta.jsx'
import AboutExperience from '../components/about/AboutExperience.jsx'
import AboutGallery from '../components/about/AboutGallery.jsx'
import AboutHero from '../components/about/AboutHero.jsx'
import AboutStory from '../components/about/AboutStory.jsx'
import AboutValues from '../components/about/AboutValues.jsx'
import useRevealSections from '../hooks/useRevealSections.js'

function About() {
  useRevealSections()

  return (
    <div className="space-y-16 pb-16 font-sans sm:space-y-20 lg:space-y-24">
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <AboutHero />
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:space-y-20 sm:px-6 lg:space-y-24 lg:px-8">
        <AboutStory />
        <AboutValues />
        <AboutExperience />
        <AboutGallery />
        <AboutCta />
      </div>
    </div>
  )
}

export default About
