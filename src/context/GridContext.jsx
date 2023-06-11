import { useState, useRef, useEffect, createContext } from "react"
import createGrid from "../utils/StartingGrid"

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
          setMode,
          algorithm,
          setAlgorithm,
          grid,
          setGrid,
          editFlag,
          setEditFlag,
          run,
          setRun,
          restart,
          setRestart,
          startingCell,
          targetingCell
        }}>

        {children}
    </GridContext.Provider>
  )

}

export default GridContext