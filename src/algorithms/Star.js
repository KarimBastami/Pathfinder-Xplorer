export const aStar = (grid, setGrid, startRef, targetRef) => {
  let visitedNodesInOrder = []
  let openNodes = []
  let tempGrid = [...grid]
  
  const startPos = startRef.current
  const targetPos = targetRef.current
  const startNode = grid[startPos.y][startPos.x]
  const targetNode = grid[targetPos.y][targetPos.x]

  openNodes.push(startNode)

  while (openNodes.length > 0) {
    const currentNode = openNodes.shift()

    if (currentNode == targetNode) return visitedNodesInOrder

    if (!currentNode.isWall && !visitedNodesInOrder.includes(currentNode)) {
      
      //check if top neighbor exists
      if (currentNode.y > 0) {
        const nextY = currentNode.y - 1
        const nextX = currentNode.x

        updateFCost(tempGrid, startNode, targetNode, nextY, nextX)
        setPrevAndPushNeighbor(nextY, nextX, tempGrid, openNodes, visitedNodesInOrder, currentNode)
      }

      //check if bottom neighbor exists
      if (currentNode.y < grid.length - 1) {
        const nextY = currentNode.y + 1
        const nextX = currentNode.x

        updateFCost(tempGrid, startNode, targetNode, nextY, nextX)
        setPrevAndPushNeighbor(nextY, nextX, tempGrid, openNodes, visitedNodesInOrder, currentNode)
      }

      //check if right neighbor exists
      if (currentNode.x < grid[0].length - 1) {
        const nextY = currentNode.y
        const nextX = currentNode.x + 1

        updateFCost(tempGrid, startNode, targetNode, nextY, nextX)
        setPrevAndPushNeighbor(nextY, nextX, tempGrid, openNodes, visitedNodesInOrder, currentNode)
      }

      //check if left neighbor exists
      if (currentNode.x > 0) {
        const nextY = currentNode.y
        const nextX = currentNode.x - 1

        updateFCost(tempGrid, startNode, targetNode, nextY, nextX)
        setPrevAndPushNeighbor(nextY, nextX, tempGrid, openNodes, visitedNodesInOrder, currentNode)
      }

      // sort open array
      openNodes.sort((a, b) => a.fCost - b.fCost)

      // add current node to visited Array
      visitedNodesInOrder.push(currentNode)

      console.log("x: " + currentNode.x + " y: " + currentNode.y + " FCost: " + currentNode.fCost)
    }
  }

  setGrid(tempGrid)
  return visitedNodesInOrder
}


const calcFCost = (startNode, targetNode, currentNode) => {
  let gCost = null
  let hCost = null

  const gX = Math.abs(startNode.x - currentNode.x)
  const gY = Math.abs(startNode.y - currentNode.y)
  const hX = Math.abs(currentNode.x - targetNode.x)
  const hY = Math.abs(currentNode.y - targetNode.y)

  gCost = gX + gY
  hCost = hX + hY

  return gCost + hCost
}


const updateFCost = (tempGrid, startNode, targetNode, nextY, nextX) => {
  const nextNode = tempGrid[nextY][nextX]
  const newFCost = calcFCost(startNode, targetNode, nextNode)

  tempGrid[nextY][nextX].fCost = newFCost
}


const setPrevAndPushNeighbor = (nextY, nextX, tempGrid, openNodes, visitedNodesInOrder, currentNode) => {
  const nextNode = tempGrid[nextY][nextX]

  if (nextNode.prevNode === null && !nextNode.isStart) {
    nextNode.prevNode = currentNode
  }
  
  if (!visitedNodesInOrder.includes(nextNode)) {
    openNodes.push(nextNode)
  }
}