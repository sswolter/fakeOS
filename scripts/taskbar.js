// const startMenu = document.querySelector(".start-menu");
// const starBtn = document.getElementById("startMenu");

// const toggleStartMenu = () => {
//   if (startMenu.style.display === "none") {
//     startMenu.style.display = "block";
//   } else {
//     startMenu.style.display = "none";
//   }
// };

// starBtn.addEventListener("click", () => {
//   toggleStartMenu();
// });

const startMenu = document.querySelector(".taskbar-menu");
const startBtn = document.querySelector(".taskbar__one--start");

console.log(startMenu);
console.log(startBtn);

const toggleStartMenu = () => {
  if (startMenu.style.display === "none") {
    startMenu.style.display = "block";
  } else {
    startMenu.style.display = "none";
  }
};

startBtn.addEventListener("click", () => {
  toggleStartMenu();
});
