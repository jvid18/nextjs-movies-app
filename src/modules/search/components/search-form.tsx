'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const defaultQuery = searchParams.get('query') ?? ''

  const handleAction = async (formData: FormData) => {
    const query = formData.get('query') as string

    const newSearchParams = new URLSearchParams({ query })

    router.push(`${pathname}?${newSearchParams.toString()}`)
  }

  return (
    <form action={handleAction}>
      <label className='sr-only' htmlFor='search'>
        Search
      </label>
      <input
        className='block w-full rounded-xl border px-5 py-3'
        defaultValue={defaultQuery}
        id='search'
        name='query'
        placeholder='Search...'
        type='search'
      />
    </form>
  )
}
