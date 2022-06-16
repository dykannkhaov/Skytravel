import { useState } from 'react'
import TravelDates from './TravelDates'
import Guests from './Guests'
import Itineraries from './Itineraries'

function Form() {
  const [departure, setDeparture] = useState<string>('')
  const [arrival, setArrival] = useState<string>('')

  const [numbersOfGuests, setNumbersOfGuests] = useState(1)
  const [flightClass, setFlightClass] = useState<'Economy' | 'Business'>('Economy')

  const [travelDates, setTravelDates] = useState<[Date, Date] | undefined>(undefined)

  const validateForm = () => {
    if (departure !== '' && arrival !== '' && travelDates !== undefined) {
      setDeparture('')
      setArrival('')
      setTravelDates(undefined)
    } else return
  }

  return (
    <section className="main-img--container flex flex-col items-center justify-center rounded-md">
      <p className="text-4xl font-bold tracking-widest text-white">Wherever you are, travel with us!</p>
      <form className="z-40 rounded-lg bg-sky-900 p-3" onSubmit={(e) => e.preventDefault()}>
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
            type="button"
            onClick={validateForm}
            className="ml-2 rounded-lg bg-green-500 p-3 font-semibold text-white hover:bg-green-700"
          >
            Search flights
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
