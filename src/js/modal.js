(() => {
  const pageBody = document.querySelector('body');
  const menuBuyOpenBtn = document.querySelector('.btn-buy-menu');

  // КОЛЛЕКЦИЯ КНОПОК ОТКРЫТИЯ МОДАЛЬНЫХ ОКОН--------------------------------------

  const openBtns = {
    buy: document.querySelector('[data-buy-open]'),
    map: document.querySelector('[data-map-open]'),
    franchise: document.querySelector('[data-franchise-open]'),
    read: document.querySelector('[data-read-open]'),
  };

  // КОЛЛЕКЦИЯ КНОПОК ЗАКРЫТИЯ МОДАЛЬНЫХ ОКОН--------------------------------------

  const closeBtns = {
    buy: document.querySelector('[data-buy-close]'),
    map: document.querySelector('[data-map-close]'),
    franchise: document.querySelector('[data-franchise-close]'),
    read: document.querySelector('[data-read-close]'),
  };

  // КОЛЛЕКЦИЯ МОДАЛЬНЫХ ОКОН--------------------------------------

  const modals = {
    buy: document.querySelector('[data-buy]'),
    map: document.querySelector('[data-map]'),
    franchise: document.querySelector('[data-franchise]'),
    read: document.querySelector('[data-read]'),
  };

  // ФУНКЦИИ ОТКРЫТИЯ И ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА----------------

  function openModal(modal) {
    modal.classList.remove('is-hidden');
    pageBody.classList.add('no-scroll');
  }
  function closeModal(modal) {
    modal.classList.add('is-hidden');
    pageBody.classList.remove('no-scroll');
  }

  // ДОБАВЛЕНИЕ ОБРАБОТЧИКОВ СОБЫТИЙ КНОПКАМ---------------------

  for (let key in modals) {
    openBtns[key].addEventListener('click', () => {
      openModal(modals[key]);
    });
    closeBtns[key].addEventListener('click', () => {
      closeModal(modals[key]);
    });
  }

  menuBuyOpenBtn.addEventListener('click', () => {
    modals.buy.classList.remove('is-hidden');
    pageBody.classList.add('.no-scroll');
  });
})();
