import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/button'
import { api } from '@/lib/axios'

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data))
  }, [tripId])

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <article
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <span className="space-y-1.5">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block truncate text-xs text-zinc-400 transition-colors">
                  {participant.email}
                </span>
              </span>

              {participant.is_confirmed ? (
                <CircleCheck className="size-5 shrink-0 text-green-400" />
              ) : (
                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
              )}
            </article>
          )
        })}

        <Button variant={'secondary'}>
          Gerenciar convidados
          <UserCog className="size-5" />
        </Button>
      </div>
    </section>
  )
}
