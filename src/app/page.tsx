import { Collection } from '@/modules/core/components/collection'
import { Pagination } from '@/modules/core/components/pagination'
import { movieRepository } from '@/modules/core/services/movie-repository'
import { Wrapper } from '@/modules/core/ui/wrapper'

interface Props {
  searchParams: Partial<{ page: string }>
}
export default async function Home({ searchParams }: Props) {
  const data = await movieRepository.getPopular({
    page: searchParams.page ?? '1',
  })

  return (
    <Wrapper className='mt-5'>
      <h1 className='mb-5 text-3xl font-bold'>Popular movies</h1>
      <Collection movies={data.results} />
      <Pagination
        aria-label='Pagination'
        className='my-5'
        currentPage={data.page}
        totalPages={data.total_pages}
      />
    </Wrapper>
  )
}
