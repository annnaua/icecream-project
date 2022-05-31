(() => {
  let header__burger = document.querySelector('.header-burger');
  let header__menu = document.querySelector('.header-menu');
  let body = document.querySelector('body');
  header__burger.addEventListener('click', e => {
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    body.classList.toggle('lock');
  });
})();

const pageHeader = document.querySelector('header');
document.addEventListener('DOMContentLoaded', e => {
  if (window.scrollY < 1) {
    pageHeader.style.backgroundColor = 'transparent';
  }
});
window.addEventListener('scroll', e => {
  if (window.scrollY > 0) {
    pageHeader.style.backgroundColor = '#ffb8ca';
  } else {
    pageHeader.style.backgroundColor = 'transparent';
  }
});
