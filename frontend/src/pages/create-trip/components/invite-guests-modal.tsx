import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '@/components/button'

interface InviteGuestsModalProps {
  closeGuestModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({
  closeGuestModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>

            <button type="button" onClick={closeGuestModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {emailsToInvite.map((email) => (
            <div className="rounded-md bg-zinc-800 px-2.5 py-1.5" key={email}>
              <span className="flex items-center gap-2.5 text-zinc-300">
                {email}
                <button
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </span>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex flex-1 items-center gap-2 px-2">
            <AtSign className="size-5 text-zinc-400" />

            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
            />
          </div>

          <Button type="submit" variant="primary">
            Convidar
            <Plus className="size-5 text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  )
}
