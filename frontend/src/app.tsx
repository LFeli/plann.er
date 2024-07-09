import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'diego@rocketseat.com.br',
    'johnDoe@email.com',
    'example@email.com',
  ])

  function openGuestInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false)
  }

  function openGuestModal() {
    setIsGuestModalOpen(true)
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(email: string) {
    const newEmailList = emailsToInvite.filter((invited) => invited !== email)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />

          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
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
              <button
                onClick={openGuestInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            ) : (
              <button
                onClick={closeGuestInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700"
              >
                Alterar Local/Data
                <Settings2 className="size-5" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <button
                type="button"
                onClick={openGuestModal}
                className="flex flex-1 items-center gap-2"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="flex-1 text-left text-lg text-zinc-400">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="h-6 w-px bg-zinc-800" />

              <button
                onClick={openGuestInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestModalOpen && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {emailsToInvite.map((email) => (
                <div
                  className="rounded-md bg-zinc-800 px-2.5 py-1.5"
                  key={email}
                >
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
              <div className="flex items-center gap-2 px-2">
                <AtSign className="size-5 text-zinc-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
              >
                Convidar
                <Plus className="size-5 text-lime-950" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
