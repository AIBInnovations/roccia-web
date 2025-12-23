import React from 'react'
import './ShowroomSection.css'

const ShowroomSection = () => {
  return (
    <section className="showroom-section">
      {/* Info Row */}
      <div className="showroom-info-row">
        {/* Left Block */}
        <div className="showroom-left-block">
          <h2 className="showroom-label">Our Showroom</h2>
        </div>

        {/* Middle Block */}
        <div className="showroom-middle-block">
          <div className="showroom-location">
            <h3 className="showroom-city">Indore</h3>
          <div>
            <p className="showroom-address-line">Lorem Ipsum</p>
            <p className="showroom-address-line">35 Sardar Patel Marg Dhaula Kuan</p>
            <p className="showroom-address-line">Enclave Chanakyapuri New Delhi</p>
            <p className="showroom-phone">+91 9735289 4755</p>
          </div>
          </div>
        </div>

        {/* Right Block */}
        <div className="showroom-right-block">
          <a href="#directions" className="showroom-directions-link">
            Get Directions
          </a>
        </div>
      </div>

      {/* Map Row */}
      <div className="showroom-map-row">
        <div className="showroom-map-container">
          <img
            src="/assets/images/contactForm.png"
            alt="Showroom Location Map"
            className="showroom-map-image"
          />
        </div>
      </div>
    </section>
  )
}

export default ShowroomSection
