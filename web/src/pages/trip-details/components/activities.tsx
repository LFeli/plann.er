import { CircleCheck } from 'lucide-react'

export function Activities() {
  return (
    <div className="space-y-8">
      <article className="space-y-2.5">
        <span className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-zinc-300">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </span>

        <p className="text-sm text-zinc-500">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </article>

      <article className="space-y-2.5">
        <span className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </span>

        <div className="space-y-2.5">
          <article className="shadow-shape flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>

            <span className="ml-auto text-sm text-zinc-400">08:00</span>
          </article>

          <article className="shadow-shape flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Almoço</span>

            <span className="ml-auto text-sm text-zinc-400">12:00</span>
          </article>
        </div>
      </article>
    </div>
  )
}
