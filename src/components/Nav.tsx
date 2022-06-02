import { GiCommercialAirplane } from 'react-icons/gi'
import ToggleTheme from './ToggleTheme'

function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 text-lg ">
      <div className="flex">
        <GiCommercialAirplane className="text-3xl text-sky-600" />
        <h3 className="font-semibold text-sky-600">SkyTravel</h3>
      </div>
      <ul className="flex pr-10 font-semibold text-blue-500">
        <li className="hover:text-blue-700">
          <a href="#">Home</a>
        </li>
        <li className="ml-4 hover:text-blue-700">
          <a href="#destination">Destinations</a>
        </li>
        <li className="ml-4 hover:text-blue-700">
          <a href="#review">Reviews</a>
        </li>
      </ul>
      <ToggleTheme />
    </nav>
  )
}

export default Nav
