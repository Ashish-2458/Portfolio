'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticEffectProps {
  children: React.ReactNode
  className?: string
  strength?: number
  range?: number
  springConfig?: {
    stiffness: number
    damping: number
    mass: number
  }
}

export function MagneticEffect({ 
  children, 
  className = '', 
  strength = 0.3,
  range = 100,
  springConfig = { stiffness: 200, damping: 20, mass: 0.1 }
}: MagneticEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInRange, setIsInRange] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const scale = useMotionValue(1)

  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springRotateX = useSpring(rotateX, { ...springConfig, stiffness: 100 })
  const springRotateY = useSpring(rotateY, { ...springConfig, stiffness: 100 })
  const springScale = useSpring(scale, { ...springConfig, stiffness: 300 })

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      )

      if (distance < range) {
        setIsInRange(true)
        setMousePosition({ x: e.clientX, y: e.clientY })

        // Calculate magnetic pull
        const pullX = (e.clientX - centerX) * strength
        const pullY = (e.clientY - centerY) * strength

        // Calculate 3D rotation based on mouse position
        const rotX = ((e.clientY - centerY) / rect.height) * -10
        const rotY = ((e.clientX - centerX) / rect.width) * 10

        x.set(pullX)
        y.set(pullY)
        rotateX.set(rotX)
        rotateY.set(rotY)
        scale.set(1.05)
      } else if (isInRange) {
        setIsInRange(false)
        x.set(0)
        y.set(0)
        rotateX.set(0)
        rotateY.set(0)
        scale.set(1)
      }
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [x, y, rotateX, rotateY, scale, strength, range, isInRange])

  return (
    <motion.div
      ref={ref}
      className={`${className} magnetic-element`}
      style={{
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        transition: { duration: 0.2 }
      }}
    >
      {/* Magnetic field visualization (optional) */}
      {isInRange && (
        <motion.div
          className="absolute inset-0 rounded-full border border-primary-400/20 pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.3 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          }}
        />
      )}
      
      {children}
    </motion.div>
  )
}