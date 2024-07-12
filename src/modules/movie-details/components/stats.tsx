import { Card, CardContent } from '@/modules/core/ui/card'

interface StatsProps {
  stats: Array<{
    name: string
    value: number | string
  }>
}
export function Stats({ stats }: StatsProps) {
  return (
    <dl className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
      {stats.map(({ name, value }) => (
        <Card key={name}>
          <CardContent className='pt-6'>
            <dt className='font-semibold'>{name}</dt>
            <dd>{value}</dd>
          </CardContent>
        </Card>
      ))}
    </dl>
  )
}
