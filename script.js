function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100%';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.innerHTML = '❤️';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

function animatePhoto(element) {
  element.style.transition = 'transform 0.5s';
  element.style.transform = 'rotate(360deg) scale(1.3)';
  setTimeout(() => {
    element.style.transform = 'rotate(0deg) scale(1)';
  }, 500);
}