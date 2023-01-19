const marqueeImages = document.getElementById("images-marquee-container");
const marqueeText = document.getElementById("marquee-text");
const marqueeTabloids = document.getElementById("tabloids-marquee-container");
const intervalFast = 4;
const intervalSlow = 12;
const directionL = "left";
const directionR = "right";

animate(marqueeTabloids, intervalSlow, directionL);
animate(marqueeText, intervalFast, directionL);
animate(marqueeImages, intervalSlow, directionR);
