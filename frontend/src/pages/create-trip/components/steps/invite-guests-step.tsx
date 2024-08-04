import { ArrowRight, UserRoundPlus } from 'lucide-react'

interface InviteGuestsStepsProps {
  emailsToInvite: string[]
  openGuestModal: () => void
  openConfirmModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmModal,
  openGuestModal,
}: InviteGuestsStepsProps) {
  return (
    <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex flex-1 items-center gap-2"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-left text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-left text-lg text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      <button
        onClick={openConfirmModal}
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  )
}
