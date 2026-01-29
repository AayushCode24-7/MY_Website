const sfx = document.getElementById('link-sfx');
const muteToggle = document.getElementById('mute-toggle');
const testBtn = document.getElementById('btn');
let isMuted = false;

// Play Sound Function
function playSfx() {
  if (isMuted || !sfx) return;
  sfx.currentTime = 0;
  sfx.play().catch(() => console.log("User must interact first."));
}

// Mute Toggle Logic (only if button exists on page)
if (muteToggle) {
  muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    muteToggle.textContent = isMuted ? "Sound: Off" : "Sound: On";
    muteToggle.style.backgroundColor = isMuted ? "#888" : "#ffcc00";
  });
}

// Test Button Logic
if (testBtn) {
  testBtn.addEventListener('click', playSfx);
}

// Global Link Listener - Plays sound for ANY link clicked
document.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    playSfx();
  }
});