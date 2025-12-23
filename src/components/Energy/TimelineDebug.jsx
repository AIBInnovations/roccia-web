import React, { useEffect } from 'react'

/**
 * Temporary debugging component for TimelineHero
 * Add this inside TimelineHero to diagnose production issues
 * Remove after debugging is complete
 */
const TimelineDebug = ({
  backgroundZoomed,
  currentSectionData,
  sections,
  activeSection
}) => {
  useEffect(() => {
    console.log('=== TIMELINE DEBUG ===')
    console.log('backgroundZoomed:', backgroundZoomed)
    console.log('currentSectionData:', currentSectionData)
    console.log('sections length:', sections?.length)
    console.log('activeSection:', activeSection)
    console.log('gridItems:', currentSectionData?.gridItems)
    console.log('======================')
  }, [backgroundZoomed, currentSectionData, sections, activeSection])

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      background: 'rgba(0,0,0,0.9)',
      color: 'lime',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px',
      fontFamily: 'monospace',
      lineHeight: '1.5'
    }}>
      <div><strong>Debug Info:</strong></div>
      <div>Zoomed: {backgroundZoomed ? '✓' : '✗'}</div>
      <div>Section: {activeSection + 1}/{sections?.length || 0}</div>
      <div>GridItems: {currentSectionData?.gridItems?.length || 0}</div>
      <div>CardTitle: {currentSectionData?.cardTitle || 'N/A'}</div>
    </div>
  )
}

export default TimelineDebug
