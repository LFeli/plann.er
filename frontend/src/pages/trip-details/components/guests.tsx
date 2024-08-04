import { CircleDashed, UserCog } from 'lucide-react'

import { Button } from '@/components/button'

export function Guests() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        <article className="flex items-center justify-between gap-4">
          <span className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block truncate text-xs text-zinc-400 transition-colors">
              jessica.white44@yahoo.com
            </span>
          </span>

          <CircleDashed className="size-5 shrink-0 text-zinc-400" />
        </article>

        <article className="flex items-center justify-between gap-4">
          <span className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Rodney White
            </span>
            <span className="block truncate text-xs text-zinc-400 transition-colors">
              ford_prosacco@hotmail.com
            </span>
          </span>

          <CircleDashed className="size-5 shrink-0 text-zinc-400" />
        </article>

        <Button variant={'secondary'}>
          Gerenciar convidados
          <UserCog className="size-5" />
        </Button>
      </div>
    </section>
  )
}
