// A Little World of Maisha — interactive features
const $ = (selector) => document.querySelector(selector);

// Countdown to the next November 21 (uses the visitor's local time).
function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();
  let birthday = new Date(year, 10, 21, 0, 0, 0); // Month 10 = November
  if (now >= birthday) birthday = new Date(year + 1, 10, 21, 0, 0, 0);

  const difference = birthday - now;
  if (difference <= 0) {
    $('#countdown').innerHTML = '<div class="time-unit"><strong>🎂</strong><span>today</span></div>';
    $('#countdownMessage').textContent = 'Happy Birthday, Maisha! Today is all about you ♡';
    return;
  }
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#minutes').textContent = String(minutes).padStart(2, '0');
  $('#seconds').textContent = String(seconds).padStart(2, '0');
  $('#countdownMessage').textContent = days === 0 ? 'Your special day is almost here ♡' : 'A little more time until your day arrives ♡';
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Background music: browsers require a click before audio can play.
const music = $('#backgroundMusic');
const musicToggle = $('#musicToggle');
musicToggle.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add('playing');
      musicToggle.setAttribute('aria-pressed', 'true');
      $('#musicLabel').textContent = 'Music on';
    } catch (error) {
      showToast('Add your-song.mp3 to assets/music first ♡');
    }
  } else {
    music.pause();
    musicToggle.classList.remove('playing');
    musicToggle.setAttribute('aria-pressed', 'false');
    $('#musicLabel').textContent = 'Music off';
  }
});

// Letter envelope open/close.
const letterPaper = $('#letterPaper');
$('#openLetter').addEventListener('click', () => {
  letterPaper.classList.add('open');
  letterPaper.setAttribute('aria-hidden', 'false');
  setTimeout(() => letterPaper.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
});
$('#closeLetter').addEventListener('click', () => {
  letterPaper.classList.remove('open');
  letterPaper.setAttribute('aria-hidden', 'true');
});

// Reveal the private note once the visitor taps the button.
$('#revealSecret').addEventListener('click', () => {
  const message = $('#secretMessage');
  const isVisible = message.classList.toggle('show');
  message.setAttribute('aria-hidden', String(!isVisible));
  $('#revealSecret').innerHTML = isVisible ? 'Hide the note <span>↑</span>' : 'Unwrap the note <span>♡</span>';
});

// Soft reveal-on-scroll animation.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

// Scroll progress bar.
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  $('#scrollProgress').style.width = `${progress}%`;
}, { passive: true });

// Tiny celebration effect using lightweight floating symbols.
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}
$('#celebrateButton').addEventListener('click', () => {
  const symbols = ['✦', '♡', '✿', '✧', '♥'];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('span');
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.position = 'fixed';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = '-25px';
    piece.style.zIndex = '40';
    piece.style.pointerEvents = 'none';
    piece.style.color = ['#fff', '#f8dce5', '#f2c3d1'][i % 3];
    piece.style.fontSize = `${14 + Math.random() * 17}px`;
    piece.style.transition = `transform ${2 + Math.random() * 2}s linear, opacity 2.8s`;
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.transform = `translate(${Math.random() * 100 - 50}px, ${window.innerHeight + 70}px) rotate(${Math.random() * 600}deg)`;
      piece.style.opacity = '0';
    });
    setTimeout(() => piece.remove(), 4300);
  }
  showToast('Make a beautiful wish, Maisha! ♡');
});
