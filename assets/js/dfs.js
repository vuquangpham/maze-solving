import Node from "./Node";
import { isExistInArray } from "./utility";

export const depth_first_search = (problem, start, end) => {
  const start_node = new Node(null, start);
  start_node.g = start_node.h = start_node.f = 0;
  const end_node = new Node(null, end);
  end_node.g = end_node.h = end_node.f = 0;

  const frontier = [start_node];
  const explored = new Set();
  let path = [];

  if (problem.goal_test(start_node.position)) return start_node;

  while (frontier.length > 0) {
    let node = frontier.pop();
    explored.add(node.position);

    const children = node.expand(problem);
    children.forEach((node) => path.push(node.position));

    for (const child of children) {
      const isExplored = isExistInArray([...explored], child.position);
      const isFrontier = frontier.some((node) => node === child);

      if (!isExplored && !isFrontier) {
        if (problem.goal_test(child.position)) {
          return [child.solution(), path];
        }
        frontier.push(child);
      }
    }
  }
  return null;
};
