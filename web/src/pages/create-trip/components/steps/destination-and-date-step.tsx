import 'react-day-picker/style.css'

import { format } from 'date-fns'
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

import { Button } from '@/components/button'

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  openGuestInput: () => void
  closeGuestInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  openGuestInput,
  closeGuestInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates?.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(' até')
          .concat(format(eventStartAndEndDates.to, " d' de 'LLL"))
      : null

  return (
    <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestInputOpen}
          onChange={(event) => setDestination(event.target.value)}
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:opacity-50"
        />
      </div>

      {isDatePickerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="shadow-shape space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>

                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <button
        onClick={openDatePicker}
        disabled={isGuestInputOpen}
        className="flex w-60 items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="w-40 flex-1 text-lg text-zinc-400 disabled:opacity-50">
          {displayedDate || 'Quando?'}
        </span>
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      {!isGuestInputOpen ? (
        <Button variant={'primary'} onClick={openGuestInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      ) : (
        <Button variant={'secondary'} onClick={closeGuestInput}>
          Alterar Local/Data
          <Settings2 className="size-5" />
        </Button>
      )}
    </div>
  )
}
