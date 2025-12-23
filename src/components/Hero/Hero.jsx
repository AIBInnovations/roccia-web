import React from 'react'
import './Hero.css'

const Hero = ({
  videoSrc = 'https://static.vecteezy.com/system/resources/previews/036/137/750/mp4/colorful-ink-background-video.mp4',
  heading = 'ROCCIA',
  subtext = 'Timeless Elegance in Stone',
}) => {
  return (
    <section className="hero" aria-label="Hero Section">
      {/* Full-size background video */}
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered text content */}
      <div className="hero__content">
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__subtext">{subtext}</p>
      </div>
    </section>
  )
}

export default Hero
