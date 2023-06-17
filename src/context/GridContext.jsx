import { useState, useRef, useEffect, createContext } from "react"
import { createGrid } from "../utils/StartingGrid"

const GridContext = createContext()

const gridWidth = 50
const gridHeight = 25
const startCell = {x: 25, y: 12}
const targetCell = {x: 48, y: 23}

const createBaseGrid = () => {
  createGrid(gridWidth, gridHeight, startCell, targetCell)
}

export const GridProvider = ({ children }) => {

  const [mode, setMode] = useState(null)
  const [algorithm, setAlgorithm] = useState(null)
  const [grid, setGrid] = useState(createBaseGrid())
  const [editFlag, setEditFlag] = useState(false)
  const [run, setRun] = useState(false)
  const [restart, setRestart] = useState(false)

  const startingCell = useRef(startCell)
  const targetingCell = useRef(targetCell)


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

  const handleRestartPress = () => {
    setRestart(!restart)
  }

  const handleRunPress = () => {
    setRun(!run)
  }

  const resetGrid = () => {
    setGrid(createBaseGrid())
  }



  useEffect(() => {
    resetGrid()
  }, [restart])


  return ( 
    <GridContext.Provider 
        value={{
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
          handleRunPress,
          restart,
          handleRestartPress,
          startingCell,
          targetingCell
        }}>

        {children}
    </GridContext.Provider>
  )

}

export default GridContext