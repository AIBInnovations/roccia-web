import React from 'react'
import './WhySection.css'

// Icon components for stats
const GlobeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const AwardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="7" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
)

const WhySection = ({
  label = 'WHY ROCCIA?',
  heading = 'Lorem ipsum dolor sit amet consectetur Phasellus sed sed nunc elit aliquam proin Volutpat massa tristique nunc massa Maecenas pretium dolor quis vehicula malesuada.',
  paragraph = 'Lorem ipsum dolor sit amet consectetur. Nulla mi id dui erat vestibulum id neque. Luctus dis feugiat bibendum massa molestie vitae eget felis. Condimentum in eu nisi orci feugiat. In turpis nisi donec non et et. Non vitae commodo tortor porttitor id accumsan convallis nisi. Eu nunc fusce eget porttitor sed lorem. Maecenas est erat cras lectus sapien ullamcorper dolor vel vitae. Ullamcorper nibh sagittis dui nisl phasellus donec sed sociis.',
  imageSrc = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop',
  imageAlt = 'Modern interior design',
  stats = [
    { icon: 'globe', number: '100+', label: 'Lorem ipsum' },
    { icon: 'users', number: '15K', label: 'Lorem ipsum' },
    { icon: 'award', number: '30+', label: 'Lorem ipsum' },
  ],
}) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return <GlobeIcon />
      case 'users':
        return <UsersIcon />
      case 'award':
        return <AwardIcon />
      default:
        return <GlobeIcon />
    }
  }

  return (
    <section className="why-section" aria-label={label}>
      {/* Two Column Layout */}
      <div className="why-section__container">
        {/* Left Column */}
        <div className="why-section__left">
          {/* Small Label */}
          <div className="why-section__label">
            <span className="why-section__label-dot" aria-hidden="true" />
            <span className="why-section__label-text">{label}</span>
          </div>

          {/* Large Heading */}
          <h3 className="why-section__heading">{heading}</h3>

          {/* Body Paragraph */}
          <p className="why-section__paragraph">{paragraph}</p>
        </div>

        {/* Right Column */}
        <div className="why-section__right">
          <figure className="why-section__image-wrapper">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="why-section__image"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      {/* Stats Row */}
      <div className="why-section__stats">
        {stats.map((stat, index) => (
          <div className="why-section__stat-card" key={index}>
            <span className="why-section__stat-icon">{getIcon(stat.icon)}</span>
            <div className="why-section__stat-content">
              <span className="why-section__stat-number">{stat.number}</span>
              <span className="why-section__stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhySection
