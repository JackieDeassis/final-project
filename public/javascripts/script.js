let sortOrder = 'newest';

const form = document.getElementById('wish-form');
const input = document.getElementById('wish-input');
const container = document.getElementById('wishes-container');
const enterBtn = document.getElementById('enter-btn');
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');

// ===========================
// INTRO SCREEN LOGIC
// ===========================
enterBtn.addEventListener('click', () => {
  introScreen.style.display = 'none';
  mainContent.classList.remove('hidden');
});

// ===========================
// LOAD WISHES FUNCTION
// ===========================
async function loadWishes() {
  const res = await fetch('/entries');
  let wishes = await res.json();

  if (sortOrder === 'oldest') wishes = wishes.reverse();

  container.innerHTML = '';

  wishes.forEach(w => {
    const div = document.createElement('div');
    div.classList.add('post-it');
    div.textContent = w.wish;

    // small random rotation
    const rotation = Math.floor(Math.random() * 10) - 5;
    div.style.setProperty('--rotation', `${rotation}deg`);

    // random pastel color
    const colors = ['#fff7a8', '#ffd6e0', '#d7f9f1', '#e4d9ff', '#ffe8c2', '#c3f0ca', '#fdd3c2'];
    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(div);
  });
}

// ===========================
// FORM SUBMISSION
// ===========================
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const wishText = input.value.trim();
  if (!wishText) return;

  await fetch('/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ wish: wishText })
  });

  input.value = '';
  loadWishes();
  launchConfetti();
});

// ===========================
// FILTER BUTTONS
// ===========================
document.getElementById('newest-btn').addEventListener('click', () => {
  sortOrder = 'newest';
  loadWishes();
});
document.getElementById('oldest-btn').addEventListener('click', () => {
  sortOrder = 'oldest';
  loadWishes();
});

// ===========================
// CONFETTI ON SUBMIT
// ===========================
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight/2 + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
  }
}

// Create sparkles dynamically for intro screen
const sparkleContainer = document.querySelector('.sparkle-container');
for (let i = 0; i < 50; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
  sparkleContainer.appendChild(sparkle);
}

// ===========================
// INITIAL LOAD
// ===========================
loadWishes();
 
