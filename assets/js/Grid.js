import Box from "./Box";

export default class Grid {
  isMouseDown = false;
  currentCursorBox = null;

  constructor(parentElm, width, height) {
    this.parentElm = parentElm;
    this.width = width;
    this.height = height;
    this.maze = [];
    this.row = 0;
    this.col = 0;
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
  }

  createInitialState(start, goal) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = goal;

    console.log(startRow, startCol);

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

    console.log(`${browserWidth}:${browserHeight}`);

    this.col = Math.ceil(browserWidth / this.width);
    this.row = Math.ceil(browserHeight / this.height);

    Object.assign(this.parentElm.style, {
      gridTemplateColumns: `repeat(${this.col}, 1fr)`,
      gridTemplateRows: `repeat(${this.row}, 1fr)`,
    });
    this.createBox();
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
