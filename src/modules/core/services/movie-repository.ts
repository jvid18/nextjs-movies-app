import type {
  MovieDetails,
  MovieId,
  PaginatedData,
  PopularMovie,
  Query,
} from '@/modules/core/types'

import { api } from '@/modules/core/lib/api'

export const movieRepository = {
  getById: (id: MovieId) => api<MovieDetails>(`/movie/${id}`),
  getPopular: (query?: Query) =>
    api<PaginatedData<PopularMovie>>('/movie/popular', { query }),
}
