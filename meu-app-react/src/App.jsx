import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import './Navbar.css'
import Sobrenos from './Sobrenos.jsx'
import './Sobrenos.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='background'>
        <header>
          <div id='headertext'>
            <h1>Energia Solar 365</h1>
            <h3>Economize com o sol. Invista no seu futuro!</h3>
          </div>
          <Navbar ></Navbar>
        </header>
        <main id='sobre-nos'>
          <Sobrenos></Sobrenos>
        </main>
      </div>
     
    </>
  )
}

export default App