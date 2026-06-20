'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Heart, Brain } from 'lucide-react'

const projects = [
  {
    title: 'AI-Based Assistance and Navigation for the Visually Impaired',
    description: 'Award-winning multimodal AI system providing real-time assistance through computer vision, NLP, and voice interaction.',
    longDescription: 'Developed the entire AI pipeline: speech recognition, computer vision, OCR, and Vision Language Models (VLMs); backend intelligence; and API communications. Implemented object detection, obstacle navigation, currency recognition, and text reading using fine-tuned YOLO and depth estimation models. Designed intent-driven architecture using LangGraph; integrated Groq Whisper, Groq Vision, and ElevenLabs for real-time audio response.',
    technologies: ['Python', 'YOLO', 'LangGraph', 'Groq Whisper', 'Groq Vision', 'ElevenLabs', 'Computer Vision', 'OCR', 'Depth Estimation'],
    features: [
      '🏆 1st Runner-Up at DataAIVerse Exhibition',
      '🎯 Real-time object detection and obstacle navigation with fine-tuned YOLO',
      '💰 Currency recognition and text reading with depth estimation',
      '🗣️ Multimodal pipeline: speech recognition, computer vision, OCR, and VLMs',
      '🤖 Intent-driven architecture using LangGraph with Groq and ElevenLabs',
      '📱 Complete end-to-end AI navigation system'
    ],
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Ashish-2458',
    demo: 'https://onevision-ai.netlify.app/',
    image: '/projects/ai-navigation.jpg',
    award: '🥈 1st Runner-Up'
  },
  {
    title: 'Health Environment Platform',
    description: 'AI-driven comprehensive health platform with personalized insights, disease prediction, and telemedicine capabilities.',
    longDescription: 'Developed an AI-driven health platform designed to provide personalized health insights. Implemented LLM-based medicine analysis and disease prediction features. Built a fingerprint-based blood group detection module using machine learning models. Integrated an AI-powered diet planner to generate personalized nutrition recommendations. Designed the system to deliver accurate and user-specific health insights through trained ML models.',
    technologies: ['React.js', 'FastAPI', 'Python', 'LLMs', 'Machine Learning', 'Computer Vision', 'PostgreSQL'],
    features: [
      '🏥 Complete AI-driven health insights platform',
      '💊 LLM-based medicine analysis and disease prediction',
      '🖐️ Fingerprint-based blood group detection using ML',
      '🥗 AI-powered diet planner for personalized nutrition',
      '🩺 Doctor video consultation and symptom tracking',
      '📊 Accurate user-specific health insights'
    ],
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    github: 'https://github.com/Ashish-2458',
    demo: '#',
    image: '/projects/health-platform.jpg'
  }
]

const additionalProjects = [
  {
    title: 'Social Media Analytics Tool',
    description: 'Streamlit-based analytics platform providing content insights, profile improvement tips, and progress visualization with Blynk Cloud integration.',
    technologies: ['Streamlit', 'Python', 'LLM', 'Blynk', 'Data Visualization'],
    github: 'https://github.com/Ashish-2458',
    demo: '#'
  },
  {
    title: 'Modern Portfolio Website',
    description: 'Professional portfolio showcasing projects and skills with stunning animations, dark mode, and fully responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Ashish-2458',
    demo: '#'
  }
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work in AI/ML, web development, and innovative solutions
          </p>
          <div className="flex justify-center mt-6">
            <motion.a
              href="https://github.com/Ashish-2458"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              <Github size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Project Image/Icon */}
              <div className="flex-1 lg:max-w-md">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        whileHover={{ rotate: 12 }}
                      >
                        <project.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Interactive code-like animation */}
                      <div className="space-y-3">
                        <motion.div 
                          className="h-4 bg-gradient-to-r from-primary-200 to-purple-200 dark:from-primary-800 dark:to-purple-800 rounded"
                          animate={{ width: ["60%", "80%", "60%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div 
                          className="h-4 bg-gradient-to-r from-purple-200 to-cyan-200 dark:from-purple-800 dark:to-cyan-800 rounded w-3/4"
                          animate={{ width: ["75%", "90%", "75%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.div 
                          className="h-4 bg-gradient-to-r from-cyan-200 to-primary-200 dark:from-cyan-800 dark:to-primary-800 rounded w-1/2"
                          animate={{ width: ["50%", "70%", "50%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="flex-1 space-y-6">
                <div>
                  {/* Award Badge */}
                  {project.award && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                      className="inline-block mb-4"
                    >
                      <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        {project.award}
                      </span>
                    </motion.div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300"
                  >
                    <Github size={18} />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}