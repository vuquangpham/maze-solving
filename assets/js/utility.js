export const isExistInArray = (array, elm) => {
  return array.some((val, idx) => array[idx].equal(elm));
};

export const drawLine = (svg, path) => {
  const pathElm = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElm.setAttributeNS(null, "stroke", "Yellow");
  pathElm.setAttributeNS(null, "stroke-width", 2);
  pathElm.setAttributeNS(null, "fill", "none");
  pathElm.setAttributeNS(null, "d", path);
  svg.append(pathElm);
};

export const clearLine = (svg) => (svg.innerHTML = "");

export const getRowCol = (box) => {
  const row = +box.dataset.row;
  const col = +box.dataset.col;
  return [row, col];
};

export const isClassIncluded = (element, className) => {
  return element.classList.contains(className);
};
