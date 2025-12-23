import React from 'react'
import './ValueSection.css'

const ValueSection = ({
  heading = 'Our Value',
  title = 'Lorem ipsum dolor sit amet consectetur. Accumsan lacus aliquam quis ultricies.',
  description = 'Lorem ipsum dolor sit amet consectetur. Porttitor auctor id malesuada eget. Posuere massa ut sit mi eu. Leo dapibus diam lacus nec eget gravida quam tempor facilisis bibendum vulputate eget quam viverra pretium. Natoque odio fringilla tristique accumsan aliquam pellentesque maecenas ultrices in. Ullamcorper integer ut risus maecenas maecenas.',
  image = 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
}) => {
  return (
    <section className="value-section">
      <div className="value-container">
        {/* Top Text Area - Two Columns */}
        <div className="value-text-wrapper">
          {/* Left Column - Heading & Title */}
          <div className="value-content">
      <div className="value-heading-badge">
      <h3 className="value-heading font-Soligant-regular">{heading}</h3>
      </div>
            <h2 className="value-title">{title}</h2>
          </div>

          {/* Right Column - Description */}
          <div className="value-description-wrapper">
            <p className="value-description">{description}</p>
          </div>
        </div>

        {/* Full Width Image Below */}
        <div className="value-image-wrapper">
          <img src={image} alt="Luxury Interior" className="value-image" />
        </div>
      </div>
    </section>
  )
}

export default ValueSection
