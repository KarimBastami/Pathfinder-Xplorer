export const createGrid = (width, height, startPos, targetPos) => {
  let grid = []
  const xStart = startPos.x
  const yStart = startPos.y
  const xTarget = targetPos.x
  const yTarget = targetPos.y

  for (let rows = 0; rows < height; rows++) {
    let row = []

    for (let columns = 0; columns < width; columns++) {
      row.push({
        x: columns,
        y: rows,
        isStart: false,
        isTarget: false,
        isWall: false,
        weight: 1,
        prevNode: null,
        fCost: null
      })
    }
    grid.push(row)
  }

  grid[yStart][xStart].isStart = true
  grid[yTarget][xTarget].isTarget = true

  return grid
}