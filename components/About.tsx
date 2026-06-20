'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Rocket, Users, Award, Target } from 'lucide-react'

const stats = [
  { label: 'Projects Completed', value: '10+', icon: Code },
  { label: 'Technologies Mastered', value: '30+', icon: Brain },
  { label: 'Competition Awards', value: '4', icon: Rocket },
  { label: 'Certifications', value: '5+', icon: Users },
]

const highlights = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'B.E. in AI & Data Science at VESIT Mumbai with CGPA 8.17, maintaining consistently strong academic performance throughout the program.'
  },
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description: 'Hands-on experience with LLMs, computer vision, NLP, deep learning, and building real-world AI-powered applications.'
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Proficient in React, Next.js, FastAPI, Python, and modern web technologies with internship experience.'
  },
  {
    icon: Target,
    title: 'International Mindset',
    description: 'Motivated to pursue international education in Germany, committed to cross-cultural collaboration and global exposure.'
  },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate developer with a keen interest in artificial intelligence and modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hello! I'm Ashishkumar Maurya
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I'm a recent B.E. graduate in
                    <span className="text-primary-600 dark:text-primary-400 font-semibold"> Artificial Intelligence & Data Science</span> from
                    Vivekanand Education Society's Institute of Technology (VESIT), Mumbai, with a <span className="font-semibold">CGPA of 8.17</span>.
                  </p>
                  <p>
                    With professional experience as a Frontend Developer Intern at Valnee Solutions and Full Stack Developer Intern at VES Institute of Technology, I've contributed to building production-grade AI platforms, enterprise ad intelligence systems, and comprehensive healthcare applications.
                  </p>
                  <p>
                    I'm passionate about AI for accessibility, computer vision, and NLP. Committed to expanding my research expertise through an <span className="text-primary-600 dark:text-primary-400 font-semibold">MS program in Germany</span>, where I can contribute to cutting-edge AI development and collaborate in cross-cultural learning environments.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
                      <p className="text-primary-600 dark:text-primary-400">maurya21ashish@gmail.com</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Phone:</span>
                      <p className="text-gray-600 dark:text-gray-400">+91 8169229715</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Location:</span>
                      <p className="text-gray-600 dark:text-gray-400">Mumbai 400071, India</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Date of Birth:</span>
                      <p className="text-gray-600 dark:text-gray-400">21/11/2002</p>
                    </div>
                    <div className="col-span-2">
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div 
                    className="text-3xl font-bold gradient-text mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}