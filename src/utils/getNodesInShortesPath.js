export const getNodesInShortestPath = (targetNode) => {
  let nodesInOrder = []
  let currentNode = targetNode

  if (targetNode.prevNode === null) return []

  while (!currentNode.isStart) {
    nodesInOrder.unshift(currentNode)
    currentNode = currentNode.prevNode
  }

  return nodesInOrder
}