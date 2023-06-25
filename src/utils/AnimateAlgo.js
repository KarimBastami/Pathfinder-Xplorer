export const animateAlgo = (visitedNodes, refArray) => {
  visitedNodes.forEach((node, i) => {
    if (i === visitedNodes.length - 1) {}

    setTimeout(() => {
      if (!node.isStart && !node.isTarget) {
        refArray.forEach((ref) => {
          const refNode = ref.current

          if (refNode.getAttribute("id") === `${node.y}-${node.x}`) {
            refNode.classList.add("visited")
          }
        })
      }
    }, 10 * i);  
  });
}