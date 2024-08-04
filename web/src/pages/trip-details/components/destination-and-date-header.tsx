import { Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '@/components/button'

export function DestinationAndDateHeader() {
  return (
    <header className="shadow-shape flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4">
      <span className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-base text-zinc-100">Florianópolis, Brasil</span>
      </span>

      <div className="flex items-center gap-5">
        <span className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-base text-zinc-100">17 a 23 de Agosto</span>
        </span>

        <div className="h-6 w-px bg-zinc-800" />

        <Button variant={'secondary'}>
          Alterar Local/Data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </header>
  )
}
