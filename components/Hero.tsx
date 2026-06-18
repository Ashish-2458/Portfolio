'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(() => import('./ParticleBackground').then(m => ({ default: m.ParticleBackground })), { ssr: false })

// Single shared variant set — everything fades in fast with minimal stagger
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
})

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-purple-50/50 dark:from-dark-900/50 dark:via-transparent dark:to-purple-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* Left — Content */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Name */}
            <motion.div {...fadeUp(0)} className="space-y-2">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                Ashish Maurya
              </h1>
            </motion.div>

            {/* Typing */}
            <motion.div
              {...fadeUp(0.1)}
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 h-12 flex items-center lg:justify-start justify-center"
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
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.15)}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              Ambitious final-year B.E. student in Artificial Intelligence and Data Science with hands-on experience building full-stack AI platforms and deploying production-grade web applications. Passionate about computer vision, NLP, and AI for accessibility. Seeking an MS program in Germany.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
            >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59,130,246,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Mail size={20} />
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/CV_ASHISH_MAURYA.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex lg:justify-start justify-center items-center gap-8"
            >
              {[
                { number: "2", label: "Internships", icon: "💼" },
                { number: "4", label: "Awards", icon: "🏆" },
                { number: "5+", label: "Certifications", icon: "🎓" },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex lg:justify-start justify-center space-x-4"
            >
              {[
                { icon: Github, href: "https://github.com/maurya-ashish", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/ashishkumar-maurya", label: "LinkedIn" },
                { icon: Mail, href: "mailto:maurya21ashish@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] group">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 p-[3px]"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-900" />
              </motion.div>

              {/* Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700">
                <img
                  src="/ashish-photo.jpg"
                  alt="Ashish Maurya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    const fb = t.nextElementSibling as HTMLElement
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-primary-500 via-purple-600 to-pink-500 items-center justify-center text-7xl font-bold text-white"
                  style={{ display: 'none' }}
                >
                  AM
                </div>
              </div>

              {/* Available badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available for Hire
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300"
            aria-label="Scroll to about"
          >
            <ArrowDown size={22} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
