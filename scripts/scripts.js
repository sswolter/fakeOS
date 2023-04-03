const desktop = document.querySelector(".desktop__main");

const createElement = (elementType, classList, id, parentNode) => {
  const newElement = document.createElement(elementType);
  newElement.classList.add(classList);
  newElement.id = id;
  parentNode.appendChild(newElement);
};
