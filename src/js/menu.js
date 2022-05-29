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
