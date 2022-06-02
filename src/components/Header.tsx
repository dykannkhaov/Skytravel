import Nav from './Nav'
import { useToggleTheme } from '../context/theme-context'

function Header() {
  const { darkTheme } = useToggleTheme()
  return (
    <header className={`sticky top-0 z-50 ${darkTheme ? 'bg-[#181a1b]' : 'bg-sky-300'}`}>
      <Nav />
    </header>
  )
}
export default Header
