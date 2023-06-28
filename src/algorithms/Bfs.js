export const bfs = (grid, startRef, targetRef) => {
  let nodeQueue = []
  let visitedNodesInOrder = []

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
        nodeQueue.push(grid[currentNode.y - 1][currentNode.x])
      }

      //check if bottom neighbor exists
      if (currentNode.y < grid.length - 1) {
        nodeQueue.push(grid[currentNode.y + 1][currentNode.x])
      }

      //check if right neighbor exists
      if (currentNode.x < grid[0].length - 1) {
        nodeQueue.push(grid[currentNode.y][currentNode.x + 1])
      }

      //check if left neighbor exists
      if (currentNode.x > 0) {
        nodeQueue.push(grid[currentNode.y][currentNode.x - 1])
      }
    }
  }

  return visitedNodesInOrder
}