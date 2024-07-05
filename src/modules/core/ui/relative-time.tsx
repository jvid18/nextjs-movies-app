export interface RelativeTimeProps {
  date: Date
}
export function RelativeTime({ date }: RelativeTimeProps) {
  return <time dateTime={date.toISOString()}>{date.toDateString()}</time>
}
