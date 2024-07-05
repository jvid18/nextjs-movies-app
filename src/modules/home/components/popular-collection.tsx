import { Collection } from '@/modules/core/components/collection'
import { Pagination } from '@/modules/core/components/pagination'
import { movieRepository } from '@/modules/core/services/movie-repository'

interface PopularCollectionProps {
  page: number
}
export async function PopularCollection({ page }: PopularCollectionProps) {
  const data = await movieRepository.getPopular({ page })

  return (
    <>
      <h1>Popular movies</h1>
      <Collection movies={data.results} />
      <Pagination
        aria-label='Pagination'
        currentPage={data.page}
        totalPages={data.total_pages}
      />
    </>
  )
}
