var availableAgents = [
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
  "Clippy",
];

var talks = [
  "Isn't this simply the most HIDEOUS website you've ever seen?",
  "Sometimes I get a little lonely...",
  "Would you like some assistance today?",
  "On a scale of 1 to 5, you're a 10!",
  "What did the paperclip say to the magnet? 'I find you very attractive.'",
  "It looks like you're trying to write a letter. Would you like help?",
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
      "Hi! I am " +
        agentName +
        ", your office assistant. " +
        talks[~~(Math.random() * talks.length)]
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
