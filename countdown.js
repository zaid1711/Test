const targetDate = new Date("July 12, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdownEl.innerHTML = "🎉 It's time! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
