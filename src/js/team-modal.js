(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-team-modal-open]'),
    closeModalBtn: document.querySelector('[data-team-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', clickBackdropCloseModal);

  function toggleModal() {
    window.addEventListener('keydown', keyPressEscCloseModal);
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');

    if (refs.modal.classList.contains('is-hidden')) {
      window.removeEventListener('keydown', keyPressEscCloseModal);
    }
  }

  function clickBackdropCloseModal(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }

  function keyPressEscCloseModal(e) {
    const ESC_KEY_CODE = `Escape`;

    if (e.code === ESC_KEY_CODE) {
      window.removeEventListener('keydown', keyPressEscCloseModal);
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('is-hidden');
    }
  }
})();
