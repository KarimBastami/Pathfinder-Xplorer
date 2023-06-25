export const dfs = (grid, startRef, targetRef) => {
  let nodeStack = []
  let visitedNodesInOrder = []

  const startPos = startRef.current
  const targetPos = targetRef.current
  const startNode = grid[startPos.y][startPos.x]
  const targetNode = grid[targetPos.y][targetPos.x]
  
  nodeStack.push(startNode)

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop()
    
    if (currentNode === targetNode) return visitedNodesInOrder

    if (!currentNode.isWall && !visitedNodesInOrder.includes(currentNode)) {
      visitedNodesInOrder.push(currentNode)

      //check if top neighbor exists
      if (currentNode.y > 0) {
        nodeStack.push(grid[currentNode.y - 1][currentNode.x])
      }

      //check if bottom neighbor exists
      if (currentNode.y < grid.length - 1) {
        nodeStack.push(grid[currentNode.y + 1][currentNode.x])
      }

      //check if right neighbor exists
      if (currentNode.x < grid[0].length - 1) {
        nodeStack.push(grid[currentNode.y][currentNode.x + 1])
      }

      //check if left neighbor exists
      if (currentNode.x > 0) {
        nodeStack.push(grid[currentNode.y][currentNode.x - 1])
      }
    }
  }
}