// Hamburgher-ul
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hamburger.classList.add('fixed');
  } else {
    hamburger.classList.remove('fixed');
  }
});