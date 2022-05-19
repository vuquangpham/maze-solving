import Box from "./Box";
import { isClassIncluded } from "./utility";

export default class Grid {
  isMouseDown = false;
  currentCursorBox = null;

  constructor(parentElm, width, height, svg) {
    this.parentElm = parentElm;
    this.width = width;
    this.height = height;
    this.maze = [];
    this.row = 0;
    this.col = 0;
    this.svg = svg;
  }

  repeat(quantity) {
    let property = "";
    for (let i = 0; i < quantity; i++) {
      property += "1fr ";
    }
    return property.trim();
  }

  drawBox(box, classList) {
    box.removeAttribute("class");
    box.classList.add("box", ...classList);
    if (classList.includes("start") || classList.includes("goal"))
      box.setAttribute("draggable", "true");
  }

  resetPath() {
    document.querySelectorAll(".expand").forEach((node) => {
      node.classList.remove("expand");
    });
    this.svg.innerHTML = "";
  }

  resetObstacle() {
    document.querySelectorAll(".obstacle").forEach((node) => {
      const row = +node.dataset.row;
      const col = +node.dataset.col;
      this.maze[row][col] = 0;
      node.classList.remove("obstacle");
    });

    this.resetPath();
  }

  drawLine(path) {
    let pathStr = "";
    let isFirst = true;

    for (const position of path) {
      const row = position[0];
      const col = position[1];

      const box = document.querySelector(
        `div[data-row="${row}"][data-col="${col}"]`
      );

      // X --> distance left --> pos, Y --> top --> pos
      const [x, y] = Box.generateMiddlePoint(box);

      if (isFirst) {
        pathStr += `M ${x},${y}`;
        isFirst = false;
        continue;
      }
      pathStr += ` L ${x}, ${y}`;
    }
    return pathStr;
  }

  moveBox(source, des) {
    const rowDes = des.dataset.row;
    const colDes = des.dataset.col;

    const rowSource = source.dataset.row;
    const colSource = source.dataset.col;

    const afterDes = des.nextElementSibling;
    const parent = des.parentNode;
    source.replaceWith(des);
    parent.insertBefore(source, afterDes);

    source.dataset.row = rowDes;
    source.dataset.col = colDes;
    des.dataset.row = rowSource;
    des.dataset.col = colSource;
  }

  drawPath(path) {
    for (const position of path) {
      const row = position[0];
      const col = position[1];

      const box = document.querySelector(
        `div[data-row="${row}"][data-col="${col}"]`
      );

      if (box.classList.contains("start") || box.classList.contains("goal"))
        continue;
      this.drawBox(box, ["expand"]);
    }
  }

  generateState() {
    const row = Math.round(Math.random() * this.row);
    const col = Math.round(Math.random() * this.row);

    return [row, col];
  }

  createInitialState(start, goal) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = goal;

    const startBox = document.querySelector(
      `div[data-row="${startRow}"][data-col="${startCol}"]`
    );

    const goalBox = document.querySelector(
      `div[data-row="${endRow}"][data-col="${endCol}"]`
    );

    this.drawBox(startBox, ["start"]);
    this.drawBox(goalBox, ["goal"]);
  }

  createBox() {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        const box = Box.create(this.width, this.height);
        box.dataset.row = i;
        box.dataset.col = j;
        this.parentElm.append(box);
      }
      this.maze.push(Array(this.col).fill(0));
    }
  }

  reset() {
    this.parentElm.innerHTML = "";
  }

  createGrid() {
    this.reset();

    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;

    this.col = Math.ceil(browserWidth / this.width);
    this.row = Math.ceil(browserHeight / this.height);

    Object.assign(this.parentElm.style, {
      gridTemplateColumns: `repeat(${this.col}, 1fr)`,
      gridTemplateRows: `repeat(${this.row}, 1fr)`,
    });

    this.createBox();

    let start = this.generateState();
    let goal = this.generateState();
    this.createInitialState(start, goal);

    return [start, goal];
  }

  updateMaze(row, col) {
    this.maze[row][col] === 0
      ? (this.maze[row][col] = 1)
      : (this.maze[row][col] = 0);
  }

  handleMouseDown(e) {
    const currentBox = e.target.closest(".box");
    if (
      !currentBox ||
      currentBox.classList.contains("start") ||
      currentBox.classList.contains("goal")
    )
      return;

    this.isMouseDown = true;
    this.currentCursorBox = currentBox;

    const row = currentBox.dataset.row;
    const col = currentBox.dataset.col;

    this.updateMaze(row, col);

    currentBox.classList.toggle("obstacle");

    this.resetPath();
  }

  handleMouseUp(e) {
    this.isMouseDown = false;
  }

  handleMouseMove(e) {
    if (!this.isMouseDown) return;
    const currentBox = e.target.closest(".box");

    if (
      !currentBox ||
      currentBox.classList.contains("start") ||
      currentBox.classList.contains("goal")
    )
      return;

    if (this.currentCursorBox == currentBox) return;

    this.currentCursorBox = currentBox;

    const row = currentBox.dataset.row;
    const col = currentBox.dataset.col;

    this.updateMaze(row, col);

    currentBox.classList.toggle("obstacle");
  }
}
