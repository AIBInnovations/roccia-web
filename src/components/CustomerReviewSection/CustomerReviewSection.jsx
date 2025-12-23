import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CustomerReviewSection.css'

gsap.registerPlugin(ScrollTrigger)

// Star icon component
const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="customer-review__star-icon"
    aria-hidden="true"
  >
    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
  </svg>
)

// Review Card component
const ReviewCard = ({
  position = 'center',
  rotation = 0,
  label = 'ONE',
  reviewNumber = '01',
  reviewText = 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
  customerName = 'JOHN DOE',
  cardRef
}) => {
  const positionClass = `customer-review__card--${position}`

  return (
    <div
      ref={cardRef}
      className={`customer-review__card ${positionClass}`}
      style={{ '--rotation': `${rotation}deg` }}
    >
      {/* Top Row */}
      <div className="customer-review__card-row customer-review__card-row--top">
        <StarIcon />
        <span className="customer-review__label">{label}</span>
        <span className="customer-review__label">REVIEW {reviewNumber}</span>
        <StarIcon />
      </div>

      {/* Main Review Text */}
      <p className="customer-review__text">
        {reviewText}
      </p>

      {/* Bottom Row */}
      <div className="customer-review__card-row customer-review__card-row--bottom">
        <StarIcon />
        <div className="customer-review__customer-info">
          <span className="customer-review__label">CUSTOMER:</span>
          <span className="customer-review__customer-name">{customerName}</span>
        </div>
        <StarIcon />
      </div>
    </div>
  )
}

const CustomerReviewSection = ({
  reviews = [
    {
      id: 1,
      position: 'left',
      rotation: -12,
      label: 'ONE',
      reviewNumber: '01',
      reviewText: 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
      customerName: 'JOHN DOE'
    },
    {
      id: 2,
      position: 'center',
      rotation: 0,
      label: 'ONE',
      reviewNumber: '01',
      reviewText: 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
      customerName: 'JOHN DOE'
    },
    {
      id: 3,
      position: 'right',
      rotation: 12,
      label: 'ONE',
      reviewNumber: '01',
      reviewText: 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
      customerName: 'JOHN DOE'
    }
  ]
}) => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const backgroundTextRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current.filter(Boolean)
    const bgText = backgroundTextRef.current

    // Find left, center, and right cards
    const leftCard = cards.find(card => card?.classList.contains('customer-review__card--left'))
    const rightCard = cards.find(card => card?.classList.contains('customer-review__card--right'))
    const centerCard = cards.find(card => card?.classList.contains('customer-review__card--center'))

    // Check if mobile or tablet - disable pinning animation on mobile
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // On mobile, just show cards immediately - CSS handles the layout perfectly
    if (isMobile) {
      // Set all cards to visible immediately
      cards.forEach(card => {
        gsap.set(card, {
          opacity: 1,
          clearProps: 'x,rotation,xPercent,yPercent' // Clear any GSAP inline styles
        })
      })
      return
    }

    // For users who prefer reduced motion, show final state immediately
    if (prefersReducedMotion) {
      const offset = window.innerWidth * 0.38
      gsap.set(leftCard, { xPercent: -50, yPercent: -50, x: -offset, rotation: -18, opacity: 1 })
      gsap.set(rightCard, { xPercent: -50, yPercent: -50, x: offset, rotation: 18, opacity: 1 })
      gsap.set(centerCard, { xPercent: -50, yPercent: -50, opacity: 1 })
      return
    }

    // Calculate offset based on viewport width
    const getOffset = () => {
      const vw = window.innerWidth
      // Move cards to edges with 70% visible (30% off-screen)
      return vw * 0.38 // 38% of viewport width
    }

    const ctx = gsap.context(() => {
      const offset = getOffset()

      // Create main timeline with ScrollTrigger pin
      const innerContent = section.querySelector('.customer-review__inner')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          pin: innerContent,
          scrub: 1,
          anticipatePin: 1, // Smoother pinning
        },
      })

      // Set initial state - all cards centered
      // xPercent: -50 and yPercent: -50 center the card (equivalent to translateX(-50%) translateY(-50%))
      // x: 0 is the additional offset from center
      if (leftCard) {
        gsap.set(leftCard, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          rotation: 0,
          opacity: 0,
        })
      }

      if (rightCard) {
        gsap.set(rightCard, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          rotation: 0,
          opacity: 0,
        })
      }

      if (centerCard) {
        gsap.set(centerCard, {
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
        })
      }

      // Fade in center card first
      tl.to(centerCard, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })

      // Fade in both side cards at center position
      tl.to([leftCard, rightCard], {
        opacity: 1,
        duration: 0.2,
      })

      // Animate left card to its final position
      tl.to(leftCard, {
        x: -offset,
        rotation: -18,
        duration: 0.5,
        ease: 'power2.inOut',
      })

      // Animate right card to its final position (simultaneously)
      tl.to(rightCard, {
        x: offset,
        rotation: 18,
        duration: 0.5,
        ease: 'power2.inOut',
      }, '<') // '<' means start at same time as previous animation

      // Subtle parallax on background text
      if (bgText) {
        gsap.to(bgText, {
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="customer-review"
      aria-label="Customer Reviews"
      style={{ height: '250vh' }}
    >
      <div className="customer-review__inner">
        {/* Background Watermark Typography */}
        <div
          ref={backgroundTextRef}
          className="customer-review__background-text"
          aria-hidden="true"
        >
          <span className="customer-review__bg-word customer-review__bg-word--left">
            Customer
          </span>
          <span className="customer-review__bg-word customer-review__bg-word--right">
            Review
          </span>
        </div>

        {/* Cards Container */}
        <div className="customer-review__cards-wrapper">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              cardRef={(el) => (cardsRef.current[index] = el)}
              position={review.position}
              rotation={review.rotation}
              label={review.label}
              reviewNumber={review.reviewNumber}
              reviewText={review.reviewText}
              customerName={review.customerName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviewSection
