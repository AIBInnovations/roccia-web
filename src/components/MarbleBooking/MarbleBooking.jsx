import React from 'react'
import './MarbleBooking.css'

const MarbleBooking = () => {
  return (
    <section className="marble-booking-section">
      {/* Small Text in Top Left */}
      <div className="marble-booking-questions">
        <p className="question-text">Lorem Ipsum dolor sit?</p>
        <p className="question-text">Lorem Ipsum dolor sit amet?</p>
      </div>

      {/* Main Content Container */}
      <div className="marble-booking-content">
        {/* Large Heading */}
        <h1 className="marble-booking-heading">
          <span className="heading-marbles">marbles</span>
          <span className="heading-separator">—</span>
          <span className="heading-book">Book your</span>
        </h1>

        {/* Contact Button */}
        <button className="contact-button">
          Contact Us
          <svg
            className="arrow-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Description Text */}
        <div className="description-text">
          <p className="description-paragraph">
            Lorem ipsum dolor sit amet consectetur.<br />
            Faucibus eu ut quam scelerisque sit vitae<br />
            cras libero faucibus.
          </p>

          <p className="description-paragraph contact-line">
            If you would like to join us with our<br />
            product line - <a href="#contact" className="contact-link">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MarbleBooking
