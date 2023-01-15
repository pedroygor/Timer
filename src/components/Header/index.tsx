import { GithubLogo, Sun } from 'phosphor-react'
import { useEffect, useState } from 'react'

export const Header = () => {
  return (
    <header className="w-full flex justify-end p-6">
      <nav>
        <div className="flex gap-4">
          <div className="w-10 h-10 flex justify-center items-center bg-white-300 text-blue-500 hover:bg-white-400 hover:text-blue-700 dark:text-white-100 dark:bg-blue-500 rounded-md p-2 dark:hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
            <a
              href="https://github.com/pedroygor"
              target="_blank"
              className="w-full h-full flex justify-center items-center">
              <GithubLogo size={20} />
            </a>
          </div>
          <ButtonSun />
        </div>
      </nav>
    </header>
  )
}

export const ButtonSun = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.theme === 'dark'
  )

  function toggleTheme() {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const html = document.documentElement

    const prevTheme = isDarkMode ? 'light' : 'dark'
    html.classList.remove(prevTheme)

    const nextTheme = isDarkMode ? 'dark' : 'light'
    html.classList.add(nextTheme)

    localStorage.setItem('theme', nextTheme)
  }, [isDarkMode])

  return (
    <button onClick={toggleTheme} className="w-10 h-10 flex justify-center items-center  bg-white-300 text-blue-500 hover:bg-white-400 hover:text-blue-700 dark:text-white-100 dark:bg-blue-500 rounded-md p-2 dark:hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
      <Sun size={20} />
    </button>
  )
}
