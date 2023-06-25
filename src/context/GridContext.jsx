import { useState, useRef, useEffect, createContext } from "react"
import { createGrid } from "../utils/StartingGrid"

const GridContext = createContext()

export const GridProvider = ({ children }) => {

  const gridWidth = 45
  const gridHeight = 20
  const startPos = {x: 0, y: 0}
  const targetPos = {x: 4, y: 0}
  const startRef = useRef(startPos)
  const targetRef = useRef(targetPos)

  const createBaseGrid = () => {
    return createGrid(gridWidth, gridHeight, startRef.current, targetRef.current)
  }

  // ------------------------------------------------------------------

  const [mode, setMode] = useState(null)
  const [algorithm, setAlgorithm] = useState(null)
  const [grid, setGrid] = useState(createBaseGrid())
  const [editFlag, setEditFlag] = useState(false)
  const [run, setRun] = useState(false)

  // ------------------------------------------------------------------

  const setModeStart = () => { 
    mode === "start" ? setMode(null) : setMode("start")
  }

  const setModeTarget = () => { 
    mode === "target" ? setMode(null) : setMode("target")
  }

  const setModeWall = () => { 
    mode === "wall" ? setMode(null) : setMode("wall")
  }

  const setModeWeight = () => { 
    mode === "weight" ? setMode(null) : setMode("weight")
  }

  const handleAlgoChange = (e) => {
    setAlgorithm(e)
  }

  const onRunClick = () => {
    if (algorithm != null) {
      setRun(true)
    }
  }

  const resetGrid = () => {
    setGrid(createBaseGrid())
  }


  return ( 
    <GridContext.Provider 
        value={{
          gridWidth,
          mode,
          setModeStart,
          setModeTarget,
          setModeWall,
          setModeWeight,
          algorithm,
          handleAlgoChange,
          grid,
          setGrid,
          editFlag,
          setEditFlag,
          run,
          setRun,
          onRunClick,
          resetGrid,
          startRef,
          targetRef,
        }}>

        {children}
    </GridContext.Provider>
  )

}

export default GridContext