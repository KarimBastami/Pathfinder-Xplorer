import "./Board.css"
import GridContext from "../../context/GridContext"
import { useState, useContext, useRef } from "react"


function Board() {
  
  const { grid,
          gridWidth,
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
          
              return <div key={i} ref={ref} className={classList.join(" ")}></div>
            })
          }
        </div>
      </div>
    </div>

  )
  
  
}

export default Board