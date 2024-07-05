import { CollectionItem } from '@/modules/core/components/collection-item'
import { getParamFromIdAndName, resolveMoviePath } from '@/modules/core/lib/url'
import { MovieCollection } from '@/modules/core/types'

interface CollectionProps {
  movies: MovieCollection[]
}

export function Collection({ movies }: CollectionProps) {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
      {movies.map((movie) => {
        const idParam = getParamFromIdAndName(movie.id, movie.title)

        return (
          <CollectionItem
            alt={`${movie.title} poster`}
            href={`/movie/${idParam}`}
            image={resolveMoviePath(movie.poster_path, { width: 300 })}
            key={movie.id}
            releseDate={
              movie.release_date !== ''
                ? new Date(movie.release_date)
                : undefined
            }
            title={movie.title}
          />
        )
      })}
    </div>
  )
}
