import { api } from '@/modules/core/lib/api'
import {
  Keywords,
  type MovieDetails,
  type MovieId,
  type MovieVideo,
  type PaginatedData,
  type PopularMovie,
  type Query,
} from '@/modules/core/types'

export const movieRepository = {
  getById: (id: MovieId) => api<MovieDetails>(`/movie/${id}`),
  getKeywords: (id: MovieId) => api<Keywords>(`/movie/${id}/keywords`),
  getPopular: (query?: Query) =>
    api<PaginatedData<PopularMovie>>('/movie/popular', { query }),
  getVideos: (id: MovieId) =>
    api<PaginatedData<MovieVideo>>(`/movie/${id}/videos`),
}
