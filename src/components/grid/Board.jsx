import "./Board.css"

import GridContext from "../../context/GridContext"

import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiTargetLock } from "react-icons/bi"
import { TbWeight } from "react-icons/tb"
import { useState, useContext, useRef } from "react"
import { editBoard } from "../../utils/EditBoard"

function Board() {
  
  const { grid,
          setGrid,
          gridWidth,
          editFlag,
          setEditFlag,
          mode,
          startingCell,
          targetingCell
        } = useContext(GridContext)

  // ---------------------------------------------------------------

  const getRefArray = (_grid) => {
    let refArray = []

    grid.forEach((row) => {
      row.forEach(() => {
        refArray.push(useRef())
      })
    });

    return refArray
  }

  // ---------------------------------------------------------------

  const [gridRefs, setGridRefs] = useState(getRefArray(grid))

  
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
                     className={classList.join(" ")}
                     onMouseDown={() => setEditFlag(true)}
                     onMouseUp={() => setEditFlag(false)}
                     onMouseMove={() => editBoard(grid, setGrid, mode, editFlag, startingCell, targetingCell, gridCell, x, y )}>

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