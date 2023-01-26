import { openModalTeamBtn, closeModalTeamBtn, modalTeam } from './refs';

export function teamModal() {
  openModalTeamBtn.addEventListener('click', toggleModal);
  closeModalTeamBtn.addEventListener('click', toggleModal);
  modalTeam.addEventListener('click', clickBackdropCloseModal);

  function toggleModal() {
    window.addEventListener('keydown', keyPressEscCloseModal);
    document.body.classList.toggle('modal-open');
    modalTeam.classList.toggle('is-hidden');

    if (modalTeam.classList.contains('is-hidden')) {
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
      modalTeam.classList.toggle('is-hidden');
    }
  }
}
