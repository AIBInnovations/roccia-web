import React, { useEffect, useRef } from 'react'
import './ContentHero.css'

const ContentHero = ({
  heading = 'CONTACT US',
  backgroundImage = '/assets/images/backgroundContactHero.png',
  statueImage = '/assets/images/statueContactHero.png',
}) => {
  const statueRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return // Skip parallax effect if user prefers reduced motion
    }

    const handleScroll = () => {
      if (!statueRef.current || !heroRef.current) return

      const heroRect = heroRef.current.getBoundingClientRect()
      const scrollY = window.scrollY

      // Calculate parallax effect only when hero is in viewport
      if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        // Parallax intensity - adjust this value to control movement speed
        const parallaxSpeed = 0.15
        let yOffset = scrollY * parallaxSpeed

        // Limit the parallax offset to prevent statue from moving too far down
        const maxOffset = 50 // Maximum pixels the statue can move down (reduced to keep statue visible)
        yOffset = Math.min(yOffset, maxOffset)

        // Apply scroll parallax while preserving the floating animation
        statueRef.current.style.setProperty('--scroll-offset', `${yOffset}px`)
      }
    }

    // Use throttled scroll for better performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollListener, { passive: true })

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <section ref={heroRef} className="content-hero" aria-label="Content Hero Section">
      {/* Background architectural illustration layer */}
      <div className="content-hero__background">
        <img
          src={backgroundImage}
          alt="Architectural background"
          className="content-hero__background-image"
        />
      </div>

      {/* Large heading text layer - sits behind statue */}
      <div className="content-hero__text-layer">
        <h1 className="content-hero__heading">{heading}</h1>
      </div>

      {/* Statue image layer - main focal point */}
      <div ref={statueRef} className="content-hero__statue-layer">
        <img
          src={statueImage}
          alt="Classical statue"
          className="content-hero__statue-image"
        />
      </div>
    </section>
  )
}

export default ContentHero
