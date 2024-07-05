import { HTTPError } from '@/modules/core/errors/http'
import { Query } from '@/modules/core/types'

interface RequestInitWithQuery extends RequestInit {
  query?: Query
}

function createInstance() {
  const baseURL = 'https://api.themoviedb.org/3'
  const apiKey = process.env.TMDB_API_KEY ?? ''

  const commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  return async <T = unknown>(
    url: URL | string,
    opts?: RequestInitWithQuery
  ) => {
    const fetchOpts = {
      ...opts,
      headers: {
        ...commonHeaders,
        ...opts?.headers,
      },
    }

    const query = new URLSearchParams({
      api_key: apiKey,
      ...opts?.query,
    })

    const fullURL = new URL(`${baseURL}${url}`)
    fullURL.search = query.toString() ?? ''

    const response = await fetch(fullURL, fetchOpts)
    if (!response.ok) {
      throw new HTTPError(response.statusText, response.status)
    }

    return response.json() as T
  }
}

export const api = createInstance()
