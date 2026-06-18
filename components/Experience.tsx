'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Code, Database, Brain } from 'lucide-react'

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Valnee Solutions',
    location: 'Mumbai, India',
    period: '08/07/2025 – 15/08/2025',
    type: 'Internship',
    description: 'Contributed to the development of an AI-powered advertising intelligence platform to generate data-driven insights and support competitor analysis.',
    achievements: [
      'Designed and implemented the landing page and multiple feature pages using Next.js',
      'Built modular, reusable UI components to improve scalability and maintainability',
      'Improved platform scalability through component architecture',
      'Ensured fully responsive design across devices for enhanced accessibility',
      'Collaborated with development team to maintain clean UI structure and consistent design standards'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'VES Institute of Technology',
    location: 'Mumbai, India',
    period: '20/05/2025 – 20/09/2025',
    type: 'Internship',
    description: "Developed a full-stack women's health platform focused on menstrual health awareness and digital healthcare accessibility.",
    achievements: [
      'Implemented key features: doctor video consultation, symptom tracking, diet planning, and educational content',
      'Built responsive frontend using React.js ensuring user-friendly design',
      'Developed backend services using FastAPI (Python) for application logic and data processing',
      'Developed backend services using FastAPI (Python) to manage application logic',
      'Integrated frontend and backend to deliver complete end-to-end web application experience'
    ],
    technologies: ['React.js', 'FastAPI', 'Python', 'Machine Learning', 'PostgreSQL'],
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  }
]

const education = [
  {
    degree: 'Bachelor of Engineering in Artificial Intelligence and Data Science',
    institution: 'Vivekanand Education Society\'s Institute Of Technology',
    period: '11/2022 – 06/2026',
    cgpa: '8.17',
    location: 'Mumbai, India',
    description: 'Comprehensive curriculum in AI/ML, deep learning, computer vision, NLP, data structures, algorithms, and full-stack web development.',
    icon: Brain,
    color: 'from-green-500 to-teal-500'
  },
  {
    degree: 'Higher Secondary Certificate Examination',
    institution: 'Shree Sanatan Dharam Vidyalaya',
    period: '06/2021 – 05/2022',
    percentage: '69.17%',
    location: 'Mumbai, India',
    description: 'Science stream with Mathematics, Physics, and Chemistry.',
    icon: Code,
    color: 'from-orange-500 to-red-500'
  },
  {
    degree: 'Secondary School Certificate Examination',
    institution: 'Model High School',
    period: '06/2019 – 05/2020',
    percentage: '82.8%',
    location: 'Mumbai, India',
    description: 'Strong foundation in core subjects with excellent academic performance.',
    icon: Code,
    color: 'from-indigo-500 to-purple-500'
  }
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background in technology and innovation
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            Work Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500 opacity-30" />
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                          <span className="font-semibold text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                  {edu.institution}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{edu.period}</span>
                  {edu.cgpa && (
                    <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                  {edu.percentage && (
                    <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      {edu.percentage}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-500 dark:text-gray-500 text-xs mb-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {edu.location}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}