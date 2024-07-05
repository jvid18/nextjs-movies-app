import { currencyFormat } from '@/modules/core/lib/format'
import { getIdAndNameFromParam, resolveMoviePath } from '@/modules/core/lib/url'
import { movieRepository } from '@/modules/core/services/movie-repository'
import { Wrapper } from '@/modules/core/ui/wrapper'
import { Hero } from '@/modules/movie-details/components/hero'
import { Stats } from '@/modules/movie-details/components/stats'

interface Props {
  params: { idparam: string }
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
    <Wrapper className='mt-5'>
      <Hero
        genres={movie.genres.map((genre) => genre.name)}
        image={resolveMoviePath(movie.backdrop_path)}
        overview={movie.overview}
        releaseDate={
          movie.release_date !== '' ? new Date(movie.release_date) : undefined
        }
        title={movie.title}
        videoId={trailer?.key}
      />

      <Stats
        stats={[
          { name: 'Status', value: movie.status },
          { name: 'Original language', value: movie.original_language },
          { name: 'Budget', value: currencyFormat(movie.budget) },
          { name: 'Revenue', value: currencyFormat(movie.revenue) },
        ]}
      />
    </Wrapper>
  )
}
