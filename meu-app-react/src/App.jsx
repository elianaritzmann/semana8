import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import './components/Navbar.css'
import Sobrenos from './components/Sobrenos.jsx'
import './components/Sobrenos.css'
import Porqueinvestir from './components/Porqueinvestir.jsx'
import Produtos from './components/Produtos.jsx'
import './components/Produtos.css'
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
        <main >
          <Sobrenos id='sobre-nos'></Sobrenos>
          <Porqueinvestir id='porqueinvestir'></Porqueinvestir>
          <Produtos id='produtos'></Produtos>
        </main>
      </div>
     
    </>
  )
}

export default App