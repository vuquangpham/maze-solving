import Node from "./Node";

export const astar = (problem, start, end) => {
  const start_node = new Node(null, start);
  start_node.g = start_node.h = start_node.f = 0;
  const end_node = new Node(null, end);
  end_node.g = end_node.h = end_node.f = 0;

  console.log("test", start_node.position, end_node.position);

  const open_list = [];
  const closed_list = [];
  const path = [];

  open_list.push(start_node);

  while (open_list.length > 0) {
    let current_node = open_list[0];
    let current_index = 0;

    // for index, item in enumerate(open_list):
    //     if item.f < current_node.f:
    //         current_node = item
    //         current_index = index

    for (let i = 0; i < open_list.length; i++) {
      const item = open_list[i];
      if (item.f < current_node.f) {
        current_node = item;
        current_index = i;
      }
    }

    open_list.splice(current_index, 1); // frontier
    closed_list.push(current_node); // explored

    if (problem.goal_test(current_node.position)) {
      return [current_node.solution(), path];
    }

    const children = current_node.expand(problem);
    children.forEach((node) => path.push(node.position));

    for (const child of children) {
      let isExist = false;

      for (const closed_child of closed_list) {
        if (child.position.equal(closed_child.position)) {
          isExist = true;
          continue; // FIX BUG --> must be BREAK
        }
      }

      if (isExist) continue;

      child.g = current_node.g + 1;
      child.h =
        (child.position[0] - end_node.position[0]) ** 2 +
        (child.position[1] - end_node.position[1]) ** 2;
      child.f = child.g + child.h;

      for (let i = 0; i < open_list.length; i++) {
        const open_node = open_list[i];

        if (
          child.position.equal(open_node.position) &&
          child.g <= open_node.g
        ) {
          open_list.pop(i);
          continue;
        }
      }
      open_list.push(child);
    }
  }
};
