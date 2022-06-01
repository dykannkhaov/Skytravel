import { useState, useEffect } from 'react'
import TravelDates from './TravelDates'
import Guests from './Guests'
import Itineraries from './Itineraries'

function Form() {
  const [isReset, setIsReset] = useState(false)

  const [numbersOfGuests, setNumbersOfGuests] = useState(1)
  const [flightClass, setFlightClass] = useState<'Economy' | 'Business'>('Economy')

  const [departure, setDeparture] = useState<string>('')
  const [arrival, setArrival] = useState<string>('')

  const [travelDates, setTravelDates] = useState<[Date, Date] | undefined>(undefined)

  useEffect(() => {
    setNumbersOfGuests(1)
    setFlightClass('Economy')
    setDeparture('')
    setArrival('')
    setTravelDates(undefined)
    setIsReset(false)
  }, [isReset])

  return (
    <section className="main-img--container flex flex-col items-center justify-center rounded-md">
      <p className="text-4xl font-bold tracking-widest text-white">Wherever you are, travel with us!</p>
      <form className="z-40 rounded-lg bg-sky-900 p-3" id="issou">
        <div>
          <input className="mr-1 cursor-pointer" type="radio" name="ticket" id="return" defaultChecked />
          <label className="mr-3 cursor-pointer text-white" htmlFor="return">
            Return
          </label>
          <input className="mr-1 cursor-pointer" type="radio" name="ticket" id="oneway" />
          <label className="cursor-pointer text-white" htmlFor="oneway">
            One way
          </label>
        </div>

        <div className="mt-2 flex">
          <Itineraries departure={departure} setDeparture={setDeparture} arrival={arrival} setArrival={setArrival} />
          <TravelDates travelDates={travelDates} setTravelDates={setTravelDates} />
          <Guests
            numbersOfGuests={numbersOfGuests}
            flightClass={flightClass}
            setNumbersOfGuests={setNumbersOfGuests}
            setFlightClass={setFlightClass}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setIsReset(true)}
            className="cursor-pointer rounded-lg bg-orange-500 p-3 font-semibold text-white hover:bg-orange-600"
            type="reset"
          >
            Reset
          </button>
          <button
            className="ml-2 rounded-lg bg-green-500 p-3 font-semibold text-white hover:bg-green-700"
            type="submit"
          >
            Search flights
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
