document.addEventListener('DOMContentLoaded', () => {
  const scoreButton = document.querySelector('#score-button');
  const scoreDisplay = document.querySelector('#score');
  const statusDisplay = document.querySelector('#status');
  const doubleCard = document.querySelector('#double-card');
  const hoverZone = document.querySelector('#hover-zone');

  let points = 0;

  if (scoreButton && scoreDisplay) {
    scoreButton.addEventListener('click', () => {
      points += 1;
      scoreDisplay.textContent = points;

      if (statusDisplay) {
        statusDisplay.textContent = 'Кнопка нажата!';
      }
    });
  }

  if (doubleCard) {
    doubleCard.addEventListener('dblclick', () => {
      doubleCard.classList.toggle('is-selected');
    });
  }

  if (hoverZone) {
    hoverZone.addEventListener('mouseenter', () => {
      hoverZone.classList.add('is-hovered');
    });

    hoverZone.addEventListener('mouseleave', () => {
      hoverZone.classList.remove('is-hovered');
    });
  }
});
