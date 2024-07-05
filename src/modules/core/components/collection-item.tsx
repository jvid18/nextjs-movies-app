import { Card, CardHeader, CardTitle } from '@/modules/core/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export interface CollectionItemProps {
  alt: string
  href: string
  image: string
  releseDate?: Date
  title: string
}

export function CollectionItem({
  alt,
  href,
  image,
  releseDate,
  title,
}: CollectionItemProps) {
  return (
    <Card className='overflow-clip' role='article'>
      <figure className='relative aspect-[2/3]'>
        <Link href={href}>
          <Image alt={alt} fill src={image} />
        </Link>
      </figure>
      <CardHeader>
        <CardTitle>
          <Link href={href}>{title}</Link>
        </CardTitle>
        <p>
          <span className='sr-only'>Relese date</span>
          {releseDate && (
            <time dateTime={releseDate.toISOString()}>
              {releseDate.toDateString()}
            </time>
          )}
        </p>
      </CardHeader>
    </Card>
  )
}
