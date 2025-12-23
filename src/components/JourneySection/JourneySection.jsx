import React from 'react'
import './JourneySection.css'

const JourneySection = ({
  mainImage = '/assets/images/aboutus-JourneySection.jpg',
  description = 'Lorem ipsum dolor sit amet consectetur. Sed velit, venenatis imperdiet enim dolor tellus scelerisque.'
}) => {
  return (
    <section className="journey-section">
      <div className="journey-container">
        <div className="journey-content-wrapper">
          {/* Large Typography Elements */}
          <h2 className="journey-text journey-text-1">ABOUT <span className="text-white">US</span></h2>
          <h2 className="journey-text journey-text-2">JOURNEY</h2>
          <h2 className="journey-text journey-text-3"><span className="text-white">I</span>TALIAN MARBLES</h2>
          <h2 className="journey-text journey-text-4">AN MARB<span className="text-white">LES</span></h2>

          {/* Central Image */}
          <div className="journey-image-container">
            <img src={mainImage} alt="Architectural Detail" />
          </div>

          {/* Description Text */}
          <div className="journey-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
