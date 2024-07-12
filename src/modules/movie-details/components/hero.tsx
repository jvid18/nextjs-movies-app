import { AverageRating } from '@/modules/core/components/average-rating'
import { resolveMoviePath } from '@/modules/core/lib/url'
import { MovieId } from '@/modules/core/types'
import { RelativeTime } from '@/modules/core/ui/relative-time'
import { FavoriteButton } from '@/modules/movie-details/components/favorite-button'
import { TrailerButton } from '@/modules/movie-details/components/trailer-button'
import Image from 'next/image'

interface HeroProps {
  backgrondPath: string
  genres: string[]
  id: MovieId
  overview: string
  posterPath: string
  releaseDate?: Date
  title: string
  videoId?: string
  voteAverage: number
}
export function Hero({
  backgrondPath,
  genres,
  id,
  overview,
  posterPath,
  releaseDate,
  title,
  videoId,
  voteAverage,
}: HeroProps) {
  return (
    <section className='relative h-[40rem] overflow-clip rounded-md'>
      <picture>
        <Image
          alt={`${title} backdrop`}
          className='object-cover object-top'
          fill
          src={resolveMoviePath(backgrondPath)}
        />
      </picture>

      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black' />
      <header className='absolute bottom-0 p-10 text-white'>
        <div className='flex flex-col md:flex-row md:items-center md:gap-5'>
          <h1 className='text-4xl font-bold'>{title}</h1>

          <div className='flex gap-5'>
            {videoId && <TrailerButton videoId={videoId} />}

            <FavoriteButton
              movie={{
                id,
                poster_path: posterPath,
                release_date: releaseDate?.toISOString() ?? '',
                title,
              }}
            />
          </div>
        </div>

        <div className='flex gap-2'>
          <p>
            <strong className='sr-only'>Release date:</strong>
            {releaseDate && <RelativeTime date={releaseDate} />}
          </p>
          <span aria-hidden='true'>|</span>
          <p>
            <strong className='sr-only'>Genders: </strong>
            {new Intl.ListFormat().format(genres)}
          </p>
        </div>

        <AverageRating className='mt-3 text-lg' value={voteAverage} />

        <section className='mt-5'>
          <h2 className='mt-3 text-xl font-semibold'>Overview</h2>
          <p className='mt-2'>{overview}</p>
        </section>
      </header>
    </section>
  )
}
