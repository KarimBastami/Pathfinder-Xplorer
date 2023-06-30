export const bfs = (grid, setGrid, startRef, targetRef) => {
  let nodeQueue = []
  let visitedNodesInOrder = []
  let tempGrid = [...grid]

  const startPos = startRef.current
  const targetPos = targetRef.current
  const startNode = grid[startPos.y][startPos.x]
  const targetNode = grid[targetPos.y][targetPos.x]
  
  nodeQueue.push(startNode)

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift()
    
    if (currentNode === targetNode) return visitedNodesInOrder

    if (!currentNode.isWall && !visitedNodesInOrder.includes(currentNode)) {
      visitedNodesInOrder.push(currentNode)

      //check if top neighbor exists
      if (currentNode.y > 0) {
        const nextY = currentNode.y - 1
        const nextX = currentNode.x

        setPrevAndPushNeighbor(nextY, nextX, tempGrid, nodeQueue, currentNode)
      }

      //check if bottom neighbor exists
      if (currentNode.y < grid.length - 1) {
        const nextY = currentNode.y + 1
        const nextX = currentNode.x

        setPrevAndPushNeighbor(nextY, nextX, tempGrid, nodeQueue, currentNode)
      }

      //check if right neighbor exists
      if (currentNode.x < grid[0].length - 1) {
        const nextY = currentNode.y
        const nextX = currentNode.x + 1

        setPrevAndPushNeighbor(nextY, nextX, tempGrid, nodeQueue, currentNode)
      }

      //check if left neighbor exists
      if (currentNode.x > 0) {
        const nextY = currentNode.y
        const nextX = currentNode.x - 1

        setPrevAndPushNeighbor(nextY, nextX, tempGrid, nodeQueue, currentNode)
      }
    }
  }

  setGrid(tempGrid)
  return visitedNodesInOrder
}


const setPrevAndPushNeighbor = (nextY, nextX, tempGrid, nodeQueue, currentNode) => {
  const nextNode = tempGrid[nextY][nextX]

  if (nextNode.prevNode === null && !nextNode.isStart) {
    nextNode.prevNode = currentNode
  }

  nodeQueue.push(nextNode)
}