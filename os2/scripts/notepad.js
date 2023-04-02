let isAppOpen = false;

const notepadIcon = document.querySelector(".notepad-icon");

notepadIcon.addEventListener("dblclick", () => {
  if (isAppOpen) {
    //exit function/event if app open
    return;
  }
  isAppOpen = true;

  createElement("div", "window", desktop);

  const windowDiv = document.querySelector(".window");

  const notepadContent = `
  <div class="window__menu">
    <div class="window__menu__one">
      <div class="window__menu__one--title">
        <img src="./assets/notepad.png" alt="">
        <p>Untitled - Notepad</p>
      </div>

      <div class="window__menu__one--buttons">
        <p class="window-button" id="minimise">—</p>
        <p class="window-button" id="miaxmise">ロ</p>
        <p class="window-button" id="close">&#x2715</p>
      </div>
    </div>
    <div class="window__menu__two">
      <p>File</p>
      <p>Edit</p>
      <p>Format</p>
      <p>View</p>
      <p>Help</p>
    </div>
  </div>
  <div class="window__main">
    <textarea id="text-area"></textarea>
  </div>
`;

  windowDiv.innerHTML = notepadContent;

  const closeBtn = document.getElementById("close");

  closeBtn.addEventListener("click", () => {
    windowDiv.remove();
    isAppOpen = false;
  });
});
