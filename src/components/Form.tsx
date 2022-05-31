import { useState, useEffect, useRef } from 'react'
import { airports } from '../items/AirportsList'
import Calendar from 'react-calendar'
import '../styles/calendar.css'

const todayDate = new Date()
const nextYearDate = new Date()
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1)

function Form() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [travelDates, setTravelDates] = useState<string[] | undefined>(undefined)
  const ref = useRef<HTMLDivElement>(null)

  const openCalendar = () => setIsCalendarVisible(true)

  const handleOnChange = (e: any) => {
    const listTravelDates = e.map((date: any) => date.toLocaleString().split(',')[0])
    setTravelDates(listTravelDates)
  }

  useEffect(() => {
    setIsCalendarVisible(false)
  }, [travelDates])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) setIsCalendarVisible(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <section className="main-img--container flex flex-col items-center justify-center rounded-md">
      <p className="text-4xl font-bold tracking-widest text-white">Wherever you are, travel with us!</p>
      <form action="#" className={`rounded-lg bg-sky-900 p-3 ${isCalendarVisible ? 'z-40' : null}`}>
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
                className="rounded-l-md border-r p-3 text-black"
                type="text"
                placeholder="From where?"
                id="departure"
                list="airports"
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
                className="border-r p-3 text-black"
                type="text"
                placeholder="To where?"
                id="arrival"
                list="airports"
                required
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
            <div>
              <input
                value={travelDates ? travelDates[0] : undefined}
                className="h-12 w-40 cursor-pointer border-r p-3 text-black"
                id="check-in"
                onClick={openCalendar}
                required
              />
              {isCalendarVisible && (
                <div ref={ref}>
                  <Calendar
                    className="calendar"
                    selectRange={true}
                    minDate={todayDate}
                    maxDate={nextYearDate}
                    onChange={handleOnChange}
                  />
                </div>
              )}
            </div>
          </label>
          <label className="text-white" htmlFor="check-out">
            Check-out
            <div>
              <input
                value={travelDates ? travelDates[1] : undefined}
                className="h-12 w-40 cursor-pointer border-r p-3 text-black"
                id="check-out"
                onClick={openCalendar}
                required
              />
            </div>
          </label>

          <label className="text-white" htmlFor="guest">
            Guests
            <div>
              <input className="rounded-r-md p-3 text-black" type="text" value="1 adult, Economy" id="guest" required />
            </div>
          </label>
        </div>

        <div className="mt-4 flex justify-end">
          <input
            onClick={() => setTravelDates(undefined)}
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
