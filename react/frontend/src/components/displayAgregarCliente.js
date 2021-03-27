function toggleOverlay() {
    let overlayDiv = document.querySelector(".overlay");
    console.log(overlayDiv.style.opacity);
    if (overlayDiv.style.opacity === '0')
      overlayDiv.style.opacity = 1;
    else
      overlayDiv.style.opacity = 0;
    }