'use client'

import { cn } from '@/modules/core/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  links: { href: string; label: string }[]
}
export function DropdownNav({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <label className='md:hidden'>
        <span className='sr-only'>Menu</span>
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 6h16M4 12h16m-7 6h7'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          ></path>
        </svg>
        <input
          checked={isOpen}
          className='hidden'
          onClick={toggle}
          type='checkbox'
        />
      </label>

      <nav
        className={cn(
          'absolute left-0 right-0 top-full bg-primary py-3',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <ul className='flex flex-col gap-3'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link className='block px-3 py-1.5' href={href} onClick={toggle}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
