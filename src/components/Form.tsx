import { useState } from 'react'
import { airports } from '../items/AirportsList'
import Calendar from 'react-calendar'
import '../styles/calendar.css'

const todayDate = new Date()
const nextYearDate = new Date()
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1)

function Form() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <section className="main-img--container flex flex-col items-center justify-center rounded-md">
      <p className="text-4xl font-bold tracking-widest text-white">Wherever you are, travel with us!</p>
      <form action="#" className="rounded-lg bg-sky-900 p-3">
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
          <label className="text-white" htmlFor="departure">
            From
            <div>
              <input
                required
                className="rounded-l-md border-r p-3 text-black"
                type="text"
                placeholder="City or airport"
                id="departure"
                list="airports"
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
                required
                className="border-r p-3 text-black"
                type="text"
                placeholder="City or airport"
                id="arrival"
                list="airports"
              />
              <datalist id="airports">
                {airports.map((airport) => (
                  <option key={airport.id} value={airport.name}></option>
                ))}
              </datalist>
            </div>
          </label>

          <label className="text-white" htmlFor="check-in">
            Check-in
            <div className="">
              <input
                className="h-12 cursor-pointer border-r p-3 text-black"
                // type="date"
                id="check-in"
                onClick={() => setIsClicked(!isClicked)}
                required
              />
              {isClicked ? <Calendar className="calendar" minDate={todayDate} maxDate={nextYearDate} /> : null}
            </div>
          </label>
          <label className="text-white" htmlFor="check-out">
            Check-out
            <div>
              <input
                className="h-12 cursor-pointer border-r p-3 text-black"
                // type="date"
                id="check-out"
                onClick={() => setIsClicked(!isClicked)}
                required
              />
            </div>
          </label>

          <label className="text-white" htmlFor="guest">
            Guests
            <div>
              <input className="rounded-r-md p-3 text-black" type="text" id="guest" required />
            </div>
          </label>
        </div>

        <div className="mt-4 flex justify-end">
          <input
            className="cursor-pointer rounded-lg bg-orange-500 p-3 font-semibold text-white hover:bg-orange-600"
            type="reset"
          />
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
