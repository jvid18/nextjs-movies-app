import { api } from '@/modules/core/lib/api'
import {
  Keywords,
  MovieCredit,
  type MovieDetails,
  type MovieId,
  type MovieVideo,
  type PaginatedData,
  type Query,
  type SimpleMovie,
} from '@/modules/core/types'

export const movieRepository = {
  getById: (id: MovieId) => api<MovieDetails>(`/movie/${id}`),
  getByQuery: (query: string, queryParams?: Query) =>
    api<PaginatedData<SimpleMovie>>(`/search/movie`, {
      query: { query, ...queryParams },
    }),
  getCredits: (id: MovieId) => api<MovieCredit>(`/movie/${id}/credits`),
  getKeywords: (id: MovieId) => api<Keywords>(`/movie/${id}/keywords`),
  getPopular: (query?: Query) =>
    api<PaginatedData<SimpleMovie>>('/movie/popular', { query }),
  getVideos: (id: MovieId) =>
    api<PaginatedData<MovieVideo>>(`/movie/${id}/videos`),
}
