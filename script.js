function goTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');

  if (pageId === 'yes2') {
    blastConfetti();
  }
}

function blastConfetti() {
  const emojis = ["🎉", "🎊", "💖", "✨", "💗"];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 60; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 250 + 100;

    conf.style.left = centerX + "px";
    conf.style.top = centerY + "px";
    conf.style.setProperty("--x", Math.cos(angle) * distance + "px");
    conf.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 2000);
  }
}
