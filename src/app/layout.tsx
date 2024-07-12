import type { Metadata } from 'next'

import { Wrapper } from '@/modules/core/ui/wrapper'
import Link from 'next/link'

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
        <header className='sticky top-0 z-10 bg-primary py-5 text-primary-foreground shadow'>
          <Wrapper className='flex items-center justify-between'>
            <Link className='text-2xl font-bold' href='/'>
              Movie App
            </Link>

            <nav>
              <ul className='flex gap-3'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/search'>Search</Link>
                </li>
                <li>
                  <Link href='/favorites'>Favorites</Link>
                </li>
              </ul>
            </nav>
          </Wrapper>
        </header>
        {children}
      </body>
    </html>
  )
}
