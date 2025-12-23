import React from 'react'
import MasonryGallery from './MasonryGallery'

/**
 * Example implementation of MasonryGallery
 * Replace these placeholder URLs with your actual interior images
 */
const MasonryGalleryExample = () => {
  const galleryImages = {
    // Row 1 - Wide cinematic banner (21:9 aspect ratio)
    heroBanner: '/images/interiors/bathroom-banner.jpg',

    // Row 2 - Main feature row
    leftVertical: '/images/interiors/bedroom-cozy.jpg',      // 4:5 portrait
    centerHero: '/images/interiors/living-room-main.jpg',    // 3:2 landscape (focal point)
    rightVertical: '/images/interiors/dining-room.jpg',      // 3:4 portrait

    // Row 3 - Base row
    bottomLeft: '/images/interiors/bathroom-white.jpg',      // 16:9 landscape
    bottomRight: '/images/interiors/living-room-beams.jpg',  // 16:9 landscape
  }

  return (
    <div className="min-h-screen">
      <MasonryGallery
        images={galleryImages}
        enableAnimations={true}
      />
    </div>
  )
}

export default MasonryGalleryExample

/**
 * USAGE NOTES:
 *
 * 1. Image Requirements:
 *    - All images should be high-quality interior photography
 *    - Maintain consistent color palette (beige, cream, white, natural wood)
 *    - Professional lighting and composition
 *
 * 2. Recommended Image Dimensions:
 *    - heroBanner: 2520x1080px (21:9)
 *    - leftVertical: 1200x1500px (4:5)
 *    - centerHero: 1800x1200px (3:2)
 *    - rightVertical: 1200x1600px (3:4)
 *    - bottomLeft: 1920x1080px (16:9)
 *    - bottomRight: 1920x1080px (16:9)
 *
 * 3. Color Palette Suggestions:
 *    - Beige: #d4c5b0, #e8dcc8
 *    - Cream: #f5f0e8, #faf7f2
 *    - Taupe: #8b7f6f, #a69888
 *    - Gold/Brass accents: #c9a961, #d4af37
 *    - Greens (plants): #7d8f69, #9caf88
 *
 * 4. Integration with your app:
 *    - Import into your route/page component
 *    - Pass dynamic images from props or state
 *    - Can be used as a portfolio section, gallery page, or hero section
 */
