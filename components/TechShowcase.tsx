'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const technologies = [
  { name: 'Python', logo: '🐍', category: 'Language', proficiency: 95 },
  { name: 'React', logo: '⚛️', category: 'Frontend', proficiency: 90 },
  { name: 'TensorFlow', logo: '🧮', category: 'AI/ML', proficiency: 85 },
  { name: 'Next.js', logo: '▲', category: 'Frontend', proficiency: 88 },
  { name: 'PyTorch', logo: '🔥', category: 'AI/ML', proficiency: 80 },
  { name: 'FastAPI', logo: '🚀', category: 'Backend', proficiency: 87 },
  { name: 'YOLO', logo: '🎯', category: 'CV', proficiency: 92 },
  { name: 'TypeScript', logo: '🔷', category: 'Language', proficiency: 85 },
  { name: 'PostgreSQL', logo: '🐘', category: 'Database', proficiency: 82 },
  { name: 'Git', logo: '🔀', category: 'Tools', proficiency: 93 },
  { name: 'AWS', logo: '☁️', category: 'Cloud', proficiency: 78 },
  { name: 'OpenCV', logo: '👁️', category: 'CV', proficiency: 88 },
]

export function TechShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technology Arsenal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.logo}
                </motion.div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>

                {/* Category */}
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium mb-4">
                  {tech.category}
                </span>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{tech.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
