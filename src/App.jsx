import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Counter } from './components/Counter'
import { CounterValue } from './components/CounterValue'
import { CounterControllers } from './components/CounterControllers'
import { Navbar } from './components/Navbar'
import { ImageStore } from './components/ImageStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Power of Zustand</h1>
     {/* <Counter/> */}
     <hr/>
     <div className='m-5'>
      <h2>Performance Improvement way</h2>
     <CounterValue/>
     <CounterControllers/>
     </div>

     {/* <hr/>
     <h2>One Store with Multiple Slices</h2>
     <Navbar/> */}

     <hr/>
    <div className='mt-4'>
       <h2>Async Actions for API calls</h2>
     <ImageStore/>
    </div>
    </>

    
  )
}

export default App
