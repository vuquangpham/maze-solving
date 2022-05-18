export default class Node {
  constructor(parent = null, position = null) {
    this.parent = parent;
    this.position = position;

    this.g = 0;
    this.h = 0;
    this.f = 0;

    this.depth = 0;
    if (this.parent) this.depth++;
  }

  equal(other) {
    return this.position.equal(other.position);
  }

  expand(problem) {
    const children = [];
    for (const action of problem.actions()) {
      const child = this.child_node(problem, action);
      children.push(child);
    }

    return children;
  }

  child_node(problem, action) {
    const new_position = problem.result(this.position, action);
    return new Node(null, new_position);
  }

  solution() {
    const positions = [];
    for (const node of this.path()) {
      positions.push(node.position);
    }
    return positions;
  }

  path() {
    let current_node = this;
    const path_back = [];

    while (current_node) {
      path_back.push(current_node);
      current_node = current_node.parent;
    }
    return path_back.reverse();
  }
}
