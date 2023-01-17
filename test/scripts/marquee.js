const marqueeImages = document.getElementById("images-marquee-container");
const marqueeText = document.getElementById("marquee-text");
const intervalFast = 4;
const intervalSlow = 12;

animate(marqueeImages, intervalSlow);
animate(marqueeText, intervalFast);

function animate(element, interval) {
  let elementWidth = element.offsetWidth;
  let parentWidth = element.parentElement.offsetWidth;
  let flag = 0;

  setInterval(() => {
    element.style.marginLeft = --flag + "px";

    if (elementWidth == -flag) {
      flag = parentWidth;
    }
  }, interval);
}
