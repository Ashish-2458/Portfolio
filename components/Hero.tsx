'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('./ParticleBackground').then(m => ({ default: m.ParticleBackground })),
  { ssr: false }
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
})

const cards = [
  { icon: '🎓', label: 'B.E. AI & DS', value: 'CGPA 8.17', gradient: 'from-blue-500 to-cyan-500', delay: 0.3 },
  { icon: '🏆', label: 'DataAIVerse', value: '1st Runner-Up', gradient: 'from-yellow-400 to-orange-500', delay: 0.42 },
  { icon: '💼', label: 'Internships', value: 'Valnee & VESIT', gradient: 'from-purple-500 to-pink-500', delay: 0.54 },
  { icon: '🤖', label: 'Expertise', value: 'AI / ML / CV', gradient: 'from-green-500 to-teal-500', delay: 0.66 },
]

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-purple-50/50 dark:from-dark-900/50 dark:via-transparent dark:to-purple-900/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            {/* Greeting + Name */}
            <motion.div {...fadeUp(0)} className="space-y-1">
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                Ashish Maurya
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              {...fadeUp(0.08)}
              className="h-10 flex items-center lg:justify-start justify-center"
            >
              <TypeAnimation
                sequence={[
                  'AI & Machine Learning Engineer', 2000,
                  'Full Stack Developer', 2000,
                  'Computer Vision Specialist', 2000,
                  'Deep Learning Enthusiast', 2000,
                  'NLP & LLM Expert', 2000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.14)}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Ambitious final-year B.E. student in Artificial Intelligence and Data Science
              with hands-on experience building full-stack AI platforms and deploying
              production-grade web applications. Passionate about computer vision, NLP,
              and AI for accessibility.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-wrap gap-4 lg:justify-start justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59,130,246,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
              >
                <Mail size={18} />
                Get In Touch
              </motion.a>
              <motion.a
                href="/CV_ASHISH_MAURYA.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.26)}
              className="flex lg:justify-start justify-center items-center gap-10 pt-2"
            >
              {[
                { number: '2', label: 'Internships', icon: '💼' },
                { number: '4', label: 'Awards', icon: '🏆' },
                { number: '5+', label: 'Certifications', icon: '🎓' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl mb-0.5">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Social icons */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex lg:justify-start justify-center gap-3"
            >
              {[
                { icon: Github, href: 'https://github.com/Ashish-2458', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-maurya-62396b1b2/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:maurya21ashish@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT ── Photo top, 2×2 card grid below */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            {/* Container width = 320px to match photo */}
            <div className="flex flex-col items-center gap-4 w-80">

              {/* Photo — bigger */}
              <div className="relative w-80 h-80 flex-shrink-0">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-400"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-900" />
                </motion.div>
                <div className="absolute inset-[4px] rounded-full overflow-hidden">
                  <img
                    src="/image-ashish.png"
                    alt="Ashish Maurya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* 2×2 grid of cards — exactly matches photo width */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {cards.map(card => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: card.delay, type: 'spring', stiffness: 130, damping: 18 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2.5 bg-white dark:bg-dark-800 rounded-xl px-3 py-3 shadow-md border border-gray-100 dark:border-dark-700"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${card.gradient} rounded-lg flex items-center justify-center text-sm flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide leading-none mb-0.5 truncate">
                        {card.label}
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight truncate">
                        {card.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Available for Hire — full width */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78, type: 'spring', stiffness: 130, damping: 18 }}
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md w-full"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
                 Open to Opportunities 
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  )
}
