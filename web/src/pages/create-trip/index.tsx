import { FormEvent, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useNavigate } from 'react-router-dom'

import { api } from '@/lib/axios'

import { ConfirmTripModal } from './components/confirm-trip-modal'
import { InviteGuestsModal } from './components/invite-guests-modal'
import { DestinationAndDateStep } from './components/steps/destination-and-date-step'
import { InviteGuestsStep } from './components/steps/invite-guests-step'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'diego@rocketseat.com.br',
    'johnDoe@email.com',
    'example@email.com',
  ])

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()

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

  function openConfirmModal() {
    setIsConfirmModalOpen(true)
  }

  function closeConfirmModal() {
    setIsConfirmModalOpen(false)
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

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
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
          <DestinationAndDateStep
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
            closeGuestInput={closeGuestInput}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openGuestModal={openGuestModal}
              openConfirmModal={openConfirmModal}
            />
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
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          closeGuestModal={closeGuestModal}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          closeConfirmModal={closeConfirmModal}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}
