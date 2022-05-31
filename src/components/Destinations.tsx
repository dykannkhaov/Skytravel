import { destinations } from '../items/DestinationsList'
import { MdFlight, MdFreeBreakfast, MdMyLocation } from 'react-icons/md'
import { useToggleTheme } from '../context/theme-context'

function Destinations() {
  const { darkTheme } = useToggleTheme()

  return (
    <section className="text-white">
      <div className="mb-8" id="destination">
        <h3 className={`mt-3 text-center text-xl font-bold ${darkTheme ? 'text-white' : 'text-black'}`}>
          Recommended Destinations
        </h3>
      </div>

      <ul className="grid grid-cols-3 justify-items-center gap-y-10">
        {destinations.map((destination, index) => (
          <li
            className="destinations-container rounded-lg bg-purple-50 py-4 px-5"
            style={{
              transition: '0.3s ease-in-out',
            }}
            key={index}
          >
            <div>
              <img className="h-60 w-80 rounded-lg" src={`${destination.img}`} alt={`${destination.img}`} />
            </div>
            <p className="mt-3 font-semibold text-black">{destination.name}</p>
            <p className="mb-1 text-sm text-black">{destination.desc}</p>

            <div className="mb-2 flex justify-between">
              <div className="flex">
                <MdFlight className="rounded-full bg-purple-400 p-1 text-2xl" />
                <MdFreeBreakfast className="mx-0.5 rounded-full bg-purple-400 p-1 text-2xl" />
                <MdMyLocation className="rounded-full bg-purple-400 p-1 text-2xl" />
              </div>
              <p className="text-sm font-semibold text-black">{destination.cost}</p>
            </div>

            <div className="flex justify-between text-sm text-black">
              <span>{destination.distance} Kms</span>
              <span>{destination.duration}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Destinations
