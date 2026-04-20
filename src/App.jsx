import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Counter } from './components/Counter'
import { CounterValue } from './components/CounterValue'
import { CounterControllers } from './components/CounterControllers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>State Management with Zustand</h1>
     {/* <Counter/> */}
     <hr/>
     <h2>Performance Improvement way</h2>
     <CounterValue/>
     <CounterControllers/>
    </>
  )
}

export default App
