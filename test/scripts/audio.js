/* To play background audio */
// selecting audio elements
const welcome = document.getElementById("welcome");
const meowMix = document.getElementById("meow-mix");
const mail = document.getElementById("mail");
const im = document.getElementById("im");

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
