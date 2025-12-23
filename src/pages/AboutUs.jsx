import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/LuxuryMarble/Footer'
import ArchitecturalShowcase from '../components/ArchitecturalShowcase/ArchitecturalShowcase'
import JourneySection from '../components/JourneySection/JourneySection'
import ValueSection from '../components/ValueSection/ValueSection'
import MarbleBooking from '../components/MarbleBooking/MarbleBooking'
import ImageGridShowcase from '../components/ImageGridShowcase/ImageGridShowcase'
import Hero from '../components/Hero/Hero'

const AboutUs = () => {
  return (
    <>
      <Header />
      <Hero/>
      <JourneySection />
      <ArchitecturalShowcase />
      <ImageGridShowcase />
      <ValueSection/>
      <MarbleBooking />
      <Footer />
    </>
  )
}

export default AboutUs
