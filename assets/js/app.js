import Grid from "./Grid";

const container = document.querySelector(".container");

const maze = new Grid(container, 30, 30);

maze.createGrid();
maze.createInitialState([7, 8], [30, 32]);

window.addEventListener("resize", maze.createGrid.bind(maze));

container.addEventListener("mousedown", maze.handleMouseDown.bind(maze));
container.addEventListener("mouseup", maze.handleMouseUp.bind(maze));
container.addEventListener("mousemove", maze.handleMouseMove.bind(maze));
