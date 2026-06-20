'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Layers, Brain } from 'lucide-react'

const categories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-100 dark:border-blue-900/30',
    iconBg: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-100 dark:border-purple-900/30',
    iconBg: 'from-purple-500 to-pink-500',
    skills: ['React.js', 'Next.js', 'Flask', 'FastAPI', 'PyTorch', 'TensorFlow', 'LangGraph'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'from-green-500 to-teal-500',
    bg: 'bg-green-50 dark:bg-green-900/10',
    border: 'border-green-100 dark:border-green-900/30',
    iconBg: 'from-green-500 to-teal-500',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'YOLO', 'LLMs', 'Transformers', 'Model Fine-tuning'],
  },
]

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Technologies and tools I work with to build intelligent, production-ready applications.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`${cat.bg} border ${cat.border} rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 bg-gradient-to-br ${cat.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.12 + j * 0.04 }}
                    className="px-3.5 py-1.5 bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full border border-gray-200 dark:border-dark-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
