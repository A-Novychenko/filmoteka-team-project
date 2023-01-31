import './js/libraryMarkup';
import './js/libraryModal';
import './js/markupModal';

import { openModalMovie } from './js/refs';
import { onClickModal } from './js/modal-btns-library';
openModalMovie.addEventListener('click', onClickModal);

/// ////////////footer-modal
import { openModalTeamBtn, closeModalTeamBtn, modalTeam } from './js/refs';
import {
  toggleTeamModal,
  toggleTeamModal,
  clickBackdropCloseTeamModal,
} from './js/team-modal';

openModalTeamBtn.addEventListener('click', toggleTeamModal);
closeModalTeamBtn.addEventListener('click', toggleTeamModal);
modalTeam.addEventListener('click', clickBackdropCloseTeamModal);
//////////////// footer-modal

import { modalGallery } from './js/refs';
import { onBtnTrailer } from './js/trailer';
modalGallery.addEventListener('click', onBtnTrailer);
