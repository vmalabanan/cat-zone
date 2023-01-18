// create new HTMLAudioElements
const dialUp = new Audio("./assets/sounds/dial-up.flac");
const welcome = new Audio("./assets/sounds/welcome.wav");
const meowMix = new Audio("./assets/sounds/meow_mix_commercial.mp3");
const im = new Audio("./assets/sounds/im.wav");
const mail = new Audio("./assets/sounds/youve-got-mail.mp3");

// play dial-up sound immediately and on a loop
dialUp.loop = true;
// document.addEventListener(
//   "click",
//   () => {
//     dialUp.play();
//     console.log("you clicked the document!");
//   },
//   { once: true }
// );

const body = document.querySelector("body");
body.addEventListener(
  "mouseover",
  () => {
    dialUp.play();
    console.log("you moused over the body!");
  },
  { once: true }
);

// play meow mix jingle on a delay
setTimeout(function () {
  meowMix.play();
}, 1000);

// after meowMix has ended, repeat "welcome" and meow mix jingle
meowMix.onended = function () {
  this.currentTime = 0;
  const delay = setTimeout(function () {
    welcome.play();
    setTimeout(function () {
      meowMix.play();
    }, 1000);
    clearTimeout(delay);
  }, 3000);
};

/* To get sound to play when you hover over one of the email me buttons */
// selecting email "buttons"
const catEnvelope = document.getElementById("cat-envelope");
const catTrashcan = document.getElementById("cat-trashcan");
const catMail = document.getElementById("cat-mail");
const emailMe = document.getElementById("email-me");

catEnvelope.addEventListener("mouseover", () => mail.play());
catTrashcan.addEventListener("mouseover", () => mail.play());
catMail.addEventListener("mouseover", () => mail.play());
emailMe.addEventListener("mouseover", () => mail.play());

/* To get sound to play when you hover over one of the guestbook/no frames buttons */
// selecting guestbook / frames "buttons"
const catOnBook = document.getElementById("cat-on-book");
const signGuestbook = document.getElementById("sign-guestbook");
const framesLeft = document.getElementById("frames-left");
const framesRight = document.getElementById("frames-right");

catOnBook.addEventListener("mouseover", () => im.play());
signGuestbook.addEventListener("mouseover", () => im.play());
framesLeft.addEventListener("mouseover", () => im.play());
framesRight.addEventListener("mouseover", () => im.play());
