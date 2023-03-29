console.log("is linked");

// bin shortcut on desktop
const recycleBin = document.getElementById("bin");
console.dir(recycleBin);

// right side of screen
const screenRight = document.querySelector(".wallpaper--right");
console.dir(screenRight);

// function to create window
const createElement = (elementType, classList, parentNode) => {
  const newElement = document.createElement(elementType);
  newElement.classList.add(classList);
  parentNode.appendChild(newElement);
  console.log("element created");
};

recycleBin.addEventListener("click", () => {
  console.log("bin is clicked");
  //   alert("bin is clicked");
  createElement("div", "window", document.querySelector(".wallpaper--right"));
});
