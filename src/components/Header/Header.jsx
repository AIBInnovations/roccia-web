import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="header" aria-label="Main Navigation">
      <div
        className={`header__container ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Left menu items */}
        <nav className="header__nav-left">
          <Link to="/">HOME</Link>
          <Link to="/portfolio">PROJECTS </Link>
        </nav>

        {/* Center content - ROCCIA brand and dots */}
        <div className="header__center">
          <div className="header__brand">
            <span className="header__logo">ROCCIA</span>
          </div>

          <button className="header__nav-icon" aria-label="Toggle navigation menu">
            <div className="header__dots">
              <span className="header__dot"></span>
              <span className="header__dot"></span>
              <span className="header__dot"></span>
              <span className="header__dot"></span>
            </div>
          </button>
        </div>

        {/* Right menu items */}
        <nav className="header__nav-right">
          <Link to="/aboutus">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
