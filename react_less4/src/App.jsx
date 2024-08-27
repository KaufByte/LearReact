import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CityInfo } from './components/CityInfo'
import PersonInfo from './components/Personalnfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
       {/* <PersonInfo /> */}
       <CityInfo/>
      </div>
    </>
  )
}

export default App
