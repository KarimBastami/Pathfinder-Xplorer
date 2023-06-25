import "./Board.css"

import GridContext from "../../context/GridContext"

import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiTargetLock } from "react-icons/bi"
import { TbWeight } from "react-icons/tb"
import { useState, useContext, useRef, useEffect } from "react"
import { editBoard } from "../../utils/EditBoard"
import { dfs } from "../../algorithms/Dfs"
import { animateAlgo } from "../../utils/AnimateAlgo"

function Board() {
  
  const { grid,
          gridRefs,
          setGrid,
          gridWidth,
          editFlag,
          setEditFlag,
          mode,
          startRef,
          targetRef,
          run,
          setRun,
          algorithm,
        } = useContext(GridContext)


  useEffect(() => {
    if (run == true && algorithm == "dfs") {
      const visitedNodesInOrder = dfs(grid, startRef, targetRef)
      animateAlgo(visitedNodesInOrder, gridRefs)
      setRun(false)
    }
  }, [run, algorithm])

  
  return (
    <div id="board" className="p-8 pt-10">
      <div className="container">
        <div className="board-grid">
          {
            gridRefs.map((ref, i) => {
              let classList = ["cell"]
          
              let x = i % gridWidth
              let y = Math.floor(i / gridWidth)
              let gridCell = grid[y][x]
          
              gridCell.isWall ? classList.push("wall") : ""
          
              return (
                <div key={i}
                     ref={ref} 
                     id={`${y}-${x}`} 
                     className={classList.join(" ")}
                     onMouseDown={() => setEditFlag(true)}
                     onMouseUp={() => setEditFlag(false)}
                     onMouseMove={() => editBoard(grid, setGrid, mode, editFlag, startRef, targetRef, gridCell, x, y )}>

                  {gridCell.isStart ? <HiOutlineLocationMarker className="text-h2" /> : null}
                  {gridCell.isTarget ? <BiTargetLock className="text-h2" /> : null}
                  {gridCell.weight > 1 ? <TbWeight className="text-h2" /> : null}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
  
  
}

export default Board