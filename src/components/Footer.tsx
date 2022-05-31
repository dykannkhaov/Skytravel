import * as React from 'react'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="mt-4 flex justify-evenly bg-purple-300 py-6">
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
