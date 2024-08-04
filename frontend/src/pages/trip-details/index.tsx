import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog,
} from 'lucide-react'

export function TripDetailsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      {/* Header */}
      <header className="shadow-shape flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4">
        <span className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-base text-zinc-100">Florianópolis, Brasil</span>
        </span>

        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-base text-zinc-100">17 a 23 de Agosto</span>
          </span>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
            Alterar Local/Data
            <Settings2 className="size-5" />
          </button>
        </div>
      </header>

      <main className="flex gap-16">
        <div className="flex-1 space-y-6 px-4">
          {/* Header of this div */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
              Cadastrar atividade
              <Plus className="size-5 text-lime-950" />
            </button>
          </div>

          {/* Left content for this div */}
          <div className="space-y-8">
            <article className="space-y-2.5">
              <span className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </span>

              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </article>

            <article className="space-y-2.5">
              <span className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 18
                </span>
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
        </div>

        {/* Right content for this div */}
        <div className="w-80 space-y-6">
          {/* Important links */}
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

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
              Cadastrar novo link
              <Plus className="size-5" />
            </button>
          </section>

          <div className="h-px w-full bg-zinc-800" />

          {/* Guests */}
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

              <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
                Gerenciar convidados
                <UserCog className="size-5" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
