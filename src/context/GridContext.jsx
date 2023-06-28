import { useState, useRef, createContext } from "react"
import { createGrid } from "../utils/StartingGrid"

const GridContext = createContext()

export const GridProvider = ({ children }) => {

  const gridWidth = 45
  const gridHeight = 20
  const startPos = {x: 10, y: 3}
  const targetPos = {x: 33, y: 10}
  const startRef = useRef(startPos)
  const targetRef = useRef(targetPos)

  const createBaseGrid = () => {
    return createGrid(gridWidth, gridHeight, startRef.current, targetRef.current)
  }

  const createRefGrid = (_grid) => {
    let refArray = []
    
    _grid.forEach((row) => {
      row.forEach(() => {
        refArray.push(useRef())
      })
    });

    return refArray
  }

  const resetRefs = (_gridRefs) => {
    _gridRefs.forEach((ref) => {
      const refNode = ref.current
      refNode.classList.remove("visited")      
    })
  }

  // ------------------------------------------------------------------

  const [mode, setMode] = useState(null)
  const [algorithm, setAlgorithm] = useState(null)
  const [grid, setGrid] = useState(createBaseGrid())
  const [gridRefs, setGridRefs] = useState(createRefGrid(grid))
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

  const resetGrid = () => {
    setGrid(createBaseGrid())
    resetRefs(gridRefs)
  }

  const onRunClick = () => {
    if (algorithm != null) {
      resetRefs(gridRefs)
      setRun(true)
    }
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
          gridRefs,
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