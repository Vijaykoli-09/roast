import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Caveat, DM_Sans, Fraunces } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Café Rowan is a boutique neighbourhood coffee house: slow mornings, freshly baked pastries, and coffee worth taking your time for. A portfolio concept.',
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      'Slow mornings, freshly baked moments, and coffee worth taking your time for.',
    type: 'website',
    images: [{ url: '/images/hero-cappuccino.png', width: 768, height: 1376 }],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#f4ebdd',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} bg-background`}
    >
      <body className="grain font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
