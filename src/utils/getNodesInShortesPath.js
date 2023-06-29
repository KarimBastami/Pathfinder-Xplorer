export const getNodesInShortestPath = (targetNode) => {
  let nodesInOrder = []
  let currentNode = targetNode

  while (!currentNode.isStart) {
    nodesInOrder.unshift(currentNode)
    currentNode = currentNode.prevNode
  }

  return nodesInOrder
}