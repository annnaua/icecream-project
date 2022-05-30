// import Swiper from 'swiper/swiper-bundle';
(() => {
  // ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ

  const gallerySwiper = document.querySelector('.img-slider');
  const galleryImgs = document.querySelectorAll('.gallery-img');
  const swiperCloseBtn = document.querySelector('.img-slider-close-btn');
  const body = document.querySelector('body');

  //  СВАЙПЕР

  const swiper = new Swiper(gallerySwiper, {
    navigation: {
      nextEl: '.img-slider-btn-next',
      prevEl: '.img-slider-btn-prev',
    },
    pagination: {
      el: '.img-slider-pagination',
      clickable: true,
      type: 'bullets',
    },

    keyboard: {
      enable: true,
      onlyInViewport: true,
    },

    mousewheel: {
      sensitivity: 2,
      invert: true,
    },

    effect: 'fade',
    grabCursor: true,
  });

  console.log(swiper.bulletClass);

  // ЗАКРЫВАЕТ СЛАЙДЕР

  swiperCloseBtn.addEventListener('click', e => {
    gallerySwiper.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });

  // ОТКРЫВАЕТ СЛАЙДЕР ПРИ КЛИКЕ НА ПЛИТКУ

  for (const img of galleryImgs) {
    img.addEventListener('click', e => {
      swiper.slideTo(+e.target.id, 0);
      gallerySwiper.classList.add('is-open');
      body.classList.add('no-scroll');
    });
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (e.matches) return;
    body.classList.remove('no-scroll');
    gallerySwiper.classList.remove('is-open');
    swiper.slideTo(0, 0);
  });
})();
