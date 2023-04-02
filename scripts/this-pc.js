const thisPcIcon = document.querySelector("#pc-icon");
console.log(thisPcIcon);

thisPcIcon.addEventListener("dblclick", () => {
  let isAppOpen = false;
  if (isAppOpen) {
    //exit function/event if app open
    return;
  }
  isAppOpen = true;

  createElement("div", "window", "pc", desktop);

  const windowDiv = document.querySelector("#pc");

  const thisPcContent = ` <div class="window__menu">
  <div class="window__menu__one">
    <div class="window__menu__one--title">
      <img src="./assets/imageres_109.ico" alt="" height="20px" width="20px">
      <p>This PC</p>
    </div>

    <div class="window__menu__one--buttons">
      <p id="minimise">—</p>
      <p id="miaxmise">ロ</p>
      <p id="close" class="close">&#x2715</p>
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
    <div class="sidebar">
      <img src="./assets/shell32_51380.ico" alt="" height="20px">
      <p>Quick access</p>
    </div>

    <div class="sidebar">
      <img src="./assets/imageres_109.ico" alt="" height="20px">
      <p>This PC</p>
    </div>
   
    <div class="sidebar">
      <img src="./assets/imageres_25.ico" alt="" height="20px">
      <p>Network</p>
    </div>
  </div>
  <div class="window__main--content">
    <h1>Folders (5)</h1>
    <div class="content-container">

        <div class="content-container--item">
          <img src="./assets/imageres_183.ico" alt="" height="50px">
          <p>Desktop</p></div>
        <div class="content-container--item">
          <img src="./assets/imageres_112.ico" alt="" height="50px">
          <p>Documents</p></div>
        <div class="content-container--item">
          <img src="./assets/imageres_184.ico" alt="" height="50px">
          <p>Downloads</p></div>
        <div class="content-container--item">
          <img src="./assets/imageres_108.ico" alt="" height="50px">
          <p>Music</p></div>
        <div class="content-container--item">
          <img src="./assets/imageres_113.ico" alt="" height="50px">
          <p>Pictures</p>
        </div>
    </div>
    <h1>Devices and drives (1)</h1>
    <div class="content-container">
        <div class="content-container--item">
          <img src="./assets/imageres_36.ico" alt="" height="50px">
          <p>Windows (C:)</p>
        </div>
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
