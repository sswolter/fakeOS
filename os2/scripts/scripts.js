console.log("is linked");

// // bin shortcut on desktop
// const recycleBin = document.getElementById("bin");
// console.dir(recycleBin);

// // right side of screen
// const screenRight = document.querySelector(".wallpaper--right");
// console.dir(screenRight);

// function to create window
const createElement = (elementType, classList, id, parentNode) => {
  const newElement = document.createElement(elementType);
  newElement.classList.add(classList);
  newElement.id = id;
  parentNode.appendChild(newElement);
};

//function to add html to div

// const appendHtml = () => {
//   const window = document.querySelector("window");
//   window.innerHTML += "<p>This is some new HTML code</p>";
// };

// recycleBin.addEventListener("click", () => {
//   console.log("bin is clicked");
//   //   alert("bin is clicked");
//   createElement("div", "window", document.querySelector(".wallpaper--right"));
// });

const desktop = document.querySelector(".desktop__main");
