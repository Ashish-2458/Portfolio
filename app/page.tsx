import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Achievements } from '@/components/Achievements'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { TechShowcase } from '@/components/TechShowcase'
import dynamic from 'next/dynamic'

const FloatingActionButton = dynamic(
  () => import('@/components/FloatingActionButton').then(m => ({ default: m.FloatingActionButton })),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <TechShowcase />
      <Achievements />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
