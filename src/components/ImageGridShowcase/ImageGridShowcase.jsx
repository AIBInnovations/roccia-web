import React, { useEffect, useRef, useState } from 'react'
import './ImageGridShowcase.css'

const ImageGridShowcase = () => {
  const sectionRef = useRef(null)
  const column1Ref = useRef(null)
  const column2Ref = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate scroll progress within the section
      const startScroll = sectionTop - windowHeight
      const endScroll = sectionTop + sectionHeight
      const scrollRange = endScroll - startScroll

      if (scrollY > startScroll && scrollY < endScroll) {
        const progress = (scrollY - startScroll) / scrollRange
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Column 1 images - will move UP (bottom to top)
  const column1Images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
      alt: 'Marble texture',
      height: '200px'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
      alt: 'Minimalist decor with vase',
      height: '280px'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=700&fit=crop',
      alt: 'Luxury bathtub',
      height: '320px'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop',
      alt: 'Modern bathroom',
      height: '250px'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop',
      alt: 'Elegant bathroom marble',
      height: '270px'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=700&fit=crop',
      alt: 'Modern sink',
      height: '300px'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&h=600&fit=crop',
      alt: 'Bathroom interior',
      height: '240px'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=700&fit=crop',
      alt: 'Contemporary bathroom',
      height: '290px'
    }
  ]

  // Column 2 images - will move DOWN (top to bottom)
  const column2Images = [
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=550&fit=crop',
      alt: 'Bathroom with shower',
      height: '260px'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=700&fit=crop',
      alt: 'Concrete bathroom sink',
      height: '320px'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=650&fit=crop',
      alt: 'Bathroom vanity',
      height: '290px'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=500&fit=crop',
      alt: 'Modern bathroom detail',
      height: '240px'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1597218868981-1b68e15f0065?w=800&h=600&fit=crop',
      alt: 'Luxury bathroom',
      height: '280px'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=700&fit=crop',
      alt: 'Bathroom design',
      height: '310px'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1585128792160-43866a71bb22?w=800&h=600&fit=crop',
      alt: 'Modern toilet',
      height: '250px'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?w=800&h=700&fit=crop',
      alt: 'Bathroom fixtures',
      height: '295px'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
      alt: 'Spa bathroom',
      height: '270px'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=700&fit=crop',
      alt: 'Marble bathroom walls',
      height: '305px'
    },
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop',
      alt: 'Freestanding tub',
      height: '260px'
    },
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=700&fit=crop',
      alt: 'Bathroom accessories',
      height: '285px'
    }
  ]

  // Calculate transform values - opposite directions, same speed
  const column1Transform = scrollProgress * -600 // Moves UP (negative)
  const column2Transform = -600 + (scrollProgress * 600) // Starts at -600px, moves DOWN - no gap at top

  // Calculate animated number based on scroll progress (1 to 11)
  const animatedNumber = Math.floor(1 + (scrollProgress * 10))
  const displayNumber = Math.min(animatedNumber, 11)

  return (
    <section className="image-grid-showcase" ref={sectionRef}>
      <div className="grid-showcase-container">
        {/* Left Column - Text Content */}
        <div className="left-content">
          <h2 className="projects-count">{displayNumber}+</h2>
          <p className="projects-description">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        {/* Middle Content - Two Scrolling Columns */}
        <div className="scrolling-columns-wrapper ">
          {/* Column 1 - Images move UP */}
          <div className="scroll-column column-1" ref={column1Ref}>
            <div
              className="marquee-content"
              style={{ transform: `translateY(${column1Transform}px)` }}
            >
              {column1Images.map((image) => (
                <div
                  key={image.id}
                  className="column-image"
                  style={{ height: image.height }}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
              {/* Duplicate images for seamless loop */}
              {column1Images.map((image) => (
                <div
                  key={`${image.id}-duplicate`}
                  className="column-image"
                  style={{ height: image.height }}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Images move DOWN */}
          <div className="scroll-column column-2" ref={column2Ref}>
            <div
              className="marquee-content"
              style={{ transform: `translateY(${column2Transform}px)` }}
            >
              {column2Images.map((image) => (
                <div
                  key={image.id}
                  className="column-image"
                  style={{ height: image.height }}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
              {/* Duplicate images for seamless loop */}
              {column2Images.map((image) => (
                <div
                  key={`${image.id}-duplicate`}
                  className="column-image"
                  style={{ height: image.height }}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Spacer - balances left-content */}
        <div className="right-spacer">
          {/* Brand Vertical Text */}
          <div className="brand-vertical">
            <span>ROCCIA</span>
          </div>

          {/* Logo Icon */}
          <div className="brand-logo-icon">
            <svg width="45" height="55" viewBox="0 0 45 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="25" height="35" rx="2" stroke="#C4A574" strokeWidth="1.5"/>
              <path d="M15 20h15M15 27.5h15" stroke="#C4A574" strokeWidth="1.5"/>
              <circle cx="22.5" cy="40" r="2" fill="#C4A574"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGridShowcase
