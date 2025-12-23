import React, { useState, useEffect } from 'react'

/**
 * Footer Component - Luxury Marble Company Footer
 *
 * Responsive Breakpoints:
 * - Mobile: < 768px (Stacked layout)
 * - Tablet: 768px - 1023px (Adjusted spacing)
 * - Desktop: >= 1024px (Full horizontal layout)
 */

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive breakpoints
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  return (
    <footer
      className='w-screen flex flex-col bg-[#5F0000] text-[#D9B57D]'
      style={{
        minHeight: isMobile ? 'auto' : '56vh',
        paddingTop: isMobile ? '50px' : isTablet ? '60px' : '80px',
        paddingLeft: isMobile ? '20px' : isTablet ? '35px' : '50px',
        paddingRight: isMobile ? '20px' : isTablet ? '35px' : '50px',
        paddingBottom: isMobile ? '40px' : '0'
      }}
    >
      {/* Top Section */}
      <div
        className='top w-full flex'
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px'
        }}
      >
        {/* Left Side - Logo, Heading, Email Input */}
        <div
          className='top-left'
          style={{
            width: isMobile ? '100%' : isTablet ? '40%' : '34%',
            marginBottom: isMobile ? '35px' : '0',
            padding: 0,
            boxSizing: 'border-box'
          }}
        >
       
          {/* Heading */}
          <h1
            className='font-normal leading-none tracking-normal text-[#D9B57D]'
            style={{
              fontFamily: 'Soligant, serif',
              fontSize: isMobile ? 'clamp(32px, 8vw, 42px)' : isTablet ? 'clamp(38px, 5vw, 45px)' : '50px',
              marginBottom: isMobile ? '15px' : '20px',
              width: isMobile ? '100%' : 'auto',
              display: isMobile ? 'block' : 'block',
              boxSizing: 'border-box'
            }}
          >
            Exquisite Italian {!isMobile && <br />}marble makers
          </h1>

          {/* Copyright - All Screen Sizes */}
          <div
            className='text-[#D9B57D]'
            style={{
              fontSize: isMobile ? '11px' : isTablet ? '12px' : '14px',
              opacity: 0.8,
              marginTop: isMobile ? '8px' : '12px'
            }}
          >
            Copyright © Roccia, Inc 2025 | Privacy Policy
          </div>

          {/* Email Input - Below Heading (Mobile Only) */}
          <div
            className='w-full'
            style={{
              marginTop: isMobile ? '20px' : '30px',
              display: isMobile ? 'block' : 'none'
            }}
          >
            <h3
              className='font-semibold leading-none tracking-[0.02em] uppercase text-[#D9B57D]'
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: isMobile ? '16px' : isTablet ? '17px' : '20px',
                marginBottom: isMobile ? '12px' : '15px'
              }}
            >
              Newsletter
            </h3>
            <div className='relative'>
              <input
                type='email'
                placeholder='Email Address'
                className='w-full bg-transparent border-b border-[#8B6F47] text-[#D9B57D] placeholder-[#8B6F47] outline-none'
                style={{
                  paddingBottom: isMobile ? '10px' : '12px',
                  fontSize: isMobile ? '14px' : isTablet ? '14px' : '16px',
                  fontFamily: 'Lato, sans-serif'
                }}
              />
              <button
                className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'
                aria-label='Subscribe'
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: '8px'
                }}
              >
                <svg
                  width={isMobile ? "20" : "24"}
                  height={isMobile ? "20" : "24"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Newsletter Columns & Connect */}
        <div
          className='top-right'
          style={{
            width: isMobile ? '100%' : isTablet ? '60%' : '66%',
            display: isMobile ? 'grid' : 'flex',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'none',
            flexDirection: isMobile ? 'none' : 'row',
            flexWrap: isMobile ? 'nowrap' : 'wrap',
            gap: isMobile ? '20px' : '0'
          }}
        >
          {/* Newsletter Column 1 */}
          <div
            className='h-auto'
            style={{
              width: isMobile ? 'auto' : '25%',
              borderLeft: isMobile ? 'none' : '1px solid #8B6F47',
              padding: isMobile ? '0' : isTablet ? '15px' : '20px'
            }}
          >
            <h3
              className='font-semibold leading-none tracking-[0.02em] uppercase text-[#D9B57D]'
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: isMobile ? '12px' : isTablet ? '17px' : '20px',
                marginBottom: isMobile ? '8px' : '15px'
              }}
            >
              Newsletter
            </h3>
            <nav className='flex flex-col' style={{ gap: isMobile ? '6px' : '8px' }}>
              <a href='#about' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>About</a>
              <a href='#catalogue' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>Catalogue</a>
              <a href='#contact' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>Contact Us</a>
            </nav>
          </div>

          {/* Newsletter Column 2 */}
          <div
            className='h-auto'
            style={{
              width: isMobile ? 'auto' : '25%',
              borderLeft: isMobile ? 'none' : '1px solid #8B6F47',
              padding: isMobile ? '0' : isTablet ? '15px' : '20px'
            }}
          >
            <h3
              className='font-semibold leading-none tracking-[0.02em] uppercase text-[#D9B57D]'
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: isMobile ? '12px' : isTablet ? '17px' : '20px',
                marginBottom: isMobile ? '8px' : '15px'
              }}
            >
              Newsletter
            </h3>
            <nav className='flex flex-col' style={{ gap: isMobile ? '6px' : '8px' }}>
              <a href='#about' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>About</a>
              <a href='#contact' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>Contact Us</a>
              <a href='#catalogue' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>Catalogue</a>
            </nav>
          </div>

          {/* Newsletter Column 3 */}
          <div
            className='h-auto'
            style={{
              width: isMobile ? 'auto' : '25%',
              borderLeft: isMobile ? 'none' : '1px solid #8B6F47',
              padding: isMobile ? '0' : isTablet ? '15px' : '20px',
              display: isMobile ? 'none' : 'block'
            }}
          >
            <h3
              className='font-semibold leading-none tracking-[0.02em] uppercase text-[#D9B57D]'
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: isMobile ? '12px' : isTablet ? '17px' : '20px',
                marginBottom: isMobile ? '8px' : '15px'
              }}
            >
              Newsletter
            </h3>
            <nav className='flex flex-col' style={{ gap: isMobile ? '6px' : '8px' }}>
              <a href='#about' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>About</a>
              <a href='#contact' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>Contact Us</a>
              <a href='#catalogue' style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>Catalogue</a>
            </nav>
          </div>

          {/* Connect Column */}
          <div
            className='h-auto'
            style={{
              width: isMobile ? 'auto' : '25%',
              borderLeft: isMobile ? 'none' : '1px solid #8B6F47',
              padding: isMobile ? '0' : isTablet ? '15px' : '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '8px' : '15px'
            }}
          >
            <h3
              className='font-semibold leading-none tracking-[0.02em] uppercase text-[#D9B57D]'
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: isMobile ? '12px' : isTablet ? '17px' : '20px',
                marginBottom: isMobile ? '0' : ''
              }}
            >
              Connect
            </h3>
            <p style={{ fontSize: isMobile ? '10px' : '14px' }} className='text-[#D9B57D]'>Website Made by AIB Innovations</p>
            <div className='flex' style={{ gap: isMobile ? '12px' : '16px' }}>
              <a href='#facebook' aria-label='Facebook' className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>
                <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href='#instagram' aria-label='Instagram' className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>
                <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href='#twitter' aria-label='X (Twitter)' className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>
                <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href='#youtube' aria-label='YouTube' className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'>
                <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Email Input - Desktop/Tablet (Bottom of top-right) */}
          <div
            style={{
              display: isMobile ? 'none' : 'block',
              marginTop: isTablet ? '30px' : '40px',
              width: '100%'
            }}
          >
            <h3
              className='font-semibold leading-none tracking-[0.02em] uppercase text-[#D9B57D]'
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: isTablet ? '17px' : '20px',
                marginBottom: '15px'
              }}
            >
              Newsletter
            </h3>
            <div className='relative'>
              <input
                type='email'
                placeholder='Email Address'
                className='w-full bg-transparent border-b border-[#8B6F47] text-[#D9B57D] placeholder-[#8B6F47] outline-none'
                style={{
                  paddingBottom: '12px',
                  fontSize: isTablet ? '14px' : '16px',
                  fontFamily: 'Lato, sans-serif'
                }}
              />
              <button
                className='text-[#D9B57D] hover:text-[#F0D9A8] transition-colors'
                aria-label='Subscribe'
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: '8px'
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Roccia Logo */}
      <div
        className='bottom w-full flex flex-col items-center justify-center'
        style={{
          paddingTop: isMobile ? '0' : isTablet ? '40px' : '60px',
          paddingBottom: isMobile ? '0' : '40px'
        }}
      >
        <div className='text-center'>
          <h2
            className='font-normal tracking-wider text-[#D9B57D]'
            style={{
              fontFamily: 'Soligant, serif',
              fontSize: isMobile ? 'clamp(40px, 12vw, 56px)' : isTablet ? '56px' : '64px',
              letterSpacing: isMobile ? '0.1em' : '0.15em'
            }}
          >
            ROCCIA
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
