import { User, X } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '@/components/button'

interface ConfirmTripModalProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  closeConfirmModal: () => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({
  createTrip,
  closeConfirmModal,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>

            <button type="button" onClick={closeConfirmModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <User className="size-5 text-zinc-400" />

            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={(event) => setOwnerName(event.target.value)}
              className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <User className="size-5 text-zinc-400" />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              onChange={(event) => setOwnerEmail(event.target.value)}
              className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
            />
          </div>

          <Button type="submit" variant={'primary'} size="full">
            Confirmar criação de viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
