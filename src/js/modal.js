(() => {
  const pageBody = document.querySelector('body');

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
})();

// function openModal() {
//   modalWindow.classList.remove('is-hidden');
//   console.log('open modal');
// }
// function closeModal() {
//   // modalWindow.classList.add('is-hidden');
// }

// buyModalCloseBtn.addEventListener('click', closeModal);

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-buy-open]'),
//     closeModalBtn: document.querySelector('[data-buy-close]'),
//     modal: document.querySelector('[data-buy]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-map-open]'),
//     closeModalBtn: document.querySelector('[data-map-close]'),
//     modal: document.querySelector('[data-map]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-franchise-open]'),
//     closeModalBtn: document.querySelector('[data-franchise-close]'),
//     modal: document.querySelector('[data-franchise]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-read-open]'),
//     closeModalBtn: document.querySelector('[data-read-close]'),
//     modal: document.querySelector('[data-read]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
