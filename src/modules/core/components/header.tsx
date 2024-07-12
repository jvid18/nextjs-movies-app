import { DropdownNav } from '@/modules/core/components/dropdown-nav'
import { Wrapper } from '@/modules/core/ui/wrapper'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/favorites', label: 'Favorites' },
]

export function Header() {
  return (
    <header className='header sticky top-0 z-10 bg-primary py-5 text-primary-foreground shadow'>
      <Wrapper className='relative flex items-center justify-between'>
        <Link className='text-2xl font-bold' href='/'>
          Movie App
        </Link>

        <DropdownNav links={links} />

        <div className='hidden md:block'>
          <nav>
            <ul className='flex gap-3'>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}
