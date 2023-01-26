import { openModalTeamBtn, closeModalTeamBtn, modalTeam } from './refs';

export function toggleTeamModal() {
  window.addEventListener('keydown', keyPressEscCloseTeamModal);
  document.body.classList.toggle('modal-open');
  modalTeam.classList.toggle('is-hidden');

  if (modalTeam.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', keyPressEscCloseTeamModal);
  }
}

export function clickBackdropCloseTeamModal(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
}

export function keyPressEscCloseTeamModal(e) {
  const ESC_KEY_CODE = `Escape`;

  if (e.code === ESC_KEY_CODE) {
    window.removeEventListener('keydown', keyPressEscCloseTeamModal);
    document.body.classList.toggle('modal-open');
    modalTeam.classList.toggle('is-hidden');
  }
}
