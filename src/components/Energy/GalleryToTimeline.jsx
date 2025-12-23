import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import GalleryItem from '../CustomerGallery/GalleryItem'
import TimelineHero from './TimelineHero'
import '../CustomerGallery/CustomerGallery.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * GalleryToTimeline - Combined Gallery expansion to Timeline transition
 *
 * Flow:
 * Phase 1 (0-60%): Gallery items fade out as center image grows to full screen
 * Phase 2 (60-100%): Image stays at full screen, timeline fades in on top
 * Creates seamless effect where the expanded image becomes the timeline background
 */
const GalleryToTimeline = ({
  galleryImages = [
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop', alt: 'Interior 1', sizeType: 'small' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=800&fit=crop', alt: 'Interior 2', sizeType: 'medium' },
    { src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920', alt: 'Hero Interior', sizeType: 'hero' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=800&fit=crop', alt: 'Interior 4', sizeType: 'medium' },
    { src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=600&fit=crop', alt: 'Interior 5', sizeType: 'small' },
  ],
  timelineSections,
  topRightText = 'We take pride in transforming spaces into personal sanctuaries.',
  bottomLeftText = 'Our clients trust us to bring their vision to life.',
  bulletLabel = 'TRUSTED PARTNERS',
  autoPlayInterval = 5000,
}) => {
  const sectionRef = useRef(null)
  const galleryRowRef = useRef(null)
  const timelineContainerRef = useRef(null)
  const [activeIndex] = useState(2) // Hero image is at index 2
  const [activeSection, setActiveSection] = useState(0)
  const [timelineVisible, setTimelineVisible] = useState(false)

  // Reset to first section when timeline becomes visible
  useEffect(() => {
    if (timelineVisible && activeSection !== 0) {
      setActiveSection(0)
    }
  }, [timelineVisible])

  useEffect(() => {
    const section = sectionRef.current
    const galleryRow = galleryRowRef.current
    const timelineContainer = timelineContainerRef.current

    if (!section || !galleryRow || !timelineContainer) return

    const activeItem = galleryRow.querySelector('.customer-gallery__item--active')
    const activeImg = activeItem?.querySelector('img')
    const otherItems = galleryRow.querySelectorAll('.customer-gallery__item:not(.customer-gallery__item--active)')
    const galleryContent = section.querySelector('.gallery-content')

    if (!activeItem || !activeImg) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      pin: galleryContent,
      pinSpacing: false,
      onUpdate: (self) => {
        const progress = self.progress

        // Phase 1: Gallery fade out and image expansion (0% - 48%)
        // Phase 2: Timeline visible (48% - 100%)
        const phase1End = 0.48

        if (activeItem && activeImg) {
          // Calculate how much to expand to fill the screen
          const targetWidth = window.innerWidth
          const targetHeight = window.innerHeight

          // Get current dimensions
          const currentRect = activeItem.getBoundingClientRect()
          const scaleX = targetWidth / currentRect.width
          const scaleY = targetHeight / currentRect.height

          // Use the larger scale to ensure full coverage, add 100% extra for dramatic expansion
          const targetScale = Math.max(scaleX, scaleY) * 3

          // Image should reach full scale by phase1End (48%)
          const scaleProgress = Math.min(progress / phase1End, 1)
          const currentScale = 1 + (scaleProgress * (targetScale - 1))

          const borderRadius = Math.max(0, 4 - (scaleProgress * 4))

          gsap.set(activeItem, {
            scale: currentScale,
            borderRadius: borderRadius,
            zIndex: 1, // Keep z-index low so timeline appears above
            transformOrigin: 'center center', // Scale from center
          })

          // Set object-fit cover on the image to fill entire screen
          gsap.set(activeImg, {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          })
        }

        // Phase 1: Fade out other items and gallery text (0% - 48%)
        if (progress <= phase1End) {
          const fadeProgress = progress / phase1End

          // Fade out non-active items
          otherItems.forEach((item) => {
            gsap.set(item, {
              opacity: 1 - fadeProgress,
            })
          })

          // Fade out gallery text content (but NOT the active image)
          const textElements = section.querySelectorAll('.customer-gallery__top-row, .customer-gallery__bottom-text')
          textElements.forEach((el) => {
            gsap.set(el, {
              opacity: 1 - fadeProgress,
            })
          })

          // Hide timeline when scrolling back
          if (timelineVisible) {
            setTimelineVisible(false)
          }

          // Don't control timeline opacity - Framer Motion handles it
          gsap.set(timelineContainer, {
            pointerEvents: 'none',
          })
        }
        // Phase 2: Image fully expanded, show timeline with auto fade-in (48% - 100%)
        else {
          // Hide non-active items completely
          otherItems.forEach((item) => {
            gsap.set(item, {
              opacity: 0,
            })
          })

          // Hide gallery text completely
          const textElements = section.querySelectorAll('.customer-gallery__top-row, .customer-gallery__bottom-text')
          textElements.forEach((el) => {
            gsap.set(el, {
              opacity: 0,
            })
          })

          // Keep active image visible as background (don't fade it out)
          gsap.set(activeItem, {
            opacity: 1,
          })

          // Trigger timeline visibility (Framer Motion handles the animation)
          if (!timelineVisible) {
            setTimelineVisible(true)
          }

          // Remove GSAP control, let Framer Motion handle it
          gsap.set(timelineContainer, {
            pointerEvents: 'auto',
          })
        }
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [activeIndex, timelineVisible])

  return (
    <section
      ref={sectionRef}
      className="customer-gallery bg-red-500"
      aria-label="Gallery to Timeline Transition"
      style={{
        position: 'relative',
        gap:'0px',
        backgroundImage: 'none',
        background: 'none',
        height: '500vh',
        overflow: 'visible',
        padding: 0,
        display: 'block',

      }}
    >
      {/* Gallery Content - This gets pinned */}
      <div className="gallery-content" style={{
        background: 'transparent',
        backgroundColor: 'transparent',
        position: 'relative',
        height: '100vh',
        overflow: 'visible',
        padding: '0 clamp(16px, 3%, 48px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'clamp(40px, 1vh, 100px)'
      }}>
        {/* Top Row */}
        <div className="customer-gallery__top-row">
          <header className="customer-gallery__label">
            <h2>Our Customers</h2>
          </header>

          <div className="customer-gallery__top-text  ">
            <p>{topRightText}</p>
           
          </div>
        </div>

        {/* Gallery Row */}
        <div
          ref={galleryRowRef}
          className="customer-gallery__row"
          role="list"
          style={{ background: 'transparent', position: 'relative', zIndex: 10 }}
        >
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.src}
              alt={image.alt}
              sizeType={image.sizeType}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="customer-gallery__bottom-text">
          <p>{bottomLeftText}</p>
        </div>

        {/* Timeline Hero - Fades in on top as image grows - MOVED INSIDE pinned element */}
        <div
          ref={timelineContainerRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 100,
            margin: 0,
            padding: 0,
          }}
        >
          <AnimatePresence>
            {timelineVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <TimelineHero
                  autoPlay={true}
                  autoPlayInterval={autoPlayInterval}
                  sections={timelineSections}
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                  enableAnimations={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default GalleryToTimeline
