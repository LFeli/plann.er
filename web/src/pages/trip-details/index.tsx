import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/button'

import { Activities } from './components/activities'
import { CreateActivityModal } from './components/create-activity-modal'
import { DestinationAndDateHeader } from './components/destination-and-date-header'
import { Guests } from './components/guests'
import { ImportantLinks } from './components/important-links'

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader />

      <main className="flex gap-16">
        <div className="flex-1 space-y-6 px-4">
          {/* Header of this div */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <Button onClick={openCreateActivityModal} variant={'primary'}>
              Cadastrar atividade
              <Plus className="size-5 text-lime-950" />
            </Button>
          </div>

          {/* Left content for this div */}
          <Activities />
        </div>

        {/* Right content for this div */}
        <aside className="w-80 space-y-6">
          <ImportantLinks />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </aside>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}
