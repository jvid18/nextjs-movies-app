'use client'

import { Button } from '@/modules/core/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/modules/core/ui/dialog'
import '@justinribeiro/lite-youtube'

interface TrailerButtonProps {
  videoId: string
}
export function TrailerButton({ videoId }: TrailerButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Play trailer</Button>
      </DialogTrigger>
      <DialogContent className='border-0 p-0 [&_button]:!-right-5 [&_button]:!-top-5 [&_button]:text-white'>
        <lite-youtube videoid={videoId}></lite-youtube>
      </DialogContent>
    </Dialog>
  )
}
