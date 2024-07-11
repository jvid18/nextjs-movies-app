import { cn } from '@/modules/core/lib/utils'

export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
export function Wrapper({ children, className, ...rest }: Props) {
  return (
    <div className={cn('mx-auto max-w-7xl px-3', className)} {...rest}>
      {children}
    </div>
  )
}
