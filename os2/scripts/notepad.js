const notepadIcon = document.getElementById("notepad-icon");

notepadIcon.addEventListener("dblclick", () => {
  let isAppOpen = false;
  if (isAppOpen) {
    //exit function/event if app open
    return;
  }
  isAppOpen = true;

  createElement("div", "window", "notepad", desktop);

  const windowDiv = document.querySelector("#notepad");

  const notepadContent = `
  <div class="window__menu">
  <div class="window__menu__one">
    <div class="window__menu__one--title">
      <img src="./assets/notepad.png" alt="" width="20px" height="25px">
      <p>Untitled - Notepad</p>
    </div>

    <div class="window__menu__one--buttons">
      <p id="minimise">—</p>
      <p id="miaxmise">ロ</p>
      <p class="close" id="close-n">&#x2715</p>
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

  const closeBtn = document.getElementById("close-n");

  closeBtn.addEventListener("click", () => {
    windowDiv.remove();
    isAppOpen = false;
  });
});
