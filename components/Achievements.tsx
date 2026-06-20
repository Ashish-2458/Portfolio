'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Medal, Award, Zap, Cloud, Code, Star } from 'lucide-react'

const competitions = [
  {
    title: 'DataAIVerse',
    result: '1st Runner-Up',
    org: 'Project Exhibition & Poster Presentation',
    icon: '🥈',
    color: 'from-yellow-400 to-orange-500',
    glow: '251,191,36',
  },
  {
    title: 'Mastek Deep Blue Hackathon',
    result: '3rd Runner-Up',
    org: 'Mastek — 1000+ Participants',
    icon: '🥉',
    color: 'from-blue-500 to-indigo-600',
    glow: '99,102,241',
  },
  {
    title: 'Hack-AI-Thon 3.0',
    result: 'Finalist',
    org: '24-Hour AI Hackathon',
    icon: '🎯',
    color: 'from-purple-500 to-pink-500',
    glow: '168,85,247',
  },
  {
    title: 'IdeaThon',
    result: 'Winner 🏆',
    org: 'Idea Presentation Hackathon',
    icon: '💡',
    color: 'from-green-500 to-emerald-500',
    glow: '16,185,129',
  },
]

const certifications = [
  { title: 'Cloud Developing',               org: 'AWS Academy',  icon: Cloud,  color: 'from-orange-400 to-amber-500' },
  { title: 'Cloud Foundations',              org: 'AWS Academy',  icon: Cloud,  color: 'from-orange-500 to-yellow-500' },
  { title: 'Fundamentals of Deep Learning',  org: 'NVIDIA',       icon: Zap,    color: 'from-green-500 to-teal-500'   },
  { title: 'Rapid App Dev with LLMs',        org: 'NVIDIA',       icon: Zap,    color: 'from-green-400 to-emerald-500' },
  { title: 'Image Processing Onramp',        org: 'MathWorks',    icon: Code,   color: 'from-red-500 to-rose-500'     },
]

const stats = [
  { number: '4',     label: 'Competition Awards',    icon: Trophy, color: 'from-yellow-400 to-orange-500' },
  { number: '5+',    label: 'Certifications',         icon: Award,  color: 'from-blue-500 to-cyan-500'    },
  { number: '1000+', label: 'Competitors Outranked',  icon: Medal,  color: 'from-purple-500 to-pink-500'  },
  { number: '8.17',  label: 'CGPA',                   icon: Star,   color: 'from-green-500 to-teal-500'   },
]

export function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="achievements" className="relative py-24 bg-gray-50 dark:bg-dark-800 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Competitions won, certifications earned, and milestones that reflect my drive.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white dark:bg-dark-900 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{s.number}</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Competitions */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
        >
          <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full inline-block" />
          Competitions & Hackathons
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {competitions.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px rgba(${c.glow}, 0.25)`,
              }}
              className="group relative bg-white dark:bg-dark-900 rounded-2xl p-6 border border-gray-100 dark:border-dark-700 shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color}`} />

              {/* Hover background wash */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(135deg, rgba(${c.glow},0.07), transparent)` }}
              />

              <div className="relative z-10">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1 leading-tight">{c.title}</h4>
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${c.color} text-white mb-2`}>
                  {c.result}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{c.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
        >
          <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full inline-block" />
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-4 bg-white dark:bg-dark-900 rounded-2xl p-5 border border-gray-100 dark:border-dark-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-11 h-11 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                <cert.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{cert.org}</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
