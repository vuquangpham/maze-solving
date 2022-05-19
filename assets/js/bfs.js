import Node from "./Node";
import Queue from "./Queue";
import { isExistInArray } from "./utility";

export const breadth_first_search = (problem, start, end) => {
  const start_node = new Node(null, start);
  start_node.g = start_node.h = start_node.f = 0;

  const end_node = new Node(null, end);
  end_node.g = end_node.h = end_node.f = 0;

  const frontier = new Queue();
  frontier.enqueue(start_node);
  console.log("first frontier", frontier);
  // const frontier = [start_node];
  const explored = new Set();
  let path = [];

  if (problem.goal_test(start_node.position)) return start_node;

  while (frontier.size > 0) {
    let node = frontier.dequeue();
    console.log("dequeue", node);
    explored.add(node.position);

    const children = node.expand(problem);
    children.forEach((node) => path.push(node.position));

    for (const child of children) {
      const isExplored = isExistInArray([...explored], child.position);
      // const isFrontier = frontier.some((node) => node === child);
      const isFrontier = frontier.find(child);
      console.log("is Fr", isFrontier);

      if (!isExplored && !isFrontier) {
        if (problem.goal_test(child.position)) {
          return [child.solution(), path];
        }
        frontier.enqueue(child);
      }
    }
  }
  return [[], path];
};
