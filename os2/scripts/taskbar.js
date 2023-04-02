function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const startMenu = document.querySelector(".start-menu");
const starBtn = document.getElementById("startMenu");

const toggleStartMenu = () => {
  if (startMenu.style.display === "none") {
    startMenu.style.display = "block";
  } else {
    startMenu.style.display = "none";
  }
};

starBtn.addEventListener("click", () => {
  toggleStartMenu();
});
