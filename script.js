function goTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  if (pageId === 'yes2') {
    confetti();
  }
}

function confetti() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement('div');
    conf.innerHTML = "🎊";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.fontSize = "24px";
    conf.style.animation = "fall 2s linear";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 2000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);
