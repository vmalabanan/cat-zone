var availableAgents = [
  "Links",
  "Links",
  "Links",
  "Links",
  "Links",
  "Links",
  "Links",
  "Links",
  "Links",
  "Links",
];

var talks = [
  "WARNING! WARNING! WARNING! YOU ARE INFECTED! The only cure? Catnip!",
  "This is a stickup! You've been infected with the CatZone virus! Send catnip ASAP for the antidote!",
  "Your computer has been infected! All your data are belong to us!",
  "Your data will be released On-Line if You Do Not Pay...in catnip!",
  "Uh-oh! Looks like you just lost all your data... Want it back? Send catnip!",
  "Send catnip ASAP to 555-4321!",
];

const randPos = () => 0.2 + Math.random() * 0.6;

function nextAgent() {
  let agentName = availableAgents.pop();
  if (!agentName) return;

  clippy.load(agentName, (agent) => {
    window[agentName] = agent;

    const move = () => {
      agent.moveTo(
        $(document).width() * randPos(),
        $(document).height() * randPos()
      );
    };

    move();

    agent.show();

    // On start
    agent.speak(
      "Uh-oh! You've just been infected with the CatZone virus! Your data is now ours... To release, send Bitcoin or catnip. Catnip preferred!"
    );

    // On click
    $(agent._el).click(() => {
      agent.speak("Unhand me, you fiend!");
      move();
    });

    // Animate randomly
    setInterval(() => {
      agent.animate();
    }, 3000 + Math.random() * 4000);

    // Talk and move randomly
    setInterval(() => {
      move();
      agent.speak(talks[~~(Math.random() * talks.length)]);
    }, 20000 + Math.random() * 4000);

    setTimeout(nextAgent, 2000);
  });
}

nextAgent();
