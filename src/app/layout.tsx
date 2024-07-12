import type { Metadata } from 'next'

import { Header } from '@/modules/core/components/header'
import { Providers } from '@/modules/core/components/providers'

import './globals.css'

export const metadata: Metadata = {
  description:
    'Welcome to Movie App. Your go-to place to discover the latest popular movies. Explore movie details, watch trailers, and save your favorites',
  keywords: [
    'movies',
    'popular movies',
    'movie details',
    'movie trailers',
    'movie favorites',
  ],
  openGraph: {
    description:
      'Welcome to Movie App. Your go-to place to discover the latest popular movies. Explore movie details, watch trailers, and save your favorites',
    locale: 'en_US',
    siteName: 'Movie App',
    title: 'Movie App - Discover popular movies',
    type: 'website',
  },
  title: {
    default: 'Movie App',
    template: '%s | Movie App',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
