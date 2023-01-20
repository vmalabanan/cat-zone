const marqueeTop = document.getElementById("top");
const marqueeBottom = document.getElementById("bottom");

const intervalFast = 2;
const directionL = "left";
const directionR = "right";

animate(marqueeTop, intervalFast, directionL);
animate(marqueeBottom, intervalFast, directionR);
