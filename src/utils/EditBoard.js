export const editBoard = (grid, setGrid, mode, editFlag, startingCell, targetingCell, cell, x, y) => {
  if (!editFlag) return
  if (cell.isStart || cell.isTarget) return

  switch (mode) {
    case "start":
      var newGrid = grid.map((row) => {
        return row.map((cell) => {
          if (cell.isStart) return {...cell, isStart: false}
          else return cell
        })
      })
      
      newGrid[y][x] = { ...cell, 
                        isStart: true, 
                        isTarget: false,
                        isWall: false,
                        weight: 1 
                      }

      startingCell.current = {x: x, y: y}
      setGrid(newGrid)
      break;


    case "target":
      var newGrid = grid.map((row) => {
        return row.map((cell) => {
          if (cell.isTarget) return {...cell, isTarget: false}
          else return cell
        })
      })
      
      newGrid[y][x] = { ...cell, 
                        isStart: false, 
                        isTarget: true,
                        isWall: false,
                        weight: 1 
                      }

      targetingCell.current = {x: x, y: y}
      setGrid(newGrid)
      break;
    

    case "wall":
      var newGrid = grid.slice()
      
      newGrid[y][x] = { ...cell, 
                        isStart: false, 
                        isTarget: false,
                        isWall: true,
                        weight: 1 
                      }
      setGrid(newGrid)
      break;
      
      
    case "weight":
      var newGrid = grid.slice()
      
      newGrid[y][x] = { ...cell, 
                        isStart: false, 
                        isTarget: false,
                        isWall: false,
                        weight: 5 
                      }
      setGrid(newGrid)                
      break;

    default:
      return
  }
  
}