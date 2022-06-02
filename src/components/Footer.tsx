import { useToggleTheme } from 'src/context/theme-context'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

function Footer() {
  const { darkTheme } = useToggleTheme()
  return (
    <footer
      className={`mt-4 flex justify-evenly py-6 ${darkTheme ? 'bg-[#212425] text-white' : 'bg-purple-300 text-black'} `}
    >
      <span>
        <span>Copyright &copy; 2022 Travelo. All rights reserved</span>
      </span>
      <div className="flex text-2xl">
        <a href="https://github.com/dykannkhaov" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://twitter.com/dykannkhaov" target="_blank" rel="noreferrer" className="mx-2">
          <BsTwitter />
        </a>
        <a href="https://linkedin.com/in/dykannkhaov" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
