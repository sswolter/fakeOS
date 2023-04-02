let isAppOpen = false;

const thisPcIcon = document.querySelector(".pc-icon");

thisPcIcon.addEventListener("dblclick", () => {
  if (isAppOpen) {
    //exit function/event if app open
    return;
  }
  isAppOpen = true;

  createElement("div", "window", desktop);

  const windowDiv = document.querySelector(".window");

  const thisPcContent = `
  <div class="window__menu">
  <div class="window__menu__one">
    <div class="window__menu__one--title">
      <img src="./assets/imageres_109.ico" alt="">
      <p>This PC</p>
    </div>

    <div class="window__menu__one--buttons">
      <p id="minimise">—</p>
      <p id="miaxmise">ロ</p>
      <p id="close">&#x2715</p>
    </div>
  </div>
  <div class="window__menu__two">
    <div class="window__menu__two--item"><p>File</p></div>
    <div class="window__menu__two--item"><p>Computer</p></div>
    <div class="window__menu__two--item"><p>View</p></div>
  </div>
</div>
<div class="window__main">
  <div class="window__main--menu">
    <p>Quick access</p>
    <p>This PC</p>
    <p>Network</p>
  </div>
  <div class="window__main--content">
    <h1>Folders (5)</h1>
    <div class="content-container">
        <div class="content-container--item">3D Objects</div>
        <div class="content-container--item">Desktop</div>
        <div class="content-container--item">Documents</div>
        <div class="content-container--item">Downloads</div>
        <div class="content-container--item">Music</div>
        <div class="content-container--item">Pictures</div>
        <div class="content-container--item">Videos</div>
    </div>
    <h1>Devices and drives (1)</h1>
    <div class="content-container">
        <div class="content-container--item">Windows (C:)</div>
    </div>

  </div>
</div>
`;

  windowDiv.innerHTML = thisPcContent;

  const closeBtn = document.getElementById("close");

  closeBtn.addEventListener("click", () => {
    windowDiv.remove();
    isAppOpen = false;
  });
});
