'use client'

import { cn } from '@/modules/core/lib/utils'
import { Button } from '@/modules/core/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export interface PaginationProps extends React.ComponentPropsWithoutRef<'div'> {
  currentPage: number
  totalPages: number
}

export function Pagination({
  className,
  currentPage,
  totalPages,
  ...rest
}: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const isFirstPage = currentPage === 1 || totalPages === 0
  const isLastPage = currentPage === totalPages || totalPages === 0

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', String(page))
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div
      className={cn('flex items-center justify-center gap-2', className)}
      {...rest}
    >
      <Button
        disabled={isFirstPage}
        onClick={() => handlePageChange(currentPage - 1)}
        size='icon'
        variant='link'
      >
        <span className='sr-only'>Previous</span>
        <svg
          color='currentColor'
          viewBox='0 0 320 512'
          width='0.7em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
        </svg>
      </Button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Button
        disabled={isLastPage}
        onClick={() => handlePageChange(currentPage + 1)}
        size='icon'
        variant='link'
      >
        <span className='sr-only'>Next</span>
        <svg
          color='currentColor'
          viewBox='0 0 320 512'
          width='0.7em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
        </svg>
      </Button>
    </div>
  )
}
