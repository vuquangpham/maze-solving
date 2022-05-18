export default class MazeSolver {
  constructor(maze, start, goal) {
    this.maze = maze;
    this.start = start;
    this.goal = goal;

    this.row = this.maze.length;
    this.col = this.maze[0].length;

    Array.prototype.equal = function (arr) {
      return (
        this.length === arr.length && this.every((val, idx) => val === arr[idx])
      );
    };
  }

  actions(current_node) {
    const possible_actions = [];

    for (const position of [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ]) {
      const node_position = [
        current_node.position[0] + new_position[0],
        current_node.position[1] + new_position[1],
      ];

      if (
        node_position[0] > this.row - 1 ||
        node_position[0] < 0 ||
        node_position[1] > this.col - 1 ||
        node_position[1] < 0
      )
        continue;

      if (this.maze[node_position[0]][node_position[1]] !== 0) continue;

      possible_actions.push(new_position);
    }

    return possible_actions;
  }

  result(current_position, position) {
    const new_position =
      (current_position[0] + position[0], current_position[1] + position[1]);

    return new_position;
  }

  goal_test(position) {
    return this.goal.equal(position);
  }
}
