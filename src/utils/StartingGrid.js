export const createGrid = (width, height, startCell, targetCell) => {
  let grid = []
  const xStart = startCell.x
  const yStart = startCell.y
  const xTarget = targetCell.x
  const yTarget = targetCell.y

  for (let rows = 0; rows < height; rows++) {
    let row = []

    for (let columns = 0; columns < width; columns++) {
      row.push({
        x: columns,
        y: rows,
        isStart: false,
        isTarget: false,
        weight: 1,
        isWall: false,
      })
    }
    grid.push(row)
  }

  grid[yStart][xStart].isStart = true
  grid[yTarget][xTarget].isTarget = true

  return grid
}