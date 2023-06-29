export const animateAlgo = async (visitedNodes, nodesInShortestPath, refArray) => {
  return new Promise((resolve, reject) => {
    const animationDuration = 10

    visitedNodes.forEach((node, i) => {
      if (i === visitedNodes.length - 1) {
        setTimeout(async () => {
          await animateShortestPath(nodesInShortestPath, refArray, animationDuration)
          resolve()
        }, animationDuration * i)
      }
  
      setTimeout(() => {
        if (!node.isStart && !node.isTarget) {
          refArray.forEach((ref) => {
            const refNode = ref.current
  
            if (refNode.getAttribute("id") === `${node.y}-${node.x}`) {
              refNode.classList.add("visited")
            }
          })
        }
      }, animationDuration * i);
    });
  })
}

const animateShortestPath = async (nodesInShortestPath, refArray, animationDuration) => {
  return new Promise((resolve, reject) => {
    nodesInShortestPath.forEach((node, i) => {
      if (i == nodesInShortestPath.length - 1){
        setTimeout(() => {
          resolve()
        }, animationDuration * i);
      }
      
      setTimeout(() => {
        if (!node.isStart && !node.isTarget) {
          refArray.forEach((ref) => {
            const refNode = ref.current
  
            if (refNode.getAttribute("id") === `${node.y}-${node.x}`) {
              refNode.classList.add("shortest-path")
            }
          })
        }
      }, animationDuration * i);
    })
  })
}