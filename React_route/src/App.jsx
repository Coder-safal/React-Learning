import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>

      <ul>
        <Link to={''}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={< Contact />} />


      </Routes>


    </>
  )
}

export default App