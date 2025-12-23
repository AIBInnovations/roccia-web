import React from 'react'
import './ArchitecturalShowcase.css'

const ArchitecturalShowcase = ({
  leftImage = 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&h=1600&fit=crop',
  centerImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=1000&fit=crop',
  rightTopImage = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop',
  rightBottomImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=900&fit=crop',
  text = 'LOREM IPSUM DOLOR SIT AMET CONTETIUR. ET MAURIS PIROIN BLANDIT SEMPER TINCIDUNT NEQUE IN. SED CURSUS RISUS NISL EGESTAS BIBENDUM BIBENDUM'
}) => {
  return (
    <section className="architectural-showcase">
      <h1 className='heading'>Lorem ipsum dolor sit amet contetur. Et mauris proin blandit semper tincidunt neque in. Sed cursus risus nisl egestas bibendum bibendum.</h1>
      <div className="showcase-container">
        {/* Left Image */}
        <div className="showcase-image left-image">
          <img src={leftImage} alt="Classical Interior" />
        </div>

        {/* Center Image */}
        <div className="showcase-image center-image">
          <img src={centerImage} alt="Modern Interior" />
        </div>

        {/* Right Side - Two Images */}
        <div className="showcase-right-section">
          <div className="showcase-image right-top-image">
            <img src={rightTopImage} alt="Detail View" />
          </div>

          <div className="showcase-image right-bottom-image">
<div className='image-container'>
<img src={rightBottomImage} alt="Interior Detail" />
</div>

            {/* Text Overlay */}
            <div className="text-overlay">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchitecturalShowcase
