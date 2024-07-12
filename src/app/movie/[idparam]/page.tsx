import { currencyFormat } from '@/modules/core/lib/format'
import { getIdAndNameFromParam, resolveMoviePath } from '@/modules/core/lib/url'
import { movieRepository } from '@/modules/core/services/movie-repository'
import { Wrapper } from '@/modules/core/ui/wrapper'
import { Cast } from '@/modules/movie-details/components/cast'
import { Hero } from '@/modules/movie-details/components/hero'
import { Stats } from '@/modules/movie-details/components/stats'
import { Metadata } from 'next'
import { Suspense } from 'react'

interface Props {
  params: { idparam: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const idAndName = getIdAndNameFromParam(params.idparam)
  if (idAndName == null) return {}

  const { id } = idAndName
  const [movie, keywords] = await Promise.all([
    movieRepository.getById(id),
    movieRepository.getKeywords(id),
  ])

  return {
    description: movie.overview,
    keywords: keywords.keywords.map((keyword) => keyword.name),
    openGraph: {
      description: movie.overview,
      images: [
        {
          alt: movie.title,
          height: 1080,
          url: resolveMoviePath(movie.backdrop_path),
          width: 1920,
        },
        {
          alt: movie.title,
          height: 630,
          url: resolveMoviePath(movie.backdrop_path),
          width: 1200,
        },
        {
          alt: movie.title,
          height: 300,
          url: resolveMoviePath(movie.backdrop_path),
          width: 300,
        },
      ],
      locale: 'en_US',
      siteName: 'Movie App',
      title: `${movie.title} - Movie App`,
      type: 'website',
    },
    title: movie.title,
  }
}

export default async function Details({ params }: Props) {
  const idAndName = getIdAndNameFromParam(params.idparam)
  if (idAndName == null) return null

  const { id } = idAndName

  const [movie, videos] = await Promise.all([
    movieRepository.getById(id),
    movieRepository.getVideos(id),
  ])

  const trailer = videos.results.find((video) => video.type === 'Trailer')

  return (
    <Wrapper className='mt-5 space-y-5'>
      <Hero
        genres={movie.genres.map((genre) => genre.name)}
        image={resolveMoviePath(movie.backdrop_path)}
        overview={movie.overview}
        releaseDate={
          movie.release_date !== '' ? new Date(movie.release_date) : undefined
        }
        title={movie.title}
        videoId={trailer?.key}
        voteAverage={movie.vote_average}
      />

      <section>
        <h2 className='mb-2 text-2xl font-semibold'>Stats</h2>
        <Stats
          stats={[
            { name: 'Status', value: movie.status },
            { name: 'Original language', value: movie.original_language },
            { name: 'Budget', value: currencyFormat(movie.budget) },
            { name: 'Revenue', value: currencyFormat(movie.revenue) },
          ]}
        />
      </section>

      <section>
        <h2 className='mb-2 text-2xl font-semibold'>Cast</h2>

        <Suspense fallback={'Loading...'}>
          <Cast id={id} />
        </Suspense>
      </section>
    </Wrapper>
  )
}
