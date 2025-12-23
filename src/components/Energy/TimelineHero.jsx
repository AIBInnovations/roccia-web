import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * TimelineHero - Full-screen hero section with timeline navigation
 *
 * Features:
 * - Animated white timeline bar that grows based on active section
 * - Background image transitions when section changes
 * - Smooth animations and transitions
 * - Auto-play feature that cycles through sections
 */
const TimelineHero = ({
  sections,
  activeSection = 0,
  onSectionChange,
  enableAnimations = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [backgroundZoomed, setBackgroundZoomed] = useState(false)
  const [currentSectionData, setCurrentSectionData] = useState(sections?.[activeSection] || sections?.[0])

  // Safety check for sections
  if (!sections || sections.length === 0) {
    console.error('TimelineHero: No sections provided')
    return null
  }

  // Trigger UI elements after background zoom completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundZoomed(true)
    }, enableAnimations ? 1400 : 100)

    return () => clearTimeout(timer)
  }, [enableAnimations])

  // Update current section data when activeSection changes
  useEffect(() => {
    setCurrentSectionData(sections[activeSection])
  }, [activeSection, sections])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !backgroundZoomed) return

    const autoPlayTimer = setInterval(() => {
      const nextIndex = (activeSection + 1) % sections.length
      onSectionChange?.(nextIndex)
    }, autoPlayInterval)

    return () => clearInterval(autoPlayTimer)
  }, [autoPlay, activeSection, sections.length, autoPlayInterval, onSectionChange, backgroundZoomed])

  // Animation variants - removed slide animations, instant transitions
  const backgroundVariants = {
    initial: { scale: 1.3, opacity: 0 },
    zoomed: { scale: 1, opacity: 1 },
    exit: { opacity: 1 },
  }

  const titleVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  }

  const cardVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      y: [0, -8, 0],
      transition: {
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }
      }
    },
  }

  const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Calculate timeline progress percentage
  const calculateProgress = () => {
    return ((activeSection + 1) / sections.length) * 100
  }

  const handleSectionClick = (index) => {
    onSectionChange?.(index)
  }

  const handleNextSection = () => {
    const nextIndex = (activeSection + 1) % sections.length
    handleSectionClick(nextIndex)
  }

  return (
    <>
      <style>{`
        @media (min-width: 1280px) {
          .desktop-card {
            display: flex !important;
          }
        }
      `}</style>
      <section
        className="relative h-screen w-screen overflow-hidden"
        aria-label={`${currentSectionData.label} section hero`}
      >
      {/* Background Color - Instant change, no animation */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeSection}
          className="absolute inset-0"
          initial={enableAnimations ? "initial" : "zoomed"}
          animate="zoomed"
          exit="exit"
          variants={backgroundVariants}
          transition={{
            duration: 0,
          }}
          style={{
            backgroundColor: currentSectionData.backgroundColor || '#1f2937'
          }}
        >
          <div className="background-overlay absolute inset-0 bg-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="main-content-container relative z-10 flex h-full w-full items-start justify-between px-5 pb-20 pt-6 sm:px-8 sm:pt-8 md:items-center md:px-10 md:pb-24 md:pt-10 lg:px-12 lg:pb-20 xl:px-16">

        {/* LEFT SECTION - Title */}
        <div className="title-section flex flex-col items-start justify-start w-full space-y-4 pb-4 md:justify-center md:space-y-8 md:w-auto lg:pb-8">
          {/* Large Title - Instant change */}
          <AnimatePresence initial={false} mode="wait">
            {backgroundZoomed && (
              <motion.h1
                key={currentSectionData.label}
                initial={enableAnimations ? "hidden" : "visible"}
                animate="visible"
                exit="hidden"
                variants={titleVariants}
                transition={{
                  duration: 0,
                }}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[120px] xl:text-[140px]"
                style={{ lineHeight: 1 }}
              >
                {currentSectionData.titleText}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT SECTION - White Floating Card - Desktop Only (1280px+) */}
        <AnimatePresence initial={false} mode="wait">
          {backgroundZoomed && (
            <motion.div
              key={activeSection}
              initial={enableAnimations ? "hidden" : "visible"}
              animate="visible"
              exit="hidden"
              variants={cardVariants}
              transition={{
                duration: 0,
              }}
              className="desktop-card bg-white flex-col rounded-2xl shadow-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                padding:'20px',
                marginRight:'20px',
                marginBottom:'20px',
                width: '340px',
                minWidth: '340px',
                maxWidth: '340px',
                minHeight: 'calc(100vh - 8rem)',
                maxHeight: 'calc(100vh - 8rem)',
                height: 'calc(100vh - 8rem)',
                overflow: 'auto',
                boxSizing: 'border-box',
                flexShrink: 0,
                flexGrow: 0,
                display: 'none',
                flexDirection: 'column'
              }}
            >
              {/* Section Number - Very Large and Light */}
              <p className="text-[45px] font-semibold font-light leading-none" style={{ color: 'rgba(0, 0, 0, 0.08)' }}>
                {currentSectionData.sectionNumber}
              </p>

              {/* Card Title */}
              <h2 className="-mt-3 text-[32px] leading-none text-gray-900">
                {currentSectionData.cardTitle}
              </h2>

              {/* Spacer for breathing room */}
              <div className="card-spacer flex-1" />

              {/* Card Subtitle */}
              {currentSectionData.cardSubtitle && (
                <h3 className="text-[18px] font-bold leading-tight text-gray-900">
                  {currentSectionData.cardSubtitle}
                </h3>
              )}

              {/* Description Paragraph */}
              <p className="mt-3 text-[14px] leading-relaxed text-gray-800" style={{ lineHeight: '1.6' }}>
                {currentSectionData.cardDescription}
              </p>

              {/* Grid of 6 Mini Cards */}
              {currentSectionData.gridItems && currentSectionData.gridItems.length > 0 && (
                <div className="grid-items-container hidden lg:grid mt-4 px-1 grid-cols-2 gap-2.5 sm:mt-5 sm:px-2 sm:grid-cols-3 sm:gap-3 lg:mt-6 lg:px-0 lg:gap-3" style={{ flexShrink: 0, width: '100%', minWidth: '100%', maxWidth: '100%' }}>
                  {currentSectionData.gridItems.map((item, index) => (
                    <div
                      key={index}
                      className="grid-item group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        width: '100%',
                        height: '120px',
                        minHeight: '120px',
                        maxHeight: '120px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.label}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        loading="eager"
                        onError={(e) => {
                          e.target.style.backgroundColor = '#e5e7eb'
                        }}
                      />
                      <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity group-hover:from-black/50" />
                      <div className="image-label-container absolute inset-0 flex items-end p-1.5 sm:p-2">
                        <p className="text-[9px] font-semibold leading-tight text-white drop-shadow-lg sm:text-[10px] lg:text-xs">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM NAVIGATION BAR WITH TIMELINE */}
      <AnimatePresence>
        {backgroundZoomed && (
          <motion.nav
            initial={enableAnimations ? "hidden" : "visible"}
            animate="visible"
            variants={navVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm md:from-black/30"
            aria-label="Section navigation"
          >
            {/* Animated White Timeline Bar */}
            <div className="timeline-track relative w-full h-0.5 md:h-1 bg-white/20">
              <motion.div
                className="timeline-progress absolute top-0 left-0 h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: `${calculateProgress()}%` }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
            </div>

            {/* Navigation Items */}
            <div className="nav-buttons-container flex items-center justify-center px-3 h-14 sm:h-16 sm:px-4 md:justify-around md:px-6 md:h-[68px]">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => handleSectionClick(index)}
                  className={`group relative text-[11px] font-medium tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-white/50 sm:text-xs md:text-sm px-2 sm:px-3 ${
                    index === activeSection
                      ? 'text-white block font-semibold'
                      : 'text-white/60 hover:text-white/90 hidden md:block'
                  }`}
                  aria-current={index === activeSection ? 'page' : undefined}
                >
                  <span className="uppercase whitespace-nowrap">
                    <span className="hidden md:inline">{section.sectionNumber} </span>
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Card */}
      <AnimatePresence initial={false} mode="wait">
        {backgroundZoomed && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{
              duration: 0,
            }}
            className="mobile-card absolute bottom-[68px] left-4 right-4 rounded-2xl bg-white/98 backdrop-blur-md p-4 shadow-2xl sm:bottom-20 sm:left-6 sm:right-6 sm:p-6 md:bottom-24 md:p-7 xl:hidden max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide"
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Section Number */}
            <p className="text-2xl font-light text-gray-300 sm:text-3xl md:text-4xl leading-none">
              {currentSectionData.sectionNumber}
            </p>

            {/* Card Title */}
            <h2 className="mt-0.5 text-lg font-semibold leading-tight text-gray-900 sm:text-xl md:text-2xl">
              {currentSectionData.cardTitle}
            </h2>

            {/* Description */}
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-700 sm:mt-3 sm:line-clamp-3 sm:text-sm md:text-base">
              {currentSectionData.cardDescription}
            </p>

            {/* Grid Items */}
            {currentSectionData.gridItems && currentSectionData.gridItems.length > 0 && (
              <div className="mobile-grid-items-container mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-3 sm:gap-3 md:mt-5 md:gap-4">
                {currentSectionData.gridItems.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="mobile-grid-item group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 active:scale-95 sm:rounded-xl"
                    style={{
                      width: '100%',
                      paddingBottom: '75%',
                      height: 0,
                      position: 'relative'
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="object-cover"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      loading="eager"
                      onError={(e) => {
                        e.target.style.backgroundColor = '#e5e7eb'
                      }}
                    />
                    <div className="mobile-image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="mobile-image-label-container absolute inset-0 flex items-end p-2 sm:p-2.5">
                      <p className="text-[9px] font-semibold leading-tight text-white drop-shadow-lg sm:text-[10px]">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  )
}

TimelineHero.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      sectionNumber: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      titleText: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      cardTitle: PropTypes.string.isRequired,
      cardSubtitle: PropTypes.string,
      cardDescription: PropTypes.string.isRequired,
      gridItems: PropTypes.arrayOf(
        PropTypes.shape({
          imageUrl: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  activeSection: PropTypes.number,
  onSectionChange: PropTypes.func,
  enableAnimations: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
}

export default TimelineHero
