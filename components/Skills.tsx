'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Code, 
  Database, 
  Brain, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Users,
  Target,
  Lightbulb,
  Star,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    skills: [
      { name: 'Python', expertise: 'Expert', years: '4+', icon: '🐍', description: 'Advanced proficiency in Python for ML, web development, and automation' },
      { name: 'C++', expertise: 'Advanced', years: '3+', icon: '⚙️', description: 'Strong foundation in algorithms, competitive programming, and data structures' },
      { name: 'C', expertise: 'Advanced', years: '3+', icon: '©️', description: 'System-level programming and optimization' },
      { name: 'JavaScript', expertise: 'Expert', years: '3+', icon: '⚡', description: 'Modern JS, ES6+, async programming, and full-stack development' },
      { name: 'HTML/CSS', expertise: 'Expert', years: '3+', icon: '🎨', description: 'Semantic HTML5 and modern CSS including Grid and Flexbox' },
      { name: 'SQL', expertise: 'Advanced', years: '2+', icon: '🗄️', description: 'Database design, complex queries, and optimization' },
    ]
  },
  {
    title: 'Frontend Development',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    skills: [
      { name: 'React.js', expertise: 'Expert', years: '3+', icon: '⚛️', description: 'Expert in React ecosystem, hooks, context, and state management' },
      { name: 'Next.js', expertise: 'Advanced', years: '2+', icon: '▲', description: 'Full-stack React framework with SSR, API routes, and optimization' },
      { name: 'Flask', expertise: 'Advanced', years: '2+', icon: '🌶️', description: 'Python web framework for building scalable web applications' },
      { name: 'Tailwind CSS', expertise: 'Expert', years: '2+', icon: '💨', description: 'Utility-first CSS framework for rapid UI development' },
      { name: 'Framer Motion', expertise: 'Advanced', years: '1+', icon: '🎭', description: 'Advanced animations and micro-interactions' },
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
    skills: [
      { name: 'FastAPI', expertise: 'Advanced', years: '1+', icon: '🚀', description: 'High-performance Python web framework for APIs' },
      { name: 'Flask', expertise: 'Advanced', years: '2+', icon: '🌶️', description: 'Lightweight Python web framework' },
      { name: 'Node.js', expertise: 'Intermediate', years: '1+', icon: '🟢', description: 'Server-side JavaScript runtime' },
      { name: 'PostgreSQL', expertise: 'Advanced', years: '2+', icon: '🐘', description: 'Advanced relational database management' },
      { name: 'MongoDB', expertise: 'Intermediate', years: '1+', icon: '🍃', description: 'NoSQL database for flexible data storage' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
    skills: [
      { name: 'Machine Learning', expertise: 'Expert', years: '3+', icon: '🤖', description: 'Supervised/unsupervised learning, model training, evaluation, and deployment' },
      { name: 'Computer Vision', expertise: 'Expert', years: '3+', icon: '👁️', description: 'YOLO, OCR, object detection, depth estimation, and real-time processing' },
      { name: 'Natural Language Processing', expertise: 'Advanced', years: '2+', icon: '💬', description: 'Text processing, sentiment analysis, and language understanding' },
      { name: 'LLMs & Vision Models', expertise: 'Advanced', years: '2+', icon: '🧠', description: 'Large Language Models, Vision Language Models, and fine-tuning' },
      { name: 'Data Analysis', expertise: 'Expert', years: '3+', icon: '📊', description: 'Statistical analysis, data visualization, and insights' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Cloud,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
    skills: [
      { name: 'Git & GitHub', expertise: 'Expert', years: '4+', icon: '🔀', description: 'Version control, collaboration, and CI/CD workflows' },
      { name: 'YOLO (Computer Vision)', expertise: 'Expert', years: '2+', icon: '🎯', description: 'Real-time object detection and fine-tuning' },
      { name: 'LangGraph', expertise: 'Advanced', years: '1+', icon: '🔗', description: 'Building intelligent multi-agent AI systems' },
      { name: 'Groq API', expertise: 'Advanced', years: '1+', icon: '⚡', description: 'Fast LLM inference with Whisper and Vision models' },
      { name: 'Streamlit', expertise: 'Advanced', years: '2+', icon: '🎯', description: 'Rapid prototyping for ML applications' },
    ]
  },
  {
    title: 'Interpersonal Skills',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
    skills: [
      { name: 'Detail Oriented', expertise: 'Expert', years: '4+', icon: '🔍', description: 'Meticulous attention to code quality and user experience' },
      { name: 'Critical Thinking', expertise: 'Expert', years: '4+', icon: '🧠', description: 'Analytical problem-solving and decision making' },
      { name: 'Cross-Functional Collaboration', expertise: 'Advanced', years: '3+', icon: '🤝', description: 'Working effectively across development and design teams' },
      { name: 'Strategic Supervision', expertise: 'Advanced', years: '2+', icon: '🎯', description: 'Project planning and milestone tracking' },
      { name: 'Process Optimization', expertise: 'Advanced', years: '2+', icon: '⚙️', description: 'Improving workflows and development efficiency' },
      { name: 'Resilience', expertise: 'Expert', years: '4+', icon: '💪', description: 'Persistence through challenges and tight deadlines' },
    ]
  }
]

const expertiseColors = {
  'Expert': 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30',
  'Advanced': 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30',
  'Intermediate': 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
}

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <Zap className="w-4 h-4" />
            Technical Expertise
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Mastery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
              className="group"
            >
              {/* Category Card */}
              <div className={`relative bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-12 scale-150" />
                </div>
                
                {/* Category Header */}
                <div className="relative z-10 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>

                {/* Skills Grid */}
                <div className="relative z-10 grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group/skill cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 dark:border-dark-700/50"
                      >
                        <div className="flex items-center gap-4">
                          {/* Skill Icon */}
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-2xl"
                          >
                            {skill.icon}
                          </motion.div>
                          
                          {/* Skill Info */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-bold text-gray-900 dark:text-white">
                                {skill.name}
                              </h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {skill.years}
                              </span>
                            </div>
                            
                            {/* Expertise Badge */}
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${expertiseColors[skill.expertise as keyof typeof expertiseColors]}`}>
                                {skill.expertise}
                              </span>
                              
                              {/* Star Rating */}
                              <div className="flex gap-1">
                                {[...Array(skill.expertise === 'Expert' ? 5 : skill.expertise === 'Advanced' ? 4 : 3)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 + i * 0.1 }}
                                  >
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Skill Description */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: hoveredSkill === skill.name ? 'auto' : 0,
                            opacity: hoveredSkill === skill.name ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 pt-3 border-t border-gray-200 dark:border-dark-600">
                            {skill.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Code, label: 'Technologies', value: '30+', color: 'from-blue-500 to-cyan-500' },
            { icon: Award, label: 'Certifications', value: '8+', color: 'from-purple-500 to-pink-500' },
            { icon: TrendingUp, label: 'Years Experience', value: '4+', color: 'from-green-500 to-teal-500' },
            { icon: Target, label: 'Projects Built', value: '10+', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-xl text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                className="text-3xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Lightbulb className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Always Learning & Innovating
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              advanced AI techniques, cloud architecture, and emerging web technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Advanced AI/ML', icon: '🤖' },
                { name: 'Cloud Architecture', icon: '☁️' }, 
                { name: 'DevOps', icon: '🔧' },
                { name: 'Mobile Development', icon: '📱' },
                { name: 'Blockchain', icon: '⛓️' },
                { name: 'WebAssembly', icon: '🚀' }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}