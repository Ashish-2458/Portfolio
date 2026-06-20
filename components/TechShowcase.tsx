'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const technologies = [
  { name: 'Python',      logo: '🐍', category: 'Language', glow: '59,130,246'  },
  { name: 'React',       logo: '⚛️', category: 'Frontend',  glow: '168,85,247'  },
  { name: 'TensorFlow',  logo: '🧮', category: 'AI/ML',     glow: '34,197,94'   },
  { name: 'Next.js',     logo: '▲',  category: 'Frontend',  glow: '168,85,247'  },
  { name: 'PyTorch',     logo: '🔥', category: 'AI/ML',     glow: '34,197,94'   },
  { name: 'FastAPI',     logo: '🚀', category: 'Backend',   glow: '249,115,22'  },
  { name: 'YOLO',        logo: '🎯', category: 'CV',        glow: '236,72,153'  },
  { name: 'TypeScript',  logo: '🔷', category: 'Language',  glow: '59,130,246'  },
  { name: 'PostgreSQL',  logo: '🐘', category: 'Database',  glow: '6,182,212'   },
  { name: 'Git',         logo: '🔀', category: 'Tools',     glow: '107,114,128' },
  { name: 'AWS',         logo: '☁️', category: 'Cloud',     glow: '14,165,233'  },
  { name: 'OpenCV',      logo: '👁️', category: 'CV',        glow: '236,72,153'  },
  { name: 'LangGraph',   logo: '🔗', category: 'AI/ML',     glow: '34,197,94'   },
  { name: 'Flask',       logo: '🌶️', category: 'Backend',   glow: '249,115,22'  },
  { name: 'Streamlit',   logo: '📊', category: 'Tools',     glow: '107,114,128' },
  { name: 'LLMs',        logo: '🧠', category: 'AI/ML',     glow: '34,197,94'   },
]

const categoryColors: Record<string, string> = {
  Language: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  Frontend:  'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
  'AI/ML':   'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
  Backend:   'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
  CV:        'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300',
  Database:  'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300',
  Tools:     'bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300',
  Cloud:     'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300',
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { type: 'spring', stiffness: 140, damping: 18 } },
}

export function TechShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800 overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-200 dark:border-primary-800 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 mb-5"
          >
            ⚡ Tech Stack
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            From AI pipelines to full-stack platforms — here's what powers my work.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: `0 20px 40px rgba(${tech.glow}, 0.25)`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default overflow-hidden"
            >
              {/* Animated gradient border on hover via pseudo-overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(${tech.glow},0.12), transparent)`,
                }}
              />

              {/* Glow dot top-right */}
              <motion.div
                className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `rgba(${tech.glow}, 0.8)` }}
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Emoji with wiggle on hover */}
              <motion.span
                className="text-4xl select-none"
                whileHover={{
                  rotate: [0, -12, 12, -6, 6, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {tech.logo}
              </motion.span>

              {/* Name */}
              <span className="text-sm font-bold text-gray-900 dark:text-white text-center leading-tight">
                {tech.name}
              </span>

              {/* Category badge */}
              <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[tech.category]}`}>
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
