import { Button } from '@/modules/core/ui/button'
import { RelativeTime } from '@/modules/core/ui/relative-time'
import { TrailerButton } from '@/modules/movie-details/components/trailer-button'
import Image from 'next/image'

interface HeroProps {
  genres: string[]
  image: string
  overview: string
  releaseDate?: Date
  title: string
  videoId?: string
}
export function Hero({
  genres,
  image,
  overview,
  releaseDate,
  title,
  videoId: videoId,
}: HeroProps) {
  const bookmarked = false // TODO: Implement bookmarked state with local storage

  return (
    <div className='relative h-[30rem] overflow-clip rounded-md'>
      <picture>
        <Image
          alt={`${title} backdrop`}
          className='object-cover object-top'
          fill
          src={image}
        />
      </picture>

      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black' />
      <header className='absolute bottom-0 p-10 text-white'>
        <div className='flex items-center gap-5'>
          <h1 className='text-4xl font-bold'>{title}</h1>
          {videoId && <TrailerButton videoId={videoId} />}
          <Button
            className='rounded-full border border-white text-white'
            size='icon'
            variant='ghost'
          >
            <span className='sr-only'>Bookmark</span>
            {bookmarked ? (
              <svg
                viewBox='0 0 384 512'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'
                  fill='currentColor'
                />
              </svg>
            ) : (
              <svg
                viewBox='0 0 384 512'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z'
                  fill='currentColor'
                />
              </svg>
            )}
          </Button>
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
        <section className='mt-5'>
          <h2 className='mt-3 text-xl font-semibold'>Overview</h2>
          <p className='mt-2'>{overview}</p>
        </section>
      </header>
    </div>
  )
}
