import './App.css'
import './Root.css'

import Home from '../home/Home'
import Mobile from '../mobile/Mobile'

import { useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import { useWindowSize } from '@uidotdev/usehooks'



function App() {

  const windowSize = useWindowSize()
  const navigate = useNavigate()

  useEffect(() => {
    if (windowSize.width < 1024) {
      navigate("/mobile")
    }
    else {
      navigate("/")
    }
  }, [windowSize])

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/mobile' element={<Mobile />} />
    </Routes>
  )
}

export default App
