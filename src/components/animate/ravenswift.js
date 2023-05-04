import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import {
  useTransform,
  useSpring,
  motion,
  useIsPresent,
  useScroll,
} from 'framer-motion'

const RavenSwift = ({ children }) => {
  // scroll container
  const scrollRef = useRef(null)

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value
  const isPresent = useIsPresent()

  return (
    <>
      <motion.div
        ref={scrollRef}
        // style={{ y: spring }} // translateY of scroll container using negative scroll value
        // className="container scroll-container text-center  bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1, transition: { duration: 1, ease: 'circOut' } }}
        exit={{ scaleY: 0, transition: { duration: 1, ease: 'circIn' } }}
        style={{ width: isPresent ? '100vw !important' : '100vw !important' }}
        // className="privacy-screen"
        //   transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      <div style={{ height: '100%' }} />
    </>
  )
}

export default RavenSwift
