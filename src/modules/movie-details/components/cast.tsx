import { resolveMoviePath } from '@/modules/core/lib/url'
import { movieRepository } from '@/modules/core/services/movie-repository'
import { MovieId } from '@/modules/core/types'
import Image from 'next/image'

interface ActorsProps {
  id: MovieId
}
export async function Cast({ id }: ActorsProps) {
  const { cast } = await movieRepository.getCredits(id)

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3'>
      {cast.map((actor) => (
        <div key={actor.id}>
          <figure>
            <Image
              alt={`${actor.name} profile picture`}
              className='mx-auto size-24 rounded-full object-cover object-center shadow'
              height={80}
              src={resolveMoviePath(actor.profile_path, { width: 200 })}
              width={80}
            />
          </figure>
          <p className='text-center'>{actor.name}</p>
        </div>
      ))}
    </div>
  )
}
