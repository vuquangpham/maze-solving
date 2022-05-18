import Node from "./Node"

const breadth_first_search = (problem, start, end) => {
  const start_node = new Node(null, start)
  start_node.g = start_node.h = start_node.f = 0
  const end_node = new Node(null, end)
  end_node.g = end_node.h = end_node.f = 0
  
  const frontier = [start_node]
  const explored = new Set()
  
  if (problem.goal_test(start_node.position))
    return start_node
  
  while (frontier) {
    let node = frontier.shift()
    explored.add(node.position)
    for (const child of node.expand(problem)) {
      if (child.position not in explored && child not in frontier) {
        if (problem.goal_test(child.position))
          return child
        frontier.append(child)
      }
    }
  return None
  }

}
