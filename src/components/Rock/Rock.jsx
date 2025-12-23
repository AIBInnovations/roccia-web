import React, { useState, useEffect, useRef } from 'react'

const Rock = () => {
  const [fillProgress, setFillProgress] = useState(0)
  const [isPinned, setIsPinned] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)

  // Responsive scroll distance - animation works on all devices
  const scrollDistance = windowWidth < 768 ? 1000 : windowWidth < 1024 ? 1200 : 1500

  // Content for each letter
  const letterContent = {
    R: {
      heading: "REFINED",
      text: "Precision carved from the finest materials, each piece tells a story of craftsmanship."
    },
    O: {
      heading: "ORGANIC",
      text: "Natural beauty meets modern design in every curve and contour of stone."
    },
    C: {
      heading: "CRAFTED",
      text: "Handmade with dedication, transforming raw marble into timeless art."
    },
    K: {
      heading: "KINETIC",
      text: "Living sculptures that bring movement and energy to any space."
    }
  }

  // Determine current letter based on fill progress
  const getCurrentLetter = () => {
    if (fillProgress < 25) return 'R'
    if (fillProgress < 50) return 'O'
    if (fillProgress < 75) return 'C'
    return 'K'
  }

  const currentLetter = getCurrentLetter()
  const content = letterContent[currentLetter]

  // Responsive breakpoints
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let rafId = null
    let ticking = false

    const updateProgress = () => {
      if (!wrapperRef.current) return

      const wrapper = wrapperRef.current
      const scrollY = window.scrollY

      // Get wrapper's position in document
      const wrapperTop = wrapper.offsetTop
      const pinStart = wrapperTop
      const pinEnd = wrapperTop + scrollDistance

      if (scrollY >= pinStart && scrollY < pinEnd) {
        // Section should be pinned
        setIsPinned(true)

        // Calculate fill progress based on scroll distance while pinned
        const scrollProgress = scrollY - pinStart
        const progress = (scrollProgress / scrollDistance) * 100
        setFillProgress(Math.min(100, Math.max(0, progress)))
      } else if (scrollY >= pinEnd) {
        // Scrolled past - unpin and keep at 100%
        setIsPinned(false)
        setFillProgress(100)
      } else {
        // Before pin start
        setIsPinned(false)
        setFillProgress(0)
      }

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [scrollDistance])

  return (
    <div
      ref={wrapperRef}
      style={{
        height: `calc(100vh + ${scrollDistance}px)`,
        position: 'relative'
      }}
    >
      <section
        ref={sectionRef}
        className="w-full h-screen overflow-hidden flex justify-center items-center"
        style={{
          backgroundColor: '#F2F1EA', // color-background
          position: isPinned ? 'fixed' : fillProgress === 100 ? 'absolute' : 'relative',
          top: isPinned ? 0 : fillProgress === 100 ? 'auto' : 'auto',
          bottom: fillProgress === 100 ? 0 : 'auto',
          left: isPinned || fillProgress === 100 ? 0 : 'auto',
          right: isPinned || fillProgress === 100 ? 0 : 'auto',
          padding: isMobile ? '20px 15px' : isTablet ? '20px' : '0'
        }}
      >
      {/* Giant "ROCK" Typography - Layer 2 */}
      <div className="relative">
        {/* Base text - subtle beige */}
        <h1
          className="select-none uppercase tracking-tight"
          style={{
            fontSize: isMobile
              ? 'clamp(80px, 25vw, 140px)'
              : isTablet
              ? 'clamp(140px, 30vw, 280px)'
              : 'clamp(200px, 40vw, 500px)',
            fontWeight: 900,
            color: '#DCD1BF', // color-beige
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          ROCK
        </h1>

        {/* Filled text - darker color - animates with scroll - WORKS ON ALL DEVICES */}
        <h1
          className="select-none uppercase tracking-tight absolute top-0 left-0"
          aria-hidden="true"
          style={{
            fontSize: isMobile
              ? 'clamp(80px, 25vw, 140px)'
              : isTablet
              ? 'clamp(140px, 30vw, 280px)'
              : 'clamp(200px, 40vw, 500px)',
            fontWeight: 900,
            color: '#710303', // Card red color
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            clipPath: `inset(0 ${100 - fillProgress}% 0 0)`,
            willChange: 'clip-path',
          }}
        >
          ROCK
        </h1>
      </div>

      {/* Floating Marble Stones - Layer 3 - Responsive */}

      {/* Stone 1 - Top Left (above R) */}
      <img
        src="/assets/images/rock.png"
        alt="Marble stone"
        className="absolute pointer-events-none"
        style={{
          top: isMobile ? '12%' : '15%',
          left: isMobile ? '5%' : isTablet ? '8%' : '12%',
          width: isMobile ? '70px' : isTablet ? '120px' : '170px',
          height: 'auto',
          transform: 'rotate(-22deg)',
          filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
        }}
      />

      {/* Stone 2 - Top Right Large (above K) */}
      <img
        src="/assets/images/rock.png"
        alt="Marble stone"
        className="absolute pointer-events-none"
        style={{
          top: isMobile ? '8%' : '11%',
          right: isMobile ? '5%' : isTablet ? '10%' : '15%',
          width: isMobile ? '85px' : isTablet ? '140px' : '180px',
          height: 'auto',
          transform: 'rotate(28deg)',
          filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
        }}
      />

      {/* Stone 3 - Center Small (on first O) */}
      <img
        src="/assets/images/rock.png"
        alt="Marble stone"
        className="absolute pointer-events-none"
        style={{
          top: isMobile ? '34%' : '36%',
          left: '50%',
          width: isMobile ? '55px' : isTablet ? '75px' : '100px',
          height: 'auto',
          transform: 'rotate(-18deg)',
          filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.08))'
        }}
      />

      {/* Stone 4 - Bottom Left Small (lower R) */}
      <img
        src="/assets/images/rock.png"
        alt="Marble stone"
        className="absolute pointer-events-none"
        style={{
          top: isMobile ? '58%' : '57%',
          left: isMobile ? '15%' : isTablet ? '20%' : '27%',
          width: isMobile ? '45px' : isTablet ? '65px' : '80px',
          height: 'auto',
          transform: 'rotate(-12deg)',
          filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.08))'
        }}
      />

      {/* Stone 5 - Bottom Right (near CARVED text) */}
      <img
        src="/assets/images/rock.png"
        alt="Marble stone"
        className="absolute pointer-events-none"
        style={{
          top: isMobile ? '70%' : '68%',
          right: isMobile ? '5%' : isTablet ? '8%' : '10%',
          width: isMobile ? '95px' : isTablet ? '155px' : '200px',
          height: 'auto',
          transform: 'rotate(-35deg)',
          filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
        }}
      />

      {/* Bottom-Right Content Block - Layer 4 - Responsive */}
      <div
        className="absolute"
        style={{
          bottom: isMobile ? '8%' : '12%',
          right: isMobile ? '5%' : isTablet ? '10%' : '23%',
          left: isMobile ? '5%' : 'auto',
          maxWidth: isMobile ? '100%' : isTablet ? '280px' : '320px',
          zIndex: 10,
          opacity: fillProgress > 0 ? 1 : 0,
          transform: `translateY(${fillProgress > 0 ? 0 : 20}px)`,
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
        }}
      >
        <div
          key={currentLetter}
          style={{
            animation: 'rockContentFade 0.6s ease-in-out'
          }}
        >
          {/* Dynamic Heading - Responsive */}
          <h2
            className="uppercase mb-3"
            style={{
              fontFamily: "'Soligant', Georgia, serif",
              fontSize: isMobile
                ? 'clamp(28px, 8vw, 38px)'
                : isTablet
                ? 'clamp(36px, 4.5vw, 44px)'
                : 'clamp(42px, 4vw, 52px)',
              fontWeight: 400,
              color: '#7D1F1F',
              letterSpacing: isMobile ? '0.10em' : '0.03em',
              lineHeight: 1.2
            }}
          >
            {content.heading}
          </h2>

          {/* Dynamic Body Text - Responsive */}
          <p
            style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontSize: isMobile ? '14px' : '15px',
              fontWeight: 300,
              color: '#000000',
              lineHeight: 1.6,
              maxWidth: isMobile ? '100%' : '280px'
            }}
          >
            {content.text}
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rockContentFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
    </div>
  )
}

export default Rock
