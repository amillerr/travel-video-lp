const menuToggle = document.querySelector('.header__toggle');
const showcase = document.querySelector('.root');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})