import { Clock, Tag, User, X } from 'lucide-react'

import { Button } from '@/components/button'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>

            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <article className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <Tag className="size-5 text-zinc-400" />

            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
            />
          </article>

          <div className="flex items-center gap-2">
            <article className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
              <User className="size-5 text-zinc-400" />

              <input
                type="date"
                name="occurs_at"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
              />
            </article>

            <article className="flex h-14 w-36 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
              <Clock className="size-5 shrink-0 text-zinc-400" />

              <input
                type="time"
                name="time"
                placeholder="Horário"
                className="bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
              />
            </article>
          </div>

          <Button type="submit" size={'full'}>
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
