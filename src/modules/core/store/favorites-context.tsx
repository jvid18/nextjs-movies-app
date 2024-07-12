'use client'

import { MovieCollection, MovieId } from '@/modules/core/types'
import { createContext, use, useState } from 'react'
interface FavoritesContextValue {
  add(movie: MovieCollection): void
  favorites: MovieCollection[]
  isFavorite(id: MovieId): boolean
  remove(id: MovieId): void
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<MovieCollection[]>(() => {
    try {
      const favorites = localStorage.getItem('favorites')
      return favorites != null ? JSON.parse(favorites) : []
    } catch (error) {
      return []
    }
  })

  const add = (movie: MovieCollection) => {
    const newFavorites = [...favorites, movie]
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const isFavorite = (id: MovieId) => favorites.some((movie) => movie.id === id)

  const remove = (id: MovieId) => {
    const newFavorites = favorites.filter((movie) => movie.id !== id)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return (
    <FavoritesContext.Provider value={{ add, favorites, isFavorite, remove }}>
      {children}
    </FavoritesContext.Provider>
  )
}

function useFavoritesContext() {
  const context = use(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }

  return context
}

export { FavoritesContext, FavoritesProvider, useFavoritesContext }
