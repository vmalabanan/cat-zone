let time = 5500;
let messages = [
  "Welcome to CatZone! You've just been infected with the CATZONE VIRUS! \n\nThe only cure... is to stay on this page! And to send us catnip! \n\nPress OK to send catnip now!",
  "WARNING! WARNING! WARNING! YOU ARE INFECTED WITH CATZONE! \n\nThe only cure? Catnip! Send some by pressing OK!",
  "This is a stickup! You've been infected with the CatZone virus! Send catnip ASAP for the antidote! \n\nClick below to send!",
  "Your computer has been infected! All your data are belong to us! But we'll give it back... if you send us catnip! \n\nPress OK!",
  "Your data will be released On-Line if You Do Not Pay...in catnip! \n\nJust press OK to do it!",
  "Uh-oh! Looks like you just lost all your data... Want it back? Send catnip! \n\nJust press the button...",
  "Send catnip ASAP to 555-4321! \n\nOur lines are open and we are standing by... just press OK!",
];

// iterate 7 times for 7 lives, baby!
for (let i = 0; i < 7; i++) {
  setTimeout(function () {
    alert(messages[i]);
  }, time);
}
