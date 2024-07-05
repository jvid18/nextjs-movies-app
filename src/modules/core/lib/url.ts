import { MovieId, MovieTitle } from '@/modules/core/types'

export function getParamFromIdAndName(id: MovieId, name: MovieTitle) {
  const parsedTitle = name
    .replace(/ /g, '-')
    .replace(/[^\w-]/g, '')
    .toLocaleLowerCase()

  return `${id}-${parsedTitle}`
}

export function getIdAndNameFromParam(param: string) {
  const match = param.match(/(\d+)-(.+)/)
  if (match == null || match.length < 2) return null

  const [, id, name] = match

  return { id: Number(id), name }
}

export function resolveMoviePath(
  path: string,
  opts?: Partial<{ width: number | string }>
) {
  const width = typeof opts?.width === 'number' ? `w${opts.width}` : 'original'
  return `https://image.tmdb.org/t/p/${width}${path}`
}
