// const mail = document.getElementById("mail");
const welcome = document.getElementById("welcome");
// const im = document.getElementById("im");
const meowMad = document.getElementById("meow-mad");
const meowHungry = document.getElementById("meow-hungry");
const meowPurr = document.getElementById("meow-purr");

// // play you've got mail on a delay
// setTimeout(function () {
//   mail.play();
// }, 1000);

// // play IM sound on a delay
// setTimeout(function () {
//   im.play();
// }, 1500);

// play meows
setTimeout(function () {
  meowMad.play();
}, 1000);

setTimeout(function () {
  meowHungry.play();
}, 1700);

setTimeout(function () {
  meowPurr.play();
}, 2000);

// after an interval, repeat "welcome" and "you've got mail" sounds
meowPurr.onended = function () {
  this.currentTime = 0;
  const delay = setTimeout(function () {
    welcome.play();
    setTimeout(function () {
      // mail.play();
      meowMad.play();
    }, 1000);
    // setTimeout(function () {
    //   meowHungry.play();
    // }, 1500);

    // setTimeout(function () {
    //   meowPurr.play();
    // }, 2000);

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
