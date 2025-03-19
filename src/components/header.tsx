"use client"

import { FaGithub } from "react-icons/fa"

export default function Header() {
  return (
    <header className="flex items-center py-8">
      <div />
      <nav className="flex justify-end w-full mr-8">
        <a
          href="https://github.com/ivanespinola"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex p-2 rounded-md bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-colors border border-white/20 shadow-md"
        >
          <FaGithub
            className="w-5 h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            size={24}
          />
        </a>
      </nav>
    </header>
  )
}
