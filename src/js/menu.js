(() => {
  let header__burger = document.querySelector('.header-burger');
  let header__menu = document.querySelector('.header-menu');
  const menuBtnClose = document.querySelector('.header-menu-btn-close');
  let body = document.querySelector('body');

  header__burger.addEventListener('click', e => {
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    body.classList.toggle('lock');
  });

  menuBtnClose.addEventListener('click', () => {
    console.log('close menu');
    header__menu.classList.toggle('active');
    body.classList.toggle('lock');
  });

  window.matchMedia('(min-width: 1200px)').addEventListener('change', event => {
    if (!event.matches) return;
    body.classList.remove('lock');
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
