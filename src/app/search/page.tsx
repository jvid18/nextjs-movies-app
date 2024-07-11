import { Collection } from '@/modules/core/components/collection'
import { Pagination } from '@/modules/core/components/pagination'
import { movieRepository } from '@/modules/core/services/movie-repository'
import { Wrapper } from '@/modules/core/ui/wrapper'
import { SearchForm } from '@/modules/search/components/search-form'

interface Props {
  searchParams: Partial<{ page: string; query: string }>
}
export default async function SearchPage({ searchParams }: Props) {
  const { page = '1', query = '' } = searchParams

  const result =
    query.length > 0 ? await movieRepository.getByQuery(query, { page }) : null

  return (
    <Wrapper>
      <section className='my-5 flex flex-col items-center gap-5'>
        <h1 className='text-4xl font-bold'>Search Movies</h1>
        <p>
          {(90_000).toLocaleString()}+ movies available to search from the TMDb
          API.
        </p>
        <div role='search'>
          <SearchForm />
        </div>
      </section>

      {result && (
        <section className='mt-10'>
          <h2 className='mb-3 text-2xl font-semibold'>
            Found {result.total_results} results for{' '}
            <span className='italic'>{searchParams.query}</span>.
          </h2>

          <Collection movies={result.results} />

          <Pagination
            className='my-5'
            currentPage={result.page}
            totalPages={result.total_pages}
          />
        </section>
      )}
    </Wrapper>
  )
}
