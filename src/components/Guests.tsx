import { useState, useEffect, useRef } from 'react'
import type { GuestsProps } from '../types/guestsProps'

function Guests({ numbersOfGuests, setNumbersOfGuests, flightClass, setFlightClass }: GuestsProps) {
  const [isGuestsMenuOpen, setIsGuestsMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) setIsGuestsMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <>
      <label className="text-white" htmlFor="guest">
        Guests
        <div>
          <button
            type="button"
            className="guest-input w-48 cursor-pointer rounded-r-md bg-white p-3 text-left text-black"
            id="guest"
            onClick={() => setIsGuestsMenuOpen((prev) => !prev)}
          >
            {numbersOfGuests > 9 ? '9' : numbersOfGuests} {numbersOfGuests > 1 ? 'travelers' : 'adult'}, {flightClass}
          </button>
          {isGuestsMenuOpen && (
            <div ref={ref} className="absolute bg-[#181a1b] text-[#a49d91]">
              <div className="p-4">
                <h5 className="mb-4 text-xs">Cabin Class</h5>
                <button
                  className={`py-1 px-3 text-xs ${
                    flightClass === 'Economy' ? 'border border-blue-600 bg-black text-blue-400' : null
                  }`}
                  type="button"
                  onClick={() => setFlightClass('Economy')}
                >
                  ECONOMY
                </button>
                <button
                  className={`py-1 px-3 text-xs ${
                    flightClass === 'Business' ? 'border border-blue-600 bg-black text-blue-400' : null
                  }`}
                  type="button"
                  onClick={() => setFlightClass('Business')}
                >
                  BUSINESS
                </button>
              </div>
              <hr style={{ borderColor: 'rgb(42, 59, 72)' }} />
              <div className="flex items-center justify-between px-4 py-2">
                <h5 className="text-xs">Travelers</h5>
                <div>
                  <button
                    className="btn-guests--disabled border border-blue-600 px-1 text-sm text-blue-300"
                    type="button"
                    onClick={() => setNumbersOfGuests((c) => c - 1)}
                    disabled={numbersOfGuests < 2}
                  >
                    -
                  </button>
                  <p className="mx-2 inline-block w-2 text-white">{numbersOfGuests}</p>
                  <button
                    className="btn-guests--disabled border border-blue-600 px-1 text-sm text-blue-300"
                    type="button"
                    onClick={() => setNumbersOfGuests((c) => c + 1)}
                    disabled={numbersOfGuests > 8}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </label>
    </>
  )
}

export default Guests
