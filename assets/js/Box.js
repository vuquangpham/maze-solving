export default class Box {
  static create(width, height, className = ["box"]) {
    const box = document.createElement("div");
    box.classList.add(...className);
    Object.assign(box.style, {
      width: `${width}px`,
      height: `${height}px`,
    });

    return box;
  }
}
