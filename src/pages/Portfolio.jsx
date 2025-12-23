import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/LuxuryMarble/Footer'
import ContentHero from '../components/ContentHero/ContentHero'

const Portfolio = () => {
  return (
    <>
      <Header />
      <ContentHero
        heading="PROJECTS"
        backgroundImage="/assets/images/backgroundContactHero.png"
        statueImage="/assets/images/statueContactHero.png"
      />

      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        backgroundColor: 'var(--color-background, #F5F2EC)'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-Soligant, serif)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-card-red, #710303)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Portfolio Coming Soon
          </h2>
          <p style={{
            fontFamily: 'var(--font-primary, "Inter", sans-serif)',
            fontSize: '1.125rem',
            color: 'var(--color-text, #333)',
            lineHeight: '1.8'
          }}>
            We are currently curating our finest projects to showcase the exceptional quality and craftsmanship that defines Roccia. Check back soon to explore our portfolio of luxury marble and furniture installations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Portfolio
