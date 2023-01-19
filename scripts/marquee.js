function animate(element, interval, direction) {
  let elementWidth = element.offsetWidth;
  let parentWidth = element.parentElement.offsetWidth;
  let flag = 0;

  setInterval(() => {
    if (direction.toLowerCase() === "left") {
      element.style.marginLeft = --flag + "px";
      if (elementWidth == -flag) {
        flag = parentWidth;
      }
    } else {
      element.style.marginLeft = ++flag + "px";
      if (elementWidth == flag) {
        flag = -parentWidth;
      }
    }
  }, interval);
}
