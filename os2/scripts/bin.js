const binIcon = document.querySelector("#bin-icon");
console.log(binIcon);

binIcon.addEventListener("dblclick", () => {
  let isAppOpen = false;
  if (isAppOpen) {
    //exit function/event if app open
    return;
  }
  isAppOpen = true;

  createElement("div", "window", "bin", desktop);

  const windowDiv = document.querySelector("#bin");

  const binContent = `
  <div class="window__menu">
  <div class="window__menu__one">
    <div class="window__menu__one--title">
      <img src="./assets/imageres_55.ico" alt="" height="20px" width="20px">
      <p>Recycle Bin</p>
    </div>

    <div class="window__menu__one--buttons">
      <p id="minimise">—</p>
      <p id="miaxmise">ロ</p>
      <p class="close" id="bin-close">&#x2715</p>
    </div>
  </div>
  <div class="window__menu__two">
    <div class="window__menu__two--item"><p>File</p></div>
    <div class="window__menu__two--item"><p>Home</p></div>
    <div class="window__menu__two--item"><p>Share</p></div>
    <div class="window__menu__two--item"><p>View</p></div>
    <div class="window__menu__two--item"><p>Recycle Bin Tools</p></div>
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
  <div class="window__main__content">
    <div class="window__main__content--sort">
        <p>Name</p>
        <p>Original Location</p>
        <p>Date Deleted</p>
        <p>Size</p>
    </div>
  <p>This folder is empty</p>

  </div>
</div>

`;

  windowDiv.innerHTML = binContent;

  const closeBtn = document.getElementById("bin-close");

  closeBtn.addEventListener("click", () => {
    windowDiv.remove();
    isAppOpen = false;
  });
});
