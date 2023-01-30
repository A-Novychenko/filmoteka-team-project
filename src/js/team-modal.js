import { openModalTeamBtn, closeModalTeamBtn, modalTeam } from './refs';

export function toggleTeamModal() {
  document.addEventListener('keydown', keyPressEscCloseTeamModal);
  document.body.classList.toggle('modal-open');
  modalTeam.classList.toggle('is-hidden');

  if (modalTeam.classList.contains('is-hidden')) {
    document.removeEventListener('keydown', keyPressEscCloseTeamModal);
  }
}

export function clickBackdropCloseTeamModal(e) {
  if (e.target === e.currentTarget) {
    toggleTeamModal();
  }
}

export function keyPressEscCloseTeamModal(e) {
  const ESC_KEY_CODE = `Escape`;

  if (e.code === ESC_KEY_CODE) {
    document.removeEventListener('keydown', keyPressEscCloseTeamModal);
    document.body.classList.toggle('modal-open');
    modalTeam.classList.toggle('is-hidden');
  }
}
