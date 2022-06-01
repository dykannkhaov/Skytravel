import { airports } from '../items/AirportsList'
import type { ItinerariesProps } from '../types/itinerariesProps'
// import { HiOutlineSwitchHorizontal } from 'react-icons/hi'

function Itinereries({ departure, setDeparture, arrival, setArrival }: ItinerariesProps) {
  return (
    <>
      <label className="text-white" htmlFor="departure">
        From
        <div>
          <input
            type="text"
            value={departure}
            placeholder="From where?"
            className="rounded-l-md border-r p-3 text-black"
            id="departure"
            list="airports"
            onChange={(e) => setDeparture(e.currentTarget.value)}
            required
          />

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
            className="border-r p-3 text-black"
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
