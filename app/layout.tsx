import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import dynamic from 'next/dynamic'

const InteractiveCursor = dynamic(() => import('@/components/InteractiveCursor').then(m => ({ default: m.InteractiveCursor })), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress').then(m => ({ default: m.ScrollProgress })), { ssr: false })
const Navigation = dynamic(() => import('@/components/Navigation').then(m => ({ default: m.Navigation })), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashish Maurya – AI & ML Engineer | Full Stack Developer',
  description: 'Portfolio of Ashishkumar Maurya – B.E. graduate in AI & Data Science from VESIT Mumbai. Specializes in computer vision, NLP, LLMs, and full-stack web development. Open to MS programs and international opportunities.',
  keywords: 'Ashish Maurya, AI Engineer, Machine Learning, Computer Vision, NLP, LLMs, Full Stack Developer, React, Next.js, Python, YOLO, Deep Learning, VESIT Mumbai',
  authors: [{ name: 'Ashishkumar Maurya' }],
  creator: 'Ashishkumar Maurya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishmaurya.vercel.app',
    title: 'Ashish Maurya – AI & ML Engineer | Full Stack Developer',
    description: 'B.E. graduate in AI & Data Science. Building intelligent systems with computer vision, NLP, and full-stack development.',
    siteName: 'Ashish Maurya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Maurya – AI & ML Engineer | Full Stack Developer',
    description: 'B.E. graduate in AI & Data Science. Building intelligent systems with computer vision, NLP, and full-stack development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch(e) {}
            `,
          }}
        />
        <ThemeProvider>
          <InteractiveCursor />
          <ScrollProgress />
          <Navigation />
          <main className="relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}