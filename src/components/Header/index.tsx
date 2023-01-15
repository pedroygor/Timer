import { GithubLogo, Sun } from 'phosphor-react'

export const Header = () => {
  return (
    <header className="w-full flex justify-end p-6">
      <nav>
        <div className="flex gap-4">
          <div className="w-10 h-10 flex justify-center items-center text-white-100 bg-blue-500 rounded-md p-2 hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
            <a
              href="https://github.com/pedroygor"
              target="_blank"
              className="w-full h-full flex justify-center items-center">
              <GithubLogo size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

const ButtonSun = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center text-white-100 bg-blue-500 rounded-md p-2 hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
      <Sun size={20} />
    </div>
  )
}
