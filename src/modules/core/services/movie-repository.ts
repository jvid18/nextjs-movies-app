import type {
  MovieDetails,
  PaginatedData,
  PopularMovie,
} from '@/modules/core/types'

import { api } from '@/modules/core/lib/api'

export const movieRepository = {
  getById: (id: string) => api<MovieDetails>(`/movie/${id}`),
  getPopular: () => api<PaginatedData<PopularMovie>>('/movie/popular'),
}
