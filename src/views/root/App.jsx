import './App.css'
import './Root.css'

import Home from '../home/Home'
import Mobile from '../mobile/Mobile'

import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"


function App() {

  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const navigate = useNavigate()

  useEffect(() => {
    if (screenSize < 1024) {
      navigate("/mobile")
    }
    else {
      navigate("/")
    }
  }, [screenSize])

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/mobile' element={<Mobile />} />
    </Routes>
  )
}

export default App
