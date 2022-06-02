import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useToggleTheme } from '../context/theme-context'

function ToggleTheme() {
  const { darkTheme, toggleTheme } = useToggleTheme()

  return (
    <div>
      <button className="rounded-full bg-blue-400 p-2 text-2xl" onClick={toggleTheme}>
        {darkTheme ? <BsFillSunFill className="text-yellow-300" /> : <BsFillMoonFill className="text-gray-100" />}
      </button>
    </div>
  )
}

export default ToggleTheme
