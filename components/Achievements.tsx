'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Medal, Award, Star, Target, Zap, Users, Code, Cloud } from 'lucide-react'

const achievements = [
  {
    title: 'DataAIVerse – 1st Runner-Up 🥈',
    organization: 'Project Exhibition & Poster Presentation',
    description: 'Secured 1st Runner-Up position at DataAIVerse for AI-Based Assistance and Navigation for the Visually Impaired project, showcasing innovative AI solution through exhibition and poster presentation.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    category: 'Competition',
    impact: 'Top 2 among innovative AI projects'
  },
  {
    title: 'Mastek Deep Blue Hackathon – 3rd Runner-up 🥉',
    organization: 'Mastek',
    description: 'Ranked among top teams out of 1000+ participants in the prestigious Mastek Deep Blue Hackathon, demonstrating exceptional technical skills and problem-solving under pressure.',
    icon: Medal,
    color: 'from-blue-500 to-indigo-500',
    category: 'Competition',
    impact: 'Top performer among 1000+ participants'
  },
  {
    title: 'Hack-AI-Thon 3.0 – Finalist 🎯',
    organization: 'AI-Focused 24-Hour Hackathon',
    description: 'Developed a complete AI-based solution in a 24-hour hackathon and qualified as a finalist, demonstrating expertise in rapid AI prototyping and innovation.',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    category: 'Competition',
    impact: 'Built production-ready AI solution in 24 hours'
  },
  {
    title: 'IdeaThon – Winner 🏆',
    organization: 'Idea Presentation Hackathon',
    description: 'Won the IdeaThon competition for innovative idea presentation and solution design, showcasing strong conceptual thinking and presentation skills.',
    icon: Star,
    color: 'from-green-500 to-emerald-500',
    category: 'Competition',
    impact: '1st place in innovation competition'
  },
  {
    title: 'AWS Academy – Cloud Developing',
    organization: 'Amazon Web Services Academy',
    description: 'Hands-on experience in cloud application development and AWS services, covering core cloud infrastructure, deployment practices, and scalable architecture design.',
    icon: Cloud,
    color: 'from-orange-500 to-yellow-500',
    category: 'Certification',
    impact: 'AWS cloud development certified'
  },
  {
    title: 'AWS Academy – Cloud Foundations',
    organization: 'Amazon Web Services Academy',
    description: 'Understanding of cloud computing concepts and AWS architecture, covering fundamental cloud services, security best practices, and cost optimization.',
    icon: Cloud,
    color: 'from-orange-400 to-amber-500',
    category: 'Certification',
    impact: 'AWS cloud fundamentals certified'
  },
  {
    title: 'NVIDIA – Fundamentals of Deep Learning',
    organization: 'NVIDIA Deep Learning Institute',
    description: 'Knowledge of neural networks and core deep learning concepts, including CNNs, training techniques, model optimization, and practical implementation.',
    icon: Zap,
    color: 'from-green-500 to-teal-500',
    category: 'Certification',
    impact: 'NVIDIA deep learning certified'
  },
  {
    title: 'NVIDIA – Rapid Application Development with LLMs',
    organization: 'NVIDIA Deep Learning Institute',
    description: 'Built AI applications using large language models and modern workflows, covering prompt engineering, fine-tuning, and LLM integration in production.',
    icon: Zap,
    color: 'from-green-400 to-emerald-500',
    category: 'Certification',
    impact: 'NVIDIA LLM development certified'
  },
  {
    title: 'MathWorks – Image Processing Onramp',
    organization: 'MathWorks',
    description: 'Applied image processing techniques using MATLAB, covering fundamental image analysis, computer vision operations, and practical applications.',
    icon: Code,
    color: 'from-red-500 to-rose-500',
    category: 'Certification',
    impact: 'MATLAB image processing certified'
  }
]

const stats = [
  {
    number: '4',
    label: 'Competition Awards',
    description: 'Winner and finalist positions in prestigious competitions',
    icon: Trophy
  },
  {
    number: '5+',
    label: 'Certifications',
    description: 'AWS, NVIDIA, and MathWorks industry certifications',
    icon: Award
  },
  {
    number: '1000+',
    label: 'Competitors Outranked',
    description: 'Consistently outperformed in competitive environments',
    icon: Zap
  },
  {
    number: '8.17',
    label: 'CGPA',
    description: 'Strong academic performance in AI & Data Science',
    icon: Code
  }
]

const skills_highlights = [
  'Problem-solving under pressure',
  'Team leadership and collaboration',
  'Rapid prototyping and development',
  'Innovative thinking and creativity',
  'Technical presentation skills',
  'Competitive programming mindset'
]

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Celebrating milestones, competitions, and recognition earned through dedication and innovation
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                      {achievement.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {achievement.description}
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Impact: <span className="text-gray-600 dark:text-gray-400">{achievement.impact}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Developed Through Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-900 dark:to-purple-900/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Skills Developed Through Competitions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Participating in hackathons and competitions has honed these essential skills that make me a well-rounded developer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills_highlights.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3 bg-white dark:bg-dark-800 rounded-lg p-4 shadow-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to bring this competitive spirit and proven track record to your team?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Trophy className="w-5 h-5" />
            Let's Achieve Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}