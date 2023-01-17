// const mail = document.getElementById("mail");
const welcome = document.getElementById("welcome");
const meowMix = document.getElementById("meow-mix");
// const im = document.getElementById("im");
// const meowMad = document.getElementById("meow-mad");
// const meowHungry = document.getElementById("meow-hungry");
// const meowPurr = document.getElementById("meow-purr");

// // play you've got mail on a delay
// setTimeout(function () {
//   mail.play();
// }, 1000);

// // play IM sound on a delay
// setTimeout(function () {
//   im.play();
// }, 1500);

// play meow mix jingle on a delay
setTimeout(function () {
  meowMix.play();
}, 1000);

// setTimeout(function () {
//   meowHungry.play();
// }, 1700);

// setTimeout(function () {
//   meowPurr.play();
// }, 2300);

// after an interval, repeat "welcome" and meow mix sounds
meowMix.onended = function () {
  this.currentTime = 0;
  const delay = setTimeout(function () {
    welcome.play();
    setTimeout(function () {
      // mail.play();
      meowMix.play();
    }, 1000);
    clearTimeout(delay);
  }, 3000);
};

// im.onended = function () {
//   this.currentTime = 0;
//   const delayIM = setTimeout(function () {
//     im.play();
//     clearTimeout(delayIM);
//   }, 4000);
// };
