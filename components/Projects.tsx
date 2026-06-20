'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Trophy, Heart, Brain, BarChart3, Globe } from 'lucide-react'

const featured = {
  title: 'AI-Based Assistance & Navigation for the Visually Impaired',
  badge: '🥈 Final Year Project  •  1st Runner-Up @ DataAIVerse',
  description:
    'A complete multimodal AI system that gives visually impaired users real-time independence — combining computer vision, speech recognition, OCR, and large language models into a single seamless pipeline.',
  points: [
    'Real-time object detection & obstacle navigation using fine-tuned YOLO',
    'Currency recognition and text reading with depth estimation',
    'Intent-driven voice interaction via LangGraph + Groq Whisper + ElevenLabs',
    'Vision Language Models (VLMs) for scene understanding and description',
  ],
  technologies: ['Python', 'YOLO', 'LangGraph', 'Groq API', 'ElevenLabs', 'OpenCV', 'OCR'],
  github: 'https://github.com/Ashish-2458',
  demo: 'https://onevision-ai.netlify.app/',
  color: 'from-blue-600 to-cyan-500',
  icon: Brain,
}

const secondProject = {
  title: 'Health Environment Platform',
  description:
    'Full-stack AI health platform with LLM-based medicine analysis, disease prediction, fingerprint blood group detection, and doctor video consultation.',
  technologies: ['React.js', 'FastAPI', 'Python', 'LLMs', 'Machine Learning', 'PostgreSQL'],
  github: 'https://github.com/Ashish-2458',
  demo: '#',
  color: 'from-rose-500 to-pink-500',
  icon: Heart,
}

const miniProjects = [
  {
    title: 'Social Media Analytics Tool',
    description: 'Content insights, profile improvement tips, and progress charts with Blynk Cloud integration.',
    technologies: ['Streamlit', 'Python', 'LLM', 'Blynk'],
    github: 'https://github.com/Ashish-2458',
    icon: BarChart3,
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'AI-Powered Ad Intelligence Platform',
    description: 'Frontend for an advertising analytics platform — built modular Next.js pages with responsive UI components.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Ashish-2458',
    icon: Globe,
    color: 'from-orange-500 to-amber-500',
  },
]

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications built with AI, full-stack development, and a focus on impact.
          </p>
        </motion.div>

        {/* ── Featured Project ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-800 dark:to-dark-800 rounded-3xl border border-gray-200 dark:border-dark-700 overflow-hidden shadow-xl">
            {/* Top accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${featured.color}`} />

            <div className="p-8 md:p-10">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                  <Trophy size={12} />
                  {featured.badge}
                </span>
              </div>

              {/* Title + description */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                    >
                      <Github size={15} />
                      Source Code
                    </motion.a>
                  </div>
                </div>

                {/* Key points */}
                <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-gray-100 dark:border-dark-700 shadow-sm">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Key Highlights</p>
                  <ul className="space-y-3">
                    {featured.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <span className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${featured.color} flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Second Project ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative bg-gray-50 dark:bg-dark-800 rounded-3xl border border-gray-200 dark:border-dark-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className={`h-1 w-full bg-gradient-to-r ${secondProject.color}`} />
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 bg-gradient-to-br ${secondProject.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <secondProject.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {secondProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                    {secondProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {secondProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={secondProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-white dark:hover:bg-dark-700 transition-colors"
                    >
                      <Github size={15} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Mini Projects Grid ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {miniProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-sm`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">{project.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                <Github size={14} />
                View Code
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Ashish-2458"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md"
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
