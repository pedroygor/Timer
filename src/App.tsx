import { Countdown } from './components/Countdown'
import { Header } from './components/Header'

export const App = () => {
  return (
    <div className=" bg-white dark:bg-blue-900 text-black dark:text-white-100 h-screen">
      <div className="container mx-auto">
        <Header />
        <Countdown /> 
      </div>
    </div>
  )
}
