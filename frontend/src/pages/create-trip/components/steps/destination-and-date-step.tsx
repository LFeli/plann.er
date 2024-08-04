import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '@/components/button'

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  openGuestInput: () => void
  closeGuestInput: () => void
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  openGuestInput,
  closeGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestInputOpen}
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:opacity-50"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          disabled={isGuestInputOpen}
          className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:opacity-50"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      {!isGuestInputOpen ? (
        <Button variant={'primary'} onClick={openGuestInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      ) : (
        <Button variant={'secondary'} onClick={closeGuestInput}>
          Alterar Local/Data
          <Settings2 className="size-5" />
        </Button>
      )}
    </div>
  )
}
