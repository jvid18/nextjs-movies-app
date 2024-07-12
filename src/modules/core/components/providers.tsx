import { FavoritesProvider } from '@/modules/core/store/favorites-context'

interface Props {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  return <FavoritesProvider>{children}</FavoritesProvider>
}
