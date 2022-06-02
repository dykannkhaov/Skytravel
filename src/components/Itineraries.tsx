import { airports } from '../items/AirportsList'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import type { ItinerariesProps } from '../types/itinerariesProps'

function Itinereries({ departure, setDeparture, arrival, setArrival }: ItinerariesProps) {
  const reverseItineraries = () => {
    setDeparture(arrival)
    setArrival(departure)
  }

  return (
    <>
      <label className="text-white" htmlFor="departure">
        From
        <div className="departure-container flex items-center border-r bg-white">
          <input
            type="text"
            value={departure}
            placeholder="From where?"
            className="w-48 rounded-l-md p-3 text-black outline-0"
            id="departure"
            list="airports"
            onChange={(e) => setDeparture(e.currentTarget.value)}
            required
          />
          <div className="cursor-pointer text-xl text-teal-600">
            <HiOutlineSwitchHorizontal
              onClick={(e) => {
                // prevent focus on input "from" because of this Icon being wrapped in the <label>
                e.preventDefault()
                reverseItineraries()
              }}
            />
          </div>

          <datalist id="airports">
            {airports.map((airport) => (
              <option key={airport.id} value={airport.name}></option>
            ))}
          </datalist>
        </div>
      </label>

      <label className="text-white" htmlFor="arrival">
        To
        <div>
          <input
            type="text"
            value={arrival}
            placeholder="To where?"
            className="w-48 border-r p-3 text-black outline-0"
            id="arrival"
            list="airports"
            onChange={(e) => setArrival(e.currentTarget.value)}
            required
          />
          <datalist id="airports">
            {airports.map((airport) => (
              <option key={airport.id} value={airport.name}></option>
            ))}
          </datalist>
        </div>
      </label>
    </>
  )
}

export default Itinereries
