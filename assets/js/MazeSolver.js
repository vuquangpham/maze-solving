export default class MazeSolver {
  constructor(maze, start, goal) {
    this.maze = maze;
    this.start = start;
    this.goal = goal;

    this.diagonal = true;

    this.row = this.maze.length;
    this.col = this.maze[0].length;

    Array.prototype.equal = function (arr) {
      return (
        this.length === arr.length && this.every((val, idx) => val === arr[idx])
      );
    };
  }

  updateDiagonal(state) {
    if (state === true) this.diagonal = true;
    else this.diagonal = false;
  }

  updateState(start, goal) {
    this.start = start;
    this.goal = goal;
  }

  actions(current_node) {
    const possible_actions = [];

    const positions = this.diagonal
      ? [
          [0, -1],
          [0, 1],
          [-1, 0],
          [1, 0],
          [-1, -1],
          [-1, 1],
          [1, -1],
          [1, 1],
        ]
      : [
          [0, -1],
          [0, 1],
          [-1, 0],
          [1, 0],
        ];

    for (const position of positions) {
      const node_position = [
        current_node.position[0] + position[0],
        current_node.position[1] + position[1],
      ];

      if (
        node_position[0] > this.row - 1 ||
        node_position[0] < 0 ||
        node_position[1] > this.col - 1 ||
        node_position[1] < 0
      )
        continue;

      if (this.maze[node_position[0]][node_position[1]] !== 0) continue;

      possible_actions.push(position);
    }

    return possible_actions;
  }

  result(current_position, position) {
    const new_position = [
      current_position[0] + position[0],
      current_position[1] + position[1],
    ];

    return new_position;
  }

  goal_test(position) {
    return this.goal.equal(position);
  }
}
