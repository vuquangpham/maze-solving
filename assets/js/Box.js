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

  static generateMiddlePoint(box) {
    const boxModel = box.getBoundingClientRect();
    let x = boxModel.x;
    let y = boxModel.y;
    let width = boxModel.width;
    let height = boxModel.height;

    return [x + width / 2, y + height / 2];
  }
}
