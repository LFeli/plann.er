import { Link2, Plus } from 'lucide-react'

import { Button } from '@/components/button'

export function ImportantLinks() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        <article className="flex items-center justify-between gap-4">
          <span className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block truncate text-sm text-zinc-400 transition-colors hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </span>

          <Link2 className="size-5 shrink-0 text-zinc-400" />
        </article>

        <article className="flex items-center justify-between gap-4">
          <span className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Regras da casa
            </span>
            <a
              href="#"
              className="block truncate text-sm text-zinc-400 transition-colors hover:text-zinc-200"
            >
              https://www.notion.com/pages/1047000112354648336?
            </a>
          </span>

          <Link2 className="size-5 shrink-0 text-zinc-400" />
        </article>
      </div>

      <Button variant={'secondary'}>
        Cadastrar novo link
        <Plus className="size-5" />
      </Button>
    </section>
  )
}
