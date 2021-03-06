window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#90caf9',
    '#ffab91',
    '#ffcc80',
    '#e0e0e0',
    '#ea80fc',
    '#60d394'
  ];

  // Lets get going with the sound here
  pads.forEach((pad, idx) => {
    pad.addEventListener('click', () => {
      sounds[idx].currentTime = 0;
      sounds[idx].play();

      createBubbles(idx);
    });
  });

  // Create a function that makes bubbles
  const createBubbles = (idx) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[idx];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', () => {
      visual.removeChild(bubble);
    })
  };
});

