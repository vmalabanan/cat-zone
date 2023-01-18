// create new HTMLAudioElements
const dialUp = new Audio("./assets/sounds/dial-up.flac");
const welcome = new Audio("./assets/sounds/welcome.wav");
const meowMix = new Audio("./assets/sounds/meow_mix_commercial.mp3");
const im = new Audio("./assets/sounds/im.wav");
const mail = new Audio("./assets/sounds/youve-got-mail.mp3");

// select play music button
const playMusic = document.getElementById("play-music");

// play bg music when button is pressed
playMusic.addEventListener(
  "click",
  () => {
    // play on a loop
    dialUp.loop = true;
    dialUp.play();
    console.log("you moused over the body!");

    // play meow mix jingle on a delay
    setTimeout(function () {
      meowMix.play();
    }, 1500);

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
  },
  { once: true }
);

/* To get "you've got mail" sound to play when you hover over the email me "buttons" */
// selecting "buttons"
const catEnvelope = document.getElementById("cat-envelope");
const catTrashcan = document.getElementById("cat-trashcan");
const catMail = document.getElementById("cat-mail");
const emailMe = document.getElementById("email-me");

catEnvelope.addEventListener("mouseover", () => mail.play());
catTrashcan.addEventListener("mouseover", () => mail.play());
catMail.addEventListener("mouseover", () => mail.play());
emailMe.addEventListener("mouseover", () => mail.play());

/* To get IM sound to play when you hover over one of the guestbook/no frames buttons */
// selecting play music / guestbook / frames "buttons"
const catOnBook = document.getElementById("cat-on-book");
const signGuestbook = document.getElementById("sign-guestbook");
const framesLeft = document.getElementById("frames-left");
const framesRight = document.getElementById("frames-right");

catOnBook.addEventListener("mouseover", () => im.play());
signGuestbook.addEventListener("mouseover", () => im.play());
framesLeft.addEventListener("mouseover", () => im.play());
framesRight.addEventListener("mouseover", () => im.play());
playMusic.addEventListener("mouseover", () => im.play());
