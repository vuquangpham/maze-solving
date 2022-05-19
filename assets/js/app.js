import { astar } from "./astar";
import { breadth_first_search } from "./bfs";
import { GOAL_POINT, START_POINT } from "./configs";
import { depth_first_search } from "./dfs";
import Grid from "./Grid";
import MazeSolver from "./MazeSolver";
import { drawLine, getRowCol, isClassIncluded } from "./utility";

let start = START_POINT;
let goal = GOAL_POINT;

const container = document.querySelector(".container");
const searchBtn = document.querySelector(".btn--search");
const svg = document.querySelector("svg");
const clearBtn = document.querySelector(".btn--clear");
const resetBtn = document.querySelector(".btn--reset");
const form = document.getElementById("selection");
const checkbox = document.querySelector("input[type='checkbox']");

const init = () => {
  const maze = new Grid(container, 30, 30, svg);
  const matrix = maze.maze;
  [start, goal] = maze.createGrid();
  const draggables = document.querySelectorAll('div[draggable="true"]');
  const problem = new MazeSolver(matrix, start, goal);
  let lastBox = null;
  let timer = 0;

  svg.height = window.innerHeight;
  svg.width = window.innerWidth;

  window.addEventListener("resize", function (e) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function (e) {
      [start, goal] = maze.createGrid();
      problem.updateState(start, goal);
      maze.resetObstacle();
    }, 500);
  });
  container.addEventListener("mousedown", maze.handleMouseDown.bind(maze));
  container.addEventListener("mouseup", maze.handleMouseUp.bind(maze));
  container.addEventListener("mousemove", maze.handleMouseMove.bind(maze));
  clearBtn.addEventListener("click", maze.resetPath.bind(maze));
  resetBtn.addEventListener("click", maze.resetObstacle.bind(maze));

  searchBtn.addEventListener("click", function () {
    maze.resetPath(svg);
    let result;

    const searchAlgorithm = form.elements["searching"].value;

    if (searchAlgorithm === "bfs")
      result = breadth_first_search(problem, start, goal);
    if (searchAlgorithm === "dfs")
      result = depth_first_search(problem, start, goal);
    if (searchAlgorithm === "astar") result = astar(problem, start, goal);

    if (!result) return alert("no solution");

    [result, expand] = result;

    maze.drawPath(expand);
    const path = maze.drawLine(result);
    drawLine(svg, path);
  });

  checkbox.addEventListener("change", function (e) {
    const state = this.checked;
    problem.updateDiagonal(state);
  });

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");

      if (isClassIncluded(draggable, "start")) {
        console.log("source is start");
        start = getRowCol(lastBox);
      }
      if (isClassIncluded(draggable, "goal")) {
        console.log("source is end");
        goal = getRowCol(lastBox);
      }
      if (isClassIncluded(lastBox, "goal")) {
        console.log("destination is end");
        goal = getRowCol(draggable);
      }
      if (isClassIncluded(lastBox, "start")) {
        console.log("destination is start");
        start = getRowCol(draggable);
      }

      maze.resetPath();
      maze.moveBox(draggable, lastBox);
      problem.updateState(start, goal);
    });
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const nextBox = e.path[0];
    if (lastBox === nextBox) return;
    lastBox = nextBox;
  });
};

window.addEventListener("DOMContentLoaded", init);
