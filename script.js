function showMessage() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "Wishing you joy, success, and endless blessings this year!";
  messageElement.style.opacity = 1;
  launchConfetti();
}

// Confetti Function
function launchConfetti() {
  const confettiContainer = document.getElementById("confetti");
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = randomGray();
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confettiContainer.appendChild(confetti);
  }
}

// Generate random grayscale color for confetti
function randomGray() {
  const grayShade = Math.floor(Math.random() * 200) + 50; // shades of gray from light to dark
  return `rgb(${grayShade}, ${grayShade}, ${grayShade})`;
}
