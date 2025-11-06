
const menuButton = document.getElementById('menuButton');
  const menuOverlay = document.getElementById('menuOverlay');

  menuButton.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    menuButton.classList.toggle('active');
  });

  menuOverlay.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    menuButton.classList.remove('active');
  });

  // optional: keyboard accessibility (Enter / Space)
  menuButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menuButton.click();
    }
  });

