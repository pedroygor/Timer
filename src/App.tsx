import { Countdown } from "./components/Countdown"
import { Header } from "./components/Header"
import './index.css'

export const App = () => {
  return(
    <div className="bg-blue-900 text-white-100 h-screen">
    <div className="container mx-auto">
      <Header />
      <Countdown />
    </div>
  </div>
  
  )
}


