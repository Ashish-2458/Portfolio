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
  title: 'Ashish Maurya - Full Stack Developer & AI Enthusiast',
  description: 'Portfolio of Ashish Maurya - Passionate Full Stack Developer specializing in AI/ML, React, Next.js, Python, and modern web technologies. Experienced in building scalable applications and innovative solutions.',
  keywords: 'Ashish Maurya, Full Stack Developer, AI, Machine Learning, React, Next.js, Python, Web Development, Portfolio',
  authors: [{ name: 'Ashish Maurya' }],
  creator: 'Ashish Maurya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashishmaurya.dev',
    title: 'Ashish Maurya - Full Stack Developer & AI Enthusiast',
    description: 'Portfolio of Ashish Maurya - Passionate Full Stack Developer specializing in AI/ML and modern web technologies.',
    siteName: 'Ashish Maurya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish Maurya - Full Stack Developer & AI Enthusiast',
    description: 'Portfolio of Ashish Maurya - Passionate Full Stack Developer specializing in AI/ML and modern web technologies.',
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