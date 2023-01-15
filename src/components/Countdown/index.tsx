import { useState, useEffect, ChangeEvent } from 'react'


export const Countdown = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [countdown, setCountdown] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [inputNumber, setInputNumber] = useState('')

  useEffect(() => {
    if (!isRunning || countdown <= 0) {
      return
    }
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdown, isRunning])

  const handleStart = () => {
    if (minutes > 0) {
      const totalSeconds = minutes * 60 + seconds
      setCountdown(totalSeconds)
      setIsRunning(true)
      setInputNumber('')
    }
  }
  const handleStop = () => {
    if(isRunning) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
    }
  }
  const handleReset = () => {
    setIsRunning(false)
    setMinutes(0)
    setSeconds(0)
    setCountdown(0)
    setInputNumber('')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNumber(event.target.value);
    const parseNum = Number(event.target.value);
    if(parseNum > 0) {
      setMinutes(parseNum);
    } else {
      setMinutes(0)
    }
  }

  const minutesRemaining = Math.floor(countdown / 60)
  const secondsRemaining = countdown % 60

  return (
    <div className="w-full md:w-2/5 h-96 mx-auto bg-blue-700 rounded-md border-b-8 border-b-red-300">
  <div className="flex flex-col gap-5 items-center">
    <h1 className="text-xl mt-5 leading-7 uppercase">Timer</h1>
    <div className="flex gap-2 flex-col">
      <label htmlFor="minutes">Quanto minutos você quer?</label>
      <input
        type="text"
        className="text-white-500 border-b-2 border-b-green-100 outline-0 bg-blue-700 pl-1 focus:border-b-green-300 text-center"
        onChange={handleChange}
        value={inputNumber}
      />
    </div>
    <div className='flex gap-5'>
      <div className='md:w-28 flex flex-col gap-3 justify-center items-center'>
        <p className='border bg-blue-700 w-24 h-14 text-4xl flex justify-center items-center rounded-md'>{minutesRemaining}</p>
        <p>Minutos</p>
      </div>
      <div className='md:w-28 flex flex-col gap-3 justify-center items-center'>
        <p className='border bg-blue-700 w-24 h-14 text-4xl flex justify-center items-center rounded-md'>
          {secondsRemaining < 10
            ? `0${secondsRemaining}`
            : secondsRemaining}
        </p>
        <p>Segundos</p>
      </div>
    </div>
    <div className='flex gap-2'>
      <button className='bg-green-300 w-full md:w-28 h-10 rounded-md uppercase text-lg transition-all duration-300 ease-in-out hover:bg-green-100 text-white-100' onClick={handleStart}>Start</button>
      <button className='w-full md:w-28 h-10 rounded-md border-2 border-white-400 uppercase text-lg transition-all duration-300 ease-in-out hover:bg-blue-500 text-white-100' onClick={handleStop}>Pause</button>
      <button className='bg-red-300 w-full md:w-28 h-10 rounded-md uppercase text-lg transition-all duration-300 ease-in-out hover:opacity-75 text-white-100' onClick={handleReset}>Reset</button>
    </div>
  </div>
</div>

  )
}
