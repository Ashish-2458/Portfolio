'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const TRAIL_LENGTH = 10

export function InteractiveCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Main dot — snappy
  const dotX = useSpring(cursorX, { damping: 18, stiffness: 500, mass: 0.3 })
  const dotY = useSpring(cursorY, { damping: 18, stiffness: 500, mass: 0.3 })

  // Ring — lagging behind
  const ringX = useSpring(cursorX, { damping: 28, stiffness: 140, mass: 0.5 })
  const ringY = useSpring(cursorY, { damping: 28, stiffness: 140, mass: 0.5 })

  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const frameRef = useRef<number>()
  const posRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      setTrail(prev => {
        const next = [{ x: e.clientX, y: e.clientY, id: Date.now() + Math.random() }, ...prev]
        return next.slice(0, TRAIL_LENGTH)
      })
    }

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"]')) setIsHovering(true)
    }
    const onLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      document.body.style.cursor = 'auto'
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, i) => {
        const age = i / TRAIL_LENGTH
        const size = Math.max(2, 10 * (1 - age))
        const opacity = (1 - age) * 0.5
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-[9990]"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(139,92,246,${opacity}), rgba(59,130,246,${opacity * 0.6}))`,
              transform: 'translate3d(0,0,0)',
            }}
          />
        )
      })}

      {/* Outer ring — lags behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering ? 'rgba(139,92,246,0.9)' : 'rgba(99,102,241,0.6)',
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border-2"
          style={{ borderColor: 'rgba(99,102,241,0.6)' }}
        />
      </motion.div>

      {/* Inner dot — snappy */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 6 : 8,
            height: isHovering ? 6 : 8,
            background: isHovering
              ? 'radial-gradient(circle, #a78bfa, #818cf8)'
              : 'radial-gradient(circle, #6366f1, #8b5cf6)',
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full shadow-lg"
          style={{
            boxShadow: '0 0 10px rgba(99,102,241,0.8)',
          }}
        />
      </motion.div>
    </>
  )
}
