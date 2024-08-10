import { format } from 'date-fns'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/button'
import { api } from '@/lib/axios'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data))
  }, [tripId])

  const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL")
        .concat(' até ')
        .concat(format(trip.ends_at, "d' de 'LLL"))
    : null

  return (
    <header className="shadow-shape flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4">
      <span className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-base text-zinc-100">{trip?.destination}</span>
      </span>

      <div className="flex items-center gap-5">
        <span className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-base text-zinc-100">{displayedDate}</span>
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
