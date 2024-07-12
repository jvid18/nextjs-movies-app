'use client'
import { Collection } from '@/modules/core/components/collection'
import { useFavoritesContext } from '@/modules/core/store/favorites-context'
import { Wrapper } from '@/modules/core/ui/wrapper'

export default function Page() {
  const { favorites } = useFavoritesContext()
  return (
    <Wrapper className='mt-5'>
      <h1 className='mb-5 text-3xl font-bold'>Favorites</h1>

      <Collection movies={favorites} />
      {favorites.length === 0 && (
        <div className='flex h-32 items-center justify-center text-lg text-gray-500'>
          No favorites yet
        </div>
      )}
    </Wrapper>
  )
}
