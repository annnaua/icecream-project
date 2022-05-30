(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-open]'),
    closeModalBtn: document.querySelector('[data-buy-close]'),
    modal: document.querySelector('[data-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-map-open]'),
    closeModalBtn: document.querySelector('[data-map-close]'),
    modal: document.querySelector('[data-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-open]'),
    closeModalBtn: document.querySelector('[data-franchise-close]'),
    modal: document.querySelector('[data-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-read-open]'),
    closeModalBtn: document.querySelector('[data-read-close]'),
    modal: document.querySelector('[data-read]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
