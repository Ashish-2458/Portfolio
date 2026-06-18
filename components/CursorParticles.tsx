'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  velocity: { x: number; y: number }
  type: 'spark' | 'bubble' | 'star' | 'heart'
}

interface FireworkParticle {
  id: number
  x: number
  y: number
  color: string
  angle: number
  velocity: number
}

export function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [fireworks, setFireworks] = useState<FireworkParticle[]>([])
  const mode = 'off' // Fixed to 'off' mode only
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 })
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const particleTypes = {
    spark: '✨',
    bubble: '🫧', 
    star: '⭐',
    heart: '💖'
  }

  const colors = [
    'from-blue-400 to-cyan-300',
    'from-purple-400 to-pink-300',
    'from-green-400 to-emerald-300',
    'from-orange-400 to-yellow-300',
    'from-red-400 to-pink-300',
    'from-indigo-400 to-purple-300',
    'from-teal-400 to-blue-300',
    'from-rose-400 to-pink-300'
  ]

  const createParticle = useCallback((x: number, y: number, type: 'spark' | 'bubble' | 'star' | 'heart' = 'spark'): Particle => {
    const velocity = {
      x: (Math.random() - 0.5) * 200 + mouseVelocity.x * 0.5,
      y: (Math.random() - 0.5) * 200 + mouseVelocity.y * 0.5 - 50
    }

    return {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 12 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 2 + 1.5,
      velocity,
      type
    }
  }, [mouseVelocity, colors])

  const createFirework = useCallback((x: number, y: number) => {
    const newFireworks: FireworkParticle[] = []
    const particleCount = 12 + Math.random() * 8

    for (let i = 0; i < particleCount; i++) {
      newFireworks.push({
        id: Date.now() + Math.random() + i,
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: (i / particleCount) * Math.PI * 2,
        velocity: 100 + Math.random() * 100
      })
    }

    setFireworks(prev => [...prev, ...newFireworks])

    // Clean up fireworks
    setTimeout(() => {
      setFireworks(prev => prev.filter(f => !newFireworks.some(nf => nf.id === f.id)))
    }, 2000)
  }, [colors])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    
    // Calculate velocity
    const velocity = {
      x: clientX - lastMousePos.x,
      y: clientY - lastMousePos.y
    }
    setMouseVelocity(velocity)
    setLastMousePos({ x: clientX, y: clientY })

    mouseX.set(clientX)
    mouseY.set(clientY)

    if (mode === 'off') return

    // Throttle particle creation based on mouse speed
    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2)
    if (speed < 5) return

    if (mode === 'particles') {
      const particleCount = Math.min(Math.floor(speed / 20), 3)
      for (let i = 0; i < particleCount; i++) {
        const offsetX = (Math.random() - 0.5) * 20
        const offsetY = (Math.random() - 0.5) * 20
        const particle = createParticle(
          clientX + offsetX, 
          clientY + offsetY,
          Math.random() > 0.7 ? 'star' : 'spark'
        )
        
        setParticles(prev => [...prev, particle])

        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== particle.id))
        }, particle.duration * 1000)
      }
    } else if (mode === 'magic') {
      if (Math.random() > 0.8) {
        const particle = createParticle(clientX, clientY, 'heart')
        setParticles(prev => [...prev, particle])

        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== particle.id))
        }, particle.duration * 1000)
      }
    }
  }, [mode, lastMousePos, mouseX, mouseY, createParticle])

  const handleClick = useCallback((e: MouseEvent) => {
    if ((mode as string) === 'fireworks') {
      createFirework(e.clientX, e.clientY)
    }
  }, [mode, createFirework])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [handleMouseMove, handleClick])

  return (
    <>
      <AnimatePresence>
        {/* Regular Particles - Only rendered if mode was 'particles' (but mode is always 'off' now) */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9995]"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ 
              scale: 0, 
              opacity: 1,
              rotate: 0 
            }}
            animate={{ 
              scale: [0, 1.2, 0],
              opacity: [1, 0.8, 0],
              rotate: 360,
              x: particle.velocity.x,
              y: particle.velocity.y,
            }}
            exit={{ 
              scale: 0, 
              opacity: 0 
            }}
            transition={{ 
              duration: particle.duration,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {particle.type === 'heart' ? (
              <div className="text-2xl">💖</div>
            ) : particle.type === 'star' ? (
              <div className="text-xl">⭐</div>
            ) : (
              <div 
                className={`w-full h-full rounded-full bg-gradient-to-r ${particle.color} shadow-lg blur-sm`}
              />
            )}
          </motion.div>
        ))}

        {/* Firework Particles - Only rendered if mode was 'fireworks' (but mode is always 'off' now) */}
        {fireworks.map((firework) => (
          <motion.div
            key={firework.id}
            className="fixed pointer-events-none z-[9995]"
            style={{
              left: firework.x - 3,
              top: firework.y - 3,
            }}
            initial={{ 
              scale: 1, 
              opacity: 1 
            }}
            animate={{ 
              scale: [1, 0.5, 0],
              opacity: [1, 0.7, 0],
              x: Math.cos(firework.angle) * firework.velocity,
              y: Math.sin(firework.angle) * firework.velocity,
            }}
            exit={{ 
              scale: 0, 
              opacity: 0 
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
          >
            <div 
              className={`w-6 h-6 rounded-full bg-gradient-to-r ${firework.color} shadow-lg`}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      {/* Mode indicator button removed */}
    </>
  )
}