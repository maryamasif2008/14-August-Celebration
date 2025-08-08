const btn = document.getElementById('celebrate-btn');
const anthem = document.getElementById('anthem');

btn.addEventListener("click", () => {
  // Confetti explosion
  confetti({
    particleCount: 300,
    spread: 180,
    origin: { y: 0.6 },
    colors: ['#1fa436', '#ffffff'],
    shapes: ['circle', 'square']
  });

  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: Math.random() * 0.6 },
        colors: ['#ffffff', '#1fa436'],
      });
    }, i * 500);
  }

  // Play national anthem
  anthem.play();
});
