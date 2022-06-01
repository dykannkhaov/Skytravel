import { useState, useEffect, useRef } from 'react'
import Calendar, { OnChangeDateRangeCallback } from 'react-calendar'
import '../styles/calendar.css'
import type { TravelDatesProps } from '../types/travelDatesProps'

const todayDate = new Date()
const nextYearDate = new Date()
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1)

function TravelDates({ travelDates, setTravelDates }: TravelDatesProps) {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const departDate = travelDates?.toLocaleString().split(',')[0]
  const leavingDate = travelDates?.toLocaleString().split(',')[2]

  const openCalendar = () => {
    setIsCalendarVisible(true)
  }

  const handleOnChange: OnChangeDateRangeCallback = (value: any) => {
    setTravelDates(value)
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
    <>
      <label
        className="text-white"
        htmlFor="depart"
        onClick={(e) => {
          e.preventDefault()
          setIsCalendarVisible(true)
        }}
      >
        Depart
        <div>
          <button
            type="button"
            className="h-12 w-40 cursor-pointer border-r bg-white p-3 text-left text-black"
            id="depart"
            onClick={() => openCalendar()}
          >
            {departDate}
          </button>
          {isCalendarVisible && (
            <div ref={ref}>
              <Calendar
                className="calendar"
                value={travelDates}
                minDate={todayDate}
                maxDate={nextYearDate}
                onChange={handleOnChange}
                showDoubleView
                selectRange
              />
            </div>
          )}
        </div>
      </label>
      <label
        className="text-white"
        htmlFor="return"
        onClick={(e) => {
          e.preventDefault()
          setIsCalendarVisible(true)
        }}
      >
        Return
        <div>
          <button
            type="button"
            className="h-12 w-40 cursor-pointer border-r bg-white p-3 text-left text-black"
            id="return"
            onClick={() => openCalendar()}
          >
            {leavingDate}
          </button>
        </div>
      </label>
    </>
  )
}

export default TravelDates
