type GuestsProps = {
  numbersOfGuests: number
  setNumbersOfGuests: React.Dispatch<React.SetStateAction<number>>
  flightClass: 'Economy' | 'Business'
  setFlightClass: React.Dispatch<'Economy' | 'Business'>
}

export type { GuestsProps }
