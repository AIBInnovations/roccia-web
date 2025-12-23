import React from 'react'
import PropTypes from 'prop-types'
import './MasonryGallery.css'

const MasonryGallery = ({ images }) => {
  return (
    <div className='masonry-gallery w-screen'>
      <div className='masonry-gallery__main-container'>

        {/* Row 1 - Top Banner */}
        <div className='masonry-gallery__top'>
          <img
            src={images.heroBanner}
            alt="Hero interior"
          />
        </div>

        {/* Row 2 - Middle Row */}
        <div className='masonry-gallery__middle'>
          {/* Left Column */}
          <div className='masonry-gallery__middle-left'>
            <img
              src={images.leftVertical}
              alt="Bedroom interior"
            />
          </div>

          {/* Center Column (Focal Point) */}
          <div className='masonry-gallery__middle-center'>
            <img
              src={images.centerHero}
              alt="Living room interior"
            />
          </div>

          {/* Right Column */}
          <div className='masonry-gallery__middle-right'>
            <img
              src={images.rightVertical}
              alt="Dining room interior"
            />
          </div>
        </div>

        {/* Row 3 - Bottom Row */}
        <div className='masonry-gallery__bottom'>
          {/* Bottom Left */}
          <div className='masonry-gallery__bottom-left'>
            <img
              src={images.bottomLeft}
              alt="Bathroom interior"
            />
          </div>

          {/* Bottom Right */}
          <div className='masonry-gallery__bottom-right'>
            <img
              src={images.bottomRight}
              alt="Living room with beams"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

MasonryGallery.propTypes = {
  images: PropTypes.shape({
    heroBanner: PropTypes.string.isRequired,
    leftVertical: PropTypes.string.isRequired,
    centerHero: PropTypes.string.isRequired,
    rightVertical: PropTypes.string.isRequired,
    bottomLeft: PropTypes.string.isRequired,
    bottomRight: PropTypes.string.isRequired,
  }).isRequired,
}

export default MasonryGallery
